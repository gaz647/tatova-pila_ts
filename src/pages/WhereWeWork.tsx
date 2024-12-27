import "./WhereWeWork.css";

import LocationsMap from "../components/LocationsMap";

const WhereWeWork: React.FC = () => {
  return (
    <div className="page-container padding relative ">
      <div className="text-container fade-in-from-center">
        <h1 className="page-heading slide-in-left-heading">Kde pracujeme ?</h1>

        <div className="text-container-text">
          <p className="text-container-text-sentence slide-in-right-text-sentence-1">
            Žijeme v Litomyšli, takže náš rajón je Svitavsko.
          </p>
          <p className="text-container-text-sentence slide-in-right-text-sentence-2">
            Naše oblíbené lokality můžete vidět níže na mapě.
          </p>
        </div>
      </div>
      <LocationsMap />
    </div>
  );
};

export default WhereWeWork;
