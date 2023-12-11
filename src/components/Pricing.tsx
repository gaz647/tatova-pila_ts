import "./Pricing.css";

const Pricing = () => {
  return (
    <div className="pricing-container">
      <h2>Ceník pořezu výřezů/kulatiny - 1CBM</h2>
      <br />
      <table className="table-container" id="pricing-table">
        <tr>
          <th></th>
          <th>měkké druhy dřevin</th>
          <th>tvrdé druhy dřevin</th>
        </tr>
        <tr>
          <td>jednoduchý pořez - hranoly, neomítané fošny</td>
          <td>1100kč</td>
          <td>1500kč</td>
        </tr>
        <tr>
          <td>jednoduchý pořez plus omítání/sámování</td>
          <td>1500kč</td>
          <td>1900kč</td>
        </tr>
        <tr>
          <td>pořez na střešní latě a rozměrově podobný sortiment</td>
          <td>1500kč</td>
          <td>1900kč</td>
        </tr>
        <tr>
          <td>pořez přesílené kulatiny nad středový průměr 50cm jedn.pořez</td>
          <td>2000kč</td>
          <td>2400kč</td>
        </tr>
        <tr>
          <td>
            pořez přesílené kulatiny nad středový průměr 50cm jedn.pořez plus
            omítání
          </td>
          <td>2400kč</td>
          <td>2800kč</td>
        </tr>
        <tr>
          <td>jiný speciální či jinak individuální pořez dle dohody</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>kov v kulatině a následně zničený pilový pás 1500kč/ks</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>manipulace kulatiny dle rozsahu po domluvě</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>páskování polotovarů 100kč za hráň</td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  );
};

export default Pricing;
