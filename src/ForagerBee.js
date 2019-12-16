class ForagerBee {
	constructor(){
		// inherit properties and methods
		super();
		// assign new values to inherited properties
		this.age = 10;
		this.job = 'find pollen';
		//add new properties
		this.canFly = true;
		this.treasureChest = [];
		
	}

	// new method
	forage(treasure) {
		this.treasureChest.push(treasure);
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
			// a job property that is set to find pollen
		// new properties
			// a canFly property that is set true
			// a treasureChest property that is set to an empty array []
		// inherited methods
			// an eat method that is inherited from grub
		// new method
			// a forage method that allows the bee to add a treasure to the treasureChest