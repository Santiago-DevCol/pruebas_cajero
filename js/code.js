let logButton = document.getElementById('log_in_button');
let users = [{ name: "joe", userName: "pal", password: "123", saldo: 200 }, { name: "patricia", userName: "patico", password: "321", saldo: 290 }, { name: "aldro", userName: "alda", password: "987654321", saldo: 67 }];
class cliente {
    /**La clase cliente tiene las variables de nombre, contraseña  y dinero.
     * Las funciones principales son las relacionadas a la manipulación del dinero.
     *name es de tipo string
     *password es de tipo string
     *money es de tipo double
    */
    constructor(name, user, password, money) {
        name = this.name;
        user = this.user;
        password = this.password;
        money = this.money;
    }
    get names() {
        return this.name;
    }
    get users() {
        return this.user;
    }
    get passwords() {
        return this.password;
    }
    get moneys() {
        return this.money;
    }
    set names(n) {
        this.name = n;
    }
    set users(u) {
        this.user = u;
    }
    set passwords(p) {
        this.password = p;
    }
    set moneys(m) {
        this.money = m;
    }


    addMoney(amount) {
        if (amount > 0 && amount < 990) {
            this.money += amount;
        } else if (isNaN(amount)) {
            alert("Ingresa un numero por favor");

        }
        else {
            alert("el monto esta por fuera de lo que puede añadir, por favor ingrese un monto valido");
        }

        /**La función addMoney añade dinero al saldo total del cliente
         * si el valor ingresado supera al saldo maximo, el valor del dinero no es modificado.
         */
        // let totalValue = amount + this.money;
        // if (totalValue >= 990) {
        //     console.log('el monto excede el maximo');
        // }
        // else {
        //     this.money = amount;
        // }
    }
    substractMoney(amount) {
        /**La función substractMoney retira dinero al saldo total del cliente
        * si el valor ingresado deja el saldo en negativo, el valor del dinero no es modificado.
        */
        //     if (amount > 0 && amount <= this.money) {
        //         this.money -= amount;
        //     } else {
        //         alert("el monto supera el saldo disponible");
        //     }
        // }
        let totalValue = this.money - amount;
        if (totalValue < 10) {
            alert('el monto supera el saldo');
        }
        else if (isNaN(amount)) {
            alert("Ingresa un numero por favor");

        }
        else {
            this.money = totalValue;
        }
    }
    //
}
let client = new cliente("", "", 500000);

function removeUserLog() {
    /**La función removeUserLog elimina el user_log despues de iniciar sesión */
    let userLogWindow = document.getElementById('user_login');
    userLogWindow.style.display = "none";
}
function showUserLog(){
    userWindow = document.getElementById('user_login');
    userWindow.style.display = "grid";
    /**Crear los elementos originales 
    const megaDiv = document.createElement("div");
    const primerDiv = document.createElement("div");
    const segundoDiv = document.createElement("div");
    const primerP = document.createElement("p");
    const segundoP = document.createElement("p");
    let primerInput = document.createElement("input");
    let segundoInput = document.createElement("input");
    let ingresButton = document.createElement("button");
    const ingresSpan = document.createElement("span");
    /**Añadir los ids y clases correspondientes 
    megaDiv.id = "user_log";
    megaDiv.className = "window";
    primerDiv.className = "input_logs";
    segundoDiv.className = "input_logs";
    primerInput.id = "username_input";
    segundoInput = "username_input";
    primerInput.className ="input_logs input";
    segundoInput.className ="input_logs input";
    primerP.className ="input_logs";
    segundoP.className ="input_logs";
    ingresButton.id = "log_in_button";
    ingresButton.className = "user_log_element";
    ingresButton.addEventListener("click",defineClient());
    /**Contenidos de los textos
    primerP.textContent = "username";
    segundoP.textContent = "password";
    ingresSpan.textContent = "Log In";
    /** append elements
    primerDiv.appendChild(primerP);
    primerDiv.appendChild(primerInput);
    segundoDiv.appendChild(segundoP);
    segundoDiv.appendChild(segundoInput);
    megaDiv.appendChild(primerDiv);
    megaDiv.appendChild(segundoDiv);
    ingresButton.appendChild(ingresSpan);
    megaDiv.appendChild(ingresButton);
    window.appendChild(ingresButton);
    **/
}
function testClient(use, pass) {
    /**La función testClient comprueba si el usuario y contraseña ingresados existen en un usuario
     * Las variables use y pass son variables de tipo string.
     *validate = bool , respuesta = array
     *
     */
    let validate = false;
    let respuesta = [validate, "", "", ""];
    for (i in users) {
        if (use == users[i].userName && pass == users[i].password) {
            validate = true;
            respuesta = [validate, users[i].name, users[i].userName, users[i].password, users[i].saldo];
            break;
        }
    }
    return respuesta;
}

