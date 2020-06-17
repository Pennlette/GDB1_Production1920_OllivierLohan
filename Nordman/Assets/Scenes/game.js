var config = {
  width: 1920,
  height: 1080,
  physics: {
        default: 'arcade',
        arcade: {
            debug: true
        }
    },
    scene: [
      preload,
      title,
      nord1,
      nord2,
      nord3,
    ]
  }

var game = new Phaser.Game(config);