import "./Pricing.css";
import PricingTable from "../components/PricingTable";

const Pricing: React.FC = () => {
  return (
    <div className="page-container where-we-work dis-flex-column-center">
      <div className="text-container">
        <div className="page-sub-heading">
          Ceník pořezu výřezů/kulatiny - 1CBM
        </div>
        <br />
        <PricingTable />
      </div>
    </div>
  );
};

export default Pricing;
