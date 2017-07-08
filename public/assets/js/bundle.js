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
    state.title = data[0].title;
    state.subtitle = data[0].brief;
    state.name = data[0].author.name;
    state.title2 = data[1].title;


    // portada
    console.log(data[0].title);
    console.log(data[0].brief);
    // nombre y usuario
    console.log(data[0].author.name);
    console.log(data[0].author.user);
    // contenido de la noticia
    console.log(data[0].body);
    // categoria
    console.log(data[1].title);

    var root = $("#root");
    render(root);
  });
});

/*HOME*/
var Home = function (update) {
  var header = $("<header></header>");
  var navMobile = $("<nav id=\"navMobile\" class=\"nav-extended\"></nav>");
  var divWrapper = $("<div class=\"nav-wrapper\"></div>");
  var btnLeft = $("<ul class=\"hide-on-med-and-down\"><li><a href=\"#\"><img src=\"assets/img/menu.png\">section</a></li><li><a href=\"#\"><img src=\"assets/img/search.png\">search</a></li></ul>");
  var optionsdes = $("<ul class=\"right hide-on-med-and-down\"><li><a href=\"https://www.facebook.com/laboratoria.la/\" target=\"_blank\"><img src=\"assets/img/fb.png\"></a></li><li><a href=\"https://twitter.com/LaboratoriaLA\" target=\"_blank\"><img src=\"assets/img/tw.png\"></a></li><li><a href=\"https://www.linkedin.com/company-beta/3718820/\" target=\"_blank\"><img src=\"assets/img/in.png\"></a></li></ul>");

  var logo = $("<a href=\"#\" class=\"brand-logo center hide-on-large-only\"><img src=\"assets/img/logoicon.png\"></a>");
  var menuBar = $("<a href=\"#\" data-activates=\"mobile-demo\" class=\"button-collapse\"><img src=\"assets/img/menu.png\"></a>");
  // const itemsMenu = $('<ul class="side-nav" id="mobile-demo"><li><a href="sass.html">Opinión</a></li><li><a href="sass.html">Cultura</a></li><li><a href="sass.html">Tecología</a></li><li><a href="sass.html">Perú</a></li></li><li><a href="sass.html">Mundo</a></li><li><a href="#">Economía</a><li><a>Lifestyle</a><li><a>Deporte<a></li></ul>');

  var main = $("<div class=\"center hide-on-med-and-down\"><div><img src=\"assets/img/logoicon.png\"></div><span>Lunes, Junio 12 de 2017 | <img src=\"assets/img/cloud.png\"></span></div>");

  var navDesktop = $("<nav id=\"navDesktop\"></nav>");
  var divContainer = $("<div class=\"nav-wrapper\"></div>");
  var divOptions = $("<div class=\"col s12 l12\"><a href=\"#\" class=\"breadcrumb\">Lo último</a><a href=\"#\" class=\"breadcrumb\">Opinión</a><a href=\"#!\" class=\"breadcrumb\">Cultura</a><a href=\"#\" class=\"breadcrumb\">Perú</a><a href=\"#\" class=\"breadcrumb\">Tecología</a><a href=\"#!\" class=\"breadcrumb\">Mundo</a><a href=\"#\" class=\"breadcrumb\">Economía</a><a href=\"#\" class=\"breadcrumb\">Lifestyle</a><a href=\"#!\" class=\"breadcrumb\">Deporte</a></div>");

  var noticeMain = $("<section><section>");
  var bodybg = $("<div id=\"bg-notice\"><div>");
  var title = $("<h3>" + state.title + "</h3>");
  var textContent = $("<span>" + state.subtitle + "</span>");

  var notices = $("<section><section>");
  var divRow = $("<div class=\"row \"></div>");
  var divColumns = $("<div id=\"n2\" class=\"bg-img col s12 m6 l6\"><span>" + state.title2 + "</span></div><div id=\"n3\" class=\"bg-img col s12 m3 l3\"></div><div id=\"n4\" class=\"bg-img col s12 m3 l3\"></div>");


  $("#root").append(header);
  $("#root").append(noticeMain);
  $("#root").append(notices);

  header.append(navMobile);
  header.append(main);
  navMobile.append(divWrapper);
  divWrapper.append(btnLeft);
  divWrapper.append(optionsdes);
  divWrapper.append(logo);
  divWrapper.append(menuBar);
  main.append(navDesktop);
  navDesktop.append(divContainer);
  divContainer.append(divOptions);

  noticeMain.append(bodybg);
  bodybg.append(title);
  bodybg.append(textContent);

  notices.append(divRow);
  divRow.append(divColumns);

  // return sliderIntro;
};

// FRAMEWORK
$(document).ready(function () {
  $(".button-collapse").sideNav();
});
},{}]},{},[1])