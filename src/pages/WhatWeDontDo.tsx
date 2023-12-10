import "./WhatWeDontDo.css";

const WhatWeDontDo = () => {
  return (
    <section className="section-container what-we-dont-do">
      <div className="text-container">
        <div className="page-heading">Co neděláme</div>
        <div className="text-container-text">
          <ul>
            <li>
              neradi slibujeme něco, co není v našich silách. Svou práci
              vykonáváme po víkendech, takže někdy jsme zamluveni dost dlouho
              dopředu. Ač bychom rádi vyhověli všem, někdy to nejde.
            </li>
            <br />
            <li>
              neradi pracujeme pod tlakem. Jediný tlak co akceptujeme je ten náš
              vlastní {`:)`}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDontDo;
