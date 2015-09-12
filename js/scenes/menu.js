/**
* Menu sene
*/
Q.scene( "Menu", function( stage ) {
	
	var container = stage.insert( new Q.UI.Container({
		x: (Q.width - 300) / 2, 
		y: 20, 
		fill: "rgba(0,255,0,0.5)"
	}));
		
	var buttonStart1 = container.insert( new Q.UI.Button({
		x: 150,
		y: 30,
		fill: "#CCCCCC",
		label: "Level json"
	}));
		
	var buttonStartTMX = container.insert( new Q.UI.Button({
		x: 150,
		y: 90,
		fill: "#CCCCCC",
		label: "Level TMX"
	}));

	var text = container.insert( new Q.UI.Text({
		x: 150,
		y: 150,
		label: "Grawitacja"
	}));

	var buttongdef = container.insert( new Q.UI.Button({
		x: 0,
		y: 210,
		fill: "#CCCCCC",
		label: "standard"
	}));

	var buttonginc = container.insert( new Q.UI.Button({
		x: 150,
		y: 210,
		fill: "#CCCCCC",
		label: "większa"
	}));

	var buttongdec = container.insert( new Q.UI.Button({
		x: 300,
		y: 210,
		fill: "#CCCCCC",
		label: "mniejsza"
	}));
	
	var text = container.insert( new Q.UI.Text({
		x: 150,
		y: 270,
		label: "Paralaksa"
	}));

	var buttonparnone = container.insert( new Q.UI.Button({
		x: 0,
		y: 330,
		fill: "#CCCCCC",
		label: "brak"
	}));

	var buttonparplus = container.insert( new Q.UI.Button({
		x: 150,
		y: 330,
		fill: "#CCCCCC",
		label: "dodatnia"
	}));

	var buttonparminus = container.insert( new Q.UI.Button({
		x: 300,
		y: 330,
		fill: "#CCCCCC",
		label: "ujemna"
	}));
	
	buttonStart1.on( "click", function() {
		Q.clearStages();
		Q.stageScene( "Level_1" );
	});

	buttonStartTMX.on( "click", function() {
		Q.clearStages();
		Q.stageScene( "Level_tmx" );
	});

	buttongdef.on( "click", function() {
		Q.clearStages();
		Q.stageScene( "gdef" );
	});

	buttonginc.on( "click", function() {
		Q.clearStages();
		Q.stageScene( "ginc" );
	});

	buttongdec.on( "click", function() {
		Q.clearStages();
		Q.stageScene( "gdec" );
	});

	buttonparnone.on( "click", function() {
		Q.clearStages();
		Q.stageScene( "parnone" );
	});

	buttonparplus.on( "click", function() {
		Q.clearStages();
		Q.stageScene( "parplus" );
	});

	buttonparminus.on( "click", function() {
		Q.clearStages();
		Q.stageScene( "parminus" );
	});

	container.fit( 20 );
});