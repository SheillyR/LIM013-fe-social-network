import { addNoteToDB } from '../firebase/firestore.js';

export const createAddNoteToDB = () => {
  addNoteToDB(createNote)
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch((error)=>{
      console.log('Error adding document: ', error);
    });
};