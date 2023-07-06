import { useState } from "react";
import {
  SingleProduct,
  useAllProduct,
  useSerchedCategory,
} from "../Api/GetApi";
import { CartIcon, SearchIcon } from "../svg";

export const SearchPage = () => {
  const { data: productList, isLoading } = useAllProduct();

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState<SingleProduct[]>([]);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };
  const searchData = (query: string) => {
    const filtered =
      Array.isArray(productList) &&
      productList.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );

    setFilteredData(filtered as SingleProduct[]);
  };

  return (
    <div className="search-page section-gap">
      <div className="search-section">
        <div className="banner-section">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => handleSearchChange(e.target.value)}
            placeholder="Search..."
          />
          <button
            type="button"
            onClick={() => {
              searchData(searchQuery);
            }}
          >
            <SearchIcon /> search
          </button>
        </div>
      </div>
      <div className="title-block">
        <h3 className="title">Search Results For '{searchQuery}'</h3>
        <div className="border-div"></div>
      </div>
      <div className="container">
        {isLoading ? (
          <>loading...</>
        ) : (
          <div className="row">
            {filteredData?.map((item, index) => {
              return (
                <div className="col-md-3" key={index}>
                  <div className="product-list">
                    <div className="product-section">
                      <div className="product-grid ">
                        <img
                          src={item.image}
                          alt="img "
                          className="product-img"
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
