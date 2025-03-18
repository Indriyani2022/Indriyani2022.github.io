function gotolib() {
    const userConfirmation = confirm("Apakah Anda yakin ingin membuka halaman perpustakaan?");
    if(userConfirmation) {
        const newWindow = window.open('https://library.usu.ac.id/', '_blank');
        if (!newWindow || newWindow.closed || typeof newWindow.closed == 'undefined') {
            alert("Popup diblokir oleh browser. Silakan izinkan popup untuk website ini.");
        }
    }
}
