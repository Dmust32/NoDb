let picArr = [];


module.exports = {
    create: (req, res) =>{

    },

    read: (req, res) =>{
        res.send(picArr)
    },

    update: (req, res) =>{

    },

    delete: (req, res) =>{

    },

    // Initial Post Request

    post: (req, res) =>{
        console.log('this is req.body', req.body)
        picArr = req.body
        res.send(picArr)
    }
}