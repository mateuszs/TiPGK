/**
* Player stats
*/
Q.scene( "Stats", function( stage ){
	var gameStats 	= $( "#stats" );	
	var gold 		= $( "#gold" );
	var healths 	= $( "#healths" );
	
	gold.html( "Gold: 0" );
	healths.html( "Healths: " + Q.state.get( "healths" ));
	
	gameStats.show();

	Q.state.on( "change.experience" , this, function() {
        
    });
	
	Q.state.on( "change.healths" , this, function() {
        healths.html( "Healths: " + Q.state.get( "healths" ));
    });	
});