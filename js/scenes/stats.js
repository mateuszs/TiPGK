/**
* Player stats
*/
Q.scene( "Stats", function( stage ){
	var gameStats 	= $( "#stats" );	
	var gold 		= $( "#gold" );
	var healths 	= $( "#healths" );
	
	gold.html( "Points: " + Q.state.get( "score" ));
	healths.html( "Healths: " + Q.state.get( "healths" ));
	
	gameStats.show();

	Q.state.on( "change.score" , this, function() {
        gold.html( "Points: " + Q.state.get( "score" ));
    });
	
	Q.state.on( "change.healths" , this, function() {
        healths.html( "Healths: " + Q.state.get( "healths" ));
    });	
});