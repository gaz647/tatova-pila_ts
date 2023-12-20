import "./WhatWeDontDo.css";

const WhatWeDontDo: React.FC = () => {
  return (
    <div className="page-container what-we-dont-do dis-flex-row-center">
      <div className="text-container">
        <div className="page-heading">Co neděláme</div>
        <div className="text-container-text">
          <ul>
            <li>Neradi slibujeme něco, co není v našich silách.</li>
            <br />
            <li>
              Svou práci vykonáváme po víkendech, takže někdy jsme zamluveni
              dost dlouho dopředu a ač bychom rádi vyhověli všem, někdy to
              nejde.
            </li>
            <br />
            <li>
              Nechceme pracovat pod tlakem - jediný tlak který akceptujeme je
              ten náš vlastní 🙂
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WhatWeDontDo;
