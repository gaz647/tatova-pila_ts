import "./WhereWeWork.css";
import LocationsMap from "../components/LocationsMap";

const WhereWeWork: React.FC = () => {
  return (
    <div className="page-container where-we-work dis-flex-column-center">
      <div className="text-container">
        <div className="page-heading">Kde pracujeme ?</div>

        <div className="text-container-text">
          <div className="text-container-text-sentence">
            Žijeme v Litomyšli, takže náš rajón je Svitavsko.
          </div>
          <div className="text-container-text-sentence">
            Naše oblíbené lokality můžete vidět níže na mapě.
          </div>
        </div>
      </div>
      <LocationsMap />
    </div>
  );
};

export default WhereWeWork;
