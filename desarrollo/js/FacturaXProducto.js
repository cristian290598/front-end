const onInit = () => {

   
    
    var resProductos = $.ajax({
        type: "GET",
        url: "https://localhost:44377/api/Producto",
        contentType: "application/json",
    });

    var resFacturas= $.ajax({
        type: "GET",
        url: "https://localhost:44377/api/Factura",
        contentType: "application/json",
    });

    
    resProductos.done((productos) => {
        productos.forEach(producto => {
            var newOption = document.createElement("option");
            newOption.value = producto.id;
            newOption.innerHTML = producto.nombre;
            $("#producto").append(newOption);


            
        });
    })
    resFacturas.done((facturas) => {
        
        facturas.forEach(factura => {
            var newOption = document.createElement("option");
            newOption.value = factura.id;
            
            $("#factura").append(newOption);
        });
    })
}
const crearValorxCantProducto = () => {
    const form = document.getElementById('FacturaXproducto');
    const producXfactObj = {
        cantidad: parseFloat(form.Cantidad.value),
        valorCantXPrecio: parseFloat(form.ValorCantidadXprecio.value),
        Id_producto: form.productos.value,
        Id_factura:  form.facturas.value
    }
    ;

    $.ajax({
        type: "POST", 
        url: "https://localhost:44377/api/FacturaXProducto",
        crossDomain: true,
        contentType: "application/json",
        data: JSON.stringify(producXfactObj), 
        success: function (datos) { 
            console.log(datos)
        },
       error: function(error){
           console.log(error)
       }
    });
}






$(document).ready(onInit());