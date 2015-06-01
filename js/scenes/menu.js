/**
* Menu sene
*/
Q.scene( "Menu", function( stage ) {
	var container = stage.insert( new Q.UI.Container({
		x: Q.width / 2, 
		y: Q.height / 2, 
		fill: "rgba(0,255,0,0.5)"
	}));
		
	var buttonStart = container.insert( new Q.UI.Button({
		x: 30,
		y: 30,
		fill: "#CCCCCC",
		label: "Start Game"
	}));

	buttonStart.on( "click", function() {
		Q.clearStages();
		Q.stageScene( "Level_1" );
	});

	container.fit( 20 );
});