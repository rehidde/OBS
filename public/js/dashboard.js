class User {
    constructor(name, lastLogin, profilePic) {
        this._name = name;
        this._lastLogin = lastLogin;
        this._profilePic = profilePic;
    }

    get name() {
        return this._name;
    }

    get lastLogin() {
        return this._lastLogin;
    }

    get profilePic() {
        return this._profilePic;
    }

    set profilePic(newUrl) {
        this._profilePic = newUrl;
    }
}

class Student extends User {
    constructor(name, lastLogin, profilePic, studentId) {
        super(name, lastLogin, profilePic);
        this.studentId = studentId;
        this.rewards = new Map();
    }

    get formattedName() {
        return `${this._name} (${this.studentId})`;
    }
}
class StudentDocument {
    constructor() {
        this.rawData = {
            tc: "242523",
            ad: "ZEYNEP",
            soyad: "ARSLAN",
            anne: "MERYEM",
            baba: "ADEM",
            dogum: "03.05.2002 / TÜRKİYE CUMHURİYETİ",
            kayit: "19.08.2024",
            egitim: "ÖRGÜN ÖĞRETİM / 4 Yıl",
            durum: "AKTİF ÖĞRENCİ",
            sinif: "2. SINIF",
            program: "KIRŞEHİR AHİ EVRAN ÜNİVERSİTESİ / Bilgisayar Müh."
        };
    }


    get info() {
        return { ...this.rawData }; 
    }
}
class OBSSystem {
    constructor(student) {
        this.student = student;
        this.documentData = new StudentDocument();

        this.contentMap = new Map();
        if (typeof pageContents !== 'undefined') {
            Object.entries(pageContents).forEach(([key, value]) => {
                this.contentMap.set(key, value);
            });
        }
        
        this.initElements();
        this.initListeners();
    }

    initElements() {
        this.mainArea = document.getElementById("main-area");
        this.menuItems = [...document.querySelectorAll(".menu-item")];
        
        const profileNameEl = document.getElementById("profile-name");
        const lastLoginEl = document.getElementById("last-login");
        const profilePicEl = document.getElementById("profile-pic");

        if(profileNameEl) profileNameEl.textContent = this.student.name;
        if(lastLoginEl) lastLoginEl.textContent = "Son Giriş: " + this.student.lastLogin;
        if(profilePicEl) profilePicEl.src = this.student.profilePic;
    }

    initListeners() {
        this.menuItems.forEach(item => {
            item.addEventListener('click', () => {
                this.activePage = item.id;
            });
        });
    }
    set activePage(menuId) {
        this.menuItems.forEach(item => item.classList.remove('active'));
        const activeItem = document.getElementById(menuId);
        if(activeItem) activeItem.classList.add('active');
        const content = this.contentMap.get(menuId) || `<div class="content-box"><h2>Merhaba,Hoşgeldiniz!</h2><p>Menüden devam ediniz..</p></div>`;
        this.mainArea.innerHTML = content;
        
        this.triggerRenderFunctions(menuId);
    }

    triggerRenderFunctions(menuId) {
        switch (menuId) {
            case 'transkript': 
                if(typeof renderTranskript === 'function') renderTranskript(); 
                break;
            case 'ogrenci-belgesi': 
                this.renderOgrenciBelgesi(); 
                break;
            case 'not-paylasim': 
                if(typeof renderNotPaylasim === 'function') renderNotPaylasim(); 
                break;
            case 'mesajlasma': 
                if(typeof renderMesajlasma === 'function') renderMesajlasma(); 
                break;
            case 'puanlarim': 
                if(typeof renderPuanlarim === 'function') renderPuanlarim(); 
                break;
            case 'oduller': 
                if(typeof renderOduller === 'function') renderOduller(); 
                break;
        }
    }

    renderOgrenciBelgesi() {
        const data = this.documentData.info;

        const setText = (id, text) => {
            const el = document.getElementById(id);
            if (el) el.textContent = text;
        };

        setText("tcno", data.tc);
        setText("adsoyad", `${data.ad} ${data.soyad}`);
        setText("anne", data.anne);
        setText("baba", data.baba);
        setText("dogum", data.dogum);
        setText("kayit", data.kayit);
        setText("egitim", data.egitim);
        setText("sinif", data.sinif);
        setText("program", data.program);
        setText("adsoyad-2", `${data.ad} ${data.soyad}`);
    }

    static zamanFormatiniAl() {
        const now = new Date();
        const datePart = now.toLocaleDateString('tr-TR', { day: 'numeric', month: 'long', year: 'numeric' });
        const timePart = now.toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' });
        return `${datePart} ${timePart}`;
    }

    static updateCartItemCount() {
        const cartCountElement = document.getElementById('cart-item-count-header');
        if (cartCountElement && typeof sepet !== 'undefined') {
            const totalItemsInCart = sepet.reduce((total, item) => total + item.miktar, 0);
            cartCountElement.textContent = totalItemsInCart;
        }
    }
}



document.addEventListener('DOMContentLoaded', async () => {
    const student = new Student("İrem Yılmaz", "25.11.2025", "https://via.placeholder.com/45", "180105");
    
    const obsSystem = new OBSSystem(student);
    
    obsSystem.activePage = 'transkript';

    const profileBox = document.getElementById("profile-box");
    const profileMenu = document.getElementById("profile-menu");

    if (profileBox && profileMenu) {
        profileBox.addEventListener("click", (e) => {
            e.stopPropagation();
            const currentDisplay = profileMenu.style.display;
            profileMenu.style.display = currentDisplay === "flex" ? "none" : "flex";
        });

        document.addEventListener("click", () => {
            profileMenu.style.display = "none";
        });
    }
});

window.openProfileSettings = () => {
    alert("Profil Ayarları Açılacak! (istersen sayfa tasarlayabilirim)");
};

window.logout = () => {
    alert("Çıkış yapıldı!");
};