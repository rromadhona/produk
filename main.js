function kirimPesan() {

    var nama = document.getElementById('nama');
    var whatsapp = document.getElementById('whatsapp');
    var email = document.getElementById('email');
    var pesan = document.getElementById('pesan');

    var gabungan = '%3Cb%3ENama%3C%2Fb%3E : ' + nama.value + '%0A%3Cb%3EWhatsapp%3C%2Fb%3E : ' + whatsapp.value + '%0A%3Cb%3EEmail%3C%2Fb%3E : ' + email.value + '%0A%3Cb%3EPesan%3C%2Fb%3E : ' + pesan.value;

    var token = '6348906384:AAEl9NRflZVgiSpbjrby3RBR-R-_2DqfWjg'; // Ganti dengan token bot yang kamu buat
    var grup = '-1001974676085'; // Ganti dengan chat id dari bot yang kamu buat

    $.ajax({
        url: `https://api.telegram.org/bot${token}/sendMessage?chat_id=${grup}&text=${gabungan}&parse_mode=html`,
        method: `POST`,
    })
}