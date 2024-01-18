// Capa de datos en el servidor (Base de Datos Mock en Node.js)
const datosMock = [
    { id: 1, nombre: 'Juan Pérez', edad: 30, ciudad: 'Ciudad A' },
    { id: 2, nombre: 'María Gómez', edad: 25, ciudad: 'Ciudad B' },
    { id: 3, nombre: 'Carlos Rodríguez', edad: 28, ciudad: 'Ciudad C' },
    { id: 4, nombre: 'Ana Martínez', edad: 22, ciudad: 'Ciudad D' },
    { id: 5, nombre: 'Pedro Sánchez', edad: 35, ciudad: 'Ciudad E' },
    { id: 6, nombre: 'Laura López', edad: 31, ciudad: 'Ciudad F' },
    { id: 7, nombre: 'Diego Torres', edad: 26, ciudad: 'Ciudad G' },
    { id: 8, nombre: 'Sofía Ruiz', edad: 29, ciudad: 'Ciudad H' },
    { id: 9, nombre: 'Mateo González', edad: 33, ciudad: 'Ciudad I' },
    { id: 10, nombre: 'Valentina Herrera', edad: 24, ciudad: 'Ciudad J' },
    { id: 11, nombre: 'Javier Castro', edad: 27, ciudad: 'Ciudad K' },
    { id: 12, nombre: 'Isabella Flores', edad: 26, ciudad: 'Ciudad L' },
    { id: 13, nombre: 'Emilio Ramírez', edad: 32, ciudad: 'Ciudad M' },
    { id: 14, nombre: 'Lucía Vargas', edad: 23, ciudad: 'Ciudad N' },
    { id: 15, nombre: 'Gabriel Ríos', edad: 28, ciudad: 'Ciudad O' },
    { id: 16, nombre: 'Camila Castro', edad: 29, ciudad: 'Ciudad P' },
    { id: 17, nombre: 'Matías Díaz', edad: 34, ciudad: 'Ciudad Q' },
    { id: 18, nombre: 'Victoria Silva', edad: 25, ciudad: 'Ciudad R' },
    { id: 19, nombre: 'Alejandro Mendoza', edad: 30, ciudad: 'Ciudad S' },
    { id: 20, nombre: 'Mariana Ortega', edad: 27, ciudad: 'Ciudad T' },
    // Puedes agregar más datos si es necesario...
];

module.exports = {
    obtenerDatos: () => {
        return datosMock;
    },
    // Otras operaciones de base de datos simuladas...
};
