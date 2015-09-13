/**
* Player's skills
*/
Q.scene( "Skills", function( stage ){
	var container = stage.insert( new Q.UI.Container({
		x: Q.width / 2, 
		y: Q.height / 2, 
		fill: "rgba(0,255,0,0.5)"
	}));
	
	var buttonBuyLife = container.insert( new Q.UI.Button({
		x: 30,
		y: 30,
		fill: "#CCCCCC",
		label: "Buy a life (200 points)"
	}));
	
	var buttonClose = container.insert( new Q.UI.Button({
		x: 30,
		y: 100,
		fill: "#CCCCCC",
		label: "Close"
	}));

	
	buttonClose.on( "click", function() {
		container.destroy();
		Q.stage().unpause();
	});	
	
	buttonBuyLife.on( "click", function() {
		var points = Q.state.get( "score" );
		
		if( points >= 200 ) {
			Q.state.dec( "score", 200 );
			Q.state.inc( "healths", 1 );
		} else {
			alert( "Not enough points!" );
		}
	});
	
	container.fit( 20 );
});