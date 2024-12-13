const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Mock podaci za namještaj
const furnitureData = {
    kauc: {
      podvrste: [
        { type: "na_razvlačenje", products: ["Moderni krevet na razvlačenje", "Pretvorivi kauč", "Sofa na razvlačenje", "Razvlačenje kauč s jastucima", "Kauč sa skladištem"] },
        { type: "kožni", products: ["Kožna kutna garnitura", "Talijanski kožni naslonjač", "Kožna sofa", "Kožni dvosjed", "Kožni trosjed"] },
        { type: "kutni", products: ["Kutna garnitura", "Kompaktni kutni kauč", "Kutni sofa", "Veliki kutni kauč", "Kutni kauč s jastucima"] },
      ],
    },
    stol: {
      podvrste: [
        { type: "drveni", products: ["Hrastov blagovaonski stol", "Rustikalni drveni stol", "Drveni stolić", "Masivni drveni stol", "Drveni stol s ukrasima"] },
        { type: "stakleni", products: ["Stakleni stolić za kavu", "Moderni stakleni stol", "Stakleni blagovaonski stol", "Stakleni stol s metalnim okvirom", "Stakleni stol s drvenim nogama"] },
        { type: "skandinavski", products: ["Skandinavski stol", "Nordijski stol", "Minimalistički stol", "Skandinavski stol za kavu", "Skandinavski blagovaonski stol"] },
      ],
    },
    stolica: {
      podvrste: [
        { type: "s_jastukom", products: ["Blagovaonska stolica s jastukom", "Baršunasta stolica", "Stolica s mekanim jastukom", "Stolica s debelim naslonom", "Jastučasta stolica"] },
        { type: "bar", products: ["Drveni barski stolac", "Metalni barski stolac", "Barski stolac s naslonom", "Visoki barski stolac", "Barski stolac s jastukom"] },
        { type: "uredska", products: ["Uredska stolica", "Ergonomska stolica", "Stolica za rad", "Uredska stolica s mrežom", "Uredska stolica s jastucima"] },
      ],
    },
    ormar: {
      podvrste: [
        { type: "ugradbeni", products: ["Ugradbeni ormar", "Ormarić s kliznim vratima", "Modularni ugradbeni ormar", "Ugradbeni ormar s policama", "Veliki ugradbeni ormar"] },
        { type: "masivni_drvo", products: ["Masivni drveni ormar", "Klasični drveni ormar", "Rustikalni drveni ormar", "Masivni ormar s ladicama", "Masivni ormar s ogledalom"] },
        { type: "s_ogledalom", products: ["Ormarić s ogledalom", "Ormar s ogledalom", "Veliki ogledalo ormar", "Ormar s dvostrukim ogledalom", "Ogledalo ormar s ladicama"] },
      ],
    },
    krevet: {
      podvrste: [
        { type: "bračni_s_ladicama", products: ["Okvir kreveta s ladicama", "Platforma krevet s ladicama", "Krevet s dodatnim ladicama", "Bračni krevet s kutijama", "Krevet s ladicama za posteljinu"] },
        { type: "kovano_željezo", products: ["Krevet od kovanog željeza", "Antikni okvir kreveta", "Romantični željezni krevet", "Željezni krevet s ukrasima", "Luksuzni željezni krevet"] },
        { type: "na_kat", products: ["Krevet na kat", "Dvostruki krevet na kat", "Modularni krevet na kat", "Krevet na kat s ladicama", "Krevet na kat za djecu"] },
      ],
    },
};

// API ruta za dobavljanje vrsta namještaja
app.get('/api/namjestaj', (req, res) => {
  const vrsteNamjestaja = Object.keys(furnitureData); // ["kauc", "stol", "stolica", "ormar", "krevet"]
  res.json({ vrsteNamjestaja });
});

// API ruta za dobavljanje podataka o podvrstama i proizvodima za određeni namještaj
app.get('/api/namjestaj/:vrsta', (req, res) => {
  const { vrsta } = req.params;
  const data = furnitureData[vrsta];
  
  if (data) {
    res.json(data);
  } else {
    res.status(404).json({ message: `Namještaj vrste '${vrsta}' nije pronađen.` });
  }
});

// Pokretanje servera
app.listen(PORT, () => {
  console.log(`Server radi na http://localhost:${PORT}`);
});