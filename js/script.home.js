//fungsi pengecekan waktu
function checkTime() {
  const hours = new Date().getHours();

  //Melakukan switch case berdasarkan waktu
  switch (true) {
    case hours >= 5 && hours < 12:
      return 'Pagi';

    case hours >= 12 && hours < 15:
      return 'Siang';

    case hours >= 15 && hours < 18:
      return 'Sore';

    default:
      return 'Malam';
  }
}

// mengupdate nilai
document.getElementById('welcomeMessage').innerHTML = `Selamat ${checkTime()}, Selamat Beraktivitas`;
