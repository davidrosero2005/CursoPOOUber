class Busqueda {
    constructor(usuarios) {
      this.usuarios = usuarios;}
    buscarPorNombre(nombre) {
      return this.usuarios.filter(usuario => usuario.nombre.toLowerCase().includes(nombre.toLowerCase()));
    }
  
    buscarPorEdad(edad) {
      return this.usuarios.filter(usuario => usuario.edad === edad);
    }
  
    buscarPorGenero(genero) {
      return this.usuarios.filter(usuario => usuario.genero === genero);
    }
  }