function defineClient() {
    /**Crea un cliente al iniciar sesión */
    let mainMenu = document.getElementById('main_menu');
    let mainMenuText = document.getElementById('main_menu_text');
    let bool = false;
    let username = document.getElementById('username_input').value;
    let password = document.getElementById('password_input').value;
    username = username.toString();
    password = password.toString();
    test = testClient(username, password);
    bool = test[0];
    if (bool) {
        client.names = test[1];
        client.users = test[2];
        client.passwords = test[3];
        client.moneys = test[4];
        removeUserLog();
        mainMenu.style.display = 'block';
        mainMenuText.innerHTML = 'Hola ' + client.names + ' bienvenido al portal principal';
    }
    else {
        alert('datos incorrectos, intentelo de nuevo por favor');
    }

}
function hideButtons() {
    /**La función hideButtons tiene como objetivo esconder la pantalla de botones */
    let buttonMenu = document.getElementById("main_menu");
    buttonMenu.style.display = "none";
}

function showMenu() {
    /**La función showMenu elimina la ventana creada y muestra el menu de botones. */
    let ventana = document.getElementById('windows');
    //ventana.style.display = "none";
    ventana.remove()
    let buttonMenu = document.getElementById("main_menu");
    buttonMenu.style.display = "block";

    if (buttonMenu) {
        const volver = document.getElementById('buton-volver')
        volver.style.display = 'none'
    } else {
        console.log('no oculta volver Boton');
    }
}

function hideText() {
    const removetext = document.getElementById("window_text")
    removetext.remove();
}

function crearVentanaDeAdicion(bt, vp, ts, vi) {
    /**Las variables ingresadas son componentes del DOM, donde:
     * bt = botonTransaccion
     * vp = ventanaPrincipal
     * ts = textoSaldo
     * vi = valorIngresado
     */
    bt.id = "boton_transaccion_añadir";
    vp.appendChild(vi);
    vp.appendChild(bt);
    ts.id = "saldo_actual";
    bt.addEventListener("click", function () {
        const montoIngresado = parseFloat(vi.value);
        client.addMoney(montoIngresado);
        hideText();
        ts.textContent = "Su saldo actual es de " + (client.moneys) + " $";
    });
}
function crearVentanaTransaccion(bt, vp, ts) {
    const nombreTexto = document.createElement("p");
    const usuarioTexto = document.createElement("p");
    const dineroTexto = document.createElement("p");
    const nombreIngresado = document.createElement("input");
    const usuarioIngresado = document.createElement("input");
    const dineroIngresado = document.createElement("input");
    nombreTexto.textContent = "nombre";
    usuarioTexto.textContent = "usuario";
    dineroTexto.textContent = "dinero";
    const contenedorTransferencia = document.createElement("div");
    contenedorTransferencia.id = "contenedor_transferencia";
    nombreIngresado.className = "inputValue";
    usuarioIngresado.className = "inputValue";
    dineroIngresado.className = "inputValue";
    nombreIngresado.classList.add("input_transferencia");
    usuarioIngresado.classList.add("input_transferencia");
    dineroIngresado.classList.add("input_transferencia");
    usuarioIngresado.id = "usuario_input";
    bt.id = "boton_transaccion_transferencia";
    contenedorTransferencia.appendChild(nombreTexto);
    contenedorTransferencia.appendChild(nombreIngresado);
    contenedorTransferencia.appendChild(usuarioTexto);
    contenedorTransferencia.appendChild(usuarioIngresado);
    contenedorTransferencia.appendChild(dineroTexto);
    contenedorTransferencia.appendChild(dineroIngresado);
    vp.appendChild(contenedorTransferencia);
    vp.appendChild(bt);
    ts.id = "saldo_actual";
    bt.addEventListener("click", function () {
        /**La función transferenciaCuentas toma el nombre y usuario de la cuenta a transferir y si encuentra un match envia el dinero a la persona transferida y lo descuenta de la cuenta local
     * namesTrans y useTrans son strings
     * 
     *
     */
        const nameTrans = nombreIngresado.value;
        const useTrans = usuarioIngresado.value;
        const valorTrans = dineroIngresado.value;
        let alertaDatos = 0;
        console.log("holi");
        for (i in users) {
            if (useTrans == users[i].userName && nameTrans == users[i].name) {
                if (!isNaN(valorTrans)) {
                    const totalValue = client.moneys - parseFloat(valorTrans);
                    if (totalValue < 10) {
                        alert('el monto supera el saldo');
                    }
                    else {
                        client.substractMoney(valorTrans);
                        const dineroTotal = parseFloat(users[i].saldo) + parseFloat(valorTrans);
                        users[i].saldo = dineroTotal;
                        console.log('transferencia a ' + users[i].name + ' por un valor de ' + valorTrans);
                        console.log('el saldo de ' + users[i].name + ' es de ' + users[i].saldo);
                        ts.textContent = "Su saldo actual es de " + (client.moneys) + " $";
                        window_text.textContent = "usted ha realizado una transferencia por " + valorTrans + " a " + nameTrans;
                    }
                }
                else {
                    alert('ingrese un numero valido');
                }
                alertaDatos = 1;
                break;
            }
        }
        if (alertaDatos == 0) { alert('ingrese bien el nombre o el usuario de la persona a enviar') };
    });
}
function crearVentanaDeSubstraccion(bt, vp, ts, vi) {
    /**Las variables ingresadas son componentes del DOM, donde:
     * bt = botonTransaccion
     * vp = ventanaPrincipal
     * ts = textoSaldo
     * vi = valorIngresado
     */
    bt.id = "boton_transaccion_restar";
    vp.appendChild(vi);
    vp.appendChild(bt);
    ts.id = "saldo_actual";
    bt.addEventListener("click", function () {
        const montoIngresado = parseFloat(vi.value);
        client.substractMoney(montoIngresado);
        hideText();
        ts.textContent = "Su saldo actual es de " + (client.moneys) + " $";
    });
}
function addTransaccion(nodeTrans, valor) {
    const totalText = document.createElement('p');
    const totalNode = document.createTextNode(nodeTrans + valor);
    totalText.appendChild(totalNode);
    transferDiv.appendChild(totalText);
}

