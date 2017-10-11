function alcerrar(){
	//return "Está a punto de cerrar esta página...";
}
function Cargando(){
    document.getElementById("imgCargando").style.display = '';
    //document.getElementById('body').style.overflow = 'hidden';
    document.getElementById('bloqueo').style.display = 'none'; 
}
function NoCargando(){
    document.getElementById("imgCargando").style.display = 'none';
    //document.getElementById('body').style.overflow="scroll"; 
    document.getElementById('bloqueo').style.display =''; 
}