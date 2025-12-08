let ogrenciPuan = 450; 
let sepet = [];

const oduller = [
    { id: 1, urun: "Ücretsiz Kahve Kuponu", puan_maliyeti: 100 },
    { id: 2, urun: "Kırtasiye Seti", puan_maliyeti: 150 },
    { id: 3, urun: "1 Haftalık Kantin İndirimi", puan_maliyeti: 200 },
    { id: 4, urun: "Okul Logolu Kupa", puan_maliyeti: 250 },
    { id: 5, urun: "Öğretmenle 1-1 Mentörlük Seansı", puan_maliyeti: 300 }
];

function gosterMesaj(mesaj, renk) {
    var mesajAlani = document.getElementById("mesaj-alani");
    if (mesajAlani) {
        mesajAlani.style.color = renk;
        mesajAlani.textContent = mesaj;

        setTimeout(function () {
            mesajAlani.textContent = "";
        }, 3000);
    }
}

function arayuzuGuncelle() {
    var puanAlani = document.getElementById("mevcut-puan");
    if (puanAlani) {
        puanAlani.textContent = ogrenciPuan;
    }

    sepetiListele(); 
}

function odulleriYukle() {
    var liste = document.getElementById("odul-listesi");
    if (!liste) return;

    liste.innerHTML = "";

    for (var i = 0; i < oduller.length; i++) {
        var odul = oduller[i];
        var kart = document.createElement("div");
        kart.className = "odul-kart";

        kart.innerHTML =
            "<h3>" + odul.urun + "</h3>" +
            "<p>" + odul.puan_maliyeti + " Puan</p>" +
            "<button onclick='sepeteEkle(" + odul.id + ")'>Sepete Ekle</button>";

        liste.appendChild(kart);
    }
}

function sepeteEkle(id) {
    var urun = null;

    for (var i = 0; i < oduller.length; i++) {
        if (oduller[i].id == id) {
            urun = oduller[i];
        }
    }

    if (urun == null) return;

    if (ogrenciPuan < urun.puan_maliyeti) {
        gosterMesaj("Yetersiz puan!", "red");
        return;
    }

    ogrenciPuan -= urun.puan_maliyeti;

    var bulundu = false;

    for (var i = 0; i < sepet.length; i++) {
        if (sepet[i].id == id) {
            sepet[i].miktar++;
            bulundu = true;
        }
    }

    if (!bulundu) {
        sepet.push({
            id: urun.id,
            urun: urun.urun,
            puan_maliyeti: urun.puan_maliyeti,
            miktar: 1
        });
    }

    gosterMesaj(urun.urun + " sepete eklendi.", "green");
    arayuzuGuncelle();
}

function sepettenCikar(id) {
    for (var i = 0; i < sepet.length; i++) {
        if (sepet[i].id == id) {
            ogrenciPuan += sepet[i].puan_maliyeti;

            if (sepet[i].miktar > 1) {
                sepet[i].miktar--;
            } else {
                sepet.splice(i, 1);
            }
            break;
        }
    }

    gosterMesaj("Ürün sepetten çıkarıldı.", "blue");
    arayuzuGuncelle();
}

function sepetiListele() {
    var liste = document.getElementById("sepet-listesi");
    var toplamAlani = document.getElementById("sepet-toplam-puan");

    if (!liste) return;

    liste.innerHTML = "";
    var toplam = 0;

    for (var i = 0; i < sepet.length; i++) {
        var item = sepet[i];
        toplam += item.miktar * item.puan_maliyeti;

        var li = document.createElement("li");
        li.innerHTML =
            item.urun + " (" + item.miktar + ") - " +
            (item.miktar * item.puan_maliyeti) +
            " Puan <button onclick='sepettenCikar(" + item.id + ")'>Kaldır</button>";

        liste.appendChild(li);
    }

    if (toplamAlani) {
        toplamAlani.textContent = toplam;
    }
}

var miktarButonlari = document.querySelectorAll(".miktar-btn");
var digerMiktarAlani = document.getElementById("diger-miktar-alani");
var ozelInput = document.getElementById("ozel-miktar");
var secilenText = document.getElementById("secilen-miktar");
var odemeBtn = document.getElementById("odeme-btn");
var bagisMesaj = document.getElementById("bagis-durum-mesaj");

var secilenMiktar = 0;

for (var i = 0; i < miktarButonlari.length; i++) {
    miktarButonlari[i].addEventListener("click", function () {
            for (var j = 0; j < miktarButonlari.length; j++) {
            miktarButonlari[j].classList.remove("selected");
        }

        this.classList.add("selected");
        var miktar = this.getAttribute("data-miktar");

        if (miktar == "Diger") {
            digerMiktarAlani.style.display = "block";
            secilenMiktar = 0;
            secilenText.textContent = "Özel miktar giriniz...";
            odemeBtn.disabled = true;
        } else {
            digerMiktarAlani.style.display = "none";
            secilenMiktar = Number(miktar);
            secilenText.textContent = miktar + " ₺";
            odemeBtn.disabled = false;
        }
    });
}

if (ozelInput) {
    ozelInput.addEventListener("input", function () {
        var girilen = Number(ozelInput.value);

        if (girilen >= 10) {
            secilenMiktar = girilen;
            secilenText.textContent = girilen + " ₺";
            odemeBtn.disabled = false;
        } else {
            secilenText.textContent = "Minimum 10 ₺";
            odemeBtn.disabled = true;
        }
    });
}

if (odemeBtn) {
    odemeBtn.addEventListener("click", function () {

        if (secilenMiktar <= 0) {
            bagisMesaj.style.color = "red";
            bagisMesaj.textContent = "Geçerli miktar seçiniz.";
            return;
        }

        bagisMesaj.style.color = "green";
        bagisMesaj.textContent = secilenMiktar + " ₺ bağışınız alınmıştır.";

        secilenText.textContent = "0 ₺";
        secilenMiktar = 0;
        odemeBtn.disabled = true;

        for (var j = 0; j < miktarButonlari.length; j++) {
            miktarButonlari[j].classList.remove("selected");
        }

        digerMiktarAlani.style.display = "none";
        if (ozelInput) {
            ozelInput.value = "";
        }
    });
}

document.addEventListener("DOMContentLoaded", function () {
    arayuzuGuncelle();
    odulleriYukle();
});

app.get("/puan", (req, res) => {
    res.render("puan", {
        ad: "Berfin",
        soyad: "Kaya",
        okulNo: "20241503",
        program: "Bilgisayar Programcılığı",
        foto_url: "/images/profil.png",
        mevcutPuan: 450
    });
});
app.get("/rewards", (req, res) => {
    res.render("rewards", {
        mevcutPuan: 450
    });
});
app.get("/donation", (req, res) => {
    res.render("donation", {
        adSoyad: "Berfin Kaya",
        okulNo: "20241503",
        programAdi: "Bilgisayar Programcılığı",
        fotoURL: "/images/default.png",
        mevcutPuan: 450
    });
});
