/* Magic Mirror
 * Module: MMM-Xplanet
 *
 * By Jérôme KLEIN
 */

Module.register("MMM-Xplanet", {
	defaults: {
		updateInterval: 10*60*1000, // In milliseconds
		x: 200, // x dimension
		y: 200, // y dimension
	},

	requiresVersion: "2.1.0", // Required version of MagicMirror

  // ##################################################################
  // MM start function
	start: function() {
		var self = this;

		// Schedule update timer.
		setInterval(function() {
			self.updateDom();
		}, this.config.updateInterval);
	},

  // ##################################################################
  // MM main function
	getDom: function() {
		var self = this;

		// create element wrapper
		let wrapper = document.createElement("div");
		wrapper.id = "xplanet-wrapper";
   
		// Create Earth Canvas
		let earthCanvas = document.createElement("canvas");
		earthCanvas.id  = "xplanet-earth-canvas";
		earthCanvas.height = this.config.y;
		earthCanvas.width = this.config.x;
   
		//Adding in the background img
    var url = 'modules/MMM-Xplanet/img/earth.png?rnd=' + Math.random(); // Use math random to force IMG refresh by detecting new URL
		earthCanvas.style.background = "url(" + url + ")";
		earthCanvas.style.backgroundSize = "cover";
   
		// Create Moon Canvas
		let moonCanvas = document.createElement("canvas");
		moonCanvas.id  = "xplanet-moon-canvas";
		moonCanvas.height = this.config.y/2;
		moonCanvas.width = this.config.x/2;
   
		//Adding in the background img
    var url = 'modules/MMM-Xplanet/img/moon.png?rnd=' + Math.random(); // Use math random to force IMG refresh by detecting new URL
		moonCanvas.style.background = "url(" + url + ")";
		moonCanvas.style.backgroundSize = "cover";
   
		//Appending our elements to the DOM object
		wrapper.appendChild(earthCanvas);
		wrapper.appendChild(moonCanvas);
		return wrapper;
	},

  // ##################################################################
  // MM function to apply CSS
	getStyles: function () {
		return [
			"MMM-Xplanet.css",
		];
	},
});
