let $botonregistrarte = document.querySelector("#botonregistrarte");

$botonregistrarte.onclick = function(){
    
    let $nombreApellido = document.querySelector(".nombreapellido").value;
    let $correocontraseña = document.querySelector(".correocontraseña").value
    
    if($nombreApellido.length === 0){
        document.querySelector(".nombreapellido").className = "error"; 
        document.querySelector(".nombreapellido").className = "error"; 
    
    }else if($correocontraseña.length === 0){
        document.querySelector(".correocontraseña").className = "error2";
        document.querySelector(".correocontraseña").className = "error2";
    
    }else if(!/^[a-z]+$/i.test($nombreApellido) && /^[a-z0-9\.]+$/i.test($correocontraseña)){
        console.log("Los caracteres utilizados no son correctos");
    
    }else{
        console.log("Registro existoso!");
    };

};



// FUNCIONA PERO HAY QUE HACERLO TODO DE NUEVO MUCHO OMAS PROLIJO!!!!!!!!!!!!!!!!!!!!!!!!!