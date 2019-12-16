class HoneyMakerBee extends Bee{
	constructor(){
		// inherit properties and methods
		super();
		// assign new values to inherited properties
		this.age = 10;
		this.job = 'make honey';
		//add new properties
		this.honeyPot = 0;
	}

	// new method
	makeHoney() {
		this.honeyPot++;
	}
	giveHoney() {
		this.honeyPot--;
	}
};

// Tasks
	// ES6 style
	// add following features to the class
		// extension
			// the Bee superclass
		// ineherited properties with unchanged values
			// a color property inherited from bee that is set to yellow
			// a food property that is inherited from grub
		// inherited properties with changed values
			// an age property that is set to 10
			// a job property that is set to make honey
		// new properties
			// a honeyPot property that is set to 0
		// inherited methods
			// an eat method that is inherited from grub
		// new method
			// a makeHoney method that adds 1 to that honeyBee's honeyPot
			// a giveHoney method that subtracts 1 from that honeyBee's honeyPot