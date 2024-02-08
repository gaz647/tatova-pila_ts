import "./NotFound.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
    }, 3000);
  }, [navigate]);

  return (
    <div className="page-container not-found">
      <p>Tady nic není...</p>
      <br />
      <h2>Přesměrovávám na správnou adresu 🙂</h2>
    </div>
  );
};

export default NotFound;
