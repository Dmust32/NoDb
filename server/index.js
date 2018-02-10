const express = require('express');
const bodyParser = require('body-parser');
const cors= require('cors');
const RandomPic_Controller = require('./controllers/RandomPic_Controller')

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Initial Pic GET endpoint

app.get('/api/clownfish', RandomPic_Controller.read);

app.post('/api/clownfish', RandomPic_Controller.post);


// Random Picture Endpoints

 app.put('/api/comments/:id', RandomPic_Controller.createComment);

app.delete('/api/comments/:id', RandomPic_Controller.deleteComments)

// app.update('/api/comments/', RandomPic_Controller.update)

app.get('/api/comments/:id', RandomPic_Controller.readComments)



const port = 5050;

app.listen( port, () => {
    console.log("listening on port", port)
})

