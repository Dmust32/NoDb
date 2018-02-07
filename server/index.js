const express = require('express');
const bodyParser = require('body-parser');
const cors= require('cors');
const RandomPic_Controller = require('./controllers/RandomPic_Controller')

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Initial Pic GET endpoint

app.post('/api/clownfish', RandomPic_Controller.post)


// Random Picture Endpoints

// app.post('/api/pics', RandomPic_Controller.create)

// app.delete('/api/pics', RandomPic_Controller.delete)

// app.update('/api/pics', RandomPic_Controller.update)

// app.read('/api/pics', RandomPic_Controller.read)



const port = 5050;

app.listen( port, () => {
    console.log("listening on port", port)
})

