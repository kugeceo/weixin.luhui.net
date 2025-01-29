var arr, turning, cur1, cur2, cur, prog, totalProg;

var Food =
{

    preload : function() 
    {
        arr = [];

        turning = false;

        prog = 0;
        totalProg = 0;

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
		game.add.sprite(0, 0, 'bg5');

        var arr2 = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];

        this.shuffleArr(arr2);

		for (var xx = 0; xx < 4; xx++)
        {
            arr[xx] = [];

            for (var yy = 0; yy < 4; yy++)
            {
                arr[xx][yy] = game.add.sprite(0, 0, 'back');;
                arr[xx][yy].anchor.setTo(.5);

                arr[xx][yy].name = 'item' + arr2.pop();

                //console.log('created item of type:' + arr[xx][yy].name);

                arr[xx][yy].x = 188 + arr[xx][yy].width / 2 + xx * 145;
                arr[xx][yy].y = 29 + arr[xx][yy].height / 2 + yy * 145;

                arr[xx][yy].inputEnabled = true;
                arr[xx][yy].input.useHandCursor = true;
                arr[xx][yy].input.pixelPerfectClick = arr[xx][yy].input.pixelPerfectOver = arr[xx][yy].input.pixelPerfectOut = true;
                arr[xx][yy].input.pixelPerfectAlpha = 10;
                arr[xx][yy].events.onInputOver.add(this.onScaleOver, this);
                arr[xx][yy].events.onInputOut.add(this.onScaleOut, this);
                arr[xx][yy].events.onInputDown.add(this.turn, this);
            }
        }

		arr['bar'] = game.add.sprite(0, 0, 'bar');
		arr['scale'] = game.add.sprite(0, 0, 'dummy');
		arr['meal'] = game.add.sprite(-960, 0, 'meal');

        play = this.add.button(0, 580, 'r_arr', this.startGame, this);
        musOn = this.add.button(851, -13, 'music', this.musicSwitch, this);
        musOff = this.add.button(851, -13, 'music_off', this.musicSwitch, this);
        logo = this.add.button(-8, -4, 'logo', this.goLink2, this);
        //more = this.add.button(820, 580, 'more', this.goLink, this);
        more = this.add.button(820, 580, 'more', this.goLink3, this);

        //play.visible = false;

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

    shuffleArr: function(array)
    {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex)
        {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    },

    onAnim2: function ()
    {
        play.visible = true;
    },

    turn: function(sprite)
    {
        if (turning) return;

        if (sprite == cur1) return;

        turning = true;

        var tw = game.add.tween(sprite.scale).to( { x:0}, 250, Phaser.Easing.Linear.None, true);

        cur = sprite;

        tw.onComplete.add(this.turn2, this);
    },

    turn2: function()
    {
        cur.loadTexture('i_' + cur.name.substr(4));

        var tw = game.add.tween(cur.scale).to( { x:1 }, 250, Phaser.Easing.Linear.None, true);

        tw.onComplete.add(this.turn3, this);
    },

    turn3: function()
    {
        if (cur1 == null)
        {
            cur1 = cur;
            turning = false;
        }
        else
        {
            cur2 = cur;

            if (this.matches())
            {
                game.add.tween(cur1).to( { alpha: 0 }, 500, Phaser.Easing.Linear.None, true);
                game.add.tween(cur2).to( { alpha: 0 }, 500, Phaser.Easing.Linear.None, true);

                cur1.inputEnabled = false;
                cur2.inputEnabled = false;

                prog++;

                cur1 = null;
                cur2 = null;

                turning = false;

                if (prog == 8)
                {
                    totalProg++;

                    prog = 0;

                    arr['scale'].loadTexture('sc_' + totalProg);

                    if (totalProg == 3)
                    {
                        //play.visible = true;

                        game.time.events.add(Phaser.Timer.SECOND * .5, this.win, this);

                        return;
                    }

                    game.time.events.add(Phaser.Timer.SECOND * 2, this.newGame, this);
                }
            }
            else
            {
                game.add.tween(cur1.scale).to( { x:0}, 250, Phaser.Easing.Linear.None, true);
                var tw = game.add.tween(cur2.scale).to( { x:0}, 250, Phaser.Easing.Linear.None, true);

                tw.onComplete.add(this.turn4, this);
            }
        }
    },

    win: function()
    {
        arr['scale'].visible = false;
        arr['bar'].visible = false;

        game.add.tween(arr['meal']).to( { x:0 }, 1000, Phaser.Easing.Circular.Out, true);

        var f = new GlowFilter(
            350,
            350,
            parseFloat(5),
            parseFloat(3),
            parseFloat(1),
            parseInt(0xffff99),
            parseFloat(0.1)
        );

        f.outerStrength = 0;
        f.innerStrength = 0;

        arr['meal'].filters = [f];

        game.add.tween(f).to( { outerStrength: 3, innerStrength: 1 }, 550, Phaser.Easing.Linear.None, true, 0, 99999).yoyo(true);

        game.time.events.add(Phaser.Timer.SECOND * 3, this.onAnim2, this);

        play.loadTexture('done');
    },

    turn4: function()
    {
        cur1.loadTexture('back');
        cur2.loadTexture('back');

        game.add.tween(cur1.scale).to( { x:1 }, 250, Phaser.Easing.Linear.None, true);
        var tw = game.add.tween(cur2.scale).to( { x:1 }, 250, Phaser.Easing.Linear.None, true);

        tw.onComplete.add(this.turn5, this);
    },

    turn5: function()
    {
        cur1 = null;
        cur2 = null;

        turning = false;
    },

    matches: function()
    {
        return cur1.name == cur2.name;
    },

    newGame: function()
    {
        var arr2 = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];

        this.shuffleArr(arr2);

        for (var xx = 0; xx < 4; xx++)
        {
            for (var yy = 0; yy < 4; yy++)
            {
                arr[xx][yy].loadTexture('back');
                arr[xx][yy].scale.setTo(1);

                arr[xx][yy].name = 'item' + arr2.pop();

                arr[xx][yy].inputEnabled = true;
                arr[xx][yy].alpha = 1;
            }
        }
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
        state = 2;
        game.state.start('Select');
    }
};