var game, state, play, logo, more, music, musicOn, musOn, musOff, bg, tween, part1, part2, vs, filter,
    fader, mc1, mc2, selectedModels, path, suffix, cache,
    state, counter, completed, pillow, amulet, pic;

game = new Phaser.Game(960, 720, Phaser.AUTO, 'game-container', '', true);

game.state.add('Boot', Boot);
game.state.add('Preroll', Preroll);
game.state.add('Start', Start);
game.state.add('Comix', Comix);
game.state.add('Select', Select);
game.state.add('Present', Present);
game.state.add('Food', Food);
game.state.add('Dress', Dress);
game.state.add('Final', Final);

game.state.start('Boot');
