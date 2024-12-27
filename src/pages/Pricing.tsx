import "./Pricing.css";
import PricingTable from "../components/PricingTable";

const Pricing: React.FC = () => {
  return (
    <div className="page-container padding relative fade-in-from-center">
      <div className="text-container">
        <h1 className="page-heading slide-in-left-heading">Ceník</h1>
        <br />
        <PricingTable />
      </div>
    </div>
  );
};

export default Pricing;
