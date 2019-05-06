<<<<<<< HEAD
// aqui exportaras las funciones que necesites
import {singOutLogin,addNotes,removeNotes, EditNotes} from '../controller/view-controller.js'
import {readNotes} from '../controller/controller-firebase.js'

export default () => {
  const form = document.createElement('div');
  const formCont=`  
  <button id= "btnsingOut">Cerrar Sesion</button>
  <input type="text" id="post"/>
  <button id= "savePost">Guardar</button>
  <p id="newPost"></p>
  <p id="id-contenedorPublicaciones" class= "contenedor-publicaciones"></p>
  `;
form.innerHTML=formCont;

const btnSingOut = form.querySelector('#btnsingOut');
btnSingOut.addEventListener('click',singOutLogin);

const btnGuardaPost = form.querySelector('#savePost');
btnGuardaPost.addEventListener('click',addNotes);
readNotes(templatePost);

return form;}

export const templatePost = (data) =>{
   let listPost='';
   data.forEach((doc)=>{
     const containerPost=`
     <div>
            <p >${doc.id}</p>
            <p >${doc.name}</p> 
            <textarea id='btn-${doc.id}' readonly>${doc.note}</textarea>
            <button type="button" id='${doc.id}' class="remove">Eliminar</button>
            <button type="button" id='btnEditar-${doc.id}' class='edit' >Editar</button>
        </div>
     `;
     listPost+=containerPost;
   });
   const contenedorPublicaciones = document.getElementById('id-contenedorPublicaciones');
    contenedorPublicaciones.innerHTML = listPost;
 
    [...document.getElementsByClassName('remove')].forEach((btnRemove)=>{ console.log(btnRemove);
    btnRemove.addEventListener('click',removeNotes)});
    console.log([...document.getElementsByClassName('remove')]);

    [...document.getElementsByClassName('edit')].forEach((e)=>{ console.log(e);
      e.addEventListener('click',EditNotes);
    })
    
}

/*export default () => {
  const form = document.createElement('div');
  const formContent = `
          <div>
          <header>
          <img src="img/logo1.png" class="title">
              <nav class="header-nav">
                <ul>
                  <li> <i class="fa fa-home"></i></li>
                  <li> <i class="fa fa-users"></i></li>
                  <li> <i class="fa fa-user-edit"></i> </li>
                  <li> <i class="fa fa-cog"></i></li>
                  <li> <i class="fa fa-sign-in-alt"></i></li>
                </ul> 
              </nav>
            </header>
            <div class="page-content">
            <div class="timeline">
              <div class="timeline-component">
                <div class="timeline-component-header">
                  <div class="timeline-component-header-img1">
                </div>
              </div>
                <div class="timeline-component-interact">
                  <div class="thumb-up-container">
                <div class="timeline-component-content1">
                LESLI ZARATE
                </div>
              <div class="timeline-component-content1">
                Front End Developer Master
                </div>      
                  <div class="thumb-up-container">
                    <i class="fa fa-user-edit"></i>Ok</div>
                </div>    
              </div>
            </div>
            </div>
          </div>
            <div class="page-content">
            <div class="timeline">
              <div class="timeline-component">
                <div class="timeline-component-header">
                  <div class="timeline-component-header-img">
                </div>
                  <div class="timeline-component-header-name">
                    Leslie
                  </div>
                  <div class="timeline-component-header-more">
                    <i class="fas fa-ellipsis-h"></i>
                  </div>
              </div>
                <div class="timeline-component-content">
                Por si aún no sabes qué es un dorama, ¡no te preocupes! Son series de televisión asiáticas que se emiten desde los sesenta y que en estos últimos años se han popularizado, enamorando a todo Internet con sus increíbles y originales historias, las cuales a veces quisiéramos que fueran reales. Si aún no has visto alguna, o si ya eres toda una doramática, te presentamos 25 opciones para que disfrutes de un fin de semana muy oriental. No olvides tener pañuelos a la mano porque el drama es su especialidad.
                </div>
                <div class="timeline-component-interact">
                  <div class="thumb-up-container">
                    <i class="fas fa-thumbs-up"></i>2</div>
                  <input type="text" placeholder="Comment..." id="comment-container">
                      <div class="msgSend"><i class="fas fa-paper-plane"></i>
                </div>
                </div>
              </div>
                    <div class="timeline-component">
                <div class="timeline-component-header">
                  <div class="timeline-component-header-img">
                </div>
                  <div class="timeline-component-header-name">
                    Diana
                  </div>
                    <div class="timeline-component-header-more">
                    <i class="fas fa-ellipsis-h"></i>
                  </div>
              </div>
                <div class="timeline-component-content">
                Do Min Joon es un extraterrestre con forma humana que llegó a la tierra hace 400 años durante la dinastía Chosun. Mientras vivía alrededor de especies humanas inferiores, Min Do siempre ha sido indiferente con sus vecinos humanos. Pero en la Corea de hoy en día, Min Do conoce a la gran actriz Cheon Song Yi y se enamora de ella. ¿Podrá una pareja de especies diferentes tener un futuro juntos?. Por eso tienes que ver el Dorama "Mi amor de las Estrellas".
                </div>
                <div class="timeline-component-interact">
                  <div class="thumb-up-container">
                    <i class="fas fa-thumbs-up"></i>10</div>
                  <input type="text" placeholder="Comment..." id="comment-container">
                    <div class="msgSend"><i class="fas fa-paper-plane"></i>
                </div>
                </div>
              </div>
              </div>
              </div>
            </div>
            `;

  form.innerHTML = formContent
  return form 
}*/
=======
import Posts from "./posts.js"

export default () => {
  const main = document.createElement('main');
  const mainContent = `
  <div class="container-home p1 ">
  <!-- SECCION PERFIL -->
  <section class="profile-content m1 p2">
				<div class="perfil-user m1 p2">
					<img alt ='photo-perfil' src="img/logo1.png" class="m1">
				<h2>nombre user</h2>
				</div>				
  </section>	
  <!-- SECCION POST -->
  </div>
 `;

      
  main.innerHTML = mainContent;

  const containerHome = main.querySelector('.container-home')
  containerHome.appendChild(Posts());
  
 
  return main
  ;
}
>>>>>>> 2d260a0287aa20b223bfd21e3304c4ac3cfcb543
