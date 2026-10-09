let mahsulotlar = [];

let kategoriyalar = ["Muddatli to'lov", "Elektronika", "Maishiy texnika", "Kiyim", "Poyabzallar", "Aksessuarlar", "Go'zallik va parvarish", "Salomatlik", "Uy-ro'zg'or buyumlari", "Qurilish va ta'mirlash"];

let bannerlar = ["images/banner1.png"];

let reklamalar = {
  muddatli: { rasm: "images/banner-muddatli.png", sarlavha: "Muddatli to'lov", matn: "Hozir sotib oling - keyin to'lang", tugma: "xarid qilishga" },
  issiq: { rasm: "images/banner-issiq.png", sarlavha: "Issiq texnika", matn: "", tugma: "xarid qilishga" }
};

let bolimlar = [
  {sarlavha: "Arzon narxlar", dan: 1, gacha: 20, turi: "grid"},
  {sarlavha: "Elektronika", dan: 21, gacha: 25, turi: "qator"},
  {sarlavha: "Oshxona uchun texnika", dan: 26, gacha: 30, turi: "qator"},
  {reklama: "muddatli"},
  {sarlavha: "Muddatli to'lov", dan: 31, gacha: 35, turi: "qator"},
  {reklama: "issiq"},
  {sarlavha: "Issiq texnika", dan: 36, gacha: 40, turi: "qator"},
  {sarlavha: "Uydan chiqmasdan ro'zg'or", dan: 41, gacha: 45, turi: "qator"},
  {sarlavha: "Qishki dam", dan: 46, gacha: 50, turi: "qator"},
  {sarlavha: "Shinam uy", dan: 51, gacha: 55, turi: "qator"},
  {sarlavha: "Go'zallik vositalari", dan: 56, gacha: 60, turi: "qator"},
  {sarlavha: "Mashhur", dan: 61, gacha: 80, turi: "grid"},
  {sarlavha: "Qurilish va ta'mirlash", dan: 81, gacha: 85, turi: "qator"},
  {sarlavha: "Hammasi 99k gacha", dan: 86, gacha: 90, turi: "qator"},
  {sarlavha: "Yangi yil - yangi bilimlar", dan: 91, gacha: 95, turi: "qator"},
  {sarlavha: "Butun oila uchun oyoq kiyim", dan: 96, gacha: 100, turi: "qator"},
  {sarlavha: "Bolalar uchun tovalar", dan: 101, gacha: 105, turi: "qator"},
  {sarlavha: "Xobbi va ijodkorlik", dan: 106, gacha: 110, turi: "qator"},
  {sarlavha: "Flo turk oyoq kiyimi", dan: 111, gacha: 115, turi: "qator"},
  {sarlavha: "Uy yordamchilari", dan: 116, gacha: 120, turi: "qator"},
  {sarlavha: "Brendlar chegirmada", dan: 121, gacha: 125, turi: "qator"},
  {sarlavha: "Butun oila uchun kiyimlar", dan: 126, gacha: 130, turi: "qator"},
  {sarlavha: "Hammasi avto uchun", dan: 131, gacha: 135, turi: "qator"},
  {sarlavha: "Sog'lik va immunitet", dan: 136, gacha: 140, turi: "qator"},
  {sarlavha: "Yorug'lik uchun", dan: 141, gacha: 145, turi: "qator"},
  {sarlavha: "Yangi", dan: 146, gacha: 165, turi: "grid"}
];

let savat = JSON.parse(localStorage.getItem("savat")) || [];
let sevimlilar = JSON.parse(localStorage.getItem("sevimlilar")) || [];
let tanlanganKategoriya = "Barchasi";
let qidiruvMatni = "";
let bannerIndex = 0;

let qidiruv = document.querySelector("#search");
let kategoriyaBox = document.querySelector("#categories");
let bolimlarBox = document.querySelector("#sections");
let nuqtalar = document.querySelector("#dots");
let oldingiBtn = document.querySelector("#prev");
let keyingiBtn = document.querySelector("#next");
let savatOyna = document.querySelector("#cart");
let savatRoyxat = document.querySelector("#cartList");
let fon = document.querySelector("#overlay");
let savatSoni = document.querySelector("#cartCount");
let sevimliSoni = document.querySelector("#favCount");

function saqlash() {
  localStorage.setItem("savat", JSON.stringify(savat));
  localStorage.setItem("sevimlilar", JSON.stringify(sevimlilar));
}

function narxYoz(son) {
  let matn = son + "";
  let natija = "";
  let hisob = 0;
  for (let i = matn.length - 1; i >= 0; i--) {
    natija = matn[i] + natija;
    hisob++;
    if (hisob % 3 === 0 && i !== 0) {
      natija = " " + natija;
    }
  }
  return natija;
}

function mahsulotTop(id) {
  return mahsulotlar.find((m) => m.id === id);
}

function savatgaQosh(id) {
  let bor = savat.find((x) => x.id === id);
  if (bor) {
    bor.soni++;
  } else {
    savat.push({ id: id, soni: 1 });
  }
  saqlash();
  hammasiniChiz();
}

