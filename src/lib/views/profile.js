import { editTextProfileToDB } from '../firebase-controller/profile-controller.js';


export const profile = (users) => {
  console.log('user', users);
  const editProfile = document.createElement('section');
  editProfile.innerHTML = ` 
      <header>
      <nav>
      <div class='title-energy'>
      <h4 class='title'>Energía Verde💡</h4></div>
      <input type='checkbox' id='check-and-uncheck'>
      <label for='check-and-uncheck'>
      <i class='fas fa-bars' id='hamburger'></i>
      <i class='fas fa-times' id='cross'></i>
      </label>
        <ul>
        <li>
        <a id='btn-home' href='#/home'>Home</a>
          </li>
      
        </ul>
      </nav>
      </header>
      <section class='container-profile'>
        <h2 >Perfil creado por</h2>
        <img class='user-image' src='${localStorage.getItem('userPhoto')}'>
        <p>${localStorage.getItem('userName')}</p>
        <h1 id="edit-profile">Editar</h1>
    <div id='form-profile' class= 'hidden'>
      <p>Editar nombre</p>
      <input type="text" id="edit-name" class="profile-form" placeholder="Nombre" >
      <p>Donde vives</p>
      <input type="text" id="user-directons" class="profile-form" placeholder="Donde vives" >
      <p>Sobre mi</p>
      <input type="about-me" id="user-about" class="profile-form" placeholder="sobre ti">
      <p>Gustos</p>
      <input type="preferences" id="user-preferences" class="profile-form" placeholder="Gustos" required>
      <button type="submit" id="profile-submit" class="submit-form">Actualizar</button>
    <div id= 'update-profile' class= 'hidden'>soy el div de la prueba</div>

    </div>
      </section> `;
  const btnEdit = editProfile.querySelector('#edit-profile');
  const showForm = editProfile.querySelector('#form-profile');
  const btnSubmit = editProfile.querySelector('#profile-submit');
  const updateProfile = editProfile.querySelector('#update-profile');
  const editName = editProfile.querySelector('#edit-name');
  const editDirections = editProfile.querySelector('#user-directons');
  const editAbout = editProfile.querySelector('#user-about');
  const editPreferences = editProfile.querySelector('#user-preferences');

  if (localStorage.getItem('userID')) {
    btnEdit.addEventListener('click', () => {
      showForm.classList.remove('hidden');
      showForm.classList.add('show');
    });
  }
  btnSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const creatorName = editName.value;
    console.log(creatorName);
    const creatorDirections = editDirections.value;
    console.log(creatorDirections);
    const creatorAbout = editAbout.value;
    console.log(creatorAbout);
    const creatorPreferences = editPreferences.value;
    console.log(creatorPreferences);
    updateProfile.classList.remove('hidden');
    updateProfile.classList.add('show');
    editTextProfileToDB(users.id, creatorName, creatorDirections, creatorAbout, creatorPreferences);
  });
/*
  users.forEach((user) => {
    updateProfile.appendChild(infoProfile(user));
    console.log(updateProfile);
  });
*/

  return editProfile;
};
