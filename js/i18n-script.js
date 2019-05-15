function selectButton(lang) {
    $('#zh-tw').removeClass('selected');
    $('#en').removeClass('selected');
    $('#' + lang).addClass('selected');
}

function changeLang(lang) {
    $('h1.title').text(window.I18N[lang].TITLE);
    $('.partner-container h3').text(window.I18N[lang].PARTNER);
    selectButton(lang);
    currentLang = lang;
}