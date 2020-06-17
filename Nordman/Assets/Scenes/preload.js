//Cursors
var cursors; var pressspace; var pressX; var pressW;
//Counter
var counter = 1;
//Timer
var timer = 10; var endgame;
//Clouds
var cloud1; var cloud2; var hit1; var hit2;
//Plane
var flight;


class preload extends Phaser.Scene 
{
	constructor()
	{
		super('preload');
	}

	init(){}


	preload()
	{
		////Audio////
		this.load.audio('Nordland','Assets/Audio/GameIsChoice.mp3');
		this.load.audio('Nordgame','Assets/Audio/GameIsOn.mp3');

		////Sounds////
		this.load.audio('start', 'Assets/Audio/start.wav');
		this.load.audio('get', 'Assets/Audio/get.wav');

		////Title Screen////
		this.load.image('back','Assets/Title/back.png');
		this.load.image('tit','Assets/Title/title.png');
		this.load.image('game1','Assets/Title/game1.png');
		this.load.image('game2','Assets/Title/game2.png');
		this.load.image('game3','Assets/Title/game3.png');

		////Timer////
		this.load.spritesheet('time','Assets/timer.png', {frameWidth: 100,frameHeight: 100});

		////Nordgame 1////
		this.load.image('back1','Assets/Game1/back1.png');
		this.load.image('back2','Assets/Game1/back2.png');
		this.load.image('back3','Assets/Game1/back3.png');
		this.load.image('back4','Assets/Game1/back4.png');
		this.load.image('back5','Assets/Game1/back5.png');
		this.load.image('back6','Assets/Game1/back6.png');

		////Nordgame 2////
		this.load.image('back1I2','Assets/Game2/back1I2.png');
		this.load.spritesheet('time','Assets/timer.png', {frameWidth: 224,frameHeight: 188});
		this.load.image('cloud1','Assets/Game2/cloud1.png');
		this.load.image('cloud2','Assets/Game2/cloud2.png');
		this.load.spritesheet('flight','Assets/Game2/flight.png', {frameWidth: 224,frameHeight: 188});

		////Nordgame 3////
		this.load.image('back1I3','Assets/Game3/back1I3.png');
	}

	create(){}
	update(){this.scene.start('nord1');}
}