var g1, g2, g3, cl1, cl2, cl3;

var Comix =
{

    preload : function() 
    {
        filter =
            new GlowFilter(
                250,
                250,
                parseFloat(5),
                parseFloat(5),
                parseFloat(0),
                parseInt(0xffff66),
                parseFloat(0.1)
            );

        game.stage.disableVisibilityChange = true;
    },

    create : function() 
    {
		game.add.sprite(0, 0, 'bg2');
		
        g1 = game.add.sprite(0, 0, 'smt');
        g2 = game.add.sprite(960, 0, 'pok');

        cl1 = game.add.sprite(0, 0, 'cl1');
        cl2 = game.add.sprite(0, 0, 'cl2');
        cl3 = game.add.sprite(0, 0, 'cl3');

        cl1.alpha = 0;
        cl2.alpha = 0;
        cl3.alpha = 0;

        play = this.add.button(0, 580, 'done', this.startGame, this);
        musOn = this.add.button(851, -13, 'music', this.musicSwitch, this);
        musOff = this.add.button(851, -13, 'music_off', this.musicSwitch, this);
        logo = this.add.button(-8, -4, 'logo', this.goLink2, this);
        //more = this.add.button(820, 580, 'more', this.goLink, this);
        more = this.add.button(820, 580, 'more', this.goLink3, this);

        play.visible = false;

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

        logo.input.pixelPerfectClick = logo.input.pixelPerfectOver = true;
        logo.input.pixelPerfectAlpha = 10;
        logo.events.onInputOver.add(this.onScaleOver2, this);
        logo.events.onInputOut.add(this.onScaleOut2, this);

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
        vs = game.add.button(0, 0, 'vs', this.goLink2, this);

        vs.anchor.set(0.5);

        vs.x = 480;
        vs.y = 360;

        game.add.tween(vs).to( { alpha: 0 }, 1000, "Linear", true, 300, 0);
        game.add.tween(vs.scale).to( { x:0, y:0 }, 1000, "Linear", true, 300, 0);
        game.add.tween(part1).to( { y: -720 }, 1000, Phaser.Easing.Circular.In, true, 300, 0);
        tween = game.add.tween(part2).to( { y: 720 }, 1000, Phaser.Easing.Circular.In, true, 300, 0);

        tween.onComplete.add(this.onAnim1, this);
    },

    onAnim1: function ()
    {
        var _tween0 = this.game.add.tween(cl1).to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, true, 300);
        var _tween1 = this.game.add.tween(g2).to({ x: 0 }, 1000, Phaser.Easing.Circular.Out, false, 0);
        var _tween2 = this.game.add.tween(cl2).to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, false, 1000);
        var _tween3 = this.game.add.tween(cl3).to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, false, 1000);

        _tween3.onComplete.add(this.onAnim2, this);

        _tween0.chain(_tween1);
        _tween1.chain(_tween2);
        _tween2.chain(_tween3);
    },

    onAnim2: function ()
    {
        play.visible = true;
    },

    onScaleOver2: function(sprite)
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
    },

    onScaleOut2: function(sprite)
    {
        sprite.filters = null;
    },

    onScaleOver: function(sprite)
    {
        //sprite.scale.setTo(1.05, 1.05);

        sprite.filters =
            [
                new GlowFilter(
                    500,
                    500,
                    parseFloat(5),
                    parseFloat(2),
                    parseFloat(1),
                    parseInt(0xffff66),
                    parseFloat(0.1)
                )
            ];
    },

    onScaleOut: function(sprite)
    {
        //sprite.scale.setTo(1, 1);

        sprite.filters = null;
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

    goLink2: function ()
    {
        // window.open(domain + '/?utm_source=' + publisher + '&utm_campaign=' + gameId + '&utm_medium=referral&utm_content=main_logo');
    },

    goLink3: function ()
    {
        // window.open(domain + '/?utm_source=' + publisher + '&utm_campaign=' + gameId + '&utm_medium=referral&utm_content=main_more_games');
    },

    next: function () 
    {
        game.state.start('Select');
    }
};