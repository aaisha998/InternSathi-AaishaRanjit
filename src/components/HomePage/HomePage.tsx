import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { SingleProduct, useAllProduct, useLimitedProduct } from "../Api/GetApi";
import { Banner } from "../Banner/Banner";
import {
  SelectedDataContext
} from "../ProductDetailsContext";
import { CartIcon } from "../svg";
import "./Home.scss";

export const HomePage = () => {
  const [selectedId, setSelectedId] = useState<number | undefined>(undefined);
  const { data, isLoading } = useAllProduct(selectedId);
  const { data: limitedProduct } = useLimitedProduct();
  const { setSelectedData } = useContext(SelectedDataContext);
  const navigate = useNavigate();
  const handleSelectData = (selectedData: SingleProduct) => {
    setSelectedData(selectedData);
  };
  return (
    <div className="home-page">
      <Banner />

      <div className="title-block">
        <h3 className="title">
          {Array.isArray(data) ? "Latest Arrivals" : "Product Detail "}
        </h3>
        <div className="border-div"></div>
      </div>
      <div className="container">
        {isLoading ? (
          <>loading...</>
        ) : (
          <div className="row">
            {Array.isArray(data) &&
              data?.map((item, index) => {
                return (
                  <div className="col-md-3" key={index}>
                    <div className="product-list">
                      <div className="product-section">
                        <div className="product-grid ">
                          <img
                            src={item.image}
                            alt="img "
                            className="product-img"
                            onDoubleClick={() => {
                              setSelectedId(item.id);
                              navigate("/product-detail");
                              // setSelectedData(selectedData);
                            }}
                          />
                        </div>
                        <div className="product-title">{item.title}</div>
                        <div className="price-cart-btn-section">
                          <label className="price">RS {item.price}</label>
                          <div className="card-btn ">
                            <CartIcon />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        )}
        <div className="title-block">
          <h3 className="title">Lemited Product</h3>
          <div className="border-div"></div>
        </div>
        <div className="row">
          {limitedProduct?.map((item) => {
            return (
              <div className="col-md-3">
                <div className="product-list">
                  <div className="product-section">
                    <div className="product-grid ">
                      <img
                        src={item.image}
                        alt="img "
                        className="product-img"
                        onDoubleClick={() => {
                          setSelectedId(item.id);
                        }}
                      />
                    </div>
                    <div className="product-title">{item.title}</div>
                    <div className="price-cart-btn-section">
                      <label className="price">Rs {item.price}</label>
                      <div className="card-btn ">CD</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* <div className="container">
    <div className="row">
      <div className="col-md-3">
        <div className="product-list">
          <div className="product-section">
            <div className="product-grid "></div>
            <div className="product-title">product-title</div>
            <div className="price-cart-btn-section">
              <label className="price">RS 1000</label>
              <div className="card-btn ">CD</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div> */}
    </div>
  );
};
