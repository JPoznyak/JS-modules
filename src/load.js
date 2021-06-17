// function loadScript(src, callback) {
// 	const script = document.createElement('script');
// 	script.src = src;
// 	script.onload = callback;
// 	document.head.insertAdjacentElement('beforeend', script);
// }


function loadScript(urls, path) {
    return new Promise(function(resolve) {
        urls.forEach(function(src, i) {

            const script = document.createElement('script');        
            script.src = (path || "") + src;
            script.async = false;

            // If last script, bind the callback event to resolve
            if(i == urls.length-1) {                    
                // Multiple binding for browser compatibility
                script.onreadystatechange = resolve;
                script.onload = resolve;
            }
            document.head.insertAdjacentElement('beforeend', script);
        });
    });
}

loadScript(['/.common.js', './timer.js', './form.js'], () => {

})
