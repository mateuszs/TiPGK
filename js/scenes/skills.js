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
	
	var buttonBuyLife = container.insert( new Q.UI.Button({
		x: 30,
		y: 100,
		fill: "#CCCCCC",
		label: "Buy a life (200 points)"
	}));
	
	if  (Q.state.get( "skilljs" ) < 100 ) {
		var buttonBuyJump = container.insert( new Q.UI.Button({
			x: 30,
			y: 170,
			fill: "#CCCCCC",
			label: "Higher jump (750 points, since new map)"
		}));
	
		buttonBuyJump.on( "click", function() {
			var points = Q.state.get( "score" );
			
			if( points >= 750) {
					if ( Q.state.get( "skilljs" ) < 90 ) {
						Q.state.dec( "score", 750 );
						Q.state.inc( "skilljs", 25 );
					} else {
						alert ( "Max level!")
					}
			} else {
				alert( "Not enough points!" );
			}
		});
	};

	
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