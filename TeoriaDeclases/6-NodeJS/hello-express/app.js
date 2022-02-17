import express from 'express'; // paso 1

const app = express(); // paso 2

app.use(express.json()); // parseo el body a JSON
const port = 3000

/** INICIO DEL PASO 3 */
app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post("/", (req, res) => {
    console.log(req.body);
    res.send("Hello World! from POST");
});

app.patch("/", (req, res) => {
    res.send("Hello World! from patch");
});

app.put("/", (req, res) => {
    res.send("Hello World! from put");
});

app.delete("/", (req, res) => {
    res.send("Hello World! from delete");
});

app.get('/chavales', (req, res) => {
    res.send('Hello Chavales Bootcamp!')
})

/** FIN DEL PASO 3 */


app.listen(port, () => { // paso 4
    console.log(`Example app listening at http://localhost:${port}`)
});