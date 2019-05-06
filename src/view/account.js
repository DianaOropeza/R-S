<<<<<<< HEAD
import{signUpSubmit} from "../controller/view-controller.js"

export default ()=>{
    const form = document.createElement('div');
    const formContent = `
    <div class="container">
		<section class="img-page p1 m1 h7">
			<div class="intro">
				<img src="img/intro.png">
			</div>		
		</section>
		<section class="main m1 h7 p1">
			<article>
				<div class="register-login p2">
					<div class="center-content">
						<img alt ='logo' src="img/logo1.png" class="img-logo">
					</div>				
					<h2> Regístrate </h2>				
					<form id="form" class="form-login">
						<div class="form-group">
							<label  for="name">Nombre</label>
							<input class="form-control" id="name" type="text" placeholder="Ingresa tu nombre"/>
						</div>
						<div class="form-group">
							<label  for="email">Email</label>
							<input class="form-control" id="email" type="email" placeholder="Ingresa tu email"/>
						</div>
						<div class="form-group">
							<label for="password">Password</label>
							<input class="form-control" id="password" type="password" placeholder="Ingresa tu contraseña"/>
						</div>
						<div class="form-group">
								<button id="btn-singUp" type="submit">Registrar</button>
						</div>                  
					</form>					
				</div>
			</article>
		</section>
	</div>

    `;

    form.innerHTML = formContent;

    const btnSignUp = form.querySelector('#btn-singUp')
    btnSignUp.addEventListener('click',signUpSubmit);


    return form;
=======
import{signUpSubmit} from "../view-controller.js"

export default ()=>{
    const form = document.createElement('div');
    const formContent = `
    <div class="container p1">
			<section class="img-content center-content m1 p2 ">
				<img src="img/intro.png">
			</section>
			<section class="forms-content  m1 p2 ">
				<article class="register-login p4 ">
					<img alt ='logo' src="img/logo1.png" class="img-logo">
					<h2> Registrate </h2>				
					<form>
						<div class="form-group">
								<label  for="name">Nombre</label>
								<input class="form-control" id="name" type="text" placeholder="Ingresa tu nombre"/>
							</div>
							<div class="form-group">
								<label  for="email">Email</label>
								<input class="form-control" id="email" type="email" placeholder="Ingresa tu email"/>
							</div>
							<div class="form-group">
								<label for="password">Password</label>
								<input class="form-control" id="password" type="password" placeholder="Ingresa tu contraseña"/>
							</div>
							<div class="form-group">
									<button id="btn-singUp" type="submit">Registrar</button>
							</div>                
					</form>
				</article> 
			</section>
		</div>  `;

    form.innerHTML = formContent;
    const btnSignUp = form.querySelector('#btn-singUp')
    btnSignUp.addEventListener('click',signUpSubmit);
    return form;
>>>>>>> 2d260a0287aa20b223bfd21e3304c4ac3cfcb543
}