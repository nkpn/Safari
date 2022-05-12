const langArrZanzibar = {};

//---------------------------------------------
//* Function

const selectFirst = document.querySelector(".for-all-os");
const selectSecond = document.querySelector(".for-windows");
const mobileSelect = document.querySelector(".mobile-lang-select");

const allLang = ["en", "ua", "fr", "de"];

//* push select value to the URL
const changeURLLanguage = () => {
  let lang = selectFirst.value;
  location.href = window.location.pathname + "#" + lang;
  location.reload();
};

const changeURLLanguageTwo = () => {
  let lang = selectSecond.value;
  location.href = window.location.pathname + "#" + lang;
  location.reload();
};

const changeURLLanguageThree = () => {
  let lang = mobileSelect.value;
  location.href = window.location.pathname + "#" + lang;
  location.reload();
};

selectFirst.addEventListener("change", changeURLLanguage);
selectSecond.addEventListener("change", changeURLLanguageTwo);
mobileSelect.addEventListener("change", changeURLLanguageThree);

//* Change language
const changeLanguage = () => {
  let hash = window.location.hash;
  hash = hash.substring(1);

  if (!allLang.includes(hash)) {
    location.href = window.location.pathname + "#en";
    location.reload();
  }
  selectFirst.value = hash;
  selectSecond.value = hash;
  mobileSelect.value = hash;

  //* set site languate
  document.documentElement.setAttribute("lang", hash);

  //* change language
  for (let key in langArrZanzibar) {
    let elem = document.querySelector(".lng-" + key);
    if (elem) {
      elem.innerHTML = langArrZanzibar[key][hash];
    }
  }
};

changeLanguage();
