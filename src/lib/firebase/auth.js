export const singInGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
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
