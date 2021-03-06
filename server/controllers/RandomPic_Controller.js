const axios = require('axios');
let picArr = [];


module.exports = {
    createComment: (req, res) =>{
        const {comment} = req.body;
        const updateId = req.params.id;
        const picIndex = picArr.findIndex(pic => pic.id == updateId);
        console.log(picIndex);
        picArr[picIndex].comments.push(comment);
        console.log(picArr[picIndex])
        res.send(picArr[picIndex])


    },

    readComments: (req, res) =>{
        const {id} = req.body;
        res.send(picArr[id])
    },

    updateComment: (req, res) =>{
        const {comment} = req.body;
        const updateId = req.params.id;
        const picIndex = picArr.findIndex(pic => pic.id == updateId);
        picArr[picIndex].comments.push(comment);

        res.send(picArr[picIndex]);

    },

    deleteComments: (req, res) =>{
        const deleteId = req.params.id;
        const picIndex = picArr.findIndex(pic => pic.id == deleteId);
        picArr[picIndex].comments = [];
        console.log(picArr[picIndex])
        
        res.send(picArr[picIndex]);

    },

    // Initial Post Request

    post: (req, res) =>{
        console.log('this is req.body', req.body)
        picArr = req.body
        res.send(picArr)
    },

    read: (req, res) => {
        if (picArr.length > 0) {
            res.send(picArr);
        } else {
            axios({
                method: 'GET',
                url: 'https://api.imgur.com/3/gallery/search?q=clownfish',
                headers: {
                    Authorization: 'Client-ID 4cad3ba3fadfbd3'
                }
            }).then(response => {
                let id = 0;
                let arrayWithComments = [];
    
                response.data.data.forEach(item => {
                    if (item.images) {
                        let serializedObj = {
                            image: item.images[0].link,
                            comments: [],
                            id: id++
                        }
                        arrayWithComments.push(serializedObj);
                    }
                })
                picArr = arrayWithComments;
                res.send(picArr);
            })
        }
    }
}