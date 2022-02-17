



export function validateIATACode(airports, iata) {
    // esta funcion recibe un IATA code y devuelve true si ese IATA code existe
    return airports.some(a => a.code === iata);
}