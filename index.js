const express = require("express");
const fetch = require("node-fetch");
const fs = require("fs");
require("dotenv").config();
const app = express();
const POINT_INFO_API = "https://api.tac-map.com/front/getPointInfo/";
// const POINT_INFO_API = "http://localhost:8000/front/getPointInfo/"
const IMGS = {
	ship: "https://cdn.discordapp.com/attachments/762209257738207252/762209368925929472/ship.png",
	ore: "https://cdn.discordapp.com/attachments/762209257738207252/762209362332090378/ore.png",
	station: "https://cdn.discordapp.com/attachments/762209257738207252/762209374071947284/station.png",
	other: "https://cdn.discordapp.com/attachments/762209257738207252/762209367386488852/random-done.png",
	ico: "https://cdn.discordapp.com/attachments/897839402024325140/899384703801495602/TACMapv3.1_144p.png",
};

app.get("/favicon.ico", (req, res) => {
	res.sendFile("./public/favicon.ico", {
		root: __dirname,
	});
});
app.get(["/:pointId", "/"], async (req, res) => {
	const URL = req.protocol + "://" + req.get("host") + req.originalUrl;
	console.log(URL);
	let openGraphStyles = `
		<meta property="og:image:type" content="image/png" />
		<meta property="og:image:width" content="128" />
		<meta property="og:image:height" content="128" />
		<meta property="og:type" content="website" />
		<meta property="og:url" content="${URL}" />
	`;
	const defaultSiteTags = `
		<meta property="og:description" content="A dynamic real time map for Starbase, provided by Tactical" />
		<meta property="og:image" content="${IMGS.ico}" />
		<meta property="og:title" content="TACMap" />

	`;
	if (req.params.pointId) {
		//For custom URL stuff
		// const redir = getRedirect(req.params.pointId);
		// if (redir) return res.redirect(redir);

		//This API is being spammed, ratelimiting is being added on the backend to stop abuse
		const ip = req.headers["cf-connecting-ip"] ? req.headers["cf-connecting-ip"] : req.ip;
		const apiRes = await fetch(POINT_INFO_API + req.params.pointId + `?ip=${ip}`, {
			method: "GET"
		});
		if (apiRes.status == 200) {
			// 200 either means its a valid point, or a valid redirect, lets check
			const data = await apiRes.json();
			if (data.resType == "redirect") return res.redirect(data.url);

			openGraphStyles += `
				<meta property="og:site_name" content="TACMap" />
				<meta property="og:title" content="${data.name}" />
				<meta property="og:description" content="Point created by ${data.owner}" />
				<meta property="og:image" content="${IMGS[data.type]}" />
			`;
		} else {
			openGraphStyles += defaultSiteTags;
		}
	} else {
		openGraphStyles += defaultSiteTags;
	}
	let file = fs.readFileSync("./public/index.html", "utf8");
	file = file.replace("%OGP%", openGraphStyles);
	res.send(file);
});
app.use(express.static("public"));
const httpsServer = app.listen(process.env.PORT, () =>
	console.log(`Front end server up on port ${process.env.PORT}!`)
);
