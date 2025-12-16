document.addEventListener('DOMContentLoaded', () => {

    const mevcutYol = window.location.pathname;

    const aktifKullanici = {
        ad_soyad: 'Ahmet Yılmaz', 
        numara: '242599999',      
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
                ${aktifKullanici.ad_soyad} <br>
                <strong>No:</strong> ${aktifKullanici.numara} 
            </div>
            <div class="profile-pic-container">
                <i class="fas fa-user-circle profile-pic" style="color: #6c757d; font-size: 60px;"></i>
            </div>
        `;
    }

   
    if (mevcutYol.includes('notes.html')) {
        const notYuklemeFormuElementi = document.getElementById('not-yukleme-formu');
        const notListesiAlani = document.getElementById('not-listesi');
        
        const dosyaInput = document.getElementById('dosya');
        const dosyaAdiGoster = document.getElementById('dosya-adi-goster');
        const btnDosyaSec = document.querySelector('.btn-dosya-sec');

        if (btnDosyaSec) {
            btnDosyaSec.addEventListener('click', () => dosyaInput && dosyaInput.click());
        }

        if (dosyaInput && dosyaAdiGoster) {
            dosyaInput.addEventListener('change', () => {
                dosyaAdiGoster.value = dosyaInput.files.length > 0 ? dosyaInput.files[0].name : 'Henüz dosya seçilmedi.';
            });
        }
        
        document.querySelectorAll('.paylasim-kutu').forEach(kart => {
            const notId = kart.getAttribute('data-id') || 'bilinmeyen';
            const yorumListesi = kart.querySelector('.yorumlar-listesi');
            const yorumInput = kart.querySelector('.yorum-input');
            
            kart.querySelector('.btn-tesekkur')?.addEventListener('click', () => alert(`[ID: ${notId}]'li nota teşekkür gönderildi 👍`));
            kart.querySelector('.btn-soru')?.addEventListener('click', () => alert(`[ID: ${notId}]'li nota soru gönderildi ❓`));
            
            kart.querySelector('.btn-gonder')?.addEventListener('click', () => {
                const txt = yorumInput?.value.trim();
                if (txt && yorumListesi) {
                    const yEl = document.createElement('p');
                    yEl.className = 'yorum-satiri';
                    yEl.innerHTML = `<b>${aktifKullanici.ad_soyad}:</b> ${txt}`;
                    yorumListesi.appendChild(yEl); 
                    yorumInput.value = ''; 
                    alert(`Yorumunuz eklendi (Sayfa yenilenince kaybolur).`);
                }
            });
        });

        if (notYuklemeFormuElementi) {
            notYuklemeFormuElementi.addEventListener('submit', (e) => {
                e.preventDefault();

                const dersKodu = document.getElementById('ders_kodu')?.value.trim();
                const dosya = document.getElementById('dosya');
                const notMetni = document.getElementById('not')?.value.trim();
                
                if (dosya.files.length === 0) {
                     alert("Lütfen bir dosya seçin.");
                     return;
                }
                
                const dosyaAdi = dosya.files[0].name;

                const yeniKartHTML = `
                    <div class="paylasim-kutu kart ${aktifKullanici.rol}" data-id="${Date.now()}">
                        <div class="paylasim-header">
                            <div class="user-icon"><i class="fas fa-user-circle"></i></div>
                            <span class="kullanici-adi" style="color:var(--color-student);">${aktifKullanici.ad_soyad}</span>
                            <span class="zaman-damgasi">${zamanFormatiniAl()}</span>
                        </div>
                        <p class="not-metni">${notMetni}</p>
                        <div class="yukleme-notu-alani">
                            <span class="not-etiketi">Ders Kodu:</span> ${dersKodu?.toUpperCase()}
                            <span class="not-etiketi">Dosya:</span> 
                            <a href="#" class="dosya-adi">${dosyaAdi} <i class="fas fa-download"></i></a>
                        </div>
                        <div class="not-yorum-alani">
                            <button class="btn-tesekkur">Teşekkür Et</button>
                            <button class="btn-soru">Soru Sor</button>
                            <textarea class="yorum-input" placeholder="Yorum yaz..."></textarea>
                            <input type="file" class="yorum-dosya"> 
                            <button class="btn-gonder">Gönder</button>
                            <div class="yorumlar-listesi"></div>
                        </div>
                    </div>
                `;

                notListesiAlani?.insertAdjacentHTML('afterbegin', yeniKartHTML);
                notYuklemeFormuElementi.reset();
                if(dosyaAdiGoster) dosyaAdiGoster.value = 'Henüz dosya seçilmedi.'; 
                alert("Notunuz başarıyla eklendi (Yenileme yaparsanız kaybolur).");
            });
        }
    }

    
    if (mevcutYol.includes('messaging.html')) {
        
        const sohbetFiltreleri = document.querySelectorAll('.sohbet-filtre-linki');
        const input = document.getElementById('mesaj-input');
        const gonderBtn = document.querySelector('.mesaj-yazma-alani .buton-gonder');
        const mesajlarKutusu = document.querySelector('.aktif-sohbet-penceresi .mesajlar');

        const mesajiEkranaEkle = (mesaj) => {
            if (!mesajlarKutusu) return;

            const html = `<div class="mesaj-kart kart">
                <div class="mesaj-profil-bar">
                    <span>${mesaj.gonderen.ad_soyad} (${mesaj.gonderen.numara})</span>
                    <span>${mesaj.gonderen.email}</span>
                </div>
                <p class="mesaj-icerik">${mesaj.icerik}</p>
                <span class="mesaj-zaman">${mesaj.tarih}</span>
            </div>`;
            mesajlarKutusu.insertAdjacentHTML('beforeend', html);
            mesajlarKutusu.scrollTop = mesajlarKutusu.scrollHeight; 
        };

        const mesajiEkleVeGonder = () => {
            if (!input || !input.value.trim() || input.disabled) return;
            
            const aktifKanal = mesajlarKutusu?.getAttribute('data-aktif-kanal');
            
            if (aktifKullanici.rol === 'ogrenci' && aktifKanal === 'fakulte') {
                 alert("Öğrenciler Fakülte kanalına mesaj gönderemez.");
                 input.value = '';
                 return;
            }

            const yeni = {
                gonderen: { ad_soyad: aktifKullanici.ad_soyad, numara: aktifKullanici.numara, email: aktifKullanici.email },
                icerik: input.value.trim(),
                tarih: zamanFormatiniAl() 
            };

            mesajiEkranaEkle(yeni); 
            input.value = '';
        };

        const degistirSohbetKanali = (kanalAdi, tiklananLink) => {
            sohbetFiltreleri.forEach(link => link.classList.remove('aktif-filtre'));
            tiklananLink.classList.add('aktif-filtre');
            
            mesajlarKutusu?.setAttribute('data-aktif-kanal', kanalAdi);

            const ogrenciEngeli = aktifKullanici.rol === 'ogrenci' && kanalAdi === 'fakulte';
            
            input?.toggleAttribute('disabled', ogrenciEngeli);
            gonderBtn?.toggleAttribute('disabled', ogrenciEngeli);
            
            if (ogrenciEngeli) {
                 input?.setAttribute('placeholder', 'Yalnızca Bölüm ve Okul kanallarına yazabilirsiniz...');
            } else {
                 input?.setAttribute('placeholder', 'Bir mesaj yazın...');
            }
            
            alert(`Kanal ${kanalAdi} olarak değiştirildi. Mesajlar yenilenmedi (Veritabanı entegrasyonu gerekli).`);

        };
        
        
        sohbetFiltreleri.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const kanal = link.getAttribute('data-kanal');
                degistirSohbetKanali(kanal, link);
            });
        });

        if (gonderBtn) gonderBtn.addEventListener('click', mesajiEkleVeGonder);
        if (input) input.addEventListener('keypress', (e) => { if (e.key === "Enter") mesajiEkleVeGonder(); });

    }
});