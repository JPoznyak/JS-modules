import './form.js';
import './timer.js';


// function loadScript(src, callback) {
// 	const script = document.createElement('script');
// 	script.src = src;
// 	script.onload = callback;
// 	document.head.insertAdjacentElement('beforeend', script);
// }

// function loadScript(src, callback) {
//     let script = document.createElement('script');
//     script.src = src;
  
//     script.onload = () => callback(script);
  
//     document.head.append(script);
//   }


//   function loadScript(src, callback) {
//     var s,
//       r,
//       t;
//     r = false;
//     s = document.createElement('script');
//     s.type = 'text/javascript';
//     s.src = src;
//     s.onload = s.onreadystatechange = function() {
//       //console.log( this.readyState ); //uncomment this line to see which ready states are called.
//       if (!r && (!this.readyState || this.readyState == 'complete')) {
//         r = true;
//         callback();
//       }
//     };
//     t = document.getElementsByTagName('script')[0];
//     t.parent.insertBefore(s, t);
//   }

// // loadScript(['/.common.js', './timer.js', './form.js'], () => {

// // })

// // loadScript(() => {

// // })

// loadScript('./common.js', () => {
// 	log();
// 	console.log('index.js');
// })