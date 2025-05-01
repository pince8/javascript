let dizel = 24.53,
  benzin = 22.25,
  lpg = 11.1;
const yeniSatir = '\r\n';

const yakitMetni =
  '1-Dizel' +
  yeniSatir +
  '2-Benzin' +
  yeniSatir +
  '3-LPG' +
  yeniSatir +
  'Yakıt türünü seçiniz:';

let yakitTipi = prompt(yakitMetni);
if (yakitTipi == 1 || yakitTipi == 2 || yakitTipi == 3) {
  let yakitLitesi = Number(promt('Yakit litresini giriniz:'));
  let bakiye = Number(prompt('Bakiyenizi giriniz:'));
  if (yakitTipi == 1) {
    //Dizel
    let odenecekTutar = dizel * yakitLitresi;
    if (odenecekTutar < bakiye) {
      //bakiyeniz y eterli
      bakiye = bakiye - odenecekTutar;
      alert(
        'Yakıt alma işlemi başarılı' + yeniSatir + 'Kalan bakiye: ' + bakiye
      );
    } else {
      //bakiye yetersiz
      alert(
        'Bakiyeniz yeterli değil' +
          yeniSatir +
          'Ödenecek Tutar: ' +
          odenecekTutar +
          yeniSatir +
          'Bakiyeniz: ' +
          bakiye +
          yeniSatir +
          'Eksik Tutar: ' +
          
          (odenecekTuatar - bakiye)
      );
    }
  } else if (yakitTipi == 2) {
    //Benzin
    let odenecekTutar = benzin * yakitLitresi;
    if (odenecekTutar < bakiye) {
      //bakiyeniz yeterli
      bakiye = bakiye - odenecekTutar;
      alert(
        'Yakıt alma işlemi başarılı' + yeniSatir + 'Kalan bakiye: ' + bakiye
      );
    } else {
      //bakiye yetersiz
      alert(
        'Bakiyeniz yeterli değil' +
          yeniSatir +
          'Ödenecek Tutar: ' +
          odenecekTutar +
          yeniSatir +
          'Bakiyeniz: ' +
          bakiye +
          yeniSatir +
          'Eksik Tutar: ' +
          (odenecekTuatar - bakiye)
      );
    }
  } else if (yakitTipi == 3) {
    //LPG
    let odenecekTutar = lpg * yakitLitresi;
    if (odenecekTutar < bakiye) {
      //bakiyeniz yeterli
      bakiye = bakiye - odenecekTutar;
      alert(
        'Yakıt alma işlemi başarılı' + yeniSatir + 'Kalan bakiye: ' + bakiye
      );
    } else {
      //bakiye yetersiz
      alert(
        'Bakiyeniz yeterli değil' +
          yeniSatir +
          'Ödenecek Tutar: ' +
          odenecekTutar +
          yeniSatir +
          'Bakiyeniz: ' +
          bakiye +
          yeniSatir +
          'Eksik Tutar: ' +
          (odenecekTuatar - bakiye)
      );
    }
  }
} else {
  alert('YAnlış yakıt türü girfiniz');
}
