import "./PricingTable.css";

const PricingTable = () => {
  return (
    <table id="pricing-table">
      <thead>
        <tr>
          <th></th>
          <th>měkké druhy dřevin</th>
          <th>tvrdé druhy dřevin</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>jednoduchý pořez - hranoly, neomítané fošny</td>
          <td className="td-text-center">1100kč</td>
          <td className="td-text-center">1500kč</td>
        </tr>
        <tr>
          <td>jednoduchý pořez plus omítání/sámování</td>
          <td className="td-text-center">1500kč</td>
          <td className="td-text-center">1900kč</td>
        </tr>
        <tr>
          <td>pořez na střešní latě a rozměrově podobný sortiment</td>
          <td className="td-text-center">1500kč</td>
          <td className="td-text-center">1900kč</td>
        </tr>
        <tr>
          <td>pořez přesílené kulatiny nad středový průměr 50cm jedn.pořez</td>
          <td className="td-text-center">2000kč</td>
          <td className="td-text-center">2400kč</td>
        </tr>
        <tr>
          <td>
            pořez přesílené kulatiny nad středový průměr 50cm jedn.pořez plus
            omítání
          </td>
          <td className="td-text-center">2400kč</td>
          <td className="td-text-center">2800kč</td>
        </tr>
        <tr>
          <td>jiný speciální či jinak individuální pořez dle dohody</td>
          <td className="td-text-center"></td>
          <td className="td-text-center"></td>
        </tr>
        <tr>
          <td>kov v kulatině a následně zničený pilový pás 1500kč/ks</td>
          <td className="td-text-center"></td>
          <td className="td-text-center"></td>
        </tr>
        <tr>
          <td>manipulace kulatiny dle rozsahu po domluvě</td>
          <td className="td-text-center"></td>
          <td className="td-text-center"></td>
        </tr>
        <tr>
          <td>páskování polotovarů 100kč za hráň</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
};

export default PricingTable;
