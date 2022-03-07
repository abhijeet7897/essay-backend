const firebase = require('../firebase');

const deleteEssay = async(req, res) => {
    try {
        const ref = firebase().firestore.collection('essays-list');
        await ref.doc(req.body.id).delete();
        return res.status(200).send({message: 'Essay deleted successfully'});          
    }
    catch(error) {
        console.log(error);
        return res.status(400).send({message: 'Api failed'});
    }
}

module.exports = {deleteEssay}