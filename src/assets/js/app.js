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
$(_ =>{
  $.getJSON('http://localhost:3000/api/news/',(data)=>{
    console.log(data);
    // console.log(data.results[0].name.first);
    // console.log(data.results[0].gender);
    // console.log(data.results[0].location.city);
    // console.log(data.results[0].email);
    // console.log(data.results[0].cell);
    // console.log(data.results[0].picture.large);
  });
});
