var gj9MainWorkbench = {
	mainFrameOnLoadEventHandler : function() {
		console.log("mainFrameOnLoadEventHandler");
		console.log("Calling executeInFrames again");
		window.top.executeInFrames(window.top.logFrame);
	}
}