var arr, mmmm, cont, doll, dWear, tempItem, hair, shoe;

var Dress =
{

    preload : function() 
    {
        arr = [];

        dWear = {};

        hair = 0;
        shoe = 0;

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
		game.add.sprite(0, 0, 'bg6');

        cont = game.add.group();

        arr['shoe1'] = addItem(this, cont, 0, 0, 'shoe1', 'shoe1', true, true, this.onTool, this.onScaleOver, this.onScaleOut);
        arr['shoe2'] = addItem(this, cont, 0, 0, 'shoe2', 'shoe2', true, true, this.onTool, this.onScaleOver, this.onScaleOut);
        arr['shoe3'] = addItem(this, cont, 0, 0, 'shoe3', 'shoe3', true, true, this.onTool, this.onScaleOver, this.onScaleOut);
        arr['shoe4'] = addItem(this, cont, 0, 0, 'shoe4', 'shoe4', true, true, this.onTool, this.onScaleOver, this.onScaleOut);
        arr['shoe5'] = addItem(this, cont, 0, 0, 'shoe5', 'shoe5', true, true, this.onTool, this.onScaleOver, this.onScaleOut);
        arr['shoe6'] = addItem(this, cont, 0, 0, 'shoe6', 'shoe6', true, true, this.onTool, this.onScaleOver, this.onScaleOut);

        arr['hair'] = addItem(this, cont, 0, 0, 'hair', 'hair1', true, true, this.onTool, this.onScaleOver, this.onScaleOut);

        arr['dres5'] = addItem(this, cont, 0, 0, 'dres5', 'dres5', true, true, this.onTool, this.onScaleOver, this.onScaleOut);
        arr['dres4'] = addItem(this, cont, 0, 0, 'dres4', 'dres4', true, true, this.onTool, this.onScaleOver, this.onScaleOut);
        arr['dres2'] = addItem(this, cont, 0, 0, 'dres2', 'dres2', true, true, this.onTool, this.onScaleOver, this.onScaleOut);
        arr['dres1'] = addItem(this, cont, 0, 0, 'dres1', 'dres1', true, true, this.onTool, this.onScaleOver, this.onScaleOut);
        arr['dres6'] = addItem(this, cont, 0, 0, 'dres6', 'dres6', true, true, this.onTool, this.onScaleOver, this.onScaleOut);
        arr['dres3'] = addItem(this, cont, 0, 0, 'dres3', 'dres3', true, true, this.onTool, this.onScaleOver, this.onScaleOut);

        doll = game.add.sprite(150, 0, ''); /// 25

        tempItem = game.make.sprite(0, 0, 'h_b_def');
        doll.addChild(tempItem);
        dWear.hair_b = tempItem;

        tempItem = game.make.sprite(0, 0, 'body');
        doll.addChild(tempItem);
        dWear.body = tempItem;

        tempItem = game.make.sprite(0, 0, '');
        doll.addChild(tempItem);
        dWear.shoe = tempItem;

        tempItem = game.make.sprite(0, 0, 'head');
        doll.addChild(tempItem);
        dWear.head = tempItem;

        tempItem = game.make.sprite(0, 0, 'd_def');
        doll.addChild(tempItem);
        dWear.dress = tempItem;

        tempItem = game.make.sprite(0, 0, 'h_def');
        doll.addChild(tempItem);
        dWear.hair = tempItem;

        mmmm = this.add.button(0, 0, 'mmmm2', this.goLink, this);

        play = this.add.button(0, 580, 'done', this.startGame, this);
        musOn = this.add.button(851, -13, 'music', this.musicSwitch, this);
        musOff = this.add.button(851, -13, 'music_off', this.musicSwitch, this);
        logo = this.add.button(-8, -4, 'logo', this.goLink2, this);
        //more = this.add.button(820, 580, 'more', this.goLink, this);
        more = this.add.button(820, 580, 'more', this.goLink3, this);

        play.visible = false;

        mmmm.input.pixelPerfectClick = mmmm.input.pixelPerfectOver = mmmm.input.pixelPerfectOut = true;
        mmmm.input.pixelPerfectAlpha = 10;
        mmmm.events.onInputOver.add(this.onScaleOver, this);
        mmmm.events.onInputOut.add(this.onScaleOut, this);

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

    onAnim2: function ()
    {
        play.visible = true;
    },

    onTool: function(sprite)
    {
        if (sprite.name.indexOf('hair') != -1)
        {
            hair++;

            if (hair > 6) hair = 1;

            if (hair == 6)
            {
                arr['hair'].loadTexture('hair1');
            }
            else
            {
                arr['hair'].loadTexture('hair' + (hair + 1));
            }

            dWear.hair.loadTexture('h_' + hair);
            dWear.hair_b.loadTexture('dummy');
        }

        if (sprite.name.indexOf('shoe') != -1)
        {
            if (parseInt(sprite.name.split('')[4]) == shoe)
            {
                dWear.shoe.loadTexture('dummy');

                shoe = 0;
            }
            else
            {
                dWear.shoe.loadTexture('s_' + (parseInt(sprite.name.substring(4))));

                shoe = parseInt(sprite.name.substring(4));
            }
        }

        if (sprite.name.indexOf('dres') != -1)
        {
            dWear.dress.loadTexture('d_' + (parseInt(sprite.name.substring(4))));
        }

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

    shutdown: function ()
    {
        mc1 = doll;

        this.world.remove(mc1);
    },

    next: function () 
    {
        state = 3;
        game.state.start('Final');
    }
};