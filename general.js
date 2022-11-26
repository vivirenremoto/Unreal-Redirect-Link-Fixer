function reloadFixer(){
    var items = document.querySelectorAll("a[href*=redirectTo]");
    for(var i=0; i<items.length; i++){
        items[i].href = decodeURI( items[i].href.replace("https://redirect.epicgames.com/?redirectTo=","") );
    }
}

function throttle( fn, time ) {
    var t = 0;
    return function() {
        var args = arguments,
            ctx = this;

            clearTimeout(t);

        t = setTimeout( function() {
            fn.apply( ctx, args );
        }, time );
    };
}

document.addEventListener("DOMSubtreeModified", throttle( function() {
    var total = document.querySelectorAll("div[class^=LoadingWrap]").length;
    if( total == 0 ){
        reloadFixer();
    }
}, 50 ), false );
