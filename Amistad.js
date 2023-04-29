class Amistad {
    constructor(amigosPreferidos, amigosBloqueados) {
      this.amigosPreferidos = amigosPreferidos || [];
      this.amigosBloqueados = amigosBloqueados || [];
      
    const amistad1 = new Amistad(["amigo1", "amigo2"], ["amigo3", "amigo4"]);{
    console.log(amistad1.amigosPreferidos); // Output: ["amigo1", "amigo2"]
    console.log(amistad1.amigosBloqueados); // Output: ["amigo3", "amigo4"]
        }
    }
}