import React from "react";
import "./ChangePageBtn.css";
import { Link } from "react-router-dom";

interface ChangePageBtnProps {
  type: "previous" | "next";
  page: string | null;
}

const ChangePageBtn: React.FC<ChangePageBtnProps> = ({ type, page }) => {
  return (
    <>
      {type === "previous" && page !== null && page !== undefined && (
        <div className="change-page-btn-container previous">
          <Link to={page}>
            <button className="change-page-btn">.</button>
          </Link>
        </div>
      )}
      {type === "next" && page !== null && page !== undefined && (
        <div className="change-page-btn-container next">
          <Link to={page}>
            <button className="change-page-btn">.</button>
          </Link>
        </div>
      )}
    </>
  );
};

export default ChangePageBtn;
