import { useState } from "react";
import { SingleProduct, useAllProduct } from "../Api/GetApi";
import { CartIcon, SearchIcon } from "../svg";
import { useNavigate } from "react-router";

export const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState<SingleProduct[]>([]);
  const [selectedId, setSelectedId] = useState<number | undefined>(undefined);

  const { data: productList, isLoading } = useAllProduct(selectedId);

  // Search field on change data is filterd and set in filtered
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    const filtered =
      productList &&
      productList.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );

    setFilteredData(filtered as SingleProduct[]);
  };

  // Search btn on clicked data is filterd and set in filtered
  const searchData = (query: string) => {
    const filtered =
      productList &&
      productList.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );

    setFilteredData(filtered as SingleProduct[]);
  };
  const navigate = useNavigate();

  return (
    <div className="search-page section-gap">
      <div className="search-section">
        <div className="banner-section">
          <div className="search-content">
            <div className="title-block">
              <h3 className="title">Welcome to our Onlie Store</h3>
            </div>
            <input
              type="text"
              value={searchQuery}
              className="search-field"
              onChange={(e) => handleSearchChange(e.target.value)}
              placeholder="Search..."
            />
            <button
              type="button"
              onClick={() => {
                searchData(searchQuery);
              }}
              className="search-btn"
            >
              <SearchIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="title-block">
        {filteredData.length === 0 ? (
          <h3 className="title">
            No Product named '{searchQuery}' is available.
          </h3>
        ) : (
          <>
            <h3 className="title">Search Results For '{searchQuery}'</h3>
            <div className="border-div"></div>
          </>
        )}
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
          </div>
        )}
      </div>
    </div>
  );
};
