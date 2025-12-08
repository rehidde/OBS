function toggleMenu(button) {
    const menu = button.nextElementSibling;
    
    closeAllMenus(menu);

    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }

    event.stopPropagation();
}

function closeAllMenus(exceptThisMenu = null) {
    const allMenus = document.querySelectorAll('.dropdown-menu');
    allMenus.forEach(menu => {
        if (menu !== exceptThisMenu) {
            menu.style.display = 'none';
        }
    });
}

window.addEventListener('click', function() {
    closeAllMenus();
});
const searchInput = document.querySelector('.search-input');
const tableRows = document.querySelectorAll('.exam-table tbody tr');

if (searchInput) {
    searchInput.addEventListener('keyup', function() {
        const searchText = this.value.toLowerCase();

        tableRows.forEach(row => {

            const rowText = row.innerText.toLowerCase();
            if (rowText.includes(searchText)) {
                row.style.display = '';
            } else {
                row.style.display = 'none'; 
            }
        });
    });
}