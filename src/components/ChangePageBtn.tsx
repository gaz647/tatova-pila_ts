import React from "react";
import "./ChangePageBtn.css";
import { useNavigate } from "react-router-dom";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

interface ChangePageBtnProps {
  type: "previous" | "next";
  page: string | null;
}

const ChangePageBtn: React.FC<ChangePageBtnProps> = ({ type, page }) => {
  const navigate = useNavigate();

  const handleChangePage = (page: string) => {
    navigate(page);
  };

  return (
    <>
      {type === "previous" && page !== null && page !== undefined && (
        <button className="change-page-btn-container previous">
          <div className="change-page-btn">
            <div onClick={() => handleChangePage(page)}>
              <MdKeyboardDoubleArrowUp />
            </div>
          </div>
        </button>
      )}
      {type === "next" && page !== null && page !== undefined && (
        <button className="change-page-btn-container next">
          <div className="change-page-btn">
            <div onClick={() => handleChangePage(page)}>
              <MdKeyboardDoubleArrowDown />
            </div>
          </div>
        </button>
      )}
    </>
  );
};

export default ChangePageBtn;
