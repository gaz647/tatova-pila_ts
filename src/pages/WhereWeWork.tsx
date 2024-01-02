import "./WhereWeWork.css";
import LocationsMap from "../components/LocationsMap";

const WhereWeWork: React.FC = () => {
  return (
    <div className="page-container where-we-work dis-flex-column-center">
      <div className="text-container">
        <div className="page-heading">Kde pracujeme ?</div>

        <div className="text-container-text">
          <div className="text-container-text-sentence">
            Pilku máme mobilní, tzn. že přijedeme k Vám.
          </div>
          <div className="text-container-text-sentence">
            Podmínkou je pouze elektrická zásuvka na 380V a množství kulatiny
            5cmb a více.
          </div>
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
