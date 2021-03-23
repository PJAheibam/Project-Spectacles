import Becham from "../assets/img/becham.webp";
import BLUblox from "../assets/img/blublox.webp";
import Foster from "../assets/img/foster.webp";
import Goson from "../assets/img/goson.webp";
import Rayban from "../assets/img/rayban.webp";
import Versace from "../assets/img/versace.webp";

const productList = [
  {
    id: 1,
    name: "Ray-Ban Rb3016",
    imgsrc: Rayban,
    price: 154,
    desc: ["plastic", "importer", "polarized", "uv protection coating"],
    order: 0,
  },
  {
    id: 2,
    name: "Beckam glass",
    imgsrc: Becham,
    price: 19,
    desc: [
      "metal frame",
      "plasic lens",
      "anti-reflective coating",
      "width: 2.08 inches",
    ],
    order: 0,
  },
  {
    id: 3,
    name: "Goson clear lense",
    imgsrc: Goson,
    price: 7.5,
    desc: ["plastic frame", "plastic lens", "non-polarized", "width: 57mm"],
    order: 0,
  },
  {
    id: 4,
    name: "Versace VE 3218",
    imgsrc: Versace,
    price: 115,
    desc: ["plastic frame", "composite lens", "non-polarized", "width: 53mm"],
    order: 0,
  },
  {
    id: 5,
    name: "BLUblox Denver Sleep",
    imgsrc: BLUblox,
    price: 124.95,
    desc: ["Plastic frame", "glass lens", "high-quality frame", "width: 58mm"],
    order: 0,
  },
  {
    id: 6,
    name: "Foster Grant Gavin Fold",
    imgsrc: Foster,
    price: 26.3,
    desc: ["imported", "metal-frame", "non-polarized", "width: 48mm"],
    order: 0,
  },
];

export default productList;
