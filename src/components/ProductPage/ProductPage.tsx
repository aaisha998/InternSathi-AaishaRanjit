import { useContext } from "react";
import "../HomePage/Home.scss";
import { SelectedDataContext } from "../ProductDetailsContext";
import { SingleProduct } from "../Api/GetApi";
interface Props {
  // category: string | undefined;
  // dataImage: string | undefined;
  // title: string | undefined;
  // description: string | undefined;
  // price: string | undefined;
}
export const ProductPage: React.FC<Props> = (
  {
    // category,
    // dataImage,
    // title,
    // description,
    // price,
  }
) => {
  const { selectedData } = useContext(SelectedDataContext);

  // const handleSelectData = (selectedData: SingleProduct) => {
  //   setSelectedData(selectedData);
  // };
  return (
    <div className="home-page">
      <div className="container">
        <div className="row">
          <div className="produt-section">
            <p className="category-content">{selectedData?.category}</p>
            <div className="produt-wrapper">
              <div className="width-50">
                <div className="product-list">
                  <div className="product-section">
                    <div className="product-grid ">
                      <img
                        src={selectedData?.image}
                        alt="img "
                        className="product-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="width-50">
                <div className="product-title">{selectedData?.title}</div>
                <label className="price">RS {selectedData?.price}</label>
                <div className="product-description">
                  <p>Product Description</p>
                  <p>{selectedData?.description}</p>
                </div>
                <div>
                  <button className="main-btn">Add To Cart</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
