function carga() {
    let quien = ['El gato','Mi hijo','Un León','Una vaca'];
    let accion = ['se comió','mordió','se tragó','atrapó'];
    let que = ['mi tarea', 'la puerta', 'la bicicleta'];
    let donde = ['ates de salir de casa','en el momento que venía','antes de volver','mientras estaba comiendo'];



    let randomQuien = quien[Math.floor(Math.random()*quien.length)];
    let randomAccion = accion[Math.floor(Math.random()*accion.length)];
    let randomQue = que[Math.floor(Math.random()*que.length)];
    let randomDonde = donde[Math.floor(Math.random()*donde.length)];

    let excusa = randomQuien.concat(" ",randomAccion," ",randomQue," ",randomDonde);
        
    document.getElementById("excusa").innerHTML = excusa;
}