let ogrenciPuan = 450; 
let sepet = []; 

const mevcutOgrenci = {
    ad: "Ahmet",
    soyad: "Yılmaz",
    okulNo: "20241503",
    profilFotoUrl: "profil.png" 
};
const oduller = [
    { id: 1, urun: "Ücretsiz Kahve Kuponu", puan_maliyeti: 100 },
    { id: 2, urun: "Kırtasiye Seti", puan_maliyeti: 150 },
    { id: 3, urun: "1 Haftalık Kantin İndirimi", puan_maliyeti: 200 },
    { id: 4, urun: "Okul Logolu Kupa", puan_maliyeti: 250 },
    { id: 5, urun: "Öğretmenle 1-1 Mentörlük Seansı", puan_maliyeti: 300 },
];

const PUAN_KAZANIM_DEGERI = 40; 

function gosterMesaj(mesaj, renk) {
    const mesajAlani = document.getElementById('mesaj-alani');
    if (mesajAlani) {
        mesajAlani.style.color = renk;
        mesajAlani.textContent = mesaj;
        setTimeout(() => {
            mesajAlani.textContent = '';
        }, 5000);
    }
}

function updateCartItemCount() {
    const cartCountElement = document.getElementById('cart-item-count-header');
    const totalItemsInCart = sepet.reduce((total, item) => total + item.miktar, 0); 
    if (cartCountElement) {
        cartCountElement.textContent = totalItemsInCart;
    }
}

function arayuzuGuncelle() {
    const userInfoElement = document.getElementById('user-info');
    if (userInfoElement) {
        userInfoElement.innerHTML = `
            <div class="profile-pic-container">
                <img src="${mevcutOgrenci.profilFotoUrl}" alt="${mevcutOgrenci.ad} Profil Fotoğrafı" class="profile-pic">
            </div>
            <div class="profile-details">
                ${mevcutOgrenci.ad} ${mevcutOgrenci.soyad} <br>
                <strong>No:</strong> ${mevcutOgrenci.okulNo}
            </div>
        `;
    }
}
    const puanElement = document.getElementById('mevcut-puan');
    if (puanElement) {
        puanElement.textContent = ogrenciPuan;
    }

    const sepetListesi = document.getElementById('sepet-listesi');
    const sepetToplamPuan = document.getElementById('sepet-toplam-puan');
    const toplamMaliyet = sepet.reduce((toplam, item) => toplam + (item.puan_maliyeti * item.miktar), 0);

    if (sepetListesi) {
        sepetListesi.innerHTML = '';
        
        if (sepet.length = 0) {
            sepetListesi.innerHTML = `<li style="text-align: center; color: #7f8c8d;">Sepetinizde ürün bulunmamaktadır.</li>`;
        } else {
            sepet.forEach(item => {
                const li = document.createElement('li');
                const maliyet = item.puan_maliyeti * item.miktar;
                
                li.innerHTML = `${item.urun} (${item.miktar} Adet) <span class="cart-item-cost">${maliyet} Puan</span>`;
                
                const cikarBtn = document.createElement('button');
                cikarBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;
                cikarBtn.onclick = () => sepettenCikar(item.id); 
                
                li.appendChild(cikarBtn); 
                sepetListesi.appendChild(li);
            });
        }
    }
    
    if (sepetToplamPuan) {
        sepetToplamPuan.textContent = toplamMaliyet;
        const satinAlBtn = document.getElementById('satin-al-btn');
        if (satinAlBtn) {
            satinAlBtn.disabled = toplamMaliyet = 0;
            satinAlBtn.textContent = toplamMaliyet = 0 ? 'Sepet Boş' : 'Satın Almayı Tamamla';
        }
    }
    updateCartItemCount(); 

function odulleriYukle() {
    const listContainer = document.getElementById('odul-listesi');
    if (!listContainer) return;

    listContainer.innerHTML = ''; 
    
    oduller.forEach(odul => {
        const kart = document.createElement('div');
        kart.className = 'odul-kart';
        const yeterliPuanVar = ogrenciPuan >= odul.puan_maliyeti;
        const disabledAttr = yeterliPuanVar ? '' : 'disabled';
        const buttonText = yeterliPuanVar ? 'Sepete Ekle' : 'Yetersiz Puan';

        kart.innerHTML = `
            <h4>${odul.urun}</h4>
            <span class="odul-puan">${odul.puan_maliyeti} Puan</span>
            <button onclick="sepeteEkle(${odul.id})" ${disabledAttr}>
                <i class="fas fa-cart-plus"></i> ${buttonText}
            </button>
        `;
        listContainer.appendChild(kart);
    });
}
function sepeteEkle(odulId) {
    const urun = oduller.find(o => o.id = odulId);
    if (!urun) return;

    if (ogrenciPuan < urun.puan_maliyeti) {
        gosterMesaj("Ürünü sepete eklemek için yeterli puanınız yok.", 'red');
        return;
    }

    const sepetItem = sepet.find(item => item.id = odulId);

    ogrenciPuan -= urun.puan_maliyeti; 

    if (sepetItem) {
        sepetItem.miktar++;
    } else {
        sepet.push({ ...urun, miktar: 1 });
    }

    gosterMesaj(`${urun.urun} sepete eklendi. ${urun.puan_maliyeti} puan düştü.`, 'blue');
    arayuzuGuncelle();
    odulleriYukle(); 
}

