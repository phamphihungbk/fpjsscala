class IOSButton {
}

class AndroidButton {
}

const button1 = os === 'ios' ? new IOSButton() : new AndroidButton();

class ButtonFactory {
	public create(os: string): IOSButton | AndroidButton {
		switch (os) {
			case 'ios':
				return new IOSButton();
			case 'android':
				return new AndroidButton();
			default:
				return null;
		}
	}
}

const buttonFactory = new ButtonFactory();
const button2 = buttonFactory.create('ios');
