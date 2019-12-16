class RetiredForagerBee extends ForagerBee{
	constructor(){
		// inherit properties and methods
		super();
		// assign new values to inherited properties
		this.age = 40;
		this.job = 'gamble';
		this.canFly = false;
		this.color = 'grey';
				
	}

	// overwrites inherited methods
	forage() {
		return 'I am too old, let me play cards instead';
	}
	// new method
	gamble(treasure) {
		this.treasureChest.push(treasure);
	}	
	
};

// Tasks
	// ES6 style
	// add following features to the class
		// extension
			// the ForagerBee superclass
		// ineherited properties with unchanged values
			// a food property that is inherited from grub
			// a treasureChest property inherited from ForagerBee that is set to an empty array []
		// inherited properties with changed values
			// an age property that is set to 40
			// a job property that is set to gamble
			// a canFly property that is set to false
			// a color property that is set to grey
		// new properties
			
		// inherited methods with unchanged functionality
			// an eat method that is inherited from grub
		// inherited methods with change functionality
			// a forage method that returns I am too old, let me play cards instead
		// new method
			// an always winning gamble method that allows the bee to add a treasure to the treasureChest