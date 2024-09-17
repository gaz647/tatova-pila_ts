import "./PricingTable.css";

const PricingTable = () => {
  return (
    <table id="pricing-table" className="slide-in-right-pricing-table">
      <thead>
        <tr>
          <th>POŘEZ / VÝŘEZ KULATINY - 1CBM</th>
          <th>MĚKKÉ DRUHY DŘEVIN</th>
          <th>TVRDÉ DRUHY DŘEVIN</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>jednoduchý pořez - hranoly, neomítané fošny</td>
          <td className="td-text-center">1 100 Kč</td>
          <td className="td-text-center">1 500 Kč</td>
        </tr>
        <tr>
          <td>jednoduchý pořez plus omítání/sámování</td>
          <td className="td-text-center">1 500 Kč</td>
          <td className="td-text-center">1 900 Kč</td>
        </tr>
        <tr>
          <td>pořez na střešní latě a rozměrově podobný sortiment</td>
          <td className="td-text-center">1 500 Kč</td>
          <td className="td-text-center">1 900 Kč</td>
        </tr>
        <tr>
          <td>pořez přesílené kulatiny nad středový průměr 50cm jedn.pořez</td>
          <td className="td-text-center">2 000 Kč</td>
          <td className="td-text-center">2 400 Kč</td>
        </tr>
        <tr>
          <td>
            pořez přesílené kulatiny nad středový průměr 50cm jedn.pořez plus
            omítání
          </td>
          <td className="td-text-center">2 400 Kč</td>
          <td className="td-text-center">2 800 Kč</td>
        </tr>
        <tr>
          <td>jiný speciální či jinak individuální pořez dle dohody</td>
          <td className="td-text-center"></td>
          <td className="td-text-center"></td>
        </tr>
        <tr>
          <td>kov v kulatině a následně zničený pilový pás 1 500 Kč/ks</td>
          <td className="td-text-center"></td>
          <td className="td-text-center"></td>
        </tr>
        <tr>
          <td>manipulace kulatiny dle rozsahu po domluvě</td>
          <td className="td-text-center"></td>
          <td className="td-text-center"></td>
        </tr>
        <tr>
          <td>páskování polotovarů 100 Kč za hráň</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>
            <span className="td-hidden">Xfsdfds</span>
          </td>
          <td></td>
          <td></td>
        </tr>
      </tbody>

      <thead>
        <tr>
          <th>ŠTĚPKOVAČ</th>
          <th>1 DEN</th>
          <th>DRUHÝ A KAŽDÝ DALŠÍ DEN</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>pronájem</td>
          <td className="td-text-center">1 000 Kč</td>
          <td className="td-text-center">800 Kč</td>
        </tr>
        <tr>
          <td>vratná záloha</td>
          <td className="td-text-center">3 000 Kč</td>
          <td className="td-text-center">-</td>
        </tr>
      </tbody>
    </table>
  );
};

export default PricingTable;
