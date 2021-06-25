// function loadScript(src, callback) {
// 	const script = document.createElement('script');
// 	script.src = src;
// 	script.onload = callback;
// 	document.head.insertAdjacentElement('beforeend', script);
// }


// function loadScript(urls, path) {
//     return new Promise(function(resolve) {
//         urls.forEach(function(src, i) {

//             const script = document.createElement('script');        
//             script.src = (path || "") + src;
//             script.async = false;

//             // If last script, bind the callback event to resolve
//             if(i == urls.length-1) {                    
//                 // Multiple binding for browser compatibility
//                 script.onreadystatechange = resolve;
//                 script.onload = resolve;
//             }
//             document.head.insertAdjacentElement('beforeend', script);
//         });
//     });
// }

// loadScript(['/.common.js', './timer.js', './form.js'], () => {

// })




function loadScript(urls, callback) {
    // 1. первый аргумент — функция
    if (typeof urls === "function") {
      return urls();
    }
    
    // 2. первый аргумент — строка -> приводим к случаю 3
    if (typeof urls === "string") {
      urls = [urls];
    }
  
    // если на данном шаге urls все ещё не массив, то это ошибка
    if (!Array.isArray(urls)) {
      throw new TypeError();
    }
    
    // 3. первый аргумент — массив урлов 
    // смотрим, какие скрипты уже есть в DOM?
    const existedScripts = Array.from(document.getElementsByTagName('script'), elem => elem.src);
    const promises = [];
  
    // для каждой зависимости в массиве
    urls.forEach(url => {
      // если такой скрипт уже есть в DOM — ничего не делаем 
      if (existedScripts.includes(url)) return;
      
      // если его ещё нет, создаём такой script   
      const element = document.createElement("script");
      element.type = "text/javascript";
      element.src = url;
      
      // когда скрипт загрузится, этот промис разрезолвится 
      promises.push(new Promise(resolve => {
        element.onload = resolve;
      }));
      
      document.body.appendChild(element);
    });
  
    // ждём, когда все скрипты зарезолвятся, после чего выполняем callback 
    Promise.all(promises).then(callback);
  }