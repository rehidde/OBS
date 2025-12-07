/**
 * studentDashboard.js
 * Class, Kalıtım, Map, Asenkron Programlama (Simülasyon)
 */

// 1. CLASS KULLANIMI: TEMEL KULLANICI SINIFI
class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }
}

// 2. CLASS KALITIM (EXTENDS): ÖĞRENCİ SINIFI
class Student extends User {
    constructor(username, email, studentNo) {
        super(username, email);
        this.studentNo = studentNo;
        this.rewards = new Map();
    }

    async getPointsAndRewards() {
        const loadingDiv = document.getElementById('loading');
        loadingDiv.style.display = 'block';

        try {
            // 2 saniyelik yapay API gecikmesi
            const response = await new Promise(resolve => {
                setTimeout(() => {
                    resolve({
                        points: 850,
                        rewards: [
                            { id: 1, name: 'Başarı Belgesi' },
                            { id: 2, name: 'Onur Listesi' }
                        ]
                    });
                }, 2000);
            });

            response.rewards.forEach(r => this.rewards.set(r.id, r.name));

            return {
                points: response.points,
                rewards: this.rewards
            };

        } catch (error) {
            console.error("Hata oluştu:", error);
            return { points: 0, rewards: new Map() };

        } finally {
            loadingDiv.style.display = 'none';
        }
    }

    // Map görüntüleme
    displayRewards() {
        let rewardList = '<ul>';
        for (const [id, name] of this.rewards.entries()) {
            rewardList += <li>Ödül ID: ${id} - ${name}</li>;
        }
        rewardList += '</ul>';
        return rewardList;
    }
}

// 3. SAYFA YÜKLENİNCE ÇALIŞACAK KOD
document.addEventListener('DOMContentLoaded', async () => {

    const currentStudent = new Student('İrem Yılmaz', 'irem@example.com', '180105');

    // 🔵 PROFİL KUTUSUNA VERİ YAZDIR
    document.querySelector('.student-info-box').innerHTML = `
        <h3>👤 Öğrenci Bilgileri</h3>
        <p><strong>Ad Soyad:</strong> ${currentStudent.username}</p>
        <p><strong>Email:</strong> ${currentStudent.email}</p>
        <p><strong>Öğrenci No:</strong> ${currentStudent.studentNo}</p>
    `;

    // ⭐ PUANLAR VE ÖDÜLLER
    const data = await currentStudent.getPointsAndRewards();

    const pointsDiv = document.getElementById('points-display');
    const rewardsDiv = document.getElementById('rewards-display');

    if (data.points > 0) {
        pointsDiv.innerHTML = Mevcut Puaniniz: <b>${data.points}</b>;
        rewardsDiv.innerHTML = <h3>🏆 Kazanılan Ödüller</h3>${currentStudent.displayRewards()};
    } else {
        pointsDiv.textContent = "Veri çekilemedi.";
    }
});