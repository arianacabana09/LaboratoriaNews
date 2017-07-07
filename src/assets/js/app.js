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
  const navContainer = $('<nav></nav>');
    const divWrapper = $('<div class="nav-wrapper"></div>');
      const btnLeft = $('<ul class="left hide-on-med-and-down"><li><a href="#"><img src="assets/img/menu.png">section</a></li><li><a href="#"><img src="assets/img/search.png">search</a></li></ul>');
      const optionsdes = $('<ul class="right hide-on-med-and-down"><li><a href="https://www.facebook.com/laboratoria.la/" target="_blank"><img src="assets/img/fb.png"></a></li><li><a href="https://twitter.com/LaboratoriaLA" target="_blank"><img src="assets/img/tw.png"></a></li><li><a href="https://www.linkedin.com/company-beta/3718820/" target="_blank"><img src="assets/img/in.png"></a></li></ul>');
    //
    // <div class="nav-wrapper">
    //   <a href="#!" class="brand-logo">Logo</a>
    //   <a href="#" data-activates="mobile-demo" class="button-collapse"><i class="material-icons">menu</i></a>






    //   <ul class="right hide-on-med-and-down">
    //     <li><a href="sass.html">desktop</a></li>
    //     <li><a href="badges.html">Components</a></li>
    //     <li><a href="collapsible.html">Javascript</a></li>
    //     <li><a href="mobile.html">Mobile</a></li>
    //   </ul>

    //   <ul class="side-nav" id="mobile-demo">
    //     <li><a href="sass.html">mobileeee</a></li>
    //     <li><a href="badges.html">Components</a></li>
    //     <li><a href="collapsible.html">Javascript</a></li>
    //     <li><a href="mobile.html">Mobile</a></li>
    //   </ul>

    // </div>


  $('#root').append(header);
  header.append(navContainer);
  navContainer.append(divWrapper);
  divWrapper.append(btnLeft);
  divWrapper.append(optionsdes);
  // return sliderIntro;
}

// FRAMEWORK
$( document ).ready(function(){
  $(".button-collapse").sideNav();
})
