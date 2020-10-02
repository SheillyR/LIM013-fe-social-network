import { readUserDB, createUserDB } from '../firebase/firestore.js';
import { singInGoogle, singInFacebook } from '../firebase/auth.js';

const readCreateUserDB = (uid, email, photoUrl, nameUser) => {
  readUserDB(uid)
    .then((res) => {
      console.log("res",res);
      if (res.empty) {
      createUserDB(uid, email, photoUrl, nameUser);
      localStorage.setItem('userName',nameUser);
      localStorage.setItem('userEmail',email);
      localStorage.setItem('userPhoto',photoUrl);
      localStorage.setItem('userUid',uid);
        } else {
      res.forEach((refDoc) => {
        const user = refDoc.data();
        //console.log(user);
        localStorage.setItem('userName',user.name);
        localStorage.setItem('userEmail',user.email);
        localStorage.setItem('userPhoto',user.photoUrl);
        localStorage.setItem('userUid',user.uid); 
          });
        };
    });
};

export const loginGoogle = () => {
    singInGoogle()
      .then((res) => {
      localStorage.setItem('userName',res.user.displayName);
      localStorage.setItem('userEmail',res.user.email);
      localStorage.setItem('userPhoto',res.user.photoURL);
      localStorage.setItem('userUid',res.user.uid);  
        
        console.log("entro aqui");
      window.location.hash = '#/home';
      readCreateUserDB(res.user.uid, res.user.email, res.user.photoURL, res.user.displayName);
      
      })
      .catch((error) => {
        if (error) throw error;
      });
};

export const loginFacebook = () => {
    singInFacebook()
      .then((res) => {
      window.location.hash = '#/home';
      readCreateUserDB(res.user.uid, res.user.email, res.user.photoURL, res.user.displayName);
    })
    .catch((error) => {
      if (error) throw error;
    });
};
