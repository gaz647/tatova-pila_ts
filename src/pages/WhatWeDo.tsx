import "./WhatWeDo.css";
import PricingTable from "../components/PricingTable";

const WhatWeDo = () => {
  return (
    <div className="page-container what-we-do">
      <div className="text-container">
        <div className="page-heading">Co děláme</div>
        <div className="text-container-text">
          Cítíme potřebu za sebou nechat dobrou práci a spokojeného člověka.
          <br />
          <br />
          Zázraky neumíme ale pracujeme tak, abychom se na konci mohli ohlédnout
          a být spokojeni.
          <br />
          <br />
          Rádi říkáme, že řežeme jako by to bylo pro nás.
          <br />
          <br />
          Orientační ceník níže, přesto ale vše záleží na domluvě a
          individuálním přístupu.
          <br />
          <br />
          Způsob práce na pásové pile umožňuje širokou paletu možností pořezu,
          okamžitou variabilitu přímo v procesu.
          <br />
          <br />
          Řežeme kulatinu do délky 6m a průměru 65cm.
          <br />
          <br />
          Za den jsme schopni pořezat 5-10cbm kulatiny, v závislosti na způsobu
          pořezu a druhu řezané dřeviny.
        </div>
      </div>
      <div className="text-container">
        <h2 className="text-shadow-black">
          Ceník pořezu výřezů/kulatiny - 1CBM
        </h2>
        <br />
        <PricingTable />
      </div>
    </div>
  );
};

export default WhatWeDo;