function cerrarSesion() {
    for (i in users) {
        if (users[i].userName == client.userName) {
            users[i].saldo = client.moneys;
        }
    }
    hideButtons();
    showUserLog();
    
    /**La función cerrarSesión debe
     * eliminar los valores actuales de client.
     * esconder la ventana de botones
     * mostrar la ventana de user_log
     * 
     */

}
function addSaldoWindow(valueCase) {
    /* La función addSaldoWindow crea una ventana donde dependiendo del boton pulsado se 
     *insertaran los elementos necesarios para:
     *->añadir saldo
     *->Retirar saldo
     *->consultar saldo
     */
    /*se definen los elementos principales de la ventana*/
    const ventanaPrincipal = document.createElement("div");
    const botonVolver = document.createElement("button");
    const textoPrueba = document.createElement("p");
    const textoSaldo = document.createElement("p");
    const textoBoton = document.createElement("span");
    const textoBotonVolver = document.createElement("span");
    textoBotonVolver.id = "volver_span";
    /**Crear el input que recogera los valores numericos */
    const valorIngresado = document.createElement("input");
    /**Cambiar el tipo de input para que solo acepte numeros */
    valorIngresado.type = "number";
    /**Boton transacción se refiere al boton que tomara la información del input donde se retirara o se añadira el saldo */
    const botonTransaccion = document.createElement("button");
    /** Se refiere al texto que contiene los elementos*/
    const node = document.createTextNode("Su saldo actual es de");
    const node2 = document.createTextNode(client.moneys + " $");
    const node3 = document.createTextNode("submit");
    const node4 = document.createTextNode("volver");
    /*añade los textos a los parrafos y botones */
    textoPrueba.appendChild(node);
    textoSaldo.appendChild(node2);
    textoBoton.appendChild(node3);
    textoBotonVolver.appendChild(node4);
    /**Añadir el boton */
    botonTransaccion.appendChild(textoBoton);
    botonVolver.appendChild(textoBotonVolver);
    //

    /**Añadir las clases y id de los objetos de la ventana. (Muy importante los id= valor ingresada y boton_transaccion) */
    ventanaPrincipal.className = "window";
    ventanaPrincipal.id = "windows";
    botonVolver.id = "boton_volver";
    valorIngresado.className = "inputValue";
    textoPrueba.id = "window_text";
    textoBoton.id = "window_span";
    valorIngresado.id = "dinero_ingresado";
    /**IMPORTANTE Añadir id y utilizarlo en una función */
    /**Finalmente añade los elementos */
    body = document.getElementById('main_window');
    body.appendChild(ventanaPrincipal);
    /**Si el valor es igual a uno se añade el input al html */
    switch (valueCase) {
        /**Según el valor de la función se crean modificaciones a las ventanas correspondientes */
        case 0:
            break;
        case 1:
            crearVentanaDeAdicion(botonTransaccion, ventanaPrincipal, textoSaldo, valorIngresado);
            break;
        case 2:
            crearVentanaDeSubstraccion(botonTransaccion, ventanaPrincipal, textoSaldo, valorIngresado);
            break;
        case 3:
            crearVentanaTransaccion(botonTransaccion, ventanaPrincipal, textoSaldo, valorIngresado);
            break;
    }
    ventanaPrincipal.appendChild(textoPrueba);
    ventanaPrincipal.appendChild(textoSaldo);
    ventanaPrincipal.appendChild(botonVolver);
    /**Boton de devolverse a la ventana principal */
    botonVolver.addEventListener("click", function () {
        let ventana = document.getElementById('windows');
        //ventana.style.display = "none";
        ventana.remove();
        let buttonMenu = document.getElementById("main_menu");
        buttonMenu.style.display = "block"; 
    });
    /*esconde la ventana de los botones userWindow.style.display = 'grid';*/
    hideButtons();
    //w
}

/**Lo que sigue es asignar una id a los elementos añadidos y crear dos funciones que utilicen las funciones addMoney(value) y substractMoney(value) de la clase client */
/** Añadir la colección de transacciones*/
/**Si queda tiempo utilizar bien el json para poder crear una base de datos de mentiras*/