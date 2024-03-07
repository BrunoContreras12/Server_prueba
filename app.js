import express from "express";
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

// middleware
app.use(express.static("public"));
app.use(express.json()); // Analizar el cuerpo de la solicitud como JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const port = 3000;

app.post('/tc2005b', (req, res) => {
    const data = req.body.user;
    console.log(data);
    const user = JSON.parse(data);
    console.log(user.user_name, user.password);
    const response = { id: user.id, group: user.group };
    res.json(response);
});

app.get('/', (req, res) => {
    res.sendFile("index.html", { root : "public" })
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
