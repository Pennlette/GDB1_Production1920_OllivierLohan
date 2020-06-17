

class nord1 extends Phaser.Scene {
	constructor() {
		super('nord1');
	}

	init(){}
	preload(){}

	create()
	{
		////Game////
		this.add.image(960, 541, 'back1').setScale(1.44);

		////Timer////
		timer = this.physics.add.sprite(450, 990, 'time').setScale(1.5).setDepth(100);

		////Cursors////
		pressspace = this.input.keyboard.addKey('SPACE');
		pressX = this.input.keyboard.addKey('X');
		pressW = this.input.keyboard.addKey('W');
	}

	update()
	{
		if (pressspace.isDown && counter == 1)
		{
		this.add.image(960, 541, 'back2').setScale(1.44);
		this.time.addEvent({
          delay: 500,
          callback: ()=>{
            counter+=1;
          },
          loop: false
        });
		} 
		
		if (pressspace.isDown && counter == 2)
		{
		this.add.image(960, 541, 'back3').setScale(1.44);
		this.time.addEvent({
          delay: 500,
          callback: ()=>{
            counter+=1;
          },
          loop: false
        });
		} 
		
		if (pressspace.isDown && counter == 3)
		{
		this.add.image(960, 541, 'back4').setScale(1.44);
		this.time.addEvent({
          delay: 500,
          callback: ()=>{
            counter+=1;
          },
          loop: false
        });
		} 
		
		if (pressspace.isDown && counter == 4)
		{
		this.add.image(960, 541, 'back5').setScale(1.44);
		this.time.addEvent({
          delay: 500,
          callback: ()=>{
            counter+=1;
          },
          loop: false
        });
		}
		
		if (pressspace.isDown && counter == 5)
		{
		this.add.image(960, 541, 'back6').setScale(1.44);
		this.time.addEvent({
          delay: 500,
          callback: ()=>{
            counter+=1;
          },
          loop: false
        });
		}

		////Next Game////
		if (pressX.isDown)
		{
			this.scene.start('nord2');
		}

		if (pressW.isDown)
		{
			this.scene.start('nord3');
		}  
	}
}