
document.addEventListener('DOMContentLoaded', () => {

    

    const mevcutYol = window.location.pathname;

    const aktifKullanici = {
        adSoyad: 'Ahmet Yılmaz',
        ogrenciNo: '242599999',
        email: 'ahmet.y@ogr.edu.tr',
        rol: 'ogrenci', 
        bolum: 'Bilgisayar Mühendisliği'
    };

    const zamanFormatiniAl = () => {
        return new Date().toLocaleDateString('tr-TR', { 
            day: 'numeric', month: 'long', year: 'numeric'
        }) + ' ' + new Date().toLocaleTimeString('tr-TR', { 
            hour: '2-digit', minute: '2-digit'
        });
    };

   
    const userInfoElement = document.getElementById('user-info');
    
    if (userInfoElement) {
        userInfoElement.innerHTML = `
            <div class="profile-details">
                ${aktifKullanici.adSoyad} <br>
                <strong>No:</strong> ${aktifKullanici.ogrenciNo}
            </div>
            <div class="profile-pic-container">
                <i class="fas fa-user-circle profile-pic" 
                   style="color: #6c757d; font-size: 60px; border: none; box-shadow: none;">
                </i>
            </div>
        `;
    }

   
    if (mevcutYol.includes('notes.html')) {

        const notYuklemeFormuElementi = document.getElementById('not-yukleme-formu');
        const notListesiAlani = document.getElementById('not-listesi');

        let paylasilanNotlarListesi = [
           
            { 
                id: 3,
                kullanici: 'Prof. Dr. Mustafa Yağcı',
                tip: 'akademisyen',
                zaman: '3 Nisan 2024 10:45',
                dersKodu: 'GENEL',
                notMetni: 'Başarılar gençler.',
                dosyaAdi: 'Javascript Cheatsheet.png',
                yorumlar: []
            },
            
            { 
                id: 2,
                kullanici: 'Dç. Dr. Ali Can Akdağ',
                tip: 'akademisyen',
                zaman: '10 Nisan 2024 11:30',
                dersKodu: 'WEB201',
                notMetni: 'Web Programlama ilk 4 Haftanın Özeti. Anlamadığınız yerler olursa benimle iletişime geçmekten çekinmeyin.',
                dosyaAdi: 'Web Programlama İlk 4 Haftanın Özeti',
                yorumlar: []
            },
        ];

        
        const notKartiHTMLOlustur = (not) => {
            const div = document.createElement('div');
            div.className = `paylasim-kutu kart ${not.tip}`;

            
            div.innerHTML = `
                <div class="paylasim-header">
                    <div class="user-icon"><i class="fas fa-user-circle"></i></div>
                    <span class="kullanici-adi">${not.kullanici}</span>
                    <span class="zaman-damgasi">${not.zaman}</span>
                </div>

                <p class="not-metni">${not.notMetni}</p>

                <div class="yukleme-notu-alani">
                    <span class="not-etiketi">Ders Kodu:</span> ${not.dersKodu}
                    <span class="not-etiketi">Dosya:</span> 
                    <a href="#" class="dosya-adi">${not.dosyaAdi} <i class="fas fa-download"></i></a>
                </div>

                <div class="not-yorum-alani">
                    <button class="btn-tesekkur">Teşekkür Et</button>
                    <button class="btn-soru">Soru Sor</button>

                    <textarea class="yorum-input" placeholder="Yorum yaz..."></textarea>
                    <input type="file" class="yorum-dosya"> 
                    <button class="btn-gonder">Gönder</button>

                    <div class="yorumlar-listesi"></div>
                </div>
            `;
            
            const yorumListesi = div.querySelector('.yorumlar-listesi');
           
            not.yorumlar.forEach(y => {
                const yEl = document.createElement('p');
                yEl.className = 'yorum-satiri';
                yEl.innerHTML = `<b>${y.kullanici}:</b> ${y.text}`;
                yorumListesi.appendChild(yEl);
            });

            
            div.querySelector('.btn-tesekkur').addEventListener('click', () => {
                alert('Teşekkür gönderildi 👍');
            });

            div.querySelector('.btn-soru').addEventListener('click', () => {
                alert('Sorunuz gönderildi ❓');
            });

            div.querySelector('.btn-gonder').addEventListener('click', () => {
                const txt = div.querySelector('.yorum-input').value.trim();
                if (txt.length === 0) return;

                not.yorumlar.push({
                    kullanici: aktifKullanici.adSoyad,
                    text: txt
                });

                notlariEkranaYansit();
            });

            return div;
        };

        const notlariEkranaYansit = () => {
            notListesiAlani.innerHTML = '';
            paylasilanNotlarListesi.slice().reverse().forEach(not => {
                notListesiAlani.appendChild(notKartiHTMLOlustur(not));
            });
        };
        
        
        const dosyaInput = document.getElementById('dosya');
        const dosyaAdiGoster = document.getElementById('dosya-adi-goster');
        const btnDosyaSec = document.querySelector('.btn-dosya-sec');

        if (btnDosyaSec) {
            btnDosyaSec.addEventListener('click', () => {
                
                if(dosyaInput) dosyaInput.click(); 
            });
        }

        if (dosyaInput && dosyaAdiGoster) {
            dosyaInput.addEventListener('change', () => {
                if (dosyaInput.files.length > 0) {
                    dosyaAdiGoster.value = dosyaInput.files[0].name;
                } else {
                    dosyaAdiGoster.value = 'Henüz dosya seçilmedi.';
                }
            });
        }
        

        if (notYuklemeFormuElementi) {
            notYuklemeFormuElementi.addEventListener('submit', (e) => {
                e.preventDefault();

                const dersKodu = document.getElementById('ders_kodu').value.trim();
                const dosya = document.getElementById('dosya');
                const notMetni = document.getElementById('not').value.trim();

                
                if (dosya.files.length === 0) {
                     alert("Lütfen bir dosya seçin.");
                     return;
                }
                
                const yeni = {
                    id: Date.now(),
                    kullanici: `${aktifKullanici.adSoyad}`,
                    tip: aktifKullanici.rol,
                    zaman: zamanFormatiniAl(),
                    dersKodu: dersKodu.toUpperCase(),
                    notMetni,
                    dosyaAdi: dosya.files[0].name,
                    yorumlar: []
                };

                paylasilanNotlarListesi.push(yeni);
                notlariEkranaYansit();
                notYuklemeFormuElementi.reset();
                
                if(dosyaAdiGoster) dosyaAdiGoster.value = 'Henüz dosya seçilmedi.'; 
            });
        }

        notlariEkranaYansit();
    }

    
    if (mevcutYol.includes('messaging.html')) {

        
        if (aktifKullanici.rol === 'akademisyen') {
            const icerikAlani = document.querySelector('.icerik');
            if (icerikAlani) {
                icerikAlani.innerHTML = '<h2>Erişim Engellendi 🔒</h2><p>Akademisyen öğrencilerin mesajlaşma ekranını göremez.</p>';
            }
            return;
        }

        
        const gonderBtn = document.querySelector('.buton-gonder');
        const input = document.querySelector('.mesaj-yazma-alani input[type="text"]');
        const mesajKutusu = document.querySelector('.mesajlar');
        const sohbetFiltreleri = document.querySelectorAll('.sohbet-filtre-linki'); 

        
        const sohbetVerileri = {
            fakulte: [
                { gonderen: { ad: 'Selin Aktaş', no: '232400001', mail: 'selin.a@ogr.edu.tr' }, icerik: 'Arkadaşlar vize haftası yaklaşıyor, hepinize başarılar dilerim!', zaman: '25 Kasım 2025 10:00' },
                { gonderen: { ad: "Ayşe", no: "242511100", mail: "ayse@mail" }, icerik: "WEB201 ders notlarını paylaşan var mı?", zaman: "13:45" }
            ],
            bolumum: [
                { gonderen: { ad: 'Doç. Dr. Ahmet Kara', no: '123456789', mail: 'ahmet.k@edu.tr' }, icerik: 'Tüm öğrencilerimiz için ek ders saatleri duyurulmuştur.', zaman: '24 Kasım 2025 14:00' },
                { gonderen: { ad: "Can", no: "242511111", mail: "can@mail" }, icerik: "Bölümümüzün bu haftaki etkinlikleri duyurulmuştur.", zaman: "10:00" }
            ],
            tumokul: [
                { gonderen: { ad: "Rektörlük", no: "000000000", mail: "rektorluk@edu.tr" }, icerik: 'Üniversitemiz kütüphanesi çalışma saatleri güncellenmiştir.', zaman: '23 Kasım 2025 09:00' },
                { gonderen: { ad: "Okul Spor", no: "000000002", mail: "spor@mail" }, icerik: "Okul futbol turnuvası kayıtları başladı.", zaman: "11:00" }
            ]
        };

        const mesajiEkranaEkle = (mesaj) => {
            const div = document.createElement('div');
            div.className = 'mesaj-kart kart';
            
            div.innerHTML = `
                <div class="mesaj-profil-bar">
                    <span>${mesaj.gonderen.ad} (${mesaj.gonderen.no})</span>
                    <span>${mesaj.gonderen.mail}</span>
                </div>
                <p class="mesaj-icerik">${mesaj.icerik}</p>
                <span class="mesaj-zaman">${mesaj.zaman}</span>
            `;
            mesajKutusu.appendChild(div);

            
            setTimeout(() => {
                mesajKutusu.scrollTop = mesajKutusu.scrollHeight;
            }, 30);
        };

        const mesajiListele = (mesajListesi) => {
            mesajKutusu.innerHTML = ''; 
            mesajListesi.forEach(mesajiEkranaEkle);
        };

        const mesajiEkleVeGonder = () => {
            const m = input.value.trim();
            if (!m) return;

            const yeni = {
                gonderen: { ad: aktifKullanici.adSoyad, no: aktifKullanici.ogrenciNo, mail: aktifKullanici.email },
                icerik: m,
                zaman: zamanFormatiniAl()
            };
            
            
            const aktifKanalLink = document.querySelector('.sohbet-filtre-linki.aktif-filtre');
            const aktifKanal = aktifKanalLink ? aktifKanalLink.getAttribute('data-kanal') : 'fakulte';

            
            if (sohbetVerileri[aktifKanal]) {
                sohbetVerileri[aktifKanal].push(yeni); 
            }

            
            mesajiEkranaEkle(yeni); 
            input.value = '';
        };

        const degistirSohbetKanali = (kanalAdi, tiklananLink) => {
            
            sohbetFiltreleri.forEach(link => link.classList.remove('aktif-filtre'));

            
            tiklananLink.classList.add('aktif-filtre');

            
            const yeniMesajlar = sohbetVerileri[kanalAdi] || [];
            mesajiListele(yeniMesajlar);
        };
        
        
        sohbetFiltreleri.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const kanal = link.getAttribute('data-kanal');
                degistirSohbetKanali(kanal, link);
            });
        });

        
        if (gonderBtn) gonderBtn.addEventListener('click', mesajiEkleVeGonder);

        if (input) {
            input.addEventListener('keypress', (e) => {
                if (e.key === "Enter") mesajiEkleVeGonder();
            });
        }
        
        
        const varsayilanFiltre = document.querySelector('.sohbet-filtre-linki.aktif-filtre');
        if (varsayilanFiltre) {
             const varsayilanKanal = varsayilanFiltre.getAttribute('data-kanal');
             mesajiListele(sohbetVerileri[varsayilanKanal] || []);
        } else {
             
             mesajiListele(sohbetVerileri.fakulte);
        }
    }
});