import React from "react";
import card from "./card.png";
import classic12 from "./classic-1-2.png";
import image from "./image.png";
import image from "./image.svg";
import like1 from "./like-1.svg";
import pandesal21 from "./pandesal2-1.png";
import pandesal22 from "./pandesal2-2.png";
import pandesal23 from "./pandesal2-3.png";
import "./style.css";
import vector2 from "./vector-2.svg";
import vector3 from "./vector-3.svg";
import vector from "./vector.svg";

export const HomePage = () => {
  return (
    <div className="home-page">
      <div className="fun-facts-section">
        <div className="fact">
          <div className="overlap-group">
            <p className="description">
              <span className="text-wrapper">
                Did You Know Pandesal Means ‘Salt Bread’?
                <br />
              </span>
              <span className="span">
                But don’t let the name fool you – pandesal is actually known for its slightly sweet, fluffy goodness!
                The perfect balance of soft and savory!{" "}
              </span>
            </p>
          </div>
        </div>
        <div className="overlap-wrapper">
          <div className="overlap">
            <p className="div">
              <span className="text-wrapper-2">
                Early Risers &amp; Bread Lovers Unite!
                <br />
              </span>
              <span className="span">
                But don’t let the name fool you – pandesal is actually known for its slightly sweet, fluffy goodness!
                The perfect balance of soft and savory!{" "}
              </span>
            </p>
          </div>
        </div>
        <div className="overlap-group-wrapper">
          <div className="overlap">
            <p className="div">
              <span className="text-wrapper-2">
                Did You Know Pandesal Means ‘Salt Bread’? <br />
              </span>
              <span className="span">
                But don’t let the name fool you – pandesal is actually known for its slightly sweet, fluffy goodness!
                The perfect balance of soft and savory!{" "}
              </span>
            </p>
          </div>
        </div>
        <header className="header">
          <div className="title">Fun Facts about Pandesal</div>
          <div className="tagline">Paw-sitively Delicious!</div>
        </header>
        <div className="pagination">
          <div className="pagination-2" />
          <div className="pagination-3" />
          <div className="pagination-4" />
          <div className="pagination-5" />
          <div className="pagination-6" />
        </div>
      </div>
      <div className="overlap-2">
        <div className="delivery-feature">
          <div className="overlap-3">
            <div className="card">
              <img className="classic" alt="Classic" src={classic12} />
            </div>
            <p className="p">Because we knead you to enjoy our bread at its best!</p>
            <div className="about-us-button">
              <div className="order-now-wrapper">
                <div className="order-now">About Us</div>
              </div>
            </div>
            <p className="title-2">Pandesal to Your Doorstep, Fast and Fresh!</p>
            <div className="feature">
              <div className="overlap-4">
                <p className="text">Order, Relax, and Bread On</p>
                <p className="text-2">
                  Our easy online ordering means you can lion around while we do the baking and delivering.
                </p>
                <img className="vector" alt="Vector" src={vector} />
              </div>
            </div>
            <div className="div-wrapper">
              <div className="overlap-4">
                <div className="text-3">Flavors on the Go</div>
                <p className="text-4">
                  From classic to wild, pick your favorite flavor adventure – delivered just in time for breakfast or an
                  afternoon snack attack!
                </p>
                <img className="like" alt="Like" src={like1} />
              </div>
            </div>
            <div className="feature-2">
              <div className="overlap-4">
                <div className="text-3">Roaring Fast Delivery</div>
                <p className="text-5">
                  Skip the wait! We’ll have your pandesal delivered before you can say &#34;pandesarap!&#34;
                </p>
                <img className="img" alt="Vector" src={image} />
              </div>
            </div>
            <div className="feature-3">
              <div className="overlap-4">
                <div className="text-6">Freshly Baked Daily</div>
                <p className="text-7">
                  Straight from our ovens, warm pandesal with flavors that’ll make you roar with delight!
                </p>
                <img className="vector-2" alt="Vector" src={vector2} />
              </div>
            </div>
          </div>
        </div>
        <div className="product-display">
          <div className="overlap-5">
            <div className="card-2">
              <div className="overlap-group-2">
                <div className="card-3" />
                <img className="vector-3" alt="Vector" src={vector3} />
              </div>
            </div>
            <div className="title-3">Our Products</div>
            <div className="products">
              <img className="pandesal" alt="Pandesal" src={pandesal21} />
              <img className="pandesal-2" alt="Pandesal" src={pandesal22} />
              <img className="pandesal-3" alt="Pandesal" src={pandesal23} />
            </div>
            <div className="product-description">
              <div className="menu">Malunggay (Moringa Leona)</div>
              <p className="description-2">A Bread that’s Green, Mean, and Roarin’ Good!</p>
              <p className="link">Click here to view all products</p>
            </div>
          </div>
        </div>
        <div className="details-section">
          <div className="overlap-6">
            <img className="card-4" alt="Card" src={card} />
            <div className="order-now-button">
              <div className="overlap-group-3">
                <div className="text-wrapper-3">Order Now</div>
              </div>
            </div>
            <p className="tagline-2">Sa Pan de Leona, malalasap ang sarap sa bawat kagat!</p>
            <p className="tagline-3">
              <span className="text-wrapper-4">Sa </span>
              <span className="text-wrapper-5">Pan de Leona</span>
              <span className="text-wrapper-4">, malalasap ang sarap sa bawat kagat! </span>
            </p>
            <p className="description-3">
              Though it has grown into a nationwide success, Pan de Leona never forgets where it all began—in the heart
              of Leon, Iloilo, where every loaf of pandesal is baked with the soul of the town and the heart of a
              lioness.
            </p>
            <img className="image" alt="Image" src={image} />
          </div>
        </div>
      </div>
      <div className="nav-bar">
        <div className="tabs">
          <div className="overlap-group-4">
            <div className="text-wrapper-6">Home</div>
          </div>
          <div className="text-wrapper-7">Menu</div>
          <div className="text-wrapper-8">Order Now</div>
          <div className="text-wrapper-9">About Us</div>
        </div>
        <div className="logo">
          <div className="layer-wrapper">
            <div className="layer" />
          </div>
          <div className="text-wrapper-10">Pan de Leona</div>
        </div>
      </div>
    </div>
  );
};