function sonOzgartir(id, qadam) {
  let element = savat.find((x) => x.id === id);
  element.soni = element.soni + qadam;
  if (element.soni <= 0) {
    let index = savat.indexOf(element);
    savat.splice(index, 1);
  }
  saqlash();
  hammasiniChiz();
}

function sevimliniOzgartir(id) {
  if (sevimlilar.includes(id)) {
    let index = sevimlilar.indexOf(id);
    sevimlilar.splice(index, 1);
  } else {
    sevimlilar.push(id);
  }
  saqlash();
  hammasiniChiz();
}

function kartaYasash(mahsulot) {
  let { id, nom, narx, eski, rasm, belgilar, baho, ovoz, vaqt, oyiga } = mahsulot;

  let karta = document.createElement("div");
  karta.classList.add("card");

  let belgilarHTML = belgilar.map((b) => {
    if (b === "Eksklyuziv") {
      return `<span class="tag Eksklyuziv">${b}</span>`;
    }
    return `<span class="tag">${b}</span>`;
  }).join("");

  let yurakClass = "heart";
  if (sevimlilar.includes(id)) {
    yurakClass = "heart active";
  }

  let bahoHTML = "";
  if (baho) {
    bahoHTML = `★ ${baho} (${ovoz})`;
  }

  let vaqtHTML = "";
  if (vaqt) {
    vaqtHTML = `<div class="time">🕒 ${vaqt}</div>`;
  }

  let oyigaHTML = "";
  if (oyiga) {
    oyigaHTML = `<span class="month">${oyiga}</span>`;
  }

  let eskiHTML = "";
  if (eski) {
    eskiHTML = `<div class="old">${narxYoz(eski)} so'm</div>`;
  }

  karta.innerHTML = `
    <div class="img">
      <img src="${rasm}" alt="${nom}">
      <div class="tags">${belgilarHTML}</div>
      <button class="${yurakClass}"><svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z" fill="none" stroke="#1f2026" stroke-width="1.6"/></svg></button>
    </div>
    <div class="body">
      <p class="name">${nom}</p>
      <div class="rate">${bahoHTML}</div>
      ${vaqtHTML}
      ${oyigaHTML}
      <div class="price-row">
        <div>
          <div class="price">${narxYoz(narx)} so'm</div>
          ${eskiHTML}
        </div>
        <button class="add">+</button>
      </div>
    </div>`;

  karta.querySelector(".heart").addEventListener("click", function () {
    sevimliniOzgartir(id);
  });
  karta.querySelector(".add").addEventListener("click", function () {
    savatgaQosh(id);
  });

  return karta;
}

function sarlavhaYasash(matn) {
  let h3 = document.createElement("h3");
  h3.classList.add("sec-title");
  h3.textContent = matn;
  return h3;
}

function reklamaYasash(kalit) {
  let { rasm, sarlavha, matn, tugma } = reklamalar[kalit];

  let matnHTML = "";
  if (matn) {
    matnHTML = `<p>${matn}</p>`;
  }

  let box = document.createElement("div");
  box.className = "promo promo-" + kalit;
  box.innerHTML = `
    <div class="promo-text"><h2>${sarlavha}</h2>${matnHTML}<span>${tugma}</span></div>
    <img src="${rasm}" alt="${sarlavha}">`;
  return box;
}

function kategoriyalarniChiz() {
  kategoriyaBox.innerHTML = "";

  kategoriyalar.forEach((nom, i) => {
    let tugma = document.createElement("button");
    tugma.classList.add("cat");

    if (nom === tanlanganKategoriya) {
      tugma.classList.add("active");
    }

    if (i === 0) {
      tugma.classList.add("first");
      tugma.innerHTML = `<img src="images/union.png" alt="" width="24" height="24">${nom}`;
    } else {
      tugma.textContent = nom;
    }

    tugma.addEventListener("click", function () {
      if (tanlanganKategoriya === nom) {
        tanlanganKategoriya = "Barchasi";
      } else {
        tanlanganKategoriya = nom;
      }
      hammasiniChiz();
    });

    kategoriyaBox.appendChild(tugma);
  });

  let yana = document.createElement("button");
  yana.classList.add("cat");
  yana.classList.add("yana");
  yana.innerHTML = `Yana <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#595b66" stroke-width="1.4"><path d="M4 6l4 4 4-4"/></svg>`;
  kategoriyaBox.appendChild(yana);
}

function bolimlarniChiz() {
  bolimlar.forEach((bolim) => {
    if (bolim.reklama) {
      bolimlarBox.appendChild(reklamaYasash(bolim.reklama));
      return;
    }

    bolimlarBox.appendChild(sarlavhaYasash(bolim.sarlavha));

    let grid = document.createElement("div");
    grid.classList.add("grid");

    let royxat = mahsulotlar.filter((m) => m.id >= bolim.dan && m.id <= bolim.gacha);
    royxat.forEach((m) => {
      grid.appendChild(kartaYasash(m));
    });
    bolimlarBox.appendChild(grid);

    if (bolim.turi === "grid") {
      let yana = document.createElement("button");
      yana.classList.add("more");
      yana.textContent = "Yana ko'rsatish " + royxat.length;
      yana.addEventListener("click", function () {
        yana.remove();
      });
      bolimlarBox.appendChild(yana);
    }
  });
}

