var arr, gui, d1, d2, d3, mmmm, call, phase;

var Present =
{

    preload : function() 
    {
        phase = 0;

        arr = [];

        pillow = 1;
        amulet = 1;
        pic = 1;

        d1 = false;
        d2 = false;
        d3 = false;

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
		game.add.sprite(0, 0, 'bg4');



        /// floor
        arr['pil'] = game.add.sprite(0, 0, 'dummy');

        /// walls
        arr['amu'] = game.add.sprite(0, 0, 'dummy');

        /// ceil
        arr['pic'] = game.add.sprite(0, 0, 'dummy');

        arr['roof'] = game.add.sprite(0, 0, 'roof');
        arr['roof'].alpha = 0;

        gui = game.add.group();

        arr['btn1'] = addItem(this, gui, 285, 0 , 'btn1', 'bt_1', true, true, this.onTool, this.over, this.out);
        arr['btn3'] = addItem(this, gui, 430, 0 , 'btn3', 'bt_2', true, true, this.onTool, this.over, this.out);
        arr['btn2'] = addItem(this, gui, 575, 0 , 'btn2', 'bt_3', true, true, this.onTool, this.over, this.out);
        arr['wrap'] = addItem(this, gui, 0, -100 , 'wrap', 'wrap', true, false, this.startGame, this.over, this.out);

        mmmm = this.add.button(0, 0, 'mmmm', this.goLink, this);

        call = game.add.sprite(0, 0, 'call');
        call.alpha = 0;

        play = this.add.button(0, 580, 'r_arr', this.startGame, this);
        musOn = this.add.button(851, -13, 'music', this.musicSwitch, this);
        musOff = this.add.button(851, -13, 'music_off', this.musicSwitch, this);
        logo = this.add.button(-8, -4, 'logo', this.goLink2, this);
        //more = this.add.button(820, 580, 'more', this.goLink, this);
        more = this.add.button(820, 580, 'more', this.goLink3, this);

        //play.visible = false;

        mmmm.input.pixelPerfectClick = mmmm.input.pixelPerfectOver = mmmm.input.pixelPerfectOut = true;
        mmmm.input.pixelPerfectAlpha = 10;
        mmmm.events.onInputOver.add(this.onScaleOver2, this);
        mmmm.events.onInputOut.add(this.onScaleOut2, this);

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

        var _tween0 = this.game.add.tween(call).to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, true);
        var _tween1 = this.game.add.tween(call).to({ alpha: 0 }, 500, Phaser.Easing.Linear.None, false);
        var _tween2 = this.game.add.tween(call).to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, false);
        var _tween3 = this.game.add.tween(call).to({ alpha: 0 }, 500, Phaser.Easing.Linear.None, false);
        var _tween4 = this.game.add.tween(call).to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, false);

        _tween0.chain(_tween1);
        _tween1.chain(_tween2);
        _tween2.chain(_tween3);
        _tween3.chain(_tween4);
        _tween4.chain(_tween0);
    },

    onAnim1: function ()
    {
        // if (areAdsEnabled())
        // {
        //     playAds();
        // }
    },

    onTool: function (sprite)
    {
        if (sprite.name == 'btn1')
        {
            pillow++;

            if (pillow > 3) pillow = 1;

            arr['pil'].loadTexture('pil_' + pillow);

            d1 = true;
        }

        if (sprite.name == 'btn2')
        {
            amulet++;

            if (amulet > 3) amulet = 1;

            arr['amu'].loadTexture('amu_' + amulet);

            d2 = true;
        }

        if (sprite.name == 'btn3')
        {
            pic++;

            if (pic > 3) pic = 1;

            arr['pic'].loadTexture('pic_' + pic);

            d3 = true;
        }

        if (d1 && d2 && d3)
        {
            arr['wrap'].visible = true;
        }
    },

    over: function (sprite)
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

    out: function (sprite)
    {
        sprite.filters = null;
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

    startGame: function (sprite)
    {
        play.visible = false;

        if (sprite == arr['wrap'])
        {
            phase++;

            arr['wrap'].visible = false;

            play.loadTexture('done');

            var _tween0 = this.game.add.tween(arr['roof']).to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, true);
            var _tween1 = this.game.add.tween(arr['roof']).to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, false, 500);

            _tween1.onComplete.add(this.onAnim2, this);

            _tween0.chain(_tween1);

            return;
        }

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
        state = 1;
        game.state.start('Select');
    }
};