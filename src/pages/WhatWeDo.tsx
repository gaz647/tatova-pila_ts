import "./WhatWeDo.css";
import PricingTable from "../components/PricingTable";

const WhatWeDo = () => {
  return (
    <div className="page-container what-we-do">
      <div className="text-container">
        <div className="page-heading">Co děláme ?</div>

        <div className="text-container-text">
          <div className="text-container-text-sentence">
            Cítíme potřebu za sebou nechat dobrou práci a spokojeného člověka.
          </div>
          <div className="text-container-text-sentence">
            Zázraky neumíme ale pracujeme tak, abychom se na konci mohli
            ohlédnout a být spokojeni.
          </div>
          <div className="text-container-text-sentence">
            Rádi říkáme, že řežeme jako by to bylo pro nás.
          </div>
          <div className="text-container-text-sentence">
            Orientační ceník níže, přesto ale vše záleží na domluvě a
            individuálním přístupu.
          </div>
          <div className="text-container-text-sentence">
            Způsob práce na pásové pile umožňuje širokou paletu možností pořezu,
            okamžitou variabilitu přímo v procesu.
          </div>
          <div className="text-container-text-sentence">
            Řežeme kulatinu do délky 6m a průměru 65cm.
          </div>

          <div className="text-container-text-sentence">
            Za den jsme schopni pořezat 5-10cbm kulatiny, v závislosti na
            způsobu pořezu a druhu řezané dřeviny.
          </div>
        </div>
      </div>
      <div className="text-container">
        <div className="page-sub-heading">
          Ceník pořezu výřezů/kulatiny - 1CBM
        </div>
        <br />
        <PricingTable />
      </div>
    </div>
  );
};

export default WhatWeDo;
