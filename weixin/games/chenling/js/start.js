var title, g1, g2, g3;

var Start = 
{

    preload : function() 
    {
        state = 0;
        counter = 0;

        game.stage.disableVisibilityChange = true;
    },

    create: function () 
    {
        game.add.sprite(0, 0, 'bg');
        game.add.sprite(0, 0, 'guyz');

        title = game.add.sprite(0, 0, 'title');

        play = this.add.button(225, 470, 'play', this.startGame, this);
        musOn = this.add.button(851, -13, 'music', this.musicSwitch, this);
        musOff = this.add.button(851, -13, 'music_off', this.musicSwitch, this);
        logo = this.add.button(-8, -4, 'logo', this.goLink2, this);
        //more = this.add.button(820, 580, 'more', this.goLink, this);
        more = this.add.button(820, 580, 'more', this.goLink3, this);

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

        part1 = game.add.sprite(0, 720, 'part2');
        part2 = game.add.sprite(0, -720, 'part1');
        vs = game.add.button(0, 0, 'vs', this.goLink2, this);

        vs.alpha = 0;
        vs.scale.x = 0;
        vs.scale.y = 0;
        vs.anchor.set(0.5);

        vs.x = 480;
        vs.y = 360;

        this.showTitle();
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

    showTitle: function () 
    {
        tween = game.add.tween(title).to( { y: 30 }, 1100, Phaser.Easing.Linear.None, true, 0, 99990).yoyo(true);
    },

    next: function () 
    {
        game.state.start('Comix');
    }

};