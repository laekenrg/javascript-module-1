function muestrameLosEstudiantes(array) {
  for (let index = 0; index < array.length; index++) {
    const estudiantes = array[index];
    console.log(estudiantes);
  }
}

muestrameLosEstudiantes(["Carlos", "Maria", "Jose", "Carla", "Victoria"]);
