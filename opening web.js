function gotolib() {
    const userConfirmation = confirm("Apakah Anda yakin ingin membuka halaman perpustakaan?");
    if(userConfirmation) {
        window.location.href = 'https://library.usu.ac.id/';
    }
}
