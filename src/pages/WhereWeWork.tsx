import "./WhereWeWork.css";
import LocationsMap from "../components/LocationsMap";

const WhereWeWork: React.FC = () => {
  return (
    <div className="page-container where-we-work dis-flex-column-center">
      <div className="text-container">
        <div className="page-heading">Kde pracujeme</div>
        <div className="text-container-text">
          Pilku máme mobilní, tzn. že přijedeme k Vám.
          <br />
          <br />
          Podmínkou je pouze elektrická zásuvka na 380V a množství kulatiny 5cmb
          a více.
          <br />
          <br />
          Žijeme v Litomyšli, takže náš rajón je Svitavsko.
          <br />
          <br />
          Naše oblíbené lokality můžete vidět níže na mapě.
        </div>
      </div>
      <LocationsMap />
    </div>
  );
};

export default WhereWeWork;
