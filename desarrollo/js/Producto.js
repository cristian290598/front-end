
const crearProducto = ()=>{
    const form= document.getElementById('form-producto');
    const productoObj = {
        nombre: form.nombreProducto.value,
        cantidadXmayor: parseFloat(form.cantidadXMayor.value), 
        precio: parseFloat(form.Precio.value)   
    };
    console.log(productoObj);

    $.ajax({
        type: "POST",
        url:"https://localhost:44312/api/Producto",
        contentType: "application/json",
        data: JSON.stringify(productoObj),
        succes:function(respuesta){
            console.log(respuesta);
        },
        error:function(error){
            console.log("no hay datos");
        }
    });

}


