import React from "react";
import ReactDOM from "react-dom/client";
import ImageDesktop from "../src/image-product-desktop.jpg";
import ImageMobile from "../src/image-product-mobile.jpg";
import "./index.css";
class MainBox extends React.Component {
  render() {
    return (
      <main id="main-box">
        <ImageBox />
        <ContentBox />
      </main>
    );
  }
}
class ImageBox extends React.Component {
  render() {
    return (
      <div className="image-box">
        <picture>
          <source srcSet={ImageMobile} media="(max-width: 720px)" />
          <img src={ImageDesktop} alt="s" />
        </picture>
      </div>
    );
  }
}
class ContentBox extends React.Component {
  render() {
    return (
      <div className="content-box">
        <ContentBoxPerfume />
        <Header />
        <ContentBoxText />
        <ContentBoxPrice />
        <ContentBoxButton />
      </div>
    );
  }
}
class ContentBoxPerfume extends React.Component {
  render() {
    return (
      <div className="content-box__perfume">
        <p className="content-box__perfume__text">Perfume</p>
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    return (
      <header className="content-box__header">
        <h1 className="content-box__header__heading">
          Gabrielle Essence Eau De Parfum
        </h1>
      </header>
    );
  }
}
class ContentBoxText extends React.Component {
  render() {
    return (
      <div className="content-box__text">
        <p className="content-box__text--primary">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
      </div>
    );
  }
}
class ContentBoxPrice extends React.Component {
  render() {
    return (
      <div className="content-box__price">
        <p className="content-box__price--main">$149.99</p>
        <p className="content-box__price--second"> $169.99</p>
      </div>
    );
  }
}
class ContentBoxButton extends React.Component {
  render() {
    return (
      <div className="content-box__button">
        <button className="content-box__button--primary">Add to Cart</button>
      </div>
    );
  }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MainBox />);
