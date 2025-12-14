

const ogrenci = {
    id: "242523",
    ad: "Zeynep",
    soyad: "Arslan",
    bolum: "Bilgisayar Mühendisliği",
    numara: "242523",
    sifre: "7032",
    dersler: [
        {
            ad: "Programlamaya Giriş",
            kredi: 3,
            akts: 5,
            not: 85,
            ogretmen: "Ahmet Yılmaz"
        },
        {
            ad: "Veri İletişimi",
            kredi: 3,
            akts: 5,
            not: 78,
            ogretmen: "Mehmet Kaya"
        },
        {
            ad: "Devre Analizi",
            kredi: 3,
            akts: 5,
            not: 90,
            ogretmen: "Fatma Demir"
        }
    ]
};

document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("adSoyad").innerHTML=req.session.kullanici.ad + " " + ogrenci.soyad;
    document.getElementById("numara").innerHTML=ogrenci.numara;
    document.getElementById("bolum").innerHTML=ogrenci.bolum;

    const tbody = document.getElementById("dersler-body");

ogrenci.dersler.forEach(function(ders){
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${ders.ad}</td>
    <td>${ders.kredi}</td>
    <td>${ders.akts}</td>
    <td>${ders.not}</td>
    <td>${ders.ogretmen}</td>`;

    tbody.appendChild(tr);
    
})



let toplamNot = 0;
let toplamKredi = 0;

ogrenci.dersler.forEach(function(ders){
    toplamNot += ders.not * ders.kredi;
    toplamKredi += ders.kredi;
});

const agno = (toplamNot / toplamKredi);
document.getElementById("ortalama").textContent = agno.toFixed(2);


})

