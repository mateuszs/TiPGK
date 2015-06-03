/**
* Player stats
*/
Q.scene( "Stats", function( stage ){
	var gameStats 	= $( "#stats" );	
	var exp 		= $( "#experience" );
	var health 		= $( "#health" );
	
	exp.html( "Exp: 0" );
	health.html( "HP: 0" );
	
	gameStats.show();

	Q.state.on( "change.experience" , this, function() {
        
    });
	
	Q.state.on( "change.hp" , this, function() {
        
    });	
});