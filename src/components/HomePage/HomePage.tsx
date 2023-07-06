import { useState } from "react";
import { useNavigate } from "react-router";
import { useAllProduct, useLimitedProduct } from "../Api/GetApi";
import { Banner } from "../Banner/Banner";
import { CartIcon } from "../svg";
import "./Home.scss";

export const HomePage = () => {
  const [selectedId, setSelectedId] = useState<number | undefined>(undefined);
  const { data, isLoading } = useAllProduct(selectedId);
  const { data: limitedProduct } = useLimitedProduct();
  const navigate = useNavigate();

  return (
    <div className="home-page">
      <Banner />
      <div className="container">
        <div className="row">
          <div className="title-block">
            <h3 className="title">Lemited Product</h3>
            <div className="border-div"></div>
          </div>
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
                        onClick={() => {
                          setSelectedId(item.id);
                          navigate(`/product-detail/${item.id}`);
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
          <div className="title-block">
            <h3 className="title">Latest Arrivals</h3>
            <div className="border-div"></div>
          </div>
          {isLoading ? (
            <>loading...</>
          ) : (
            <>
              {data?.map((item, index) => {
                return (
                  <div className="col-md-3" key={index}>
                    <div className="product-list">
                      <div className="product-section">
                        <div className="product-grid ">
                          <img
                            src={item.image}
                            alt="img "
                            className="product-img"
                            onClick={() => {
                              setSelectedId(item.id);
                              navigate(`/product-detail/${item.id}`);
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};