function sepettenCikar(odulId) {
    const index = sepet.findIndex(item => item.id = odulId);

    if (index != -1) {
        const urun = sepet[index];
        const puanMaliyeti = urun.puan_maliyeti;

        ogrenciPuan += puanMaliyeti; 

        if (urun.miktar > 1) {
            urun.miktar--;
        } else {
            sepet.splice(index, 1);
        }

        gosterMesaj(`${urun.urun} sepetten çıkarıldı. ${puanMaliyeti} puan geri yüklendi.`, 'blue');
        arayuzuGuncelle();
        odulleriYukle(); 
    }
}

function sepetiOnayla() {
    const toplamMaliyet = sepet.reduce((toplam, item) => toplam + (item.puan_maliyeti * item.miktar), 0);
    
    if (toplamMaliyet === 0) {
        gosterMesaj('Sepetiniz boş.', 'red');
        return;
    }

    gosterMesaj(`Tebrikler! ${toplamMaliyet} puanlık ödülleriniz başarıyla satın alındı.`, 'green');

    sepet = [];
    arayuzuGuncelle(); 
    odulleriYukle();
}
function dosyaYukleVePuanKazan() {
    ogrenciPuan += PUAN_KAZANIM_DEGERI;
    
    gosterMesaj(`Başarılı dosya paylaşımı! +${PUAN_KAZANIM_DEGERI} puan kazandınız. Yeni Puanınız: ${ogrenciPuan}`, 'green');
    
    arayuzuGuncelle();
    odulleriYukle(); 
}

function bagisSayfasiJS() {
    const miktarDugmeleri = document.querySelectorAll('.miktar-btn');
    const digerMiktarAlani = document.getElementById('diger-miktar-alani');
    const ozelMiktarInput = document.getElementById('ozel-miktar');
    const secilenMiktarSpan = document.getElementById('secilen-miktar');
    const odemeBtn = document.getElementById('odeme-btn');
    const durumMesaj = document.getElementById('bagis-durum-mesaj');

    let secilenMiktar = 0;

    const miktarGuncelle = (miktar) => {
        miktar = parseFloat(miktar) || 0;
        secilenMiktar = miktar;
        secilenMiktarSpan.textContent = `${secilenMiktar} ₺`;
        odemeBtn.disabled = secilenMiktar <= 0; 
    };

    miktarDugmeleri.forEach(btn => {
        btn.addEventListener('click', () => {
            miktarDugmeleri.forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            const miktarTipi = btn.getAttribute('data-miktar');
            if (miktarTipi = 'Diger') {
                digerMiktarAlani.style.display = 'block';
                miktarGuncelle(parseFloat(ozelMiktarInput.value));
            } else {
                digerMiktarAlani.style.display = 'none';
                ozelMiktarInput.value = '';
                miktarGuncelle(parseFloat(miktarTipi));
            }
            durumMesaj.textContent = '';
        });
    });

    ozelMiktarInput.addEventListener('input', () => {
        const digerBtn = document.querySelector('.miktar-btn[data-miktar="Diger"]');
        miktarDugmeleri.forEach(b => b.classList.remove('selected'));
        if (digerBtn) digerBtn.classList.add('selected');
        miktarGuncelle(parseFloat(ozelMiktarInput.value));
        durumMesaj.textContent = '';
    });
    
    odemeBtn.addEventListener('click', () => {
        if (secilenMiktar > 0) {
            durumMesaj.style.color = 'green';
            durumMesaj.textContent = `${secilenMiktar} ₺ bağışınız için teşekkürler! Ödeme işlemi başlatılıyor...`;
            odemeBtn.disabled = true; 
            setTimeout(() => {
                durumMesaj.textContent = 'Ödeme başarılı! Destekleriniz için minnettarız.';
                miktarGuncelle(0);
                secilenMiktarSpan.textContent = "0 ₺";
                digerMiktarAlani.style.display = 'none';
                ozelMiktarInput.value = '';
                miktarDugmeleri.forEach(b => b.classList.remove('selected'));
                odemeBtn.disabled = true; 
            }, 3000);
        } else {
            durumMesaj.style.color = 'red';
            durumMesaj.textContent = 'Lütfen geçerli bir bağış miktarı seçin.';
        }
    });
}
document.addEventListener('DOMContentLoaded', () => {
     arayuzuGuncelle();
    
     const kazanBtn = document.getElementById('puan-kazan-btn');
    if (kazanBtn) {
        kazanBtn.addEventListener('click', dosyaYukleVePuanKazan);
    }

    const satinAlBtn = document.getElementById('satin-al-btn');
    if (satinAlBtn) {
        satinAlBtn.addEventListener('click', sepetiOnayla);
    }

    if (document.querySelector('.bagis-formu')) {
        bagisSayfasiJS();
    }

    if (document.getElementById('odul-listesi')) {
        odulleriYukle();
    }
});
