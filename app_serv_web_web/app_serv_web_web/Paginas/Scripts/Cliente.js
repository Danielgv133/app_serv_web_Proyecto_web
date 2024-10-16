async function Ejecutar(metodo, funcion) {

    cliente = new Cliente($("#txtidcliente").val(), $("#txtnombre").val(), $("#txtapellido").val(), $("#txttelefono").val(), $("#txtcorreo").val(), $("#txtdireccion").val(),);
    // oe , cambiar el https por el de nuestro api
    let URL = "https://localhost:44321/api/Clientes/" + funcion;
    Comandos(metodo, URL, cliente);

}

async function Consultar() {

    let Documento = document.getElementById("txtidcliente").value;
    // oe , cambiar el https por el de nuestro api
    let URL = "https://localhost:44321/api/Clientes/Consultar?documento=" + Documento;

    const cliente = await ConsultarServicio(URL);

    if (cliente != null) {
        $("#txtidreserva").val(cliente.idCliente);
        $("#txtnombre").val(cliente.Nombre);
        $("#txtapellido").val(cliente.Apellido);
        $("#txttelefono").val(cliente.Telefono);
        $("#txtcorreo").val(cliente.Correo);
        $("#txtdireccion").val(cliente.Direccion);

    }
    else {
        $("#dvMensaje").html("Los datos de ingreso con ese documento no existen");
    }
}



class Cliente {
    constructor(idCliente, Nombre, Apellido, Telefono, Correo, Direccion) {

        this.idCliente = idCliente;
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.Telefono = Telefono;
        this.Correo = Correo;
        this.Direccion = Direccion; idCliente


    }
}


