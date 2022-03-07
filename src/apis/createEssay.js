const firebase = require('../firebase');

const createEssay= async(req, res) => {
    const {title, content, createdAt, updatedAt} = req.body;
    if(!title) { 
        return res.status(400).send({message: 'Title is required'});
    }
    if(!content) { 
        return res.status(400).send({message: 'Content is required'});
    }

    try {
        const ref = firebase().firestore.collection('essays-list');
        await ref.add({title, content, createdAt, updatedAt});
        return res.status(200).send({message: 'Essay added successfully'});
    }
    catch(error) {
        console.log(error);
        return res.status(400).send({message: 'Api failed'});
    }
}

module.exports = {createEssay}