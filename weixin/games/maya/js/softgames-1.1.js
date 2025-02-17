var SG_Lang = 'en';

var SG = {
    loaded : false,
	debug : false,
	lang 		   : 'en',
	gameJS 	 	   : [],
	d 		 	   : document,
    loadScrnTimer  : 10,
	
	boot : function(){
        SG.initLangs(window.gameLangs);
		if( sg_exists() ){
            window.softgames.gameInitCallback = SG.startGame;
            window.softgames.getReady();
		}
		else{
			SG.startGame();
		}
	},

	startGame : function(){
        if( SG.loaded ) return;
        SG.loaded = true;
        
        SG.showSpinner();
        
        if(typeof window.gamePreLoader == "function"){
            window.gamePreLoader();
        }
        
		SG.loadJsFiles(window.gameJS, function(){
			SG.hideLoadScrn();
			if(window.gameOnLoadScript){
				eval(window.gameOnLoadScript); 
			}
		});
		
	},
	
	showSpinner : function(){
       
    },
    
	showLoadScrn : function(){
		var spin = SG.d.createElement('div');
			spin.setAttribute('id', 'sg-spinner');
          

		var loadScrn = SG.d.createElement('div');
            loadScrn.setAttribute('id', 'sg-loadscrn');
            loadScrn.appendChild(spin);
		
        if(window.location.href.indexOf("adultcontent") != -1){
            var text = SG.d.createElement('div');
            text.setAttribute('id', 'sg-loadtext');
            text.innerHTML = 'One moment please...<br>Your site is almost loaded!';
            loadScrn.appendChild(text);
        }
        
        var displayLoadScrn = function(){
            var body = SG.d.getElementsByTagName('body')[0];
            if( typeof body != "undefined" ){
                if( SG.d.getElementById('sg-loadscrn') == null ){
                    SG.debug && console.log('show load-screen: complete');
                    body.appendChild(loadScrn);
                }
                SG.loadVoyager();
            }
            else{
                if(SG.debug) console.log('show load-screen: body-tag not ready. retrying in '+SG.loadScrnTimer+'ms');
                setTimeout(displayLoadScrn,SG.loadScrnTimer);
            }
        };
        
        displayLoadScrn();
	},
	
	hideLoadScrn : function(){
        var loadscrn = SG.d.getElementById('sg-loadscrn');
        if( loadscrn )
            loadscrn.parentNode.removeChild(loadscrn);
	},
	
	loadJsFiles : function(files, callback){
		var head = SG.d.getElementsByTagName('head')[0] || document.documentElement,
			loaded = [],
			callbacksUntilFinish = files.length;
		
		if( files.length > 0 ){
			var script = document.createElement('script'), loaded = false;
			script.type = 'text/javascript';
		    script.src = files[0];
		    files.shift();
		    
		    var done = false;
		    script.onreadystatechange = script.onload = function() {
		    	if (!done && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
		    		done = true;
                    // Handle memory leak in IE
                    script.onload = script.onreadystatechange = null;
                    if (head && script.parentNode) {
                        head.removeChild(script);
                    }

                    SG.loadJsFiles(files, callback);
                }
	    	};
		    
		    head.insertBefore(script, head.firstChild);
		    if(SG.debug) console.log('loading '+script.src+', '+files.length+' files left.');
		}
		else if( typeof callback == 'function' ){
			if(SG.debug) console.log('calling callback: '+callback);
			callback();
		}
	},
	
	loadCSSFiles : function( files ){
		if( files.length == 0 ) return;
		var head = SG.d.getElementsByTagName('head')[0] || document.documentElement;
		
		for( var i=0; i<files.length; i++ ){
			var css = document.createElement('link');
			css.rel = 'stylesheet';
			css.type = 'text/css';
			css.href = files[i];
			head.insertBefore(css, head.firstChild);
		}
	},
	
	trigger : function( data, callback ){
		if( !sg_exists() ) return false;
		
		switch( data.type ){
		case 'start' 	:       d = {type: window.softgames.eventStartingGame};					break;
		case 'levelUp' 	:       d = {type: window.softgames.eventLevelUp, level: data.level};	    break;
		case 'gameOver' :       d = {type: window.softgames.eventGameOver, score: data.score};	break;
        case 'gameCompleted' :  d = {type: window.softgames.eventGameCompleted, score: data.score};	break;
        case 'gamePause' :      d = {type: window.softgames.eventGamePause, state: data.state};	break;
        case 'gameRestart' :    d = {type: window.softgames.eventGameRestart};	break;
        case 'selectLevel' :    d = {type: window.softgames.eventSelectLevel, level: data.level};	break;
        case 'selectMainMenu' : d = {type: window.softgames.eventSelectMainMenu};	break;
        case 'setSound' : d = {type: window.softgames.eventSound, state: data.state};	break;
		}
		
		window.softgames.trigger(d, callback);
		
		return true;
	},
	
	initLangs : function( supported_languages ){
		var tmp_lang = typeof SG_getLang == 'function' ? SG_getLang() : 'en';
		var hasLanguages = (Object.prototype.toString.call(supported_languages)).toLowerCase() == "[object array]";
	    if( hasLanguages && supported_languages.indexOf(tmp_lang) >= 0 )
	    	SG.lang = tmp_lang;

	    SG_Lang = SG.lang; 
	    return SG.lang;
	},
	
	getLang : function( ){
		return SG.lang;
	},
	
	setOrientationHandler : function(handler){
		if( sg_exists() )
			window.softgames.changeScreenOrientation = handler;
        
      
	},
	
	setResizeHandler : function(handler){
		if( sg_exists() )
			window.softgames.changeScreenSize = handler;
	},
	
	
	hideAddressBar : function(){
		setTimeout("window.scrollTo(0, 1)", 10);
	},
    
    loadVoyager : function(){
        
        SG.boot();


    },
    redirectToPortal:function(){
        window.softgames._trackAction("ingameRedirectClicked");
        var url=softgames.back_url;
        
        if(typeof url !== "string") url="http://weixin.luhui.net/";
        else url="http://"+url;
        
        window.location.href=url;
    },
    getLogoUrl : function(size){
        return "http://www.play68.com/resources/images/logo.png";
    }
};

function sg_exists(){
    return typeof window.softgames != "undefined" && window.softgames != null;
}

function SG_initAPI       (supported_languages) { return SG.initLangs( supported_languages ); }
function SG_hideAddressBar() 			   		{ SG.hideAddressBar(); }

function SG_OrientationHandler(orientationHandler, resizeHandler){
	if(typeof orientationHandler != "undefined" && orientationHandler != null)
		SG.setOrientationHandler(orientationHandler);
	
	if(typeof resizeHandler != "undefined" && resizeHandler != null)
		SG.setResizeHandler(resizeHandler);
}

SG.showLoadScrn();