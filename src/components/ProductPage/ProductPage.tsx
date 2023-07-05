import "../HomePage/Home.scss";
interface Props {
  category: string | undefined;
  dataImage: string | undefined;
  title: string | undefined;
  description: string | undefined;
  price: string | undefined;

}
export const ProductPage: React.FC<Props> = ({
  category,
  dataImage,
  title,
  description,
  price,
}) => {
  return (
    <div className="home-page">
      <div className="title-block">
        <h3 className="title">Latest Arrivals </h3>
        <div className="border-div"></div>
      </div>
      <div className="container">
        <div className="row">
          <div className="produt-section">
            <p className="category-content">{category}</p>
            <div className="produt-wrapper">
              <div className="width-50">
                <div className="product-list">
                  <div className="product-section">
                    <div className="product-grid ">
                      <img src={dataImage} alt="img " className="product-img" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="width-50">
                <div className="product-title">{title}</div>
                <label className="price">RS {price}</label>
                <div className="product-description">
                  <p>Product Description</p>
                  <p>{description}</p>
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
