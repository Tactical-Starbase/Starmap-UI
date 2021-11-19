/*global $ */
/*global THREE */ //Add commas into a string
function isanToIps(x, y, z) {
	return [parseInt(z) + 15313, parseInt(x) - 3476, parseInt(y) - 1535]
};
function ipsToIsan(x, y, z) {
	return [parseInt(y) + 3476, parseInt(z) + 1535, parseInt(x) - 15313]
};

export default class Converter {
	constructor(app) {
		this.app = app;
		this.shown = false;
	}
	init() {
		const self = this;
		$("#cnvtBtn").click(function () {
			if (!self.shown) {
				$("#converter").show();
				self.shown = true;
			} else {
				self.hide.call(self);
				$("#converter").hide();
			}
		});
		$("#converter").draggable({
			containment: "document",
			cancel: ".no-drag",
		});

		$("#cnvtToISAN").click(function () {
			let newCoordinates = ipsToIsan($("#formIpsXPos")[0].value, $("#formIpsYPos")[0].value, $("#formIpsZPos")[0].value);
			$("#formIsanXPos")[0].value = newCoordinates[0];
			$("#formIsanYPos")[0].value = newCoordinates[1];
			$("#formIsanZPos")[0].value = newCoordinates[2];
		});

		$("#cnvtToIPS").click(function () {
			let newCoordinates = isanToIps($("#formIsanXPos")[0].value, $("#formIsanYPos")[0].value, $("#formIsanZPos")[0].value);
			$("#formIpsXPos")[0].value = newCoordinates[0];
			$("#formIpsYPos")[0].value = newCoordinates[1];
			$("#formIpsZPos")[0].value = newCoordinates[2];
		});
	}
	hide() {
		this.shown = false;
	}
}