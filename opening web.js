// Definisi fungsi
function gotolib() {
    const userConfirmation = confirm("Apakah Anda yakin ingin membuka halaman perpustakaan?");
    if(userConfirmation) {
        window.open('https://library.usu.ac.id/', '_blank');
    }
}

// Hubungkan fungsi ke sebuah tombol atau link
document.getElementById('library-button').addEventListener('click', gotolib);
