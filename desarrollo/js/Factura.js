
const crearFactura = ()=>{
    const form= document.getElementById('form-factura');
    const facturaObj = {
        valor: parseFloat(form.Valor.value) ,
        iva:  parseFloat(form.Iva.value)   
    };
    console.log(facturaObj);

    $.ajax({
        type: "POST",
        url:"https://localhost:44312/api/Factura",
        contentType: "application/json",
        data: JSON.stringify(facturaObj),
        succes:function(respuesta){
            console.log(respuesta);
        },
        error:function(error){
            console.log("no hay datos");
        }
    });

}
