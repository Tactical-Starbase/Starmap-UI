import {
	ENV_FROM_ENVJS,
	AUTH_REDIR_FROM_ENVJS
} from "./env.js";

export const ENV = ENV_FROM_ENVJS; //"remoteDev";
export const AUTH_REDIR = AUTH_REDIR_FROM_ENVJS; //"beta";
export const ENABLE_SBOX = true;

export const SSO_URL = "https://sso.tac-map.com/login?service=";
// export const SSO_URL = 'http://localhost:8000/login?service='
export const URLS = {
	api: {
		local: "http://localhost:8000/",
		prod: "https://api.tac-map.com/",
		lite: "https://api.tac-map.com/",
		remoteDev: "https://api.tac-map.com/",
	},
	wss: {
		local: "ws://localhost:8000/",
		prod: "wss://ws.tac-map.com:443/",
		lite: "wss://ws.tac-map.com:443/",
		remoteDev: "wss://ws.tac-map.com:443/",
	},
	login: {
		local: SSO_URL + "http://localhost:80/",
		prod: SSO_URL + "https://tac-map.com/",
		lite: SSO_URL + "http://tac-map.com/",
		remoteDev: SSO_URL + "http://localhost:80/",
	},
};
export const EOS_SIZE = 5500000;
export const DIST_TO_BELT = 2950000;
export const BELT_HEIGHT = 600000;
export const BELT_EDGE_RADIUS = 60000;

export const EOS_QUALITY = 32;
export const BELT_QUALITY = 96;

export const BELT_THICK = 1099980;
export const BELT_TRANSPARENCY = 0.2;

export const SAFE_LEN = 1000000;
export const SAFE_RAD = 100000 / 2;
export const CAM_MAX_ZOOM = EOS_SIZE * 10;
//Consts to control the marker scaling
export const MARKER_SIZE_MIN = 0.1;
export const MARKER_SIZE_MAX = 15;
export const DIST_MIN = 0;
export const DIST_MAX = 500000;
export const MARKER_SIZE = 1000;
export const MARKER_RING_SIZE = 750;
export const HOVER_SCALE_BASE_MAX = 1.5;
export const HOVER_CAM_DIST_FACTOR = 25000;
export const HOVER_CHANGE_RATE = 0.35;
export const FADE_MIN_DIST = 0;
export const FADE_MAX_DIST = 2500;
export const ZOOM_INTO_DIST = 10000;
export const ZONE_WIRE_CUTOFF = 80000;
export const ZONE_OUTLINE_POINTS = 100;
export const ZONE_INTERACTION_SIZE = 1000;
export const IPS_RANGE = 1000000;
export const FPS_DROP_TIME = 1000 * 15; // 15 seconds of no mouse move
export const HIGH_FPS_VAL = 60;
export const LOW_FPS_VAL = 15;
export const HEATMAN_TOTAL_IMAGES = 100;
export const safePos = {
	x: 0,
	y: 0,
	z: 0,
};
export const MAX_MOTION_TRAILS = 10;
//Offset from 0,0,0 that points are set too
export const pointOffset = {
	//Basically TPS origin compared to Eos
	x: EOS_SIZE + DIST_TO_BELT,
	y: 0,
	z: 0,
};

export const TYPES = {
	ship: {
		name: "ship",
		color: "#f36a28",
		info: "All marked ship locations",
		icons: {
			map: "../assets/icons/ship.svg",
			info: "../assets/icons/ship.svg",
		},
		subtypes: [{
			name: "Default",
			hex: "#f36a28",
		}, ],
		widthmult: 1.5,
		heightmult: 1.5,
	},
	station: {
		name: "station",
		color: "#3bbd4f",
		info: "All marked station locations",
		icons: {
			map: "../assets/icons/station.svg",
			info: "../assets/icons/station.svg",
		},
		subtypes: [{
				name: "Default",
				hex: "#3bbd4f",
			},
			{
				name: "Tactical",
				hex: "#ad71d9"
			},
			{
				name: "Redacted",
				hex: "#383838"
			},
			{
				name: "Collective",
				hex: "#ff0000",
			},
			{
				name: "Substrate",
				hex: "#e72f2c",
			},
			{
				name: "Empire",
				hex: "#ff8c00",
			},
			{
				name: "Kingdom",
				hex: "#0074f0",
			},
			{

				name: "The Wake",
				hex: "#922d22"
			},
			{
				name: "Artemis Cargo Corporation",
				hex: "#22acda"
			},
			{
				name: "LINGCORP",
				hex: "#5794d5"
			}
		],
		widthmult: 1.5,
		heightmult: 1.5,
	},
	ore: {
		name: "ore",
		color: "#8c63e8",
		info: "Any ore that has been found",
		icons: {
			map: "../assets/icons/ore.svg",
			info: "../assets/icons/ore.svg",
		},
		subtypes: [{
			name: "Default",
			hex: "#8c63e8",
		}, ],
		widthmult: 1,
		heightmult: 1,
	},
	"Military Capital Ship": {
		name: "Military Capital Ship",
		color: "#e62949",
		info: "A Military Class Capital Ship",
		icons: {
			map: "../assets/icons/milcap-done.png",
			info: "../assets/icons/milcap.png",
		},
		subtypes: [{
			name: "Default",
			hex: "#e62949",
		}, ],
		widthmult: 4.29801324503 * 0.5,
		heightmult: 1 * 0.5,
	},
	"Civilian Capital Ship": {
		name: "Civilian Capital Ship",
		color: "#93f542",
		info: "A Civilian Class Capital Ship",
		icons: {
			map: "../assets/icons/civcap-done.png",
			info: "../assets/icons/civcap.png",
		},
		subtypes: [{
			name: "Default",
			hex: "#93f542",
		}, ],
		widthmult: 4.34343434343 * 0.5,
		heightmult: 1 * 0.5,
	},
	"Warp Gate": {
		name: "Warp Gate",
		color: "#b642f5",
		info: "A Warp Gate that can be used to go places quickly.",
		icons: {
			map: "../assets/icons/warpgate.svg",
			info: "../assets/icons/warpgate.svg",
		},
		subtypes: [{
			name: "Default",
			hex: "#b642f5",
		}, ],
		widthmult: 1.5,
		heightmult: 1.5,
	},
	other: {
		name: "other",
		color: "#aaaaaa",
		info: "Misc POI's that dont fit into the other categories",
		icons: {
			map: "../assets/icons/random.svg",
			info: "../assets/icons/random.svg",
		},
		subtypes: [{
			name: "Default",
			hex: "#aaaaaa",
		}, ],
		widthmult: 1.5,
		heightmult: 1.5,
	},
};
