/*Membuat variabel untuk setiap element view */
const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

/*Mmebuat variabel untuk menyimpan informasi email dan password */
const expectedEmail = 'admin@dicoding.com';
const expectedPassword = 'superpassword';

/*Menambahkan Aksi klik pada button */
loginFormElement.addEventListener('submit', function(event) {
  event.preventDefault();

  /*mendapatkan nilai dari masing masing input */
  const email = inputEmailElement.value;
  const password = inputPasswordElement.value;

  /*memastikan nilai email dan password sesuai dengan nilai yang tersimpan */
  if (email == expectedEmail && password == expectedPassword) {
    goToHome();
  } else {
    showPopUp();
  }
});
