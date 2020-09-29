export const singInGoogle = () => {
  // console.log('entro google');
  const provider = new firebase.auth.GoogleAuthProvider();
  // console.log(provider);
  return firebase.auth().signInWithPopup(provider);
};

export const singInFacebook = () => {
  // console.log('sign in facebook');
  const provider = new firebase.auth.FacebookAuthProvider();
  // console.log(provider);
  return firebase.auth().signInWithPopup(provider);
};

export const logOut = () => firebase.auth().signOut();

export const getUser = () => firebase.auth().currentUser;

// Authentication email and password with Firebase

export const createUserAccount = (email, password) => firebase.auth()
  .createUserWithEmailAndPassword(email, password);

// Login with valid email and password

export const loginUser = (email, password) => firebase.auth()
  .signInWithEmailAndPassword(email, password);

  export const createUserDB = (uid, email, photoUrl, nameUser) => firebase.firestore()
  .collection('users').add({
    
    name: nameUser,
    email: email, 
    uid: uid,
    photoUrl:photoUrl
  
  });

  export const readUserDB = uid => firebase.firestore().collection('users')
  .where('uid', '==', uid)
  .get();