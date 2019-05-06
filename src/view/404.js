<<<<<<< HEAD
export default () => {
    const viewDifferent = `
            <h2>404</h2>
            <h1>Página no encontrada</h1>
            <p>El archivo especificado no se encontró en este sitio web. Por favor, compruebe la URL para errores y vuelva a intentarlo.</p>
          `;

    const divElemt = document.createElement('div');
    divElemt.setAttribute('id', 'message');
    divElemt.innerHTML = viewDifferent;
    return divElemt;
=======
export default () => {

  const divElemt = document.createElement('div');
  const viewDifferent = `
          <div>          
            <h2>404</h2>
            <h1>Página no encontrada</h1>
            <p>El archivo especificado no se encontró en este sitio web. Por favor, compruebe la URL para errores y vuelva a intentarlo.</p>
          </div>
          `;
           
    divElemt.setAttribute('id', 'message');
    divElemt.innerHTML = viewDifferent;

    return divElemt;
>>>>>>> 2d260a0287aa20b223bfd21e3304c4ac3cfcb543
};