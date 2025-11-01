const tableBody = document.getElementById('tableBody');
const modal = document.getElementById('tambahDataModal');
const tambahBtn = document.getElementById('tambahDataBtn');
const closeBtn = document.querySelector('.close-button');
const tambahForm = document.getElementById('tambahForm');

// Fungsi untuk merender/menggambar ulang isi tabel
function renderTable() {
  tableBody.innerHTML = ''; // Kosongkan isi tabel

  dataBahanAjar.forEach((item) => {
    const row = tableBody.insertRow();

    // Kolom Cover (gunakan placeholder jika file tidak ada)
    const coverCell = row.insertCell();
    coverCell.innerHTML = `<img src="${item.cover}" alt="${item.namaBarang}" class="cover-thumb" onerror="this.onerror=null;this.src='https://via.placeholder.com/50x70?text=No+Cover';">`;

    row.insertCell().textContent = item.kodeLokasi;
    row.insertCell().textContent = item.kodeBarang;
    row.insertCell().textContent = item.namaBarang;
    row.insertCell().textContent = item.jenisBarang;
    row.insertCell().textContent = item.edisi;
    // Gunakan toLocaleString untuk pemisah ribuan
    row.insertCell().textContent = item.stok.toLocaleString('id-ID');
  });
}

// 1. Logika Modal
tambahBtn.onclick = function () {
  modal.style.display = 'block';
};

closeBtn.onclick = function () {
  modal.style.display = 'none';
  tambahForm.reset(); // Reset form saat ditutup
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
    tambahForm.reset();
  }
};

// 2. Logika Submit Form
tambahForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // Ambil nilai dari form
  const newData = {
    kodeLokasi: document.getElementById('inputKodeLokasi').value,
    kodeBarang: document.getElementById('inputKodeBarang').value,
    namaBarang: document.getElementById('inputNamaBarang').value,
    jenisBarang: document.getElementById('inputJenisBarang').value,
    edisi: document.getElementById('inputEdisi').value,
    stok: parseInt(document.getElementById('inputStok').value),
    cover: 'img/data_baru.jpg' // Default cover untuk data baru
  };

  // Tambahkan data baru ke dummy array
  dataBahanAjar.push(newData);

  // Update tampilan tabel
  renderTable();

  // Tutup modal dan reset form
  modal.style.display = 'none';
  tambahForm.reset();

  alert(`Data ${newData.namaBarang} berhasil ditambahkan!`);
});

// Panggil fungsi renderTable saat halaman pertama kali dimuat
document.addEventListener('DOMContentLoaded', renderTable);
