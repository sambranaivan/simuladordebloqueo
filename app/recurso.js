function Recurso(name)
{
	this.nombre = name;
	this.proceso = null;



	this.asignar = function(proceso)
	{
		console.log("El Recurso "+this.nombre+" ah sido apropiado por el Proceso "+proceso.nombre)
		this.proceso = proceso;
	}

	this.estaLibre = function()
	{
		if (this.proceso == null) 
		{
			console.log("El Recurso "+this.nombre+" Esta Libre")
			return true
		}
		else
		{
			console.log("El Recurso "+this.nombre+" No es libre")
			return false;
		}
	}

}