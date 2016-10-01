function Proceso(name)
{
	this.nombre = name;
	this.recurso = null;
	this.enEspera = new Array();

	this.necesita = function(recurso){
		console.log('Proceso: '+this.nombre + ' necesita el Recurso '+recurso.nombre)
		if (recurso.estaLibre() && this.estoyLibre()) 
		{

			this.apropiar(recurso);
			
		}
		else//si el recurso esta apropiado queda en espera por
		{
			this.esperar(recurso);
		}	

	};

	this.estoyLibre = function(){
		if (this.recurso !== null) 
		{
			console.log("El proceso "+this.nombre+" ya posee un recurso")
			console.log(this.enEspera)
			return false;
		}
		else
		{
			// console.log("El proceso "+this.nombre+" ya posee un recurso")
			return true;
		}
	}

	this.apropiar = function(recurso)
	{
		var t = this;
		this.recurso = recurso;
		console.log("El Proceso "+this.nombre+" ah Apropiado al Recurso "+recurso.nombre)
		recurso.asignar(t);
	}

	this.esperar = function(recurso)
	{
		if (recurso.proceso !== this) 
		{

		
			if (this.enEspera.indexOf(recurso) == -1) 
			{

				this.enEspera.push(recurso);
			}



		}
	}

	this.estaBloqueado = function()
	{
		var t = false;
		for (var i = this.enEspera.length - 1; i >= 0; i--) 
		{
			if (!this.enEspera(i).estaLibre()) 
			{
				t = true;
			}

		}
	}


}



///elimiar duplicados
function uniq(a) {
    return a.sort().filter(function(item, pos, ary) {
        return !pos || item != ary[pos - 1];
    })
}