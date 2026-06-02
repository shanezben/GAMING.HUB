
(function () {
    function getScale() {
        var w = window.innerWidth;
        if (w <= 480)  return 0.34;
        if (w <= 768)  return 0.54;
        if (w <= 1024) return 0.72;
        return 1;
    }

    function applyZoom() {
        var scale  = getScale();
        var body   = document.body;
        var html   = document.documentElement;

      
        body.style.transform       = 'scale(' + scale + ')';
        body.style.transformOrigin = 'top left';
        body.style.width           = '1400px';
        body.style.marginLeft      = '0';
        body.style.overflowX       = 'hidden';

       
        var realHeight = body.scrollHeight * scale;
        html.style.height    = realHeight + 'px';
        html.style.overflowY = 'scroll';
        html.style.overflowX = 'hidden';
        html.style.width     = '100%';

   
        document.body.style.maxWidth = '1400px';
    }


    applyZoom();
    window.addEventListener('resize', applyZoom);

    
    window.addEventListener('load', applyZoom);
})();