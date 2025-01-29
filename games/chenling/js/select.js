var arr;

var Select =
{

    preload : function() 
    {
        arr = [];

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
		game.add.sprite(0, 0, 'bg3');

        if (state == 0)
        {

            arr['btn1'] = game.add.sprite(0, 0, 'b1_act');

            arr['btn1'].inputEnabled = true;
            arr['btn1'].input.pixelPerfectClick = arr['btn1'].input.pixelPerfectOver = arr['btn1'].input.pixelPerfectOut = true;
            arr['btn1'].input.pixelPerfectAlpha = 10;
            arr['btn1'].events.onInputOver.add(this.onScaleOver, this);
            arr['btn1'].events.onInputOut.add(this.onScaleOut, this);
            arr['btn1'].events.onInputDown.add(this.startGame, this);

            game.add.sprite(0, 0, 'rib_1');

            arr['lock'] = game.add.sprite(192, 299, '');
            arr['arc'] = game.add.sprite(31, 6, 'arc');
            arr['lock'].addChild(arr['arc']);
            arr['lock'].addChild(game.add.sprite(0, 0, 'lock'));

            game.add.sprite(0, 0, 'nam_1');

            ///

            game.add.sprite(0, 0, 'b2_act');
            game.add.sprite(0, 0, 'rib_2');

            arr['lock3'] = game.add.sprite(794, 253, '');
            arr['arc3'] = game.add.sprite(31, 6, 'arc');
            arr['lock3'].addChild(arr['arc3']);
            arr['lock3'].addChild(game.add.sprite(0, 0, 'lock'));

            game.add.sprite(0, 0, 'nam_2');

            game.add.sprite(0, 0, 'b3_act');
            game.add.sprite(0, 0, 'rib_3');

            arr['lock2'] = game.add.sprite(461, 430, '');
            arr['arc2'] = game.add.sprite(31, 6, 'arc');
            arr['lock2'].addChild(arr['arc2']);
            arr['lock2'].addChild(game.add.sprite(0, 0, 'lock'));

            game.add.sprite(0, 0, 'nam_3');

            arr['arc'].y += arr['arc'].height * .7;
            arr['arc'].x += arr['arc'].width * .3;
            arr['arc'].anchor.y = .7;
            arr['arc'].anchor.x = .3;

            var _tween0 = this.game.add.tween(arr['arc']).to({ angle: -80 }, 500, Phaser.Easing.Linear.None, true, 1300);
            var _tween1 = this.game.add.tween(arr['lock']).to({ y: 900 }, 1000, Phaser.Easing.Circular.In, false, 300);

            _tween1.onComplete.add(this.onAnim1, this);

            _tween0.chain(_tween1);
        }

        if (state == 1)
        {

            game.add.sprite(0, 0, 'b1_done');
            game.add.sprite(0, 0, 'rib_1');
            game.add.sprite(0, 0, 'nam_1');
            game.add.sprite(0, 0, 'don_1');

            ///

            arr['btn1'] = game.add.sprite(0, 0, 'b2_act');

            arr['btn1'].inputEnabled = true;
            arr['btn1'].input.pixelPerfectClick = arr['btn1'].input.pixelPerfectOver = arr['btn1'].input.pixelPerfectOut = true;
            arr['btn1'].input.pixelPerfectAlpha = 10;
            arr['btn1'].events.onInputOver.add(this.onScaleOver, this);
            arr['btn1'].events.onInputOut.add(this.onScaleOut, this);
            arr['btn1'].events.onInputDown.add(this.startGame, this);

            game.add.sprite(0, 0, 'rib_2');

            arr['lock'] = game.add.sprite(794, 253, '');
            arr['arc'] = game.add.sprite(31, 6, 'arc');
            arr['lock'].addChild(arr['arc']);
            arr['lock'].addChild(game.add.sprite(0, 0, 'lock'));

            game.add.sprite(0, 0, 'nam_2');

            game.add.sprite(0, 0, 'b3_act');
            game.add.sprite(0, 0, 'rib_3');

            arr['lock2'] = game.add.sprite(461, 430, '');
            arr['arc2'] = game.add.sprite(31, 6, 'arc');
            arr['lock2'].addChild(arr['arc2']);
            arr['lock2'].addChild(game.add.sprite(0, 0, 'lock'));

            game.add.sprite(0, 0, 'nam_3');

            arr['arc'].y += arr['arc'].height * .7;
            arr['arc'].x += arr['arc'].width * .3;
            arr['arc'].anchor.y = .7;
            arr['arc'].anchor.x = .3;

            var _tween0 = this.game.add.tween(arr['arc']).to({ angle: -80 }, 500, Phaser.Easing.Linear.None, true, 1300);
            var _tween1 = this.game.add.tween(arr['lock']).to({ y: 900 }, 1000, Phaser.Easing.Circular.In, false, 300);

            _tween1.onComplete.add(this.onAnim1, this);

            _tween0.chain(_tween1);
        }

        if (state == 2)
        {

            game.add.sprite(0, 0, 'b1_done');
            game.add.sprite(0, 0, 'rib_1');
            game.add.sprite(0, 0, 'nam_1');
            game.add.sprite(0, 0, 'don_1');

            ///

            game.add.sprite(0, 0, 'b2_done');
            game.add.sprite(0, 0, 'rib_2');
            game.add.sprite(0, 0, 'nam_2');
            game.add.sprite(0, 0, 'don_2');

            arr['btn1'] = game.add.sprite(0, 0, 'b3_act');

            arr['btn1'].inputEnabled = true;
            arr['btn1'].input.pixelPerfectClick = arr['btn1'].input.pixelPerfectOver = arr['btn1'].input.pixelPerfectOut = true;
            arr['btn1'].input.pixelPerfectAlpha = 10;
            arr['btn1'].events.onInputOver.add(this.onScaleOver, this);
            arr['btn1'].events.onInputOut.add(this.onScaleOut, this);
            arr['btn1'].events.onInputDown.add(this.startGame, this);
            game.add.sprite(0, 0, 'rib_3');

            arr['lock'] = game.add.sprite(461, 430, '');
            arr['arc'] = game.add.sprite(31, 6, 'arc');
            arr['lock'].addChild(arr['arc']);
            arr['lock'].addChild(game.add.sprite(0, 0, 'lock'));

            game.add.sprite(0, 0, 'nam_3');

            arr['arc'].y += arr['arc'].height * .7;
            arr['arc'].x += arr['arc'].width * .3;
            arr['arc'].anchor.y = .7;
            arr['arc'].anchor.x = .3;

            var _tween0 = this.game.add.tween(arr['arc']).to({ angle: -80 }, 500, Phaser.Easing.Linear.None, true, 1300);
            var _tween1 = this.game.add.tween(arr['lock']).to({ y: 900 }, 1000, Phaser.Easing.Circular.In, false, 300);

            _tween1.onComplete.add(this.onAnim1, this);

            _tween0.chain(_tween1);
        }

        if (state == 3)
        {
            game.add.sprite(0, 0, 'b1_done');
            game.add.sprite(0, 0, 'rib_1');
            game.add.sprite(0, 0, 'nam_1');
            game.add.sprite(0, 0, 'don_1');

            game.add.sprite(0, 0, 'b2_done');
            game.add.sprite(0, 0, 'rib_2');
            game.add.sprite(0, 0, 'nam_2');
            game.add.sprite(0, 0, 'don_2');

            game.add.sprite(0, 0, 'b3_done');
            game.add.sprite(0, 0, 'rib_3');
            game.add.sprite(0, 0, 'nam_3');
            game.add.sprite(0, 0, 'don_3');

            game.time.events.add(Phaser.Timer.SECOND * 2, this.onAnim2, this);
        }

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
    },

    onAnim1: function ()
    {
        arr['btn1'].loadTexture('b' + (state + 1) + '_done');
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
                    350,
                    350,
                    parseFloat(5),
                    parseFloat(2),
                    parseFloat(1),
                    parseInt(0xffff99),
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
        if (state == 0)
            game.state.start('Present')
        else if (state == 1)
            game.state.start('Food');
        else if (state == 2)
            game.state.start('Dress');
        else if (state == 3)
            game.state.start('Final');
    }
};