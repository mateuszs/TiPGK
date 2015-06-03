/**
* Player's skills
*/
Q.scene( "Skills", function( stage ){
	var container = stage.insert( new Q.UI.Container({
		x: Q.width / 2, 
		y: Q.height / 2, 
		fill: "rgba(0,255,0,0.5)"
	}));

	var buttonClose = container.insert( new Q.UI.Button({
		x: 30,
		y: 30,
		fill: "#CCCCCC",
		label: "Close"
	}));
	
	buttonClose.on( "click", function() {
		this.destroy();
		Q.stage().unpause();
	});	
	
	container.fit( 20 );
});