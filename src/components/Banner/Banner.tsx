import "./Banner.scss";
export const Banner = () => {
  return (
    <div className="banner-page">
      <div className="banner-section">
        <div className="banner-content">
          <h2>Online Store</h2>
          <h5>Buy Anywhere</h5>
          <p className="content">Explore and Shop at our Online Store</p>
          <p className="content">
            Discover a wide range of products, enjoy secure transactions, and
            experience convenient shopping from the comfort of your home.{" "}
          </p>
          <p className="content">your online shopping journey now!</p>
          <div className="high-light-wrapper">
            <div className="high-light">Shop Now</div>
          </div>
        </div>
        <img
          alt="search"
          src={require("../../image/dd.png")}
          className="top-image"
        />
        <img
          alt="search"
          src={require("../../image/tt.png")}
          className="down-image"
        />
      </div>
    </div>
  );
};
