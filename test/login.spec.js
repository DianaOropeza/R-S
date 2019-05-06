<<<<<<< HEAD
// Configurando Firebase Mock
const firebasemock = require('firebase-mock');
const mockauth = new firebasemock.MockFirebase();
const mockprovider = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();
mockfirestore.autoFlush();
mockprovider.autoFlush();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // Use nulo si su código no usa RTDB
  path => (path ? mockdatabase.child(path) : null),
  () => mockauth,
  () => mockprovider,
  () => mockfirestore
);

// iniciando Tests
import { signIn, signInGoogle, signInFacebook, signUp, singOut } from "../src/controller/controller-firebase.js";

describe('signIn', () => {
  it('debería ser una función para Autentificaciòn de Email y Password', () => {
    expect(typeof signIn).toBe('function');
  })
});

describe('signInGoogle', () => {
  it('debería ser una función para Autentificaciòn de Google', () => {
    expect(typeof signInGoogle).toBe('function');
  })
});

describe('signInFacebook', () => {
  it('debería ser una función para Autentificaciòn de Facebook', () => {
    expect(typeof signInFacebook).toBe('function');
  })
});

describe('signUp', () => {
  it('debería ser una función para Crear Cuenta', () => {
    expect(typeof signUp).toBe('function');
  })
});

describe('singOut', () => {
  it('debería ser una función para Cerrar Sesiòn', () => {
    expect(typeof singOut).toBe('function');
  })
});

describe('Drama Fever', () => {
  it('Debería poder iniciar sesion con Usuario y Password', () => {
    return signIn('admin@dramafever.com.pe', '123456')
      .then((user) => {
        expect(user.email).toBe('admin@dramafever.com.pe')
      })
  })
});

describe('signInGoogle', () => {
  it('Debería poder iniciar sesion con una Cuenta de Google', () => {
    return signInGoogle()
      .then(() => {
        const user = firebase.auth().currentUser;
        expect(user).not.toBe(null);
      })
  })
});
describe('signInFacebook', () => {
  it('Debería poder iniciar sesion con una Cuenta de Facebook', () => {
    return signInFacebook()
      .then(() => {
        const user = firebase.auth().currentUser;
        expect(user).not.toBe(null);
      })
  })
});

describe('Drama Fever', () => {
  it('Debería poder Crear Cuenta', () => {
    return signUp('admin@dramafever.com.pe', '123456')
      .then((user) => {
        expect(user.email).toBe('admin@dramafever.com.pe')
      })
  })
})
=======
/*
// importamto el mock 
 import MockFirebase from '../_mocks_/firebase-mocks.js'
 global.firebase = MockFirebase()  // de manera global ,que toda las declaracion e de firebase van ser remplasados por el mock
*/

// configurando firebase mock
const firebasemock = require('firebase-mock');
const mockauth = new firebasemock.MockFirebase();
const mockfirestore = new firebasemock.MockFirestore();

mockfirestore.autoFlush();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
	// use null if your code does not use RTDB
	path => (path ? mockdatabase.child(path) : null),
	() => mockauth,
	() => mockfirestore
);

import { signUp, signIn, signInGoogle, signInFacebook ,signOut } from "../src/controller/controller-firebase.js";

describe('SignUp', () => { 
    it('Deberia ser una funcion:', ()=>{
		expect(typeof signUp).toBe('function')
		});
		
		it('Debería poder iniciar sesion', () => {
			return signUp('admin@dramafever.com.pe', '123456')
				.then((user) => {
					expect(user.email).toBe('admin@dramafever.com.pe')
				})
		});
});

describe('SignIn', () => {
	it('Deberia ser una funcion:', () => {
		expect(typeof signIn).toBe('function')
	});

	it('Debería poder iniciar sesion', () => {
		return signIn('admin@dramafever.com.pe', '123456')
			.then((user) => {
				expect(user.email).toBe('admin@dramafever.com.pe')
			})
	});
});

describe('SignInGoogle', () => {
	it('Deberia ser una funcion:', () => {
		expect(typeof signInGoogle).toBe('function')
	});

	it('Debería poder iniciar sesion con una Cuenta de Google', () => {
		return signInGoogle('admin@gmail.com', '123456')
			.then((user) => {
				expect(user.email).toBe();
			})
	})
});

describe('SignInFacebook', () => {
	it('Deberia ser una funcion:', () => {
		expect(typeof signInFacebook).toBe('function');
	});

	it('Debería poder iniciar sesion con una Cuenta de Facebook', () => {
		return signInFacebook('admin@hotmail.com', '123456')
			.then((user) => {
				expect(user.email).toBe();
			})
	})
});

describe('SignOut', () => {
	it('Deberia ser una funcion:', () => {
		expect(typeof signOut).toBe('function')
	});

	it('Debería poder Cerrar Sesion', () => {
		return signOut()
			.then(() => {
				expect().toBe();
			})
	})
});
>>>>>>> 2d260a0287aa20b223bfd21e3304c4ac3cfcb543
