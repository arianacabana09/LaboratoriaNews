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

// HOME

const Home = (update) =>{
  const sliderIntro = $('<div>holaaaa</div>');
  $('#root').append(sliderIntro);
  // return sliderIntro;
}
