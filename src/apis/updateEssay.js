const firebase = require('../firebase');

const updateEssay = async(req, res) => {
    try {
        const ref = firebase().firestore.collection('essays-list');
        await ref.doc(req.body.id).update(req.body);
        return res.status(200).send({message: 'Essay updated successfully'});          
    }
    catch(error) {
        console.log(error);
        return res.status(400).send({message: 'Api failed'});
    }
}

module.exports = {updateEssay}