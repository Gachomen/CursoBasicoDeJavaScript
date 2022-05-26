var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(alumno) {
    console.log(`Hola, ${alumno}`);
}
for(var alumno of estudiantes) {
    saludarEstudiantes(alumno);
}
Hola, Maria
Hola, Sergio
Hola, Rosa
Hola, Daniel  