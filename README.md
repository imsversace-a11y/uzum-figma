<p align="center">
  <img src="images/logo.png" alt="Uzum Market logotipi" width="96">
</p>

<h1 align="center">Uzum Market</h1>

<p align="center">
  HTML, CSS va JavaScript bilan yozilgan internet-do'kon sahifasi.<br>
  Mahsulotlar, savat, sevimlilar va qidiruv ishlaydi.
</p>

<p align="center">
  <img src="images/banner1.png" alt="Asosiy banner" width="100%">
</p>

---

## Loyiha haqida

Bu loyihani JavaScript'ning 2 oylik kursida o'rganganlarimni mustahkamlash uchun yozdim. Sahifa Uzum Market saytining bosh sahifasiga o'xshatib yasalgan. Hamma mahsulot `mahsulotlar.json` faylidan olinadi va JavaScript yordamida sahifaga chiziladi.

## Imkoniyatlar

- 165 ta mahsulot, 24 ta bo'lim ko'rinishida
- Kategoriya bo'yicha saralash (bir xil kategoriyani qayta bossangiz, hammasi qaytadi)
- Mahsulot nomi bo'yicha qidiruv
- Savatga qo'shish, sonini ko'paytirish va kamaytirish, savatni tozalash
- Sevimlilarga qo'shish (yurakcha tugmasi)
- Jami narxni avtomatik hisoblash
- Savat va sevimlilar `localStorage` da saqlanadi, sahifani yangilasangiz ham o'chmaydi
- Telefon va planshetga moslashgan ko'rinish

## Rasmlar

Mahsulot rasmlari `images` papkasida turadi. Har bir mahsulotning rasmi `images/<id>.png` ko'rinishida olinadi, masalan 1-mahsulot uchun `images/1.png`.

<table>
  <tr>
    <td align="center"><img src="images/2.png" alt="Smartfon" width="150"><br>Smartfon</td>
    <td align="center"><img src="images/6.png" alt="Televizor" width="150"><br>Televizor</td>
    <td align="center"><img src="images/12.png" alt="Krossovka" width="150"><br>Krossovka</td>
  </tr>
  <tr>
    <td align="center"><img src="images/37.png" alt="Konditsioner" width="150"><br>Konditsioner</td>
    <td align="center"><img src="images/14.png" alt="Ichimlik" width="150"><br>Ichimlik</td>
    <td align="center"><img src="images/23.png" alt="Aqlli televizor" width="150"><br>Aqlli televizor</td>
  </tr>
</table>

Reklama bannerlari:

<p>
  <img src="images/banner-muddatli.png" alt="Muddatli to'lov banneri" width="49%">
  <img src="images/banner-issiq.png" alt="Issiq texnika banneri" width="49%">
</p>

## Ishlatilgan texnologiyalar

| Texnologiya | Nima uchun |
| --- | --- |
| HTML | Sahifaning tuzilishi |
| CSS | Ko'rinish va telefonga moslash (`@media`) |
| JavaScript | Mahsulotlarni chizish, savat, sevimlilar, qidiruv |
| JSON | Mahsulotlar ro'yxati (`mahsulotlar.json`) |
| localStorage | Savat va sevimlilarni brauzerda saqlash |

## Kursda o'rganilgan mavzular

- Array metodlari: `map`, `filter`, `find`, `forEach`, `includes`, `indexOf`, `splice`, `join`
- DOM: `querySelector`, `createElement`, `appendChild`, `classList`, `innerHTML`, `addEventListener`
- `localStorage`, `JSON.stringify`, `JSON.parse`
- Destructuring va object'lar
- `fetch` bilan JSON faylni o'qish

## Papkalar tuzilishi

```
uzum-market/
├── index.html          sahifa tuzilishi
├── index.css           ko'rinish
├── app.js              asosiy JavaScript kodi
├── mahsulotlar.json    barcha mahsulotlar
├── images/             mahsulot rasmlari, banner va logotip
└── README.md           shu fayl
```

## Qanday ishga tushiriladi

Mahsulotlar `fetch` bilan o'qiladi, shuning uchun `index.html` ni ikki marta bosib ochsangiz mahsulotlar chiqmaydi. Sahifani server orqali ochish kerak:

1. Loyihani yuklab oling:

```powershell
git clone https://github.com/FOYDALANUVCHI/uzum-market.git
```

2. Papkani VS Code'da oching.
3. VS Code'ga **Live Server** qo'shimchasini o'rnating.
4. `index.html` ustida o'ng tugmani bosib, **Open with Live Server** ni tanlang.

## Kelajakda qo'shmoqchi bo'lganlarim

- Mahsulot ustiga bosganda alohida sahifa ochish
- "Yana ko'rsatish" tugmasi bilan qo'shimcha mahsulotlarni chiqarish
- Kirish (login) oynasi
- Banner uchun bir nechta rasm va avtomatik almashish

---

<p align="center">Dasturlashni o'rganish yo'lidagi loyiha</p>
