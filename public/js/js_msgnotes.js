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

        mesajInput.addEventListener("keypress", function (e) {
            if (e.key === "Enter") {
                gonderBtn.click();
            }
        });
    }

    
    kanalLinkleri.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            kanalLinkleri.forEach(l => l.classList.remove("aktif-filtre"));
            link.classList.add("aktif-filtre");

            mesajlarKutusu.innerHTML =
                "<p><i>Kanal değiştirildi. Mesajlar simülasyon.</i></p>";
        });
    });

});