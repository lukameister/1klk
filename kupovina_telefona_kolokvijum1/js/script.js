$(document).ready(function () {
    $('#ordersamsung').click(function () {
        localStorage.setItem("model", "Samsung");
        location.href='.?stranica=kupovina';
    });
    $('#orderiphone').click(function () {
        localStorage.setItem("model", "Iphone");
        location.href='.?stranica=kupovina';
    });
    $('#orderhuawei').click(function () {
        localStorage.setItem("model", "Huawei");
        location.href='.?stranica=kupovina';
    });

      let selected = localStorage.getItem("model");
      if (selected!=null) {
          $('#model').val(selected);
          let cenaPrikaz = document.getElementById('cenaPrikaz');
          if (selected === 'tel1') {
              cenaPrikaz.innerHTML = "Cena: 60000 RSD"
          }else if(seleted === 'tel2') {
             cenaPrikaz.innerHTML = "Cena: 50000 RSD";
          }else{
              cenaPrikaz.innerHTML = "Cena: 40000 RSD";
         }
     }
});

function myFunction() {
    
    let cenaTelefona;
    let valuta;
    

    let cenaPrikaz = document.getElementById('cenaPrikaz');
    let model = $("#model :selected").val();
    if (model === 'iphone') {
        cenaTelefona = 60000;
    }
    else if (model === 'samsung') {
        cenaTelefona = 50000;
    }
    else if (model === 'huawei') {
        cenaTelefona = 40000;
    }
    else {
         cenaTelefona = 0;
     }


    

    let valutaSelected = $("#valutaPlacanja :selected").val();
    

    if (valutaSelected === 'RSD') {
        valuta = 'RSD';
        cenaPrikaz.innerHTML="Cena: " + cenaTelefona + ' ' + valuta;
    }else if(valutaSelected === 'EUR'){
        valuta = 'EUR';
        let cenaeur = cenaTelefona/118;
        cenaPrikaz.innerHTML="Cena: " + cenaeur.toFixed(2) + ' ' + valuta;
    }else if (valutaSelected === 'USD'){
        valuta = 'USD';
        let cenausd = cenaTelefona/111;
        cenaPrikaz.innerHTML="Cena: " + cenausd.toFixed(2) + ' ' + valuta;

      
        

    }
}
