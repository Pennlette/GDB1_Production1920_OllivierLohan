

class nord3 extends Phaser.Scene {
	constructor() {
		super('nord3');
	}

	init(){}
	preload(){}

	create()
	{
		////Game////
		this.add.image(960, 541, 'back1I3').setScale(1);

		////Cursors////
		pressspace = this.input.keyboard.addKey('SPACE');
		pressX = this.input.keyboard.addKey('X');
		pressW = this.input.keyboard.addKey('W');

		////Timer////
		timer = this.physics.add.sprite(450, 990, 'time').setScale(1.5).setDepth(100);
	}

	update()
	{
		if (pressX.isDown)
		{
			this.scene.start('nord1');
		}

		if (pressW.isDown)
		{
			this.scene.start('nord2');
		}  		
	}
}