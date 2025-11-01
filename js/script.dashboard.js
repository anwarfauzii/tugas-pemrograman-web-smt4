document.getElementById('lacakBtn').addEventListener('click', function() {
    const doBillingInput = document.getElementById('doBilling');
    const trackingResultDiv = document.getElementById('trackingResult');
    const trackingId = doBillingInput.value.trim();

    // Reset tampilan
    trackingResultDiv.innerHTML = '';

    // 1. Cek apakah kode ada di dummy dataTracking
    const dataPaket = dataTracking[trackingId];

    if (!dataPaket) {
        // 2. Jika kode tidak valid
        alert("Kode tidak valid, harap cek kembali");
        return;
    }

    // 3. Jika data ditemukan, generate tampilan
    
    // --- Bagian Detail Penerima (Box Biru) ---
    const detailHTML = `
        <div class="info-box">
            <div class="name-date">
                <h2>${dataPaket.nama}</h2>
                <span class="datetime">${dataPaket.tanggalKirim}</span>
            </div>
            <div class="nomor-do">${dataPaket.nomorDO}</div>
        </div>
        <h3 class="perjalanan-title">Perjalanan Paket</h3>
    `;

    // --- Bagian Perjalanan Paket (Timeline) ---
    let timelineHTML = '<div class="timeline">';

    
    dataPaket.perjalanan.forEach(step => {
        timelineHTML += `
            <div class="timeline-item">
                <div class="dot"></div>
                <div class="details">
                    <p class="keterangan">${step.keterangan}</p>
                    <span class="datetime">${step.waktu}</span>
                </div>
            </div>
        `;
    });
    
    timelineHTML += '</div>';

    // Gabungkan dan tampilkan
    trackingResultDiv.innerHTML = detailHTML + timelineHTML;
});