const data = {
    tc: "242523",
    ad: "ZEYNEP",
    soyad: "ARSLAN",
    anne: "MERYEM",
    baba: "ADEM",
    dogum: "03.05.2002 / TÜRKİYE CUMHURİYETİ",
    kayit: "19.08.2024",
    egitim: "ÖRGÜN ÖĞRETİM / 4",
    durum: "AKTİF ÖĞRENCİ",
    sinif: "2. SINIF",
    program: "KIRŞEHİR AHİ EVRAN ÜNİVERSİTESİ / ...",
};

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("tcno").innerHTML = data.tc;
    document.getElementById("adsoyad").innerHTML = data.ad + " " + data.soyad;
    document.getElementById("anne").innerHTML = data.anne;
    document.getElementById("baba").innerHTML = data.baba;
    document.getElementById("dogum").innerHTML = data.dogum;
    document.getElementById("kayit").innerHTML = data.kayit;
    document.getElementById("egitim").innerHTML = data.egitim;
    document.getElementById("durum").innerHTML = data.durum;
    document.getElementById("sinif").innerHTML = data.sinif;
    document.getElementById("program").innerHTML = data.program;
    document.getElementById("adsoyad-2").innerHTML =
        data.ad + " " + data.soyad;
});
