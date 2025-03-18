function bukaHalamanPerpustakaan() {
    const konfirmasiPengguna = confirm("Apakah Anda ingin mengakses situs web perpustakaan sekarang?");
    if(konfirmasiPengguna) {
        window.open('https://library.usu.ac.id/', '_blank');
    }
}
