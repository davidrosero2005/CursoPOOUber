class Usuario {
  constructor(nombre, email, contrasena, fechaNacimiento, gustos) {
    this.nombre = nombre;
    this.email = email;
    this.contrasena = contrasena;
    this.fechaNacimiento = fechaNacimiento;
    this.gustos = gustos;
    this.genero = genero;
    this.amigos = [];
    this.publicaciones = [];
    this.grupos = [];

    const usuario1 = new Usuario("Pepito", "Pepito@example.com", "123456", "1990-01-01", ["deportes", "viajes"]);{
console.log(usuario1.nombre); // Output: Juan
console.log(usuario1.email); // Output: juan@example.com
console.log(usuario1.amigos); // Output: []
console.log(usuario1.gustos); // Output: ["deportes", "viajes"]
  }
}
}