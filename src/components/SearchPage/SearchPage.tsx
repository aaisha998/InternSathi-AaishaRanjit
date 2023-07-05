import { useState } from "react";
import { useSerchedCategory } from "../Api/GetApi";
import { CartIcon } from "../svg";

export const SearchPage = () => {
  const [selectedId, setSelectedId] = useState<number | undefined>(undefined);

  const { data: category, isLoading } = useSerchedCategory();
  console.log("aaaa", category);

  return (
    <div className="search-page section-gap">
      <div className="search-section">
        <div className="banner-section"></div>
      </div>
      <div className="title-block">
        <h3 className="title">Search Results For 'blush'</h3>
        <div className="border-div"></div>
      </div>

      <div className="container">
        {isLoading ? (
          <>loading...</>
        ) : (
          <div className="row">
            {Array.isArray(category) &&
              category?.map((item, index) => {
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
              })}
          </div>
        )}
      </div>
    </div>
  );
};
