//(funcion)(){
    var formulario = document.getElementById('formulario'),
		nombre = formulario.nombre,
        correo = formulario.correo,
        producto = formulario.producto,
        direccion = formulario.direccion,
        cp = formulario.cp,
        celular = formulario.celular,
        terminos = formulario.terminos,
        
        
        error = document.getElementById('error');
        
function validarNombre(e){
    if(nombre.value == '' || nombre == null){
        console.log('Completa el nombre');
        error.style.display = 'block';
        error.innerHTML = error.innerHTML + '<li>Ingresa el Nombre</li>';
        e.preventDefault();
}else{
    error.style.display='none';
}
}

function validarCorreo(e){
     if(correo.value == '' || correo == null){
        console.log('Completa el correo');
        error.style.display = 'block';
        error.innerHTML = error.innerHTML + '<li>Ingresa el Email</li>';
        e.preventDefault();
}else{
    error.style.display='none';
}
}


function validarProducto(e){
    if(producto.value == '' || producto.value == null){
        console.log('Selecciona el Producto');
        error.style.display = 'block';
        error.innerHTML = error.innerHTML + '<li>Selecciona el Producto</li>';
        e.preventDefault();
    }else{
    error.style.display='none';
}
}

function validarDireccion(e){
    if(direccion.value == '' || direccion == null){
       console.log('Completa la direccion');
       error.style.display = 'block';
       error.innerHTML = error.innerHTML + '<li>Ingresa la Direccion</li>';
       e.preventDefault();
}else{
   error.style.display='none';
}
}

function validarCp(e){
    if(cp.value == '' || cp == null){
       console.log('Completa el codigo postal');
       error.style.display = 'block';
       error.innerHTML = error.innerHTML + '<li>Ingresa el Codigo Postal</li>';
       e.preventDefault();
}else{
   error.style.display='none';
}
}

function validarCelular(e){
    if(celular.value == '' || celular == null){
       console.log('Completa tu numero');
       error.style.display = 'block';
       error.innerHTML = error.innerHTML + '<li>Ingresa el Num.Celular</li>';
       e.preventDefault();
}else{
   error.style.display='none';
}
}

function validarTerminos(e){
    if(terminos.checked == false){
        console.log('Acepta Los Terminos');
        error.style.display = 'block';
        error.innerHTML = error.innerHTML + '<li>Acepta Los Terminos</li>';
        e.preventDefault();
    }else if(nombre.value == '' || nombre == null ||correo.value == '' || correo == null || producto.value == '' || producto.value == null ||direccion.value == '' || direccion == null ||cp.value == '' || cp == null ||celular.value == '' || celular == null){
    error.style.display='block';
}
}

function validarForm(e){
   error.innerHTML = '';
   error.style.display = 'block';
   validarNombre(e);
   validarCorreo(e);
   validarProducto(e);
   validarDireccion(e);
   validarCp(e);
   validarCelular(e);
   validarTerminos(e);
}
formulario.addEventListener('submit', validarForm);

//}())