import "./Pricing.css";
import { Helmet } from "react-helmet-async";
import PricingTable from "../components/PricingTable";

const Pricing: React.FC = () => {
  return (
    <div className="page-container padding relative fade-in-from-center">
      <Helmet>
        <title>Za kolik</title>
      </Helmet>
      <div className="text-container">
        <div className="page-heading slide-in-left-heading">
          Ceník pořezu výřezů/kulatiny - 1CBM
        </div>
        <br />
        <PricingTable />
      </div>
    </div>
  );
};

export default Pricing;
