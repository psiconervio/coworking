
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;
const dataFile = path.join(__dirname, 'sectors.json');

app.use(bodyParser.json());
app.use(express.static('public'));

// Endpoint para obtener el estado de los sectores
app.get('/sectors', (req, res) => {
    fs.readFile(dataFile, (err, data) => {
        if (err) {
            return res.status(500).send('Error reading sectors data');
        }
        res.send(JSON.parse(data));
    });
});

// Endpoint para actualizar el estado de los sectores
app.post('/sectors', (req, res) => {
    fs.readFile(dataFile, (err, data) => {
        if (err) {
            return res.status(500).send('Error reading sectors data');
        }
        const sectors = JSON.parse(data);
        const updatedSectors = { ...sectors, ...req.body };
        fs.writeFile(dataFile, JSON.stringify(updatedSectors), (err) => {
            if (err) {
                return res.status(500).send('Error saving sectors data');
            }
            res.send('Sectors data saved successfully');
        });
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// const express = require('express');
// const bodyParser = require('body-parser');
// const fs = require('fs');
// const path = require('path');

// const app = express();
// const port = 3000;
// const dataFile = path.join(__dirname, 'sectors.json');

// app.use(bodyParser.json());
// app.use(express.static('public'));

// // Endpoint para obtener el estado de los sectores
// app.get('/sectors', (req, res) => {
//     fs.readFile(dataFile, (err, data) => {
//         if (err) {
//             return res.status(500).send('Error reading sectors data');
//         }
//         res.send(JSON.parse(data));
//     });
// });

// // Endpoint para actualizar el estado de los sectores
// app.post('/sectors', (req, res) => {
//     fs.writeFile(dataFile, JSON.stringify(req.body), (err) => {
//         if (err) {
//             return res.status(500).send('Error saving sectors data');
//         }
//         res.send('Sectors data saved successfully');
//     });
// });

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });
