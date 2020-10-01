import { addNotesToDB, readAddNotesToDB } from '../firebase/firestore.js';

export const createAddNoteToDB = (useruid, userDisplayName, createNote) => {
  addNotesToDB(useruid, userDisplayName, createNote)
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
};

export const readNoteToDB = () => {
  readAddNotesToDB()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
      });
    });
};
