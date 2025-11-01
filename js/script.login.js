document.getElementById('loginForm').addEventListener('submit', function (event) {
  // Mencegah form melakukan submit default (reload halaman)
  event.preventDefault();

  // 1. Ambil nilai dari input
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const email = emailInput.value.trim();
  const password = passwordInput.value;

  // 2. Ambil elemen pesan error
  const emailError = document.getElementById('emailError');
  const passwordError = document.getElementById('passwordError');

  // Bersihkan semua pesan error dan border error sebelumnya
  emailError.textContent = '';
  passwordError.textContent = '';
  emailInput.parentElement.classList.remove('input-error-border');
  passwordInput.parentElement.classList.remove('input-error-border');

  let isValid = true;

  // 3. Validasi Form Kosong
  if (email === '') {
    emailError.textContent = 'Email Wajib diisi';
    emailInput.parentElement.classList.add('input-error-border');
    isValid = false;
  } else {
    emailInput.parentElement.classList.remove('input-error-border');
  }

  if (password === '') {
    passwordError.textContent = 'Password Wajib diisi';
    passwordInput.parentElement.classList.add('input-error-border');
    isValid = false;
  } else {
    passwordInput.parentElement.classList.remove('input-error-border');
  }

  // Hentikan proses jika ada form yang kosong
  if (!isValid) {
    return;
  }

  // 4. Cek Kredensial (Jika form sudah terisi)
  const CORRECT_EMAIL = '052028331@ecampus.ut.ac.id';
  const CORRECT_PASSWORD = 'admin';

  if (email === CORRECT_EMAIL && password === CORRECT_PASSWORD) {
    // 5. direct ke halaman home
    window.location.href = 'home.html';
  } else {
    // 6. Kredensial Salah: Tampilkan alert
    alert('Email/Password tidak sesuai');
  }
});

//Modal
var modal = document.getElementById('myModal');
var textModal = document.getElementById('textModal');

// Get the button that opens the modal
var forgotPwd = document.getElementById('forgotPwd');
var signupLink = document.getElementById('signupLink');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName('close')[0];

// When the user clicks the button, open the modal
forgotPwd.onclick = function () {
  modal.style.display = 'block';
  textModal.innerHTML = 'Modal Untuk Lupa Password';
};
signupLink.onclick = function () {
  modal.style.display = 'block';
  textModal.innerHTML = 'Modal Untuk Pendaftaran Baru';
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
