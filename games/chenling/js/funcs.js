function addItem(parent, container, x, y, name, res, perfect, visible, clickHandler, overHandler, outHandler)
{
    var tempItem = game.add.sprite(0, 0, res);

    tempItem.name = name;
    tempItem.anchor.set(0.5);
    tempItem.inputEnabled = true;
    //tempItem.input.pixelPerfectOver = perfect;
    //tempItem.input.pixelPerfectClick = perfect;
    //tempItem.input.pixelPerfectOut = perfect;

    tempItem.input.pixelPerfectClick = tempItem.input.pixelPerfectOver = tempItem.input.pixelPerfectOut = perfect;

    if (perfect)
        tempItem.input.pixelPerfectAlpha = 10;

    tempItem.input.useHandCursor = true;

    if (clickHandler != null)
        tempItem.events.onInputUp.add(clickHandler, parent);

    if (overHandler != null)
        tempItem.events.onInputOver.add(overHandler, parent);

    if (outHandler != null)
        tempItem.events.onInputOut.add(outHandler, parent);

    tempItem.visible = visible;

    tempItem.x = x + tempItem.width / 2;
    tempItem.y = y + tempItem.height / 2;

    container.addChild(tempItem);

    return tempItem;
}

function getLocation(href)
{
    var l = document.createElement("a");
    l.href = href;
    return l;
}

function areAdsEnabled()
{
    var test = document.createElement('div');
    test.innerHTML = '&nbsp;';
    test.className = 'adsbox';
    document.body.appendChild(test);
    var adsEnabled;
    var isEnabled = function ()
    {
        var enabled = true;
        if (test.offsetHeight === 0)
        {
            enabled = false;
        }
        test.parentNode.removeChild(test);
        return enabled;
    };
    window.setTimeout(adsEnabled = isEnabled(), 100);
    return adsEnabled;
};
