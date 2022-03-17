// State can go with Factory

class Human {
	private state: State;

	public constructor() {
		this.state = new HappyState();
	}

	public think(): string {
		return this.state.think();
	}
}

interface State {
	think(): string;
}

class HappyState implements State {
	public think(): string {
		return 'I am Happy';
	}
}

class SadState implements State {
	public think(): string {
		return 'I am Sad';
	}
}

class HumanOld {
	public think(mood: string) {
		switch (mood) {
			case 'happy':
				return 'I am happy';

			case 'sad':
				return 'I am sad';

			default:
				return 'I am natural';
		}
	}
}
