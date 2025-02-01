const medya = document.getElementById('medya');
const liste = document.getElementById('liste');
const dosyaYukle = document.getElementById('dosyaYukle');
const urlGiris = document.getElementById('urlGiris');
const urlEkle = document.getElementById('urlEkle');

function m3uOku(kaynak) {
  let icerik;

  if (typeof kaynak === 'string' && kaynak.startsWith('http')) {
    // URL ise doğrudan fetch ile al
    fetch(kaynak)
      .then(response => response.text())
      .then(text => {
        icerik = text;
        m3uIsle(icerik);
      });
  } else if (typeof kaynak === 'string') {
    // İçerik metin ise doğrudan işle
    icerik = kaynak;
    m3uIsle(icerik);
  } else if (kaynak instanceof File) {
    // Dosya ise FileReader ile oku
    const okuyucu = new FileReader();
    okuyucu.onload = (e) => {
      icerik = e.target.result;
      m3uIsle(icerik);
    };
    okuyucu.readAsText(kaynak);
  }
}

function m3uIsle(icerik) {
  const satirlar = icerik.split('\n');
  satirlar.forEach(satir => {
    if (satir.startsWith('http')) {
      const li = document.createElement('li');
      li.textContent = satir;
      li.addEventListener('click', () => {
        medya.src = satir;
        medya.play();
      });
      liste.querySelector('ul').appendChild(li);
    }
  });
}

dosyaYukle.addEventListener('change', (event) => {
  const dosya = event.target.files[0];
  m3uOku(dosya);
});

urlEkle.addEventListener('click', () => {
  const url = urlGiris.value;
  m3uOku(url);
});

// Örnek bir m3u dosyasını yükle (isteğe bağlı)
// m3uOku('liste.m3u');
      
