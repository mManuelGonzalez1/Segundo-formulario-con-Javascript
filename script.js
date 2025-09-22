//Expresion regular email 
 emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
 regexp_password = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}/;
//Seleccion de los elementos 
const nombre=document.getElementById("name");
const apellido=document.getElementById("lastname");
const correo=document.getElementById("email");
const contraseña=document.getElementById("password");
const boton=document.getElementById("button");
const formulario=document.getElementById("formulario");

//Creacion de las etiquetas de error
const aviso=document.createElement("P");
aviso.classList.add("Warning");
aviso.id="Warning"
aviso.textContent="First Name cannot be empty"

const avisoL=document.createElement("P");
avisoL.classList.add("Warning");
avisoL.textContent="Last name cannot be empty"

const avisoE=document.createElement("P");
avisoE.classList.add("Warning");
avisoE.textContent="Looks like this is not an email"

const avisoP=document.createElement("P");
avisoP.classList.add("Warning");
avisoP.textContent="Password cannot be empty"


//Funcion de escuchador con boton 
boton.addEventListener("click",(e)=>{
     e.preventDefault(); 

     if (nombre.value===""){
        nombre.classList.toggle("ERROR");
        nombre.after(aviso);
     }
     if(apellido.value===""){
        apellido.classList.toggle("ERROR");
        apellido.after(avisoL);
     }
      if(!emailRegex.test(correo.value)){
         correo.classList.toggle("ERROR");
         correo.after(avisoE);
     }
      if(!regexp_password.test(contraseña.value)){
        contraseña.classList.toggle("ERROR");
         contraseña.after(avisoP);
     }

    //Funcion que se ejecuta a los 5 segundos
    setTimeout(()=>
        {nombre.classList.remove("ERROR");
        apellido.classList.remove("ERROR");
        contraseña.classList.remove("ERROR");
        correo.classList.remove("ERROR");

         aviso.remove()
         avisoL.remove()
         avisoE.remove()
         avisoP.remove()
        }
    ,5000)    
})