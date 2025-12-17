document.addEventListener("DOMContentLoaded", function () {

    function zamanFormatla() {
        const d = new Date();
        return d.toLocaleDateString("tr-TR") + " " +
               d.toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" });
    }

    
    const notFormu = document.getElementById("not-yukleme-formu");
    const notListesi = document.getElementById("not-listesi");

    if (notFormu && notListesi) {

        notFormu.addEventListener("submit", function (e) {
            e.preventDefault();

            const dersKodu = document.getElementById("ders_kodu").value.trim();
            const aciklama = document.getElementById("not").value.trim();
            const dosyaInput = document.getElementById("dosya");

            if (!dersKodu || !aciklama || dosyaInput.files.length === 0) {
                alert("Tüm alanları doldur.");
                return;
            }

            const dosyaAdi = dosyaInput.files[0].name;

            const yeniNotHTML = `
                <div class="paylasim-kutu" data-id="${Date.now()}">

                    <b>Sen</b>
                    <small> | ${zamanFormatla()}</small>

                    <p>${aciklama}</p>

                    <p>
                        <b>Ders:</b> ${dersKodu}<br>
                        <b>Dosya:</b> ${dosyaAdi}
                    </p>

                    <div class="yorumlar-listesi">
                        <p><i>Henüz yorum yok.</i></p>
                    </div>

                    <textarea class="yorum-input" placeholder="Yorum yaz..."></textarea>
                    <button class="btn-gonder">Gönder</button>

                </div>
            `;

            notListesi.insertAdjacentHTML("afterbegin", yeniNotHTML);
            notFormu.reset();

            alert("Not eklendi (sayfa yenilenirse kaybolur).");
        });

        
        notListesi.addEventListener("click", function (e) {
            if (e.target.classList.contains("btn-gonder")) {

                const kart = e.target.closest(".paylasim-kutu");
                const input = kart.querySelector(".yorum-input");
                const liste = kart.querySelector(".yorumlar-listesi");

                if (!input.value.trim()) return;

                const ilk = liste.querySelector("i");
                if (ilk) liste.innerHTML = "";

                const p = document.createElement("p");
                p.innerHTML = `<b>Sen:</b> ${input.value}`;

                liste.appendChild(p);
                input.value = "";
            }
        });
    }

    const mesajInput = document.getElementById("mesaj-input");
    const gonderBtn = document.querySelector(".buton-gonder");
    const mesajlarKutusu = document.querySelector(".mesajlar");
    const kanalLinkleri = document.querySelectorAll(".sohbet-filtre-linki");

    function mesajiEkle(icerik) {
        const html = `
            <div class="mesaj-kart">
                <div class="mesaj-profil-bar">
                    <b>Sen</b>
                </div>
                <p class="mesaj-icerik">${icerik}</p>
                <small class="mesaj-zaman">${zamanFormatla()}</small>
            </div>
        `;
        mesajlarKutusu.insertAdjacentHTML("beforeend", html);
        mesajlarKutusu.scrollTop = mesajlarKutusu.scrollHeight;
    }

    if (gonderBtn && mesajInput && mesajlarKutusu) {

        gonderBtn.addEventListener("click", function () {
            if (!mesajInput.value.trim()) return;
            mesajiEkle(mesajInput.value.trim());
            mesajInput.value = "";
        });

<<<<<<< HEAD
        mesajInput.addEventListener("keypress", function (e) {
            if (e.key === "Enter") {
                gonderBtn.click();
            }
        });
=======
        if (notYuklemeFormuElementi) {
            notYuklemeFormuElementi.addEventListener('submit', (e) => {
                e.preventDefault();

                const dersKodu = document.getElementById('ders_kodu')?.value.trim();
                const dosya = document.getElementById('dosya');
                const notMetni = document.getElementById('not')?.value.trim();
                
                if (dosya.files.length == 0) {
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
>>>>>>> 162cd557bffb2d86def63a218de43623995891a0
    }

    
    kanalLinkleri.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            kanalLinkleri.forEach(l => l.classList.remove("aktif-filtre"));
            link.classList.add("aktif-filtre");

<<<<<<< HEAD
            mesajlarKutusu.innerHTML =
                "<p><i>Kanal değiştirildi. Mesajlar simülasyon.</i></p>";
=======
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
            
            if (aktifKullanici.rol == 'ogrenci' && aktifKanal == 'fakulte') {
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

            const ogrenciEngeli = aktifKullanici.rol == 'ogrenci' && kanalAdi == 'fakulte';
            
            input?.toggleAttribute('disabled', ogrenciEngeli);
            gonderBtn?.toggleAttribute('disabled', ogrenciEngeli);
            
            if (ogrenciEngeli) {
                 input?.setAttribute('placeholder', 'Yalnızca Bölüm ve Okul kanallarına yazabilirsiniz...');
            } else {
                 input?.setAttribute('placeholder', 'Bir mesaj yazın...');
            }
            
            alert(`Kanal ${kanalAdi} olarak değiştirildi. Mesajlar yenilenmedi.`);

        };
        
        
        sohbetFiltreleri.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const kanal = link.getAttribute('data-kanal');
                degistirSohbetKanali(kanal, link);
            });
>>>>>>> 162cd557bffb2d86def63a218de43623995891a0
        });
    });

<<<<<<< HEAD
=======
        if (gonderBtn) gonderBtn.addEventListener('click', mesajiEkleVeGonder);
        if (input) input.addEventListener('keypress', (e) => { if (e.key == "Enter") mesajiEkleVeGonder(); });

    }
>>>>>>> 162cd557bffb2d86def63a218de43623995891a0
});