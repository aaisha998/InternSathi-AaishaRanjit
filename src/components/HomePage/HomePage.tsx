import { useState } from "react";
import { useAllProduct } from "../Api/GetApi";
import { CartIcon } from "../svg";
import "./Home.scss";
import { Banner } from "../Banner/Banner";
import { ProductPage } from "../ProductPage/ProductPage";

export const HomePage = () => {
  const [selectedId, setSelectedId] = useState<number | undefined>(undefined);
  console.log("ee", selectedId);
  const { data, isLoading } = useAllProduct(selectedId);
  console.log("data", data);
  return (
    <div className="home-page">
      <Banner />

      <div className="title-block">
        <h3 className="title">Latest Arrivals </h3>
        <div className="border-div"></div>
      </div>
      <div className="container">
        {isLoading ? (
          <>loading...</>
        ) : (
          <div className="row">
            {Array.isArray(data) ? (
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
                              //   alert(item.id);
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
              })
            ) : (
              <ProductPage
                category={data?.category}
                dataImage={data?.image}
                title={data?.title}
                price={data?.price}
                description={data?.description}
              />
            )}
          </div>
        )}
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
