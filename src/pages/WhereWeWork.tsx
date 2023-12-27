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
          Podmínkou je elektrická zásuvka na 380V.
          <br />
          <br />
          Žijeme v Litomyšli, takže náš rajón je Svitavsko, plus rádi vyrážíme
          na Vysočinu okolo Borové, Březin, Jimramova.
          <br />
          <br />
          Smysl pro nás má množství alespoň 5cbm kulatiny.
        </div>
      </div>
      <LocationsMap />
    </div>
  );
};

export default WhereWeWork;
