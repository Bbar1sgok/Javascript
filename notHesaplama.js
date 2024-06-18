let vize, final;

// 0 ve 100 arasında not almak için fonksiyon
function gecerliNotAl(promptMesaji) {
    let not;
    while (true) {
        not = prompt(promptMesaji);
        if (not === null) {
            return null;  // Kullanıcı iptal ederse null döner
        }
        not = parseFloat(not);
        if (!isNaN(not) && not >= 0 && not <= 100) {
            return not;
        } else {
            alert("Lütfen 0 ile 100 arasında geçerli bir not giriniz.");
        }
    }
}

vize = gecerliNotAl("Lütfen vize notunuzu 0 ile 100 arasında bir sayı olarak giriniz:");
if (vize === null) {
    // Kullanıcı işlemi iptal ederse, script'i durdur
    alert("İşlem iptal edildi.");
} else {
    final = gecerliNotAl("Lütfen final notunuzu 0 ile 100 arasında bir sayı olarak giriniz:");
    if (final === null) {
        // Kullanıcı işlemi iptal ederse, script'i durdur
        alert("İşlem iptal edildi.");
    } else {
        let gecmeNotu = (vize * 0.4) + (final * 0.6);

        if (gecmeNotu >= 50) {
            alert("Tebrikler, dersi geçtiniz!");
        } else {
            alert("Girdiğiniz notlar dersi geçmeniz için yeterli değildir.");
        }
    }
}
