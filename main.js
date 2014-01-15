console.log("Initializing main.js");

/**
 * The given callback function will be executed in all frames and all nested frames on the page.
 * The actual frame will be passed in to the callback when calling it.
 */
function executeInFrames(callback) {
	function processFrame(frame) {
		$(frame).ready(function() {
			callback(frame);

			if (frame.frames && frame.frames.length > 0) {
				for (var i = 0; i < frame.frames.length; i++) {
					processFrame(frame.frames[i]);
				}
			}
		});
	}

	processFrame(window.top);
}

function logFrame(frame) {
	if (frame) {
		console.log("Current frame name: " + frame.name);
	}
	else {
		console.log("No frame");
	}
}

executeInFrames(logFrame);