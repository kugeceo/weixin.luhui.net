var b1, b2, cl1, smt, curFrame, phase, arr, p, a, k;

var Final = 
{

    preload : function() 
    {
        curFrame = 0;
        phase = 0;

        arr = [];

        game.stage.disableVisibilityChange = true;
    },

    create: function () 
    {
        game.add.sprite(0, 0, 'bg7');

        k = game.add.sprite(0, 0, 'k_' + pic);
        a = game.add.sprite(0, 0, 'a_' + amulet);
        p = game.add.sprite(0, 0, 'p_' + pillow);

        k.alpha = 0;
        a.alpha = 0;
        p.alpha = 0;

        smt = game.add.sprite(960, 0, 'smt2');
        smt.addChild(mc1);

        cl1 = game.add.sprite(0, 0, 'cl4');

        cl1.alpha = 0;

        mc1.x = 740;
        mc1.y = 20;
        mc1.scale.x = -1;

        play = this.add.button(0, 580, 'replay', this.startGame, this);
        musOn = this.add.button(851, -13, 'music', this.musicSwitch, this);
        musOff = this.add.button(851, -13, 'music_off', this.musicSwitch, this);
        logo = this.add.button(-8, -4, 'logo', this.goLink4, this);
        more = this.add.button(820, 580, 'more', this.goLink5, this);

        play.visible = false;

        b1 = this.add.button(-5, 120, 'ban1', this.goLink1, this);
        b2 = this.add.button(960, 350, 'ban2', this.goLink2, this);

        b1.scale.x = .85;
        b1.scale.y = .85;
        b2.scale.x = .85;
        b2.scale.y = .85;

        b2.x = -5;

        b1.visible = false;
        b2.visible = false;

        play.input.pixelPerfectClick = play.input.pixelPerfectOver = true;
        play.input.pixelPerfectAlpha = 10;
        play.events.onInputOver.add(this.onScaleOver2, this);
        play.events.onInputOut.add(this.onScaleOut2, this);

        musOn.input.pixelPerfectClick = musOn.input.pixelPerfectOver = true;
        musOn.input.pixelPerfectAlpha = 10;
        musOn.events.onInputOver.add(this.onScaleOver2, this);
        musOn.events.onInputOut.add(this.onScaleOut2, this);

        musOff.input.pixelPerfectClick = musOff.input.pixelPerfectOver = true;
        musOff.input.pixelPerfectAlpha = 10;
        musOff.events.onInputOver.add(this.onScaleOver2, this);
        musOff.events.onInputOut.add(this.onScaleOut2, this);

        more.input.pixelPerfectClick = more.input.pixelPerfectOver = true;
        more.input.pixelPerfectAlpha = 10;
        more.events.onInputOver.add(this.onScaleOver2, this);
        more.events.onInputOut.add(this.onScaleOut2, this);

        b1.input.pixelPerfectClick = b1.input.pixelPerfectOver = true;
        b1.input.pixelPerfectAlpha = 10;
        b1.events.onInputOver.add(this.onScaleOver2, this);
        b1.events.onInputOut.add(this.onScaleOut2, this);

        b2.input.pixelPerfectClick = b2.input.pixelPerfectOver = true;
        b2.input.pixelPerfectAlpha = 10;
        b2.events.onInputOver.add(this.onScaleOver2, this);
        b2.events.onInputOut.add(this.onScaleOut2, this);

        if (musicOn)
        {
        	musOff.visible = false;
        	musOff.input.enabled = false;
        	musOn.visible = true;
        	musOn.input.enabled = true;
        }
        else
        {
        	musOff.visible = true;
        	musOff.input.enabled = true;
        	musOn.visible = false;
        	musOn.input.enabled = false;
        }

        part2 = game.add.sprite(0, 0, 'part2');
        part1 = game.add.sprite(0, 0, 'part1');
        vs = game.add.button(0, 0, 'vs', this.goLink4, this);

        vs.anchor.set(0.5);

        vs.x = 480;
        vs.y = 360;

        game.add.tween(vs).to( { alpha: 0 }, 1000, "Linear", true, 300, 0);
        game.add.tween(vs.scale).to( { x:0, y:0 }, 1000, "Linear", true, 300, 0);
        game.add.tween(part1).to( { y: -720 }, 1000, Phaser.Easing.Circular.In, true, 300, 0);
        tween = game.add.tween(part2).to( { y: 720 }, 1000, Phaser.Easing.Circular.In, true, 300, 0);

        game.time.events.add(Phaser.Timer.SECOND * 1.2, this.onAnim1, this);
    },

    onAnim1: function ()
    {
        console.log('!');

        var _tween1 = this.game.add.tween(k).to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, true, 300);
        var _tween2 = this.game.add.tween(a).to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, false, 500);
        var _tween3 = this.game.add.tween(p).to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, false, 500);
        var _tween4 = this.game.add.tween(smt).to({ x: 0 }, 1000, Phaser.Easing.Circular.Out, false, 500);
        var _tween5 = this.game.add.tween(cl1).to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, false, 500);

        _tween5.onComplete.add(this.onAnim2, this);

        _tween1.chain(_tween2);
        _tween2.chain(_tween3);
        _tween3.chain(_tween4);
        _tween4.chain(_tween5);
    },

    onAnim2: function ()
    {
        game.time.events.add(Phaser.Timer.SECOND * 3, this.showAll, this);
    },

    getRandomInt : function(min, max)
    {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    onScaleOver3: function(sprite)
    {
        sprite.filters =
            [
                new GlowFilter(
                    350,
                    350,
                    parseFloat(5),
                    parseFloat(2),
                    parseFloat(1),
                    parseInt(0xffffff),
                    parseFloat(0.1)
                )
            ];

        var _tween1 = game.add.tween(sprite).to({ angle: 10 }, 800, Phaser.Easing.Linear.None, true);
        var _tween2 = game.add.tween(sprite).to({ angle: -10 }, 1600, Phaser.Easing.Linear.None, false);
        var _tween3 = game.add.tween(sprite).to({ angle: 0 }, 800, Phaser.Easing.Linear.None, false);
        _tween1.chain(_tween2);
        _tween2.chain(_tween3);
        _tween3.chain(_tween1);
    },

    onScaleOut3: function(sprite)
    {
        sprite.filters = null;

        game.tweens.removeFrom(sprite);
        sprite.angle = 0;
    },

    onScaleOver2: function(sprite)
    {
        sprite.filters =
            [
                new GlowFilter(
                    960,
                    720,
                    parseFloat(10),
                    parseFloat(3),
                    parseFloat(0),
                    parseInt(0xffffff),
                    parseFloat(0.1)
                )
            ];
    },

    onScaleOut2: function(sprite)
    {
        sprite.filters = null;
    },

    showAll: function ()
    {
        b1.visible = true;
        b2.visible = true;
        play.visible = true;
    },

    musicSwitch: function () 
    {
        if (musicOn)
        {
        	musicOn = false;
        	music.pause();
        	
        	musOff.visible = true;
        	musOff.input.enabled = true;
        	musOn.visible = false;
        	musOn.input.enabled = false;
        }
        else
        {
        	musicOn = true;
        	music.resume();
        	
        	musOff.visible = false;
        	musOff.input.enabled = false;
        	musOn.visible = true;
        	musOn.input.enabled = true;
        }
    },

    goLink: function ()
    {
        // window.open(domain + '/?utm_source=' + publisher + '&utm_campaign=' + gameId + '&utm_medium=referral&utm_content=ingame_more_games');
    },

    goLink4: function ()
    {
        // window.open(domain + '/?utm_source=' + publisher + '&utm_campaign=' + gameId + '&utm_medium=referral&utm_content=main_logo');
    },

    goLink5: function ()
    {
        // window.open(domain + '/?utm_source=' + publisher + '&utm_campaign=' + gameId + '&utm_medium=referral&utm_content=main_more_games');
    },

    goLink1: function () 
    {
        // window.open("http://dressupmix.com/Free-Dressup-Games/Exclusive/Princess-Secret-Life-play.html", "_blank");
    },
    
    goLink2: function () 
    {
        // window.open("http://dressupmix.com/Free-Dressup-Games/Exclusive/Miss-Royal-Beauty-play.html", "_blank");
    },

    startGame: function ()
    {
        play.visible = false;

        game.add.tween(vs).to( { alpha: 1 }, 1000, "Linear", true, 300, 0);
        game.add.tween(vs.scale).to( { x:1, y:1 }, 1000, "Linear", true, 300, 0);
        game.add.tween(part1).to( { y: 0 }, 1000, Phaser.Easing.Circular.Out, true, 300, 0);
        tween = game.add.tween(part2).to( { y: 0 }, 1000, Phaser.Easing.Circular.Out, true, 300, 0);

        tween.onComplete.add(this.next, this);
    },

    next: function () 
    {
        mc1 = null;
        mc2 = null;

        state = 0;

        game.state.start('Comix');
    }
};