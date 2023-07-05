import { useState } from "react";
import { useAllCategories, useSerchedCategory } from "../Api/GetApi";
import "./NavBar.scss";

export const NavBar = () => {
  const { data: categoryList } = useAllCategories();
  const [show, setShow] = useState(false);
  const [category, setCategory] = useState<string | undefined>();
  const { data } = useSerchedCategory(category);

  return (
    <div className="nav-seciton">
      <div className="nav-wrapper">
        <div className="logo-section">
          <h4 className="text"> OnlineStore</h4>
        </div>

        <div className="list-wrapper">
          <a className="nav-link" href="/">
            <div className="nav-text">
              <i className="icon-size bi bi-calculator"></i>
              <p className="nav-content">Home</p>
            </div>
          </a>

          <a className="nav-link" href="/search">
            <div className="nav-text">
              <i className="icon-size bi bi-chat-right-dots-fill"></i>
              <p className="nav-content">Search</p>
            </div>
          </a>
          <a className="nav-link">
            <div className="nav-text">
              <i className=" icon-size bi bi-file-earmark"></i>
              <p className="nav-content">Product Details</p>
            </div>
          </a>
          <div
            className="nav-text dropdown-btn"
            onClick={() => {
              setShow(!show);
            }}
          >
            <i className="icon-size bi bi-house-door-fill"></i>
            <p className="nav-content dropdown-toggle">Catagories</p>
            <div
              className={show ? "menu-dropdown" : "menu-dropdown no-dropdown"}
            >
              {categoryList?.map((item) => {
                return (
                  <div
                    className="dropdown-item"
                    onClick={() => {
                      setCategory(item.toString());
                      window.location.href = '/search';
                    }}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="mg-nav-40"></div>
    </div>
  );
};
