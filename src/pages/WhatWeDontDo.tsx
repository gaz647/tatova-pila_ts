import "./WhatWeDontDo.css";

const WhatWeDontDo: React.FC = () => {
  return (
    <div className="page-container what-we-dont-do dis-flex-row-center">
      <div className="text-container">
        <div className="page-heading">Co neděláme ?</div>

        <div className="text-container-text">
          <div className="text-container-text-sentence">
            Neradi slibujeme něco, co není v našich silách.
          </div>

          <div className="text-container-text-sentence">
            Svou práci vykonáváme po víkendech, takže někdy jsme zamluveni dost
            dlouho dopředu a ač bychom rádi vyhověli všem, někdy to nejde.
          </div>

          <div className="text-container-text-sentence">
            Nechceme pracovat pod tlakem - jediný tlak který akceptujeme je ten
            náš vlastní 🙂
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDontDo;
