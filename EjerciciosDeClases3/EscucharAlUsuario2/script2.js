// 2- Crear un HTML que tenga un formulario con un input y un p debajo. 
// cada vez que el usuario escriba en el input, se deberá 
// actualizar el p con el valor que va escribiendo. En este caso 
// tendremos que usar el evento keypress de los inputs (editado) 


// 1.- escuchar al submit del formulario
    document.querySelector('.form_container').addEventListener('keyup', e =>{
       // el keyup coje al input donde este escribiendo en ese momento
       // el keyup es un evente del input, no del formulario, solo del input

       
        const ElementInput = e.target;// con target obtengo el formulario


        //obtengo la etiqueta donde ira el texto que introduje en el input de tipo text
        let parrafoAct = document.querySelector('.Texto_actualizado');
        

 

        parrafoAct.textContent = ElementInput.value;



    });