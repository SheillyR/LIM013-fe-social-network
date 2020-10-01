export const createUserDB = (uid, email, photoUrl, nameUser) => firebase.firestore()
  .collection('users').add({

    name: nameUser,
    email: email,
    uid: uid,
    photoUrl: photoUrl

  });

export const readUserDB = uid => firebase.firestore().collection('users')
  .where('uid', '==', uid)
  .get();

export const addNotesToDB = (useruid, userDisplayName, createNote) => firebase.firestore()
  .collection('addNotes').add({
    creator : useruid,
    creatorName : userDisplayName,
    note: createNote,
  });

export const readAddNotesToDB = () => firebase.firestore()
  .collection('addNotes')
  .get();
