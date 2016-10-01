var procesos = ['Proc.A','Proc.B','Proc.C','Proc.D','Proc.E','Proc.F','Proc.G'];

var recursos = ['Rec.1','Rec.2','Rec.3','Rec.4'];
for (var i = procesos.length - 1; i >= 0; i--) {
	procesos[i] = new Proceso(procesos[i]);
}
for (var i = recursos.length - 1; i >= 0; i--) {
	recursos[i] = new Recurso(recursos[i]);
}
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

complejidad = 5;
for (var i = 0; i < complejidad; i++) 
{
	
generarBloqueo(procesos,recursos)
}

function generarBloqueo(procesos,recursos)
	{
	shuffle(procesos)
	shuffle(recursos)
	for (var i = procesos.length - 1; i >= 0; i--) {
		if (recursos[i] !== undefined)
		 {
		procesos[i].necesita(recursos[i]);//asigna directo los pares
		 }
	}

}
var graph = new Springy.Graph();//defino grafico
addNodes(procesos)
addNodes(recursos)
addEdge_procesos(procesos);
addEdge_recursos(recursos);

function addNodes(nodos)
{
for (var i = nodos.length - 1; i >= 0; i--) {
	var nodo = new Springy.Node(nodos[i].nombre,{label:nodos[i].nombre})
	graph.addNode(nodo)
}
}


function addEdge_procesos(procesos)
{
	//aristas de procesos hacia recursos - en espera
	for (var i = procesos.length - 1; i >= 0; i--) {
		var aux = procesos[i];
		// console.log(aux)
			for (var j = aux.enEspera.length - 1; j >= 0; j--) {
					if (aux.enEspera[j] !== null) 
				{
						// var recurso_en_espera = aux.enEspera[j].nombre
						var desde = aux.nombre;
						var hacia = aux.enEspera[j].nombre;					
						graph.addEdges([desde,hacia])

				}
			}
	}
}


function addEdge_recursos(recursos)
{
	for (var i = recursos.length - 1; i >= 0; i--) {
		if (recursos[i].proceso !== null) 
		{
			desde = recursos[i].nombre;
			hacia = recursos[i].proceso.nombre;
			graph.addEdges([desde,hacia])
		}
	}
}



jQuery(function(){
  var springy = jQuery('#canvas').springy({
    graph: graph
  });
});
