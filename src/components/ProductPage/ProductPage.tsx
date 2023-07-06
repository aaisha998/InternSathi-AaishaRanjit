import "../HomePage/Home.scss";
import { useSingleProduct } from "../Api/GetApi";
import { useParams } from "react-router";

export const ProductPage = () => {
  const { id } = useParams<{ id?: string }>();

  const parsedId = id ? parseInt(id, 10) : undefined;

  const { data } = useSingleProduct(parsedId);

  return (
    <div className="home-page section-gap ">
      <div className="section-gap"></div>
      <div className="container">
        <div className="title-block">
          <h3 className="title">Product Detail </h3>
          <div className="border-div"></div>
        </div>
        <div className="row">
          <div className="produt-section">
            <p className="category-content">{data?.category}</p>
            <div className="produt-wrapper">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-6">
                    <div className="product-list">
                      <div className="product-section">
                        <div className="product-grid ">
                          <img
                            src={data?.image}
                            alt="img "
                            className="product-img"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="product-detail-wrapper">
                      <div className="product-title">{data?.title}</div>
                      <label className="price">RS {data?.price}</label>
                      <div className="product-description">
                        <p className="bold-content">Product Description</p>
                        <p className="content">{data?.description}</p>
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
        </div>
      </div>
    </div>
  );
};
