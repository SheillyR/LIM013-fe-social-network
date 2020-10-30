import { changeTemplate } from './lib/view-controller/router.js';
import { firebaseInit } from './lib/firebase/firebase-init.js';
// Webpage load and reload function
const init = () => {
  firebaseInit();
  changeTemplate(window.location.hash);
  window.addEventListener('hashchange', () => changeTemplate(window.location.hash));
};
window.addEventListener('load', init);