function mahsulotlarniChiz() {
  bolimlarBox.innerHTML = "";

  let matn = qidiruvMatni.toLowerCase();

  if (tanlanganKategoriya === "Barchasi" && matn === "") {
    bolimlarniChiz();
    return;
  }

  bolimlarBox.appendChild(sarlavhaYasash(tanlanganKategoriya));

  let royxat = mahsulotlar.filter((m) => {
    let kategoriyaTogri = tanlanganKategoriya === "Barchasi" || m.turkum === tanlanganKategoriya;
    let nomTogri = m.nom.toLowerCase().includes(matn);
    return kategoriyaTogri && nomTogri;
  });

  let grid = document.createElement("div");
  grid.classList.add("grid");

  if (royxat.length === 0) {
    grid.innerHTML = `<p class="empty">Mahsulot topilmadi</p>`;
  } else {
    royxat.forEach((m) => {
      grid.appendChild(kartaYasash(m));
    });
  }
  bolimlarBox.appendChild(grid);
}

function bannerniChiz() {
  document.querySelector("#bannerImg").src = bannerlar[bannerIndex];

  if (bannerlar.length > 1) {
    oldingiBtn.classList.remove("yashirin");
    keyingiBtn.classList.remove("yashirin");
  } else {
    oldingiBtn.classList.add("yashirin");
    keyingiBtn.classList.add("yashirin");
  }

  nuqtalar.innerHTML = "";
  if (bannerlar.length > 1) {
    bannerlar.forEach((b, i) => {
      let nuqta = document.createElement("i");
      if (i === bannerIndex) {
        nuqta.classList.add("on");
      }
      nuqta.addEventListener("click", function () {
        bannerIndex = i;
        bannerniChiz();
      });
      nuqtalar.appendChild(nuqta);
    });
  }
}

function savatniChiz() {
  savatRoyxat.innerHTML = "";

  let jami = 0;
  let soni = 0;

  savat.forEach((element) => {
    let m = mahsulotTop(element.id);
    jami = jami + m.narx * element.soni;
    soni = soni + element.soni;

    let qator = document.createElement("div");
    qator.classList.add("cart-item");
    qator.innerHTML = `
      <div class="em"><img src="${m.rasm}" alt=""></div>
      <div class="info">${m.nom}<br><b>${narxYoz(m.narx)} so'm</b></div>
      <button class="minus">-</button>
      <span>${element.soni}</span>
      <button class="plus">+</button>`;

    qator.querySelector(".minus").addEventListener("click", function () {
      sonOzgartir(element.id, -1);
    });
    qator.querySelector(".plus").addEventListener("click", function () {
      sonOzgartir(element.id, 1);
    });

    savatRoyxat.appendChild(qator);
  });

  document.querySelector("#total").textContent = narxYoz(jami);
  savatSoni.textContent = soni;
  sevimliSoni.textContent = sevimlilar.length;

  if (soni > 0) {
    savatSoni.classList.remove("yashirin");
  } else {
    savatSoni.classList.add("yashirin");
  }

  if (sevimlilar.length > 0) {
    sevimliSoni.classList.remove("yashirin");
  } else {
    sevimliSoni.classList.add("yashirin");
  }
}

function hammasiniChiz() {
  kategoriyalarniChiz();
  bannerniChiz();
  mahsulotlarniChiz();
  savatniChiz();
}

function savatniOch() {
  savatOyna.classList.add("open");
  fon.classList.add("open");
}

function savatniYop() {
  savatOyna.classList.remove("open");
  fon.classList.remove("open");
}

qidiruv.addEventListener("input", function () {
  qidiruvMatni = qidiruv.value;
  mahsulotlarniChiz();
});

oldingiBtn.addEventListener("click", function () {
  bannerIndex = bannerIndex - 1;
  if (bannerIndex < 0) {
    bannerIndex = bannerlar.length - 1;
  }
  bannerniChiz();
});

keyingiBtn.addEventListener("click", function () {
  bannerIndex = bannerIndex + 1;
  if (bannerIndex >= bannerlar.length) {
    bannerIndex = 0;
  }
  bannerniChiz();
});

document.querySelector(".logo").addEventListener("click", function () {
  tanlanganKategoriya = "Barchasi";
  qidiruvMatni = "";
  qidiruv.value = "";
  hammasiniChiz();
});

document.querySelector("#cartBtn").addEventListener("click", savatniOch);
document.querySelector("#closeCart").addEventListener("click", savatniYop);
fon.addEventListener("click", savatniYop);

document.querySelector("#clearCart").addEventListener("click", function () {
  savat = [];
  saqlash();
  hammasiniChiz();
});

fetch("mahsulotlar.json")
  .then((javob) => javob.json())
  .then((malumot) => {
    mahsulotlar = malumot;
    hammasiniChiz();
  })
  .catch(() => {
    bolimlarBox.innerHTML = `<p class="empty">mahsulotlar.json ochilmadi. Sahifani Live Server bilan oching</p>`;
  });