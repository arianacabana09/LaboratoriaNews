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

/*HOME*/
// const btnSearch = $('');
var Home = function (update) {
  var header = $("<header></header>");
  var navContainer = $("<nav class=\"nav-extended\"></nav>");
  var divWrapper = $("<div class=\"nav-wrapper\"></div>");
  var btnLeft = $("<ul class=\"hide-on-med-and-down\"><li><a href=\"#\"><img src=\"assets/img/menu.png\">section</a></li><li><a href=\"#\"><img src=\"assets/img/search.png\">search</a></li></ul>");
  var optionsdes = $("<ul class=\"right hide-on-med-and-down\"><li><a href=\"https://www.facebook.com/laboratoria.la/\" target=\"_blank\"><img src=\"assets/img/fb.png\"></a></li><li><a href=\"https://twitter.com/LaboratoriaLA\" target=\"_blank\"><img src=\"assets/img/tw.png\"></a></li><li><a href=\"https://www.linkedin.com/company-beta/3718820/\" target=\"_blank\"><img src=\"assets/img/in.png\"></a></li></ul>");

  var logo = $("<a href=\"#\" class=\"brand-logo center hide-on-large-only\"><img src=\"assets/img/logoicon.png\"></a>");
  var menuBar = $("<a href=\"#\" data-activates=\"mobile-demo\" class=\"button-collapse\"><img src=\"assets/img/menu.png\"></a>");
  // const itemsMenu = $('<ul class="side-nav" id="mobile-demo"><li><a href="sass.html">Opinión</a></li><li><a href="sass.html">Cultura</a></li><li><a href="sass.html">Tecología</a></li><li><a href="sass.html">Perú</a></li></li><li><a href="sass.html">Mundo</a></li><li><a href="#">Economía</a><li><a>Lifestyle</a><li><a>Deporte<a></li></ul>');

  $("#root").append(header);
  header.append(navContainer);
  navContainer.append(divWrapper);
  divWrapper.append(btnLeft);
  divWrapper.append(optionsdes);

  divWrapper.append(logo);
  divWrapper.append(menuBar);
  // divWrapper.append(itemsMenu);
  // return sliderIntro;
};

// FRAMEWORK
$(document).ready(function () {
  $(".button-collapse").sideNav();
});
},{}]},{},[1])