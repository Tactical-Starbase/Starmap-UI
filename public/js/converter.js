/*global $ */
/*global THREE */ //Add commas into a string
function isanToIps(x, y, z) {
	return [parseInt(z) + 15046, parseInt(x) - 3474, parseInt(y) - 1416]
};
function ipsToIsan(x, y, z) {
	return [parseInt(y) + 3474, parseInt(z) + 1416, parseInt(x) - 15046]
};

const IDs = ["selPoint0", "selPoint1"];
export default class Calculator {
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