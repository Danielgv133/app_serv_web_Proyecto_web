async function Ejecutar(metodo, funcion) {

    empleado = new Empleado($("#txtidempleado").val(), $("#txtnombre").val(), $("#txtapellido").val(), $("#txttelefono").val(), $("#txtcorreo").val(), $("#txtdireccion").val(),);
    // oe , cambiar el https por el de nuestro api
    let URL = "https://localhost:44321/api/Clientes/" + funcion;
    Comandos(metodo, URL, empleado);

}

async function Consultar() {

    let Documento = document.getElementById("txtidempleado").value;
    // oe , cambiar el https por el de nuestro api
    let URL = "https://localhost:44321/api/Clientes/Consultar?documento=" + Documento;

    const empleado = await ConsultarServicio(URL);

    if (empleado != null) {
        $("#txtidempleado").val(cliente.idEmpleado);
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



class Empleado {
    constructor(idEmpleado, Nombre, Apellido, Telefono, Correo, Direccion) {

        this.idEmpleado = idEmpleado;
        this.Nombre = Nombre;
        this.Apellido = Apellido;
        this.Telefono = Telefono;
        this.Correo = Correo;
        this.Direccion = Direccion;


    }
}


