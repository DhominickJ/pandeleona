import React from "react";
import card2 from "./card-2.svg";
import card3 from "./card-3.svg";
import card4 from "./card-4.svg";
import card from "./card.svg";
import image2 from "./image-2.png";
import image3 from "./image-3.png";
import image4 from "./image-4.png";
import image5 from "./image-5.png";
import image from "./image.png";
import image from "./image.svg";
import rectangle from "./rectangle.png";
import separator from "./separator.svg";
import "./about-style.css";

export const AboutUsPage = () => {
  return (
    <div className="about-us-page">
      <div className="overlap">
        <div className="card" />
        <div className="about-creators">
          <div className="member">
            <div className="overlap-group">
              <img className="img" alt="Card" src={card} />
              <img className="image" alt="Image" src={image} />
              <div className="description">Role and Bakground</div>
              <div className="price">Role</div>
              <div className="product">Name</div>
            </div>
          </div>
          <div className="overlap-wrapper">
            <div className="overlap-group">
              <img className="img" alt="Card" src={image} />
              <img className="image" alt="Image" src={image2} />
              <div className="description">Role and Bakground</div>
              <div className="price">Role</div>
              <div className="product">Name</div>
            </div>
          </div>
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <img className="img" alt="Card" src={card2} />
              <img className="image" alt="Image" src={image3} />
              <div className="description">Role and Bakground</div>
              <div className="price">Role</div>
              <div className="product">Name</div>
            </div>
          </div>
          <div className="div-wrapper">
            <div className="overlap-group">
              <img className="img" alt="Card" src={card3} />
              <img className="image" alt="Image" src={image4} />
              <div className="description">Role and Bakground</div>
              <div className="price">Role</div>
              <div className="product">Name</div>
            </div>
          </div>
          <div className="div">
            <div className="overlap-group">
              <img className="img" alt="Card" src={card4} />
              <img className="image" alt="Image" src={image5} />
              <div className="description">Role and Bakground</div>
              <div className="price">Role</div>
              <div className="product">Name</div>
            </div>
          </div>
          <div className="about-creator">About the Creators</div>
        </div>
        <img className="separator" alt="Separator" src={separator} />
        <div className="about-pandeleona">
          <p className="p">
            <span className="text-wrapper">
              In the quiet, picturesque town of Leon, Iloilo, nestled in the mountains and surrounded by lush greenery,
              the aroma of freshly baked bread begins to fill the air as the sun rises. This small town has always been
              known for its peaceful charm, but something special was about to put Leon on the map—Pan de Leona.
              <br />
              The journey of Pan de Leona began with a simple dream. Founded by a local family of bakers with a deep
              love for traditional Filipino flavors, the bakery started as a humble stall on the streets of Leon,
              selling pandesal.{" "}
            </span>
            <span className="span">See more...</span>
          </p>
          <p className="description-2">
            <span className="text-wrapper">
              Nanay Leonida had one mission: to create the softest, most flavorful pandesal that would become a beloved
              staple not just in Leon, but across the country. Her secret? A commitment to using only the freshest local
              ingredients and baking every batch with love and care. In the beginning, the bakery offered just the
              original flavor of pandesal, but as the bakery’s reputation grew, so did its ambition.{" "}
            </span>
            <span className="text-wrapper-2">See more...</span>
          </p>
          <p className="description-3">
            <span className="text-wrapper">
              While Pan de Leona continues to innovate with new flavors like matcha pandesal, it has never forgotten its
              core values: family, tradition, and community. The bakery remains a family-run business, with every member
              involved in ensuring that the bread they produce is not only delicious but also made with the same
              dedication and care as when Nanay Leonida first started. To this day, Pan de Leona is proud to support
              local farmers by sourcing ingredients like ube and malunggay directly from them, staying true to their
              Iloilo roots
            </span>
            <span className="text-wrapper-2">
              . See more...
              <br />
            </span>
          </p>
          <p className="description-4"> Where Every Pandesal Tells a Story</p>
          <p className="about-PDL">The Roaring Rise of Pan de Leona</p>
          <p className="about-PDL-2">From Humble Beginnings to a Roaring Success</p>
          <p className="about-PDL-3">A Bakery with Heart and Soul</p>
        </div>
        <footer className="footer">
          <div className="logo">
            <div className="text-wrapper-3">© 2024</div>
            <div className="text-wrapper-4">Pan de Leona</div>
          </div>
        </footer>
      </div>
      <div className="nav-bar">
        <div className="tabs">
          <div className="overlap-2">
            <div className="text-wrapper-5">Home</div>
            <div className="text-wrapper-5">Home</div>
          </div>
          <div className="text-wrapper-6">Menu</div>
          <div className="text-wrapper-7">Order Now</div>
          <div className="overlap-group-2">
            <div className="text-wrapper-8">About Us</div>
          </div>
        </div>
        <div className="logo-2">
          <div className="layer-wrapper">
            <div className="layer">
              <img className="rectangle" alt="Rectangle" src={rectangle} />
            </div>
          </div>
          <div className="text-wrapper-9">Pan de Leona</div>
        </div>
      </div>
    </div>
  );
};
