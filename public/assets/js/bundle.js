(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

// "use strict";
//
// const render = (root)=>{
//     root.empty();
//     const wrapper = $('<div class="components"></div>');
//
//     if (state.home == null) {
//       console.log("hola laboratoriaNews");
//       wrapper.append(Home(_ => render(root)));
//     } else if (state.home != null) {
//       console.log("hola noticiaPrincipal");
//       wrapper.append(Notice(_ => render(root)));
//     }
//
//     root.append(wrapper);
// };
//
// const state = {
//   home : null,
//   notice : null,
//   noticeselect : null
// };
//
// $(_ =>{
//   $.getJSON('https://localhost:3000/api/news/',(json) => {
//     console.log(json.[0]);
//
//     // const root = $('#root');
//     // render(root);
//   });
// })
$(function (_) {
  $.getJSON("http://localhost:3000/api/news/", function (data) {
    console.log(data);
    // console.log(data.results[0].name.first);
    // console.log(data.results[0].gender);
    // console.log(data.results[0].location.city);
    // console.log(data.results[0].email);
    // console.log(data.results[0].cell);
    // console.log(data.results[0].picture.large);
  });
});
},{}]},{},[1])