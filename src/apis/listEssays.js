const firebase = require('../firebase');

const listEssay= async(req, res) => {
    try {
        const ref = firebase().firestore.collection('essays-list');
        const response = await ref.get();
        const documents = response.docs.map(e => ({...e.data(), id: e.id}))
        return res.status(200).send(documents);
    }
    catch(error) {
        console.log(error);
        return res.status(400).send({message: 'Api failed'});
    }
}

module.exports = {listEssay}