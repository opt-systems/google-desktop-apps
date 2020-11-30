var darkReader = require('./darkreader.js');
//NOTE: loading dark reader alternative
//var jquery = require('./jquery.min.js');
// jquery(document).ready(function() {
//   var script = document.createElement('script')
//   script.src = 'https://cdn.jsdelivr.net/npm/darkreader@4.9.24/darkreader.min.js';
//   script.type = 'text/javascript';
//   script.nonce = '';
//   script.onload = function() {
//     DarkReader.setFetchMethod(window.fetch);
//     DarkReader.enable({
//       brightness: 100,
//       contrast: 90,
//       sepia: 0
//     });
//   };  
//   document.body.append(script);      
//});

darkReader.setFetchMethod(window.fetch);
darkReader.enable({
    brightness: 100,
    contrast: 90,
    sepia: 10
});


