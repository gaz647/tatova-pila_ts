import "./WoodChipperRental.css";

import woodChipperMainPic from "../assets/pictures/wood-chipper-main.jpg";
import { Link } from "react-router-dom";

const WoodChipperRental = () => {
  return (
    <div className="page-container padding relative fade-in-from-center">
      <div className="text-container">
        <h1 className="page-heading slide-in-left-heading">
          Pronájem štěpkovače
        </h1>

        <div className="wood-chipper-main-pic-container">
          <img src={woodChipperMainPic} alt="" />
        </div>

        <div className="text-container-text">
          <p className="page-sub-heading slide-in-right-text-sentence-1">
            Štěpkovač Lumag RAMBO HC 15PRO
          </p>

          <p className="text-container-text-sentence slide-in-right-text-sentence-2">
            Pohon: benzínový
          </p>

          <p className="text-container-text-sentence slide-in-right-text-sentence-2">
            Štěpkování: do Ø 15 cm
          </p>

          <p className="text-container-text-sentence slide-in-right-text-sentence-3">
            Rozměry (DxŠxV): 1900x800x1500 mm
          </p>

          <p className="text-container-text-sentence slide-in-right-text-sentence-4">
            Hmotnost: cca 275 kg
          </p>

          <p className="text-container-text-sentence slide-in-right-text-sentence-5">
            Cena: 1 000 Kč za první den - každý další den 800 Kč
          </p>

          <p className="text-container-text-sentence slide-in-right-text-sentence-6">
            Vratná záloha: 3 000 Kč
          </p>

          <p className="text-container-text-sentence slide-in-right-text-sentence-7">
            Vlastní doprava - případně po domluvě dovezeme.
          </p>

          <p className="text-container-text-sentence slide-in-right-text-sentence-8">
            Více fotek najdete v{" "}
            <span>
              <Link
                className="wood-chipper-gallery-link"
                to={"/galerie/woodChipper"}
              >
                galerii.
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WoodChipperRental;
