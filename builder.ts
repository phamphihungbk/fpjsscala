class HotDog {
	private bun: string;
	private ketchup: boolean;
	private mustard: boolean;

	public constructor(bun: string, ketchup: boolean, mustard: boolean) {
		this.bun = bun;
		this.ketchup = ketchup;
		this.mustard = mustard;
	}
}

const hotDog = new HotDog('wheat', false, true);

class HotDogNew {
	private bun: string;
	private ketchup: boolean;
	private mustard: boolean;

	public constructor(bun: string) {
		this.bun = bun;
	}

	public addMustard(): HotDogNew {
		this.mustard = true;
		return this;
	}

	public addKetchup(): HotDogNew {
		this.ketchup = true;
		return this;
	}
}

const hotDogNew = new HotDogNew('wheat new');

hotDogNew
	.addMustard()
	.addKetchup();
