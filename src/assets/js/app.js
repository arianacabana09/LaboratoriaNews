"use strict";

const render = (root)=>{
    root.empty();
    const wrapper = $('<div class="wrapper"></div>');

    if (state.home == null) {
      console.log("hola laboratoriaNews");
      wrapper.append(Home(_ => render(root)));}
    //  else if (state.home != null) {
    //   console.log("hola noticiaPrincipal");
    //   wrapper.append(Notice(_ => render(root)));
    // }

    root.append(wrapper);
};


const state = {
  home : null,
  notice : null
};

$(_ =>{
  $.getJSON('http://localhost:3000/api/news/',(data)=>{
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

    const root = $('#root');
    render(root);
  });
});

/*HOME*/
// const btnSearch = $('');
const Home = (update) =>{
  const header = $('<header></header>');
  const navContainer = $('<nav class="nav-extended"></nav>');
    const divWrapper = $('<div class="nav-wrapper"></div>');
      const btnLeft = $('<ul class="hide-on-med-and-down"><li><a href="#"><img src="assets/img/menu.png">section</a></li><li><a href="#"><img src="assets/img/search.png">search</a></li></ul>');
      const optionsdes = $('<ul class="right hide-on-med-and-down"><li><a href="https://www.facebook.com/laboratoria.la/" target="_blank"><img src="assets/img/fb.png"></a></li><li><a href="https://twitter.com/LaboratoriaLA" target="_blank"><img src="assets/img/tw.png"></a></li><li><a href="https://www.linkedin.com/company-beta/3718820/" target="_blank"><img src="assets/img/in.png"></a></li></ul>');

      const logo = $('<a href="#" class="brand-logo center hide-on-large-only"><img src="assets/img/logoicon.png"></a>');
      const menuBar = $('<a href="#" data-activates="mobile-demo" class="button-collapse"><img src="assets/img/menu.png"></a>')
      // const itemsMenu = $('<ul class="side-nav" id="mobile-demo"><li><a href="sass.html">Opinión</a></li><li><a href="sass.html">Cultura</a></li><li><a href="sass.html">Tecología</a></li><li><a href="sass.html">Perú</a></li></li><li><a href="sass.html">Mundo</a></li><li><a href="#">Economía</a><li><a>Lifestyle</a><li><a>Deporte<a></li></ul>');

  $('#root').append(header);
  header.append(navContainer);
  navContainer.append(divWrapper);
  divWrapper.append(btnLeft);
  divWrapper.append(optionsdes);

  divWrapper.append(logo);
  divWrapper.append(menuBar);
  // divWrapper.append(itemsMenu);
  // return sliderIntro;
}

// FRAMEWORK
$( document ).ready(function(){
  $(".button-collapse").sideNav();
})
