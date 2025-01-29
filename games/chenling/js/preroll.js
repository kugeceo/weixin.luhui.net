var complete, btn1, btn2, btn3, btn4, btn5, btn6, i, text, button, path, suffix, cache,
    glowEmitter, hower, preloadBack, preloadBar, gameId, domain, publisher;

var Preroll = 
{
    init : function() 
    {
        var url = (window.location != window.parent.location)
            ? document.referrer
            : document.location.href;

        var loc = getLocation(url);

        domain = "http://www.dressupmix.com";
        publisher = loc.hostname;
        gameId = "meet_the_parents_with_princess";

        selectedModels = [];

        state = 0;

        completed = false;

        complete = false;
        cache = false;
        hower = false;
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
    
    preload : function() 
    {
        game.add.sprite(0, 0,'preroll_bg');

        btn1 = game.add.sprite(-100, 180, "preroll", "icon1.png");
        btn1.anchor.setTo(0.5, 0.5);

        btn1.inputEnabled = true;
        btn1.input.pixelPerfectClick = btn1.input.pixelPerfectOver = true;
        btn1.input.pixelPerfectAlpha = 10;
        btn1.input.useHandCursor = true;
        btn1.events.onInputOver.add(this.onScaleOver, this);
        btn1.events.onInputOut.add(this.onScaleOut, this);
        btn1.events.onInputDown.add(this.goLink2, this);

        btn2 = game.add.sprite(-100, 720, "preroll", "icon2.png");
        btn2.anchor.setTo(0.5, 0.5);

        btn2.inputEnabled = true;
        btn2.input.pixelPerfectClick = btn2.input.pixelPerfectOver = true;
        btn2.input.pixelPerfectAlpha = 10;
        btn2.input.useHandCursor = true;
        btn2.events.onInputOver.add(this.onScaleOver, this);
        btn2.events.onInputOut.add(this.onScaleOut, this);
        btn2.events.onInputDown.add(this.goLink2, this);

        btn3 = game.add.sprite(480, 820, "preroll", "icon3.png");
        btn3.anchor.setTo(0.5, 0.5);

        btn3.inputEnabled = true;
        btn3.input.pixelPerfectClick = btn3.input.pixelPerfectOver = true;
        btn3.input.pixelPerfectAlpha = 10;
        btn3.input.useHandCursor = true;
        btn3.events.onInputOver.add(this.onScaleOver, this);
        btn3.events.onInputOut.add(this.onScaleOut, this);
        btn3.events.onInputDown.add(this.goLink2, this);

        btn4 = game.add.sprite(1060, 720, "preroll", "icon4.png");
        btn4.anchor.setTo(0.5, 0.5);

        btn4.inputEnabled = true;
        btn4.input.pixelPerfectClick = btn4.input.pixelPerfectOver = true;
        btn4.input.pixelPerfectAlpha = 10;
        btn4.input.useHandCursor = true;
        btn4.events.onInputOver.add(this.onScaleOver, this);
        btn4.events.onInputOut.add(this.onScaleOut, this);
        btn4.events.onInputDown.add(this.goLink2, this);

        btn5 = game.add.sprite(1060, 180, "preroll", "icon5.png");
        btn5.anchor.setTo(0.5, 0.5);

        btn5.inputEnabled = true;
        btn5.input.pixelPerfectClick = btn5.input.pixelPerfectOver = true;
        btn5.input.pixelPerfectAlpha = 10;
        btn5.input.useHandCursor = true;
        btn5.events.onInputOver.add(this.onScaleOver, this);
        btn5.events.onInputOut.add(this.onScaleOut, this);
        btn5.events.onInputDown.add(this.goLink2, this);

        btn6 = game.add.sprite(960 / 2, 170, "preroll", "logo.png");
        btn6.anchor.setTo(0.5, 0.5);

        btn6.inputEnabled = true;
        btn6.input.pixelPerfectClick = btn6.input.pixelPerfectOver = true;
        btn6.input.pixelPerfectAlpha = 10;
        btn6.input.useHandCursor = true;
        btn6.events.onInputOver.add(this.onScaleOver, this);
        btn6.events.onInputOut.add(this.onScaleOut, this);
        btn6.events.onInputDown.add(this.goLink, this);

        glowEmitter = game.add.emitter(0, 0, 100);
        //this.add(this.glowEmitter);

        glowEmitter.makeParticles("preroll", 'particle_glow.png');
        glowEmitter.setAlpha(1, 0.3, 3000);
        glowEmitter.gravity = -10;
        glowEmitter.minParticleScale = 0.5;
        glowEmitter.maxParticleScale = 1;

        preloadBack = this.add.image(0, 580, 'preroll', 'progressbar_1.png');

        preloadBar = this.add.sprite(this.game.world.centerX - 620 / 2, 580, 'preroll', 'progressbar_2.png');
        this.load.setPreloadSprite(preloadBar);
        preloadBar.x = preloadBack.x = this.game.world.centerX - preloadBack.width / 2;

        button = game.add.button(225 * 1.5, 372 * 1.5, 'preroll', this.loadComplete, this, "play_normal.png", "play_normal.png", "play_over.png");

        //button.scale.x = 1.1;
        //button.scale.y = 1.1;

        button.visible = false;

        button.events.onInputOver.add(this.onScaleOver2, this);
        button.events.onInputOut.add(this.onScaleOut2, this);

        game.add.tween(btn1).to({ x: 110, y: 270 }, 800, Phaser.Easing.Quadratic.Out, true, 0);
        game.add.tween(btn2).to({ x: 300, y: 380 }, 800, Phaser.Easing.Quadratic.Out, true, 500);
        game.add.tween(btn3).to({ x: 480, y: 450 }, 800, Phaser.Easing.Quadratic.Out, true, 1000);
        game.add.tween(btn4).to({ x: 660, y: 380 }, 800, Phaser.Easing.Quadratic.Out, true, 1500);
        game.add.tween(btn5).to({ x: 850, y: 270 }, 800, Phaser.Easing.Quadratic.Out, true, 2000);

        game.load.audio('track', ['assets/music/track.mp3']);

        //// GUI

        //game.load.atlasJSONHash('gui', './assets/images/gui.png' + suffix, './assets/images/gui.json' + suffix);

        game.load.image('logo', path + 'logo.png' + suffix);
        game.load.image('play', path + 'play.png' + suffix);
        game.load.image('play_p', path + 'play_photo.png' + suffix);
        game.load.image('music', path + 'sound_on.png' + suffix);
        game.load.image('music_off', path + 'sound_off.png' + suffix);
        game.load.image('photo', path + 'photo.png' + suffix);
        game.load.image('more', path + 'more.png' + suffix);
        game.load.image('more2', path + 'more3.png' + suffix);
        game.load.image('done', path + 'next.png' + suffix);
        game.load.image('l_arr', path + 'left.png' + suffix);
        game.load.image('r_arr', path + 'right.png' + suffix);
        game.load.image('replay', path + 'replay.png' + suffix);
        game.load.image('dummy', path + 'dummy.png');

        //// START

        game.load.image('bg', path + 'start/bg.jpg' + suffix);
        game.load.image('vs', path + 'start/vs.png' + suffix);
        game.load.image('title', path + 'start/title.png' + suffix);
        game.load.image('part1', path + 'start/part1.png' + suffix);
        game.load.image('part2', path + 'start/part2.png' + suffix);
        game.load.image('guyz', path + 'start/guyz.png' + suffix);

        //// COMIX

        game.load.image('bg2', path + 'comix/bg2.jpg' + suffix);
        game.load.image('smt', path + 'comix/smt.png' + suffix);
        game.load.image('pok', path + 'comix/pok.png' + suffix);
        game.load.image('cl1', path + 'comix/cl1.png' + suffix);
        game.load.image('cl2', path + 'comix/cl2.png' + suffix);
        game.load.image('cl3', path + 'comix/cl3.png' + suffix);

        //// SELECT

        game.load.image('bg3', path + 'select/bg3.jpg' + suffix);
        game.load.image('arc', path + 'select/arc.png' + suffix);
        game.load.image('lock', path + 'select/lock.png' + suffix);

        game.load.image('b1_act', path + 'select/b1_act.png' + suffix);
        game.load.image('b2_act', path + 'select/b2_act.png' + suffix);
        game.load.image('b3_act', path + 'select/b3_act.png' + suffix);
        game.load.image('b1_done', path + 'select/b1_done.png' + suffix);
        game.load.image('b2_done', path + 'select/b2_done.png' + suffix);
        game.load.image('b3_done', path + 'select/b3_done.png' + suffix);
        game.load.image('don_1', path + 'select/don_1.png' + suffix);
        game.load.image('don_2', path + 'select/don_2.png' + suffix);
        game.load.image('don_3', path + 'select/don_3.png' + suffix);
        game.load.image('nam_1', path + 'select/nam_1.png' + suffix);
        game.load.image('nam_2', path + 'select/nam_2.png' + suffix);
        game.load.image('nam_3', path + 'select/nam_3.png' + suffix);
        game.load.image('rib_1', path + 'select/rib_1.png' + suffix);
        game.load.image('rib_2', path + 'select/rib_2.png' + suffix);
        game.load.image('rib_3', path + 'select/rib_3.png' + suffix);

        //// PRESENT

        game.load.image('bg4', path + 'present/bg4.jpg' + suffix);
        game.load.image('bt_1', path + 'present/bt_1.png' + suffix);
        game.load.image('bt_2', path + 'present/bt_2.png' + suffix);
        game.load.image('bt_3', path + 'present/bt_3.png' + suffix);
        game.load.image('pic_1', path + 'present/pic_1.png' + suffix);
        game.load.image('pic_2', path + 'present/pic_2.png' + suffix);
        game.load.image('pic_3', path + 'present/pic_3.png' + suffix);
        game.load.image('amu_1', path + 'present/amu_1.png' + suffix);
        game.load.image('amu_2', path + 'present/amu_2.png' + suffix);
        game.load.image('amu_3', path + 'present/amu_3.png' + suffix);
        game.load.image('pil_1', path + 'present/pil_1.png' + suffix);
        game.load.image('pil_2', path + 'present/pil_2.png' + suffix);
        game.load.image('pil_3', path + 'present/pil_3.png' + suffix);
        game.load.image('mmmm', path + 'present/mmmm.png' + suffix);
        game.load.image('call', path + 'present/call.png' + suffix);
        game.load.image('roof', path + 'present/roof.png' + suffix);
        game.load.image('wrap', path + 'present/wrap.png' + suffix);

        //// FOOD

        game.load.image('bg5', path + 'food/bg5.jpg' + suffix);
        game.load.image('meal', path + 'food/meal.png' + suffix);
        game.load.image('bar', path + 'food/bar.png' + suffix);
        game.load.image('sc_1', path + 'food/sc_1.png' + suffix);
        game.load.image('sc_2', path + 'food/sc_2.png' + suffix);
        game.load.image('sc_3', path + 'food/sc_3.png' + suffix);
        game.load.image('back', path + 'food/back.png' + suffix);
        game.load.image('i_1', path + 'food/i_1.png' + suffix);
        game.load.image('i_2', path + 'food/i_2.png' + suffix);
        game.load.image('i_3', path + 'food/i_3.png' + suffix);
        game.load.image('i_4', path + 'food/i_4.png' + suffix);
        game.load.image('i_5', path + 'food/i_5.png' + suffix);
        game.load.image('i_6', path + 'food/i_6.png' + suffix);
        game.load.image('i_7', path + 'food/i_7.png' + suffix);
        game.load.image('i_8', path + 'food/i_8.png' + suffix);

        //// DRESS

        game.load.image('bg6', path + 'dress/bg6.jpg' + suffix);
        game.load.image('mmmm2', path + 'dress/mmmm2.png' + suffix);

        game.load.image('dres1', path + 'dress/dres_1.png' + suffix);
        game.load.image('dres2', path + 'dress/dres_2.png' + suffix);
        game.load.image('dres3', path + 'dress/dres_3.png' + suffix);
        game.load.image('dres4', path + 'dress/dres_4.png' + suffix);
        game.load.image('dres5', path + 'dress/dres_5.png' + suffix);
        game.load.image('dres6', path + 'dress/dres_6.png' + suffix);
        game.load.image('hair1', path + 'dress/hair_1.png' + suffix);
        game.load.image('hair2', path + 'dress/hair_2.png' + suffix);
        game.load.image('hair3', path + 'dress/hair_3.png' + suffix);
        game.load.image('hair4', path + 'dress/hair_4.png' + suffix);
        game.load.image('hair5', path + 'dress/hair_5.png' + suffix);
        game.load.image('hair6', path + 'dress/hair_6.png' + suffix);
        game.load.image('shoe1', path + 'dress/shoe_1.png' + suffix);
        game.load.image('shoe2', path + 'dress/shoe_2.png' + suffix);
        game.load.image('shoe3', path + 'dress/shoe_3.png' + suffix);
        game.load.image('shoe4', path + 'dress/shoe_4.png' + suffix);
        game.load.image('shoe5', path + 'dress/shoe_5.png' + suffix);
        game.load.image('shoe6', path + 'dress/shoe_6.png' + suffix);

        game.load.image('body', path + 'dress/doll/body.png' + suffix);
        game.load.image('d_1', path + 'dress/doll/d_1.png' + suffix);
        game.load.image('d_2', path + 'dress/doll/d_2.png' + suffix);
        game.load.image('d_3', path + 'dress/doll/d_3.png' + suffix);
        game.load.image('d_4', path + 'dress/doll/d_4.png' + suffix);
        game.load.image('d_5', path + 'dress/doll/d_5.png' + suffix);
        game.load.image('d_6', path + 'dress/doll/d_6.png' + suffix);
        game.load.image('d_def', path + 'dress/doll/d_def.png' + suffix);
        game.load.image('h_1', path + 'dress/doll/h_1.png' + suffix);
        game.load.image('h_2', path + 'dress/doll/h_2.png' + suffix);
        game.load.image('h_3', path + 'dress/doll/h_3.png' + suffix);
        game.load.image('h_4', path + 'dress/doll/h_4.png' + suffix);
        game.load.image('h_5', path + 'dress/doll/h_5.png' + suffix);
        game.load.image('h_6', path + 'dress/doll/h_6.png' + suffix);
        game.load.image('h_def', path + 'dress/doll/h_def.png' + suffix);
        game.load.image('h_b_def', path + 'dress/doll/h_b_def.png' + suffix);
        game.load.image('head', path + 'dress/doll/head.png' + suffix);
        game.load.image('s_1', path + 'dress/doll/s_1.png' + suffix);
        game.load.image('s_2', path + 'dress/doll/s_2.png' + suffix);
        game.load.image('s_3', path + 'dress/doll/s_3.png' + suffix);
        game.load.image('s_4', path + 'dress/doll/s_4.png' + suffix);
        game.load.image('s_5', path + 'dress/doll/s_5.png' + suffix);
        game.load.image('s_6', path + 'dress/doll/s_6.png' + suffix);

        //// FINAL

        game.load.image('bg7', path + 'final/bg7.jpg' + suffix);
        game.load.image('p_1', path + 'final/p_1.png' + suffix);
        game.load.image('p_2', path + 'final/p_2.png' + suffix);
        game.load.image('p_3', path + 'final/p_3.png' + suffix);
        game.load.image('a_1', path + 'final/a_1.png' + suffix);
        game.load.image('a_2', path + 'final/a_2.png' + suffix);
        game.load.image('a_3', path + 'final/a_3.png' + suffix);
        game.load.image('k_1', path + 'final/k_1.png' + suffix);
        game.load.image('k_2', path + 'final/k_2.png' + suffix);
        game.load.image('k_3', path + 'final/k_3.png' + suffix);
        game.load.image('smt2', path + 'final/smt2.png' + suffix);
        game.load.image('ban1', path + 'final/ban1.png' + suffix);
        game.load.image('ban2', path + 'final/ban2.png' + suffix);
        game.load.image('cl4', path + 'final/cl4.png' + suffix);

    },

    goLink: function ()
    {
        // window.open(domain + '/?utm_source=' + publisher + '&utm_campaign=' + gameId + '&utm_medium=referral&utm_content=preloader_logo');

    },

    goLink2: function ()
    {
        // window.open(domain + '/?utm_source=' + publisher + '&utm_campaign=' + gameId + '&utm_medium=referral&utm_content=preloader_category');

    },

    create: function () 
    {
        preloadBack.visible = preloadBar.visible = false;
        button.visible = true;
    },

    onScaleOver: function(sprite)
    {
        sprite.scale.setTo(1.05, 1.05);
        hower = true;
    },

    onScaleOut: function(sprite)
    {
        sprite.scale.setTo(1, 1);
        hower = false;
    },

    update: function()
    {
        if (hower)
        {
            glowEmitter.x = game.input.x;
            glowEmitter.y = game.input.y;
            glowEmitter.start(true, 3000, null, 25);
        }
    },

    loadComplete: function () 
    {
        // ga('send', {
        //     hitType: 'event',
        //     eventCategory: domain,
        //     eventAction: gameId,
        //     eventLabel: publisher
        // });

        btn1.destroy(true);
        btn2.destroy(true);
        btn3.destroy(true);
        btn4.destroy(true);
        btn5.destroy(true);
        btn6.destroy(true);

        glowEmitter.kill();
        hower = false;

        musicOn = true;
        music = game.add.audio('track');
        music.loop = true;
		music.play();
        
        this.state.start('Start');
    },
};