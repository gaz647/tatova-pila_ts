import "./Pricing.css";
import PricingTable from "../components/PricingTable";

const Pricing: React.FC = () => {
  return (
    <div className="page-container">
      <div className="text-container">
        <div className="page-heading">Ceník pořezu výřezů/kulatiny - 1CBM</div>
        <br />
        <PricingTable />
      </div>
    </div>
  );
};

export default Pricing;
