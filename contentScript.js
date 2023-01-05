
 chrome.runtime.onMessage.addListener(function(request) {
    if(request.action === 'createCanvas') {
        // generating a canvas wrapper for canvas image
        var canvasWrapper = $("<div id='capto-canvas'><a href download='capture.png' id='capto-save'></a></div>");
        canvasWrapper.appendTo('body');
        // html2canvas a plugin that will capture webpage
        html2canvas(document.body).then(canvas => {
            document.getElementById('capto-canvas').appendChild(canvas)
        });

        // a delay before downloading the file, due to canvas is being generated first
        setTimeout(() => {
            var mainCanvas = document.getElementById('capto-canvas').getElementsByTagName('canvas');
            var imgCanvas = mainCanvas[0].toDataURL();
            imgCanvas = imgCanvas.replace(/^data:image\/[^;]*/, 'data:application/octet-stream');
            imgCanvas = imgCanvas.replace(/^data:application\/octet-stream/, 'data:application/octet-stream;headers=Content-Disposition%3A%20attachment%3B%20filename=Canvas.png');
            document.getElementById('capto-save').href = imgCanvas;
            document.getElementById('capto-save').click();
        }, 1000);
    }
});