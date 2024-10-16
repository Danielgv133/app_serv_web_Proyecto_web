async function Ejecutar(metodo, funcion) {

    reserva = new Reserva($("#txtidreserva").val(), $("#txtfecha_reserva").val(), $("#txtidcliente").val(), $("#txtidempleado").val());
    // oe , cambiar el https por el de nuestro api
    let URL = "https://localhost:44321/api/Clientes/" + funcion;
    Comandos(metodo, URL, reserva);
}

async function Consultar() {

    let  Documento = document.getElementById("txtidreserva").value;
    // oe , cambiar el https por el de nuestro api
    let URL = "https://localhost:44321/api/Clientes/Consultar?documento=" + Documento;

    const reserva = await ConsultarServicio(URL);

    if (reserva != null) {
        $("#txtidreserva").val(cliente.Idreserva);
        $("#txtfecha_reserva").val(fecha_Reserva);
        $("#txtidcliente").val(cliente.IdCliente);
        $("#txtidempleado").val(cliente.IdEmpleado);

    }
    else {
        $("#dvMensaje").html("Los datos de ingreso con ese documento no existen");
    }
}




class Reserva {
    constructor(Idreserva, fecha_Reserva, Cliente, Empleado) {

        this.Idreserva = Idreserva;
        this.fecha_Reserva = fecha_Reserva;
        this.IdCliente = IdCliente;
        this.IdEmpleado = IdEmpleado;



    }
}


