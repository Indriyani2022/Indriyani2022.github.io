function gotolib() {
    const userConfirmation = confirm("Apakah Anda yakin ingin membuka halaman perpustakaan?");

    if(userConfirmation) {
        window.open('https://library.usu.ac.id/', '_blank');   
    }
}
