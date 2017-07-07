(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var render = function (root) {
  root.empty();
  var wrapper = $("<div class=\"wrapper\"></div>");

  if (state.home == null) {
    console.log("hola laboratoriaNews");
    wrapper.append(Home(function (_) {
      return render(root);
    }));
  }
  //  else if (state.home != null) {
  //   console.log("hola noticiaPrincipal");
  //   wrapper.append(Notice(_ => render(root)));
  // }

  root.append(wrapper);
};


var state = {
  home: null,
  notice: null
};

$(function (_) {
  $.getJSON("http://localhost:3000/api/news/", function (data) {
    //toda la api
    // console.log(data[0]);
    // portada
    console.log(data[0].title);
    console.log(data[0].brief);
    // nombre y usuario
    console.log(data[0].author.name);
    console.log(data[0].author.user);
    // contenido de la noticia
    console.log(data[0].body);
    // categoria
    console.log(data[0].categories);

    var root = $("#root");
    render(root);
  });
});

// HOME

var Home = function (update) {
  var sliderIntro = $("<div>holaaaa</div>");
  $("#root").append(sliderIntro);
  // return sliderIntro;
};
},{}]},{},[1])