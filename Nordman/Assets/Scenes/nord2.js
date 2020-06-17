

class nord2 extends Phaser.Scene {
	constructor() {
		super('nord2');
	}

	init(){}
	preload(){}

	create()
	{
		////Game////
		this.add.image(960, 541, 'back1I2').setScale(1);

		////Plane////
		flight = this.physics.add.sprite(120, 500, 'flight');
		flight.setCollideWorldBounds(true);
		flight.setVelocityX(550);
		
		this.anims.create({
			key: 'fly',
			frames: this.anims.generateFrameNumbers('flight', { start: 0, end: 2}),
			frameRate: 100,
			repeat: -1
		});

		////Clouds////
		cloud1 = this.physics.add.sprite(1300, 125, 'cloud1');
    	this.physics.add.collider;
    	this.physics.add.collider(flight, cloud1, hit1, null, this);
		
		cloud2 = this.physics.add.sprite(1600, 1000, 'cloud2');
		this.physics.add.collider;
    	this.physics.add.collider(flight, cloud2, hit2, null, this);

		////Timer////
		timer = this.physics.add.sprite(450, 990, 'time').setScale(1.5).setDepth(100);				

		////Cursors////
		pressspace = this.input.keyboard.addKey('SPACE');
		pressX = this.input.keyboard.addKey('X');
		pressW = this.input.keyboard.addKey('W');
	}

	update()
	{
		flight.anims.play('fly', true);

		if (pressspace.isDown)
		{
			flight.setVelocityY(-250);		
		}

		else
		{
			flight.setVelocityY(250);	
		}

		if (pressX.isDown)
		{
			this.scene.start('nord3');
		}

		if (pressW.isDown)
		{
			this.scene.start('nord1');
		}
	}
}

	function hit1 (flight, cloud1)
	{
	    this.physics.pause();
    	flight.setTint(0xff0000)
    	gameOver = true;
	}

	function hit2 (flight, cloud1)
	{
	    this.physics.pause();
    	flight.setTint(0xff0000)
    	gameOver = true;
	}