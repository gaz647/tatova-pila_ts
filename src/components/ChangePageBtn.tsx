import React from "react";
import "./ChangePageBtn.css";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

interface ChangePageBtnProps {
  type: "previous" | "next";
  page: string | null;
}

const ChangePageBtn: React.FC<ChangePageBtnProps> = ({ type, page }) => {
  return (
    <>
      {type === "previous" && page !== null && page !== undefined && (
        <div className="change-page-btn-container previous">
          <div className="change-page-btn">
            <Link to={page}>
              <MdKeyboardDoubleArrowUp />
              {/* <button className="change-page-btn">.</button> */}
            </Link>
          </div>
        </div>
      )}
      {type === "next" && page !== null && page !== undefined && (
        <div className="change-page-btn-container next">
          <div className="change-page-btn">
            <Link to={page}>
              <MdKeyboardDoubleArrowDown />
              {/* <button className="change-page-btn">.</button> */}
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default ChangePageBtn;
