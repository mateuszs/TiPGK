/**
* Endgame scene
*/
Q.scene( "Endgame", function( stage ) {
	
	var container = stage.insert( new Q.UI.Container({
		x: Q.width / 2, 
		y: Q.height / 2, 
		fill: "rgba(0,255,0,0.5)"
	}));
	
	var buttonMenu = container.insert( new Q.UI.Button({
		x: 30,
		y: 60,
		fill: "#CCCCCC",
		label: "Menu"
	}));

	buttonMenu.on( "click", function() {
		Q.clearStages();
		Q.stageScene( "Menu" );
	});
	
	var message = container.insert( new Q.UI.Text({
		x: 30,
		y: 0,
		label: "Punkty: " + Q.state.get("score"),
	}));
	
	container.fit( 20 );
});