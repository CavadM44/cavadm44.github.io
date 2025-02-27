document.getElementById('kayitFormu').addEventListener('submit', function(event) {
    event.preventDefault(); // Sayfanın yeniden yüklenmesini engelle

    const adSoyad = document.getElementById('adSoyad').value;
    const eposta = document.getElementById('eposta').value;
    const yas = document.getElementById('yas').value;
    const bolge = document.getElementById('bolge').value;

    const kullaniciBilgileri = {
        adSoyad: adSoyad,
        eposta: eposta,
        yas: yas,
        bolge: bolge
    };

    // Verileri localStorage'a kaydet
    localStorage.setItem('kullaniciBilgileri', JSON.stringify(kullaniciBilgileri));

    alert('Bilgiler kaydedildi!');
});
