1.- Escribir un programa en NodeJs que recibirá parámetros de entrada. El programa debe contar cuantos argumentos se han introducido y por salida estándar mostrar: "Input params quantity: <x>"

2.-Escribir un programa en NodeJs que reciba por parámetros una cantidad de números (mínimo 2) y mostrara por consola la suma de todos los números.

3.- Escribir un programa en NodeJs que reciba 3 parámetros de entrada. Los dos primeros serán números y el tercero un string que puede ser "suma", "resta", "multiplica" o "divide". Dependiendo del valor de tercer parámetro el programa realizará la operación correspondiente y mostrara por consola:
	"La <opearacion> de <num1> y <num2> es <resultado>"

4.- Escribir un programa en NodeJs que muestre al usuario por consola un menu de opciones:
	1:Sumar
	2:Restar
	3:Multiplicar
	4:Dividir
	0:Salir
	------------
	Selecciona:
Cuando el usuario elija una opción se le preguntara:
	"Introduce el primer numero:"
	"Introduce el segundo numero:"
Acto seguido el programa mostrara el resultado de la operación de forma optima y volverá a mostrar el menu para permitir mas operaciones.
Si el usuario elige la opción de salir deberemos cerrar el programa.

5.- Escribir un programa en NodeJs que muestre por consola lo siguiente:
	1:Menu cohete
	2:Menu cargas
	3:Informacion general
	0:Salir
	
	El menu cohete/cargas mostrara:
	1: crear cohete/carga
	2: borrar cohete/carga
	3: Listar cohetes/carga
	0: Menu principal.

	Al crear cohete debemos solicitar al usuario nombre y cargaMaxima y guardaremos la información del cohete creando un campo por defecto inicializado a 0 que represente la "cargaActual"

	Al crear carga debemos solicitar al usuario tipoCarga, peso y cohete e inicializaremos un campo "coheteAsignado" a null. El cohete debe corresponder con un nombre de cohete existente, ademas se verifica que el peso de la carga puede ser cargado por el cohete y se actualizara la cargaActual de este en caso positivo ademas de actualizar el campo "coheteAsignado" con el nombredel cohete. En caso negativo se le indica al usuario que el cohete no puede llevar la carga y que elija otro o lo cree si no hay mas. En caso de que el cohete no exista se le indicara al usuario que no existe un cohete con ese nombre y que lo intente de nuevo, mostrando de nuevo la opción de introducir nombre.

	Al seleccionar información general se le presentara al usuario un resumen general de la información en el sistema en ese momento de un modo similar al siguiente:

	COHETES:
	***********
	nombre: Falcon 9
	carga maxima: 140000 kg
	carga actual: 23000 kg
	--------------------------
	otro cohete...

	::::::::::::::::::::::::::::::
	CARGAS:
	*********
	tipo de carga: pirita
	peso: 23000 kg
	cohete portador: Falcon 9
	----------------------------
	otra carga...

NIVEL LEYENDA:
	Simulando un gestor de envío de cargas a la estación espacial internacional, debemos asignar a cada cohete un "tiempoViaje" que sera el tiempo que tarda el cohete en llegar a la ISS en días.
	Cuando vayamos a introducir una carga en vez de solicitar el nombre del cohete debemos solicitar el tiempo de entrega esperado en días y el sistema debe asignar la carga de forma automática al primer cohete que cuente con capacidad de carga suficiente y pueda cumplir la entrega en tiempo.
	Los cohetes tendrán 2 estados "cargando" o "navegando" y solo podrán recibir cargas los cohetes en estado cargando. (El usuario no puede modificar este valor)
	Cuando un cohete llegue a una capacidad del 90% de su carga maxima deberá pasar automáticamente a estado navegando y se mostrará al usuario por pantalla el mensaje "El cohete Falcon 9 esta cargado con 126001 kg de carga y preparado para el despegue"
	Se debe ajustar la muestra de información del sistema acorde a los nuevos requisitos del gestor de cargas.

NIVEL DIOS: A estas alturas debes tener un control absoluto sobre el código de tu programa. Vamos a modificarlo para realizar una simulación "realista" de un sistema autónomo de envíos.
	A la hora de introducir cargas no la asignaremos automaticamente si no que le añadiremos un campo "asignada" inicializado a false.
    Salvo este punto el resto del programa seguirá igual
    Al menú principal debemos añadir 2 puntos:
       4: Asignar cargas
       5: Simular entregas.
    Cuando el usuario elija la opción 4 se deberá ejecutar una asignación automática de todas las cargas a los cohetes disponibles. Si alguna carga no se puede asignar se la marcará como "imposible" pero se mantendrá en el sistema. El resto de cargas deben asignarse al cohete que pueda entregarla en el tiempo mas cercano solicitado.
    Al terminar la asignacion se mostrará un "report" de lo sucedido al usuario con todas las cargas asignadas y el estado final de los cohetes y se volverá a mostrar el menú principal.
    Cuando el usuario elija la opcion 5 del menu deberemos ejecutar una "simulación de los viajes", mostraremos el paso de los dias por consola cada segundo (1 segundo = 1 dia)), debemos ir lanzando la información según vaya sucediendo, es decir cuando pasen los dias de viaje de un cohete se mostrarán todas las cargas que han sido entregadas y se ajustará su estado a "entregada".
    Cuando acabe la simulación debemos mostrar al usuario un report de la información del sistema y todos los cohetes deben actualizarse con carga actual 0 y estado cargando.