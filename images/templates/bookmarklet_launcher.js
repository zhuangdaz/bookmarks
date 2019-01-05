(function(){
    if (window.bookmarklet !== undefined){
        bookmarklet();
    }
    else {
        document.body.appendChild(document.createElement('script')).src='https://6178c16e.ngrok.io/static/js/bookmarklet.js?r='+Math.floor(Math.random()*99999999999999999999);
    }
})();