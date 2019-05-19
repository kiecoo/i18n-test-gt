function selectButton(lang) {
    $('#zh-tw').removeClass('selected');
    $('#en').removeClass('selected');
    $('#' + lang).addClass('selected');
}

function changeLang(lang) {    
    //    *****************   UPDATE data-i18n *************************
    changeAllText(lang)
         //$('h1.title').text(window.I18N[lang].TITLE);
         //$('.partner-container h3').text(window.I18N[lang].PARTNER);
    // END  *****************   UPDATE data-i18n  ******************************
    selectButton(lang);
    currentLang = lang;
}

/*****************   UPDATE data-i18n   ******************************
             (instead  1. lang-en.js  2.lang-zh-tw.js )          *******/
const i18njson_en = {
  translate_partner: 'partner:',
  translate_website: 'website',
};

const i18njson_jp = {
  translate_partner: 'パートナー:',
  translate_website: 'ウェブサイト',
};

function changeAllText(lang) {
  Array.from(document.querySelectorAll("[data-i18n]")).forEach(node=>{
    const key = node.getAttribute("data-i18n");
    //txt = i18njson[key];
    if(lang=='en'){
        txt = i18njson_en[key];
    }else{
        txt = i18njson_jp[key];
    }   
    node.childNodes[0].nodeValue = txt;
  });
}
// END  *****************   UPDATE data-i18n  ******************************
