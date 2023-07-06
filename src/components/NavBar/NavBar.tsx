import { useState } from "react";
import { useAllCategories } from "../Api/GetApi";
import "./NavBar.scss";
import { CategoryIcon, HomeIcon, SearchIcon } from "../svg";
import { useNavigate } from "react-router";

export const NavBar = () => {
  const { data: categoryList } = useAllCategories();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="nav-seciton">
      <div className="nav-wrapper">
        <div className="logo-section">
          <h4 className="text"> OnlineStore</h4>
        </div>

        <div className="list-wrapper">
          <a className="nav-link" href="/">
            <div className="nav-text">
              <HomeIcon />
              <p className="nav-content">Home</p>
            </div>
          </a>

          <div
            className="nav-text"
            onClick={() => {
              navigate(`/search`);
            }}
          >
            <SearchIcon />
            <p className="nav-content">Search</p>
          </div>

          <div
            className="nav-text dropdown-btn"
            onClick={() => {
              setShow(!show);
            }}
          >
            <i className="icon-size bi bi-house-door-fill"></i>
            <p className="nav-content dropdown-toggle">
              <CategoryIcon />
              <span className="icon-gap"></span>Catagories
            </p>
            <div
              className={show ? "menu-dropdown" : "menu-dropdown no-dropdown"}
            >
              {categoryList?.map((item) => {
                return <div className="dropdown-item">{item}</div>;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="mg-nav-40"></div>
    </div>
  );
};
