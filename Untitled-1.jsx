import './App.css';
import './style.css'; // Import the style.css file
import { useState } from 'react';

function App() {
  const [activeTab, setActiveTab] = useState('all-genre'); // State for tab switching

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div>
      <div id="header-wrap">
        <div className="top-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="social-links">
                  <ul>
                    <li>
                      <a href="https://www.facebook.com/PenangScienceCluster/">
                        <i className="icon icon-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.twitter.com">
                        <i className="icon icon-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com">
                        <i className="icon icon-youtube-play"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.behance.net">
                        <i className="icon icon-behance-square"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-6">
                <div className="right-element">
                  <a href="#" className="user-account for-buy">
                    <i className="icon icon-user"></i>
                    <span>Profile</span>
                  </a>
                  <a href="#" className="cart for-buy">
                    <i className="icon icon-clipboard"></i>
                    <span>Cart:(RM32.56)</span>
                  </a>
                  <div className="action-menu">
                    <div className="search-bar">
                      <a
                        href="#"
                        className="search-button search-toggle"
                        data-selector="#header-wrap"
                      >
                        <i className="icon icon-search"></i>
                      </a>
                      <form role="search" method="get" className="search-box">
                        <input
                          className="search-field text search-input"
                          placeholder="Search"
                          type="search"
                        />
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <header id="header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-2">
                <div className="main-logo">
                  <a href="/">
                    <img src="images/main-logo.png" alt="logo" />
                  </a>
                </div>
              </div>
              <div className="col-md-10">
                <nav id="navbar">
                  <div className="main-menu stellarnav">
                    <ul className="menu-list">
                      <li className="menu-item active">
                        <a href="#home">Home</a>
                      </li>
                      <li className="menu-item has-sub">
                        <a href="#pages" className="nav-link">
                          Page
                        </a>
                        <ul>
                          <li className="active">
                            <a href="/">Home page</a>
                          </li>
                          <li>
                            <a href="/about">About us</a>
                          </li>
                          <li>
                            <a href="/styles">Styles</a>
                          </li>
                          <li>
                            <a href="/blog">Blog</a>
                          </li>
                          <li>
                            <a href="/post">Post Single</a>
                          </li>
                          <li>
                            <a href="/store">Our Store</a>
                          </li>
                          <li>
                            <a href="/product">Product Single</a>
                          </li>
                          <li>
                            <a href="/support">Support</a>
                          </li>
                          <li>
                            <a href="/thanks">Thanks!</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item">
                        <a href="#featured-books" className="nav-link">
                          Featured
                        </a>
                      </li>
                      <li className="menu-item">
                        <a href="#popular-books" className="nav-link">
                          Popular
                        </a>
                      </li>
                      <li className="menu-item">
                        <a href="#special-offer" className="nav-link">
                          Offer
                        </a>
                      </li>
                      <li className="menu-item">
                        <a href="#latest-blog" className="nav-link">
                          Articles
                        </a>
                      </li>
                      <li className="menu-item">
                        <a href="#contact" className="nav-link">
                          Contact
                        </a>
                      </li>
                    </ul>
                    <div className="hamburger">
                      <span className="bar"></span>
                      <span className="bar"></span>
                      <span className="bar"></span>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </header>
      </div>

      <section id="billboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <button className="prev slick-arrow">
                <i className="icon icon-arrow-left"></i>
              </button>
              <div className="main-slider pattern-overlay">
                <div className="slider-item">
                  <div className="banner-content">
                    <h2 className="banner-title">Life of the wild</h2>
                    <p>
                      Life of the Wild is a book that explores the beauty and
                      challenges of nature through vivid storytelling. It delves
                      into the lives of animals and their habitats, showcasing the
                      intricate balance of ecosystems.
                    </p>
                    <div className="btn-wrap">
                      <a
                        href="#"
                        className="btn btn-outline-accent btn-accent-arrow"
                      >
                        Read More
                        <i className="icon icon-ns-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <img
                    src="images/main-banner1.jpg"
                    alt="banner"
                    className="banner-image"
                  />
                </div>
                <div className="slider-item">
                  <div className="banner-content">
                    <h2 className="banner-title">Birds gonna be Happy</h2>
                    <p>
                      Birds Gonna Be Happy is a book that likely celebrates birds
                      and their natural habitats. It might explore the beauty of
                      birds, their behaviors, and how they thrive in the wild.
                    </p>
                    <div className="btn-wrap">
                      <a
                        href="#"
                        className="btn btn-outline-accent btn-accent-arrow"
                      >
                        Read More
                        <i className="icon icon-ns-arrow-right"></i>
                      </a>
                    </div>
                  </div>
                  <img
                    src="images/main-banner2.jpg"
                    alt="banner"
                    className="banner-image"
                  />
                </div>
              </div>
              <button className="next slick-arrow">
                <i className="icon icon-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="client-holder" data-aos="fade-up">
        <div className="container">
          <div className="row">
            <div className="inner-content">
              <div className="logo-wrap">
                <div className="grid">
                  <a href="#">
                    <img src="images/client-image1.png" alt="client" />
                  </a>
                  <a href="#">
                    <img src="images/client-image2.png" alt="client" />
                  </a>
                  <a href="#">
                    <img src="images/client-image3.png" alt="client" />
                  </a>
                  <a href="#">
                    <img src="images/client-image4.png" alt="client" />
                  </a>
                  <a href="#">
                    <img src="images/client-image5.png" alt="client" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="featured-books" className="py-5 my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header align-center">
                <div className="title">
                  <span>Some quality items</span>
                </div>
                <h2 className="section-title">Featured Books</h2>
              </div>
              <div className="product-list" data-aos="fade-up">
                <div className="row">
                  <div className="col-md-3">
                    <div className="product-item">
                      <figure className="product-style">
                        <img
                          src="images/buku.jpg"
                          alt="Books"
                          className="product-item"
                        />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          Add to Cart
                        </button>
                      </figure>
                      <figcaption>
                        <h3>Bridges to Burn</h3>
                        <span>Marion Todd</span>
                        <div className="item-price">RM 35.00</div>
                      </figcaption>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="product-item">
                      <figure className="product-style">
                        <img
                          src="images/product-item2.jpg"
                          alt="Books"
                          className="product-item"
                        />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          Add to Cart
                        </button>
                      </figure>
                      <figcaption>
                        <h3>Great travel at desert</h3>
                        <span>Sanchit Howdy</span>
                        <div className="item-price">RM 38.00</div>
                      </figcaption>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="product-item">
                      <figure className="product-style">
                        <img
                          src="images/product-item3.jpg"
                          alt="Books"
                          className="product-item"
                        />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          Add to Cart
                        </button>
                      </figure>
                      <figcaption>
                        <h3>The lady beauty Scarlett</h3>
                        <span>Arthur Doyle</span>
                        <div className="item-price">RM 45.00</div>
                      </figcaption>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="product-item">
                      <figure className="product-style">
                        <img
                          src="images/product-item4.jpg"
                          alt="Books"
                          className="product-item"
                        />
                        <button
                          type="button"
                          className="add-to-cart"
                          data-product-tile="add-to-cart"
                        >
                          Add to Cart
                        </button>
                      </figure>
                      <figcaption>
                        <h3>Once upon a time</h3>
                        <span>Klien Marry</span>
                        <div className="item-price">RM 35.00</div>
                      </figcaption>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="btn-wrap align-right">
                <a href="#" className="btn-accent-arrow">
                  View all products
                  <i className="icon icon-ns-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="best-selling" className="leaf-pattern-overlay">
        <div className="corner-pattern-overlay"></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-6">
                  <figure className="products-thumb">
                    <img
                      src="images/single-image.jpg"
                      alt="book"
                      className="single-image"
                    />
                  </figure>
                </div>
                <div className="col-md-6">
                  <div className="product-entry">
                    <h2 className="section-title divider">Best Selling Book</h2>
                    <div className="products-content">
                      <div className="author-name">By Timbur Hood</div>
                      <h3 className="item-title">Birds gonna be happy</h3>
                      <p>
                        Birds Gonna Be Happy is a book that likely celebrates
                        birds and their natural habitats. It might explore the
                        beauty of birds, their behaviors, and how they thrive in
                        the wild.
                      </p>
                      <div className="item-price">RM 45.00</div>
                      <div className="btn-wrap">
                        <a href="#" className="btn-accent-arrow">
                          shop it now
                          <i className="icon icon-ns-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="popular-books" className="bookshelf py-5 my-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header align-center">
                <div className="title">
                  <span>Some quality items</span>
                </div>
                <h2 className="section-title">Popular Books</h2>
              </div>
              <ul className="tabs">
                <li
                  data-tab-target="all-genre"
                  className={`tab ${activeTab === 'all-genre' ? 'active' : ''}`}
                  onClick={() => handleTabClick('all-genre')}
                >
                  All Genre
                </li>
                <li
                  data-tab-target="business"
                  className={`tab ${activeTab === 'business' ? 'active' : ''}`}
                  onClick={() => handleTabClick('business')}
                >
                  Business
                </li>
                <li
                  data-tab-target="technology"
                  className={`tab ${activeTab === 'technology' ? 'active' : ''}`}
                  onClick={() => handleTabClick('technology')}
                >
                  Technology
                </li>
                <li
                  data-tab-target="romantic"
                  className={`tab ${activeTab === 'romantic' ? 'active' : ''}`}
                  onClick={() => handleTabClick('romantic')}
                >
                  Romantic
                </li>
                <li
                  data-tab-target="adventure"
                  className={`tab ${activeTab === 'adventure' ? 'active' : ''}`}
                  onClick={() => handleTabClick('adventure')}
                >
                  Adventure
                </li>
                <li
                  data-tab-target="fictional"
                  className={`tab ${activeTab === 'fictional' ? 'active' : ''}`}
                  onClick={() => handleTabClick('fictional')}
                >
                  Fictional
                </li>
              </ul>
              <div className="tab-content">
                <div
                  id="all-genre"
                  data-tab-content
                  className={activeTab === 'all-genre' ? 'active' : ''}
                >
                  <div className="row">
                    <div className="col-md-3">
                      <div className="product-item">
                        <figure className="product-style">
                          <img
                            src="images/tab-item1.jpg"
                            alt="Books"
                            className="product-item"
                          />
                          <button
                            type="button"
                            className="add-to-cart"
                            data-product-tile="add-to-cart"
                          >
                            Add to Cart
                          </button>
                        </figure>
                        <figcaption>
                          <h3>Portrait photography</h3>
                          <span>Adam Silber</span>
                          <div className="item-price">RM 40.00</div>
                        </figcaption>
                      </div>
                    </div>
                    {/* Add other items similarly */}
                  </div>
                </div>
                {/* Add other tab content similarly */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="quotation" className="align-center pb-5 mb-5">
        <div className="inner-content">
          <h2 className="section-title divider">Quote of the day</h2>
          <blockquote data-aos="fade-up">
            <q>
              Birds Gonna Be Happy is a book that likely celebrates birds and
              their natural habitats. It might explore the beauty of birds, their
              behaviors, and how they thrive in the wild.
            </q>
            <div className="author-name">Timber Hood</div>
          </blockquote>
        </div>
      </section>

      <section id="special-offer" className="bookshelf pb-5 mb-5">
        <div className="section-header align-center">
          <div className="title">
            <span>Grab your opportunity</span>
          </div>
          <h2 className="section-title">Books with discount</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="inner-content">
              <div className="product-list" data-aos="fade-up">
                <div className="grid product-grid">
                  <div className="product-item">
                    <figure className="product-style">
                      <img
                        src="images/product-item5.jpg"
                        alt="Books"
                        className="product-item"
                      />
                      <button
                        type="button"
                        className="add-to-cart"
                        data-product-tile="add-to-cart"
                      >
                        Add to Cart
                      </button>
                    </figure>
                    <figcaption>
                      <h3>Way Of Happiness</h3>
                      <span>Ananda Kumar</span>
                      <div className="item-price">
                        <span className="prev-price">RM 50.00</span>RM 40.00
                      </div>
                    </figcaption>
                  </div>
                  {/* Add other items similarly */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="subscribe">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-6">
                  <div className="title-element">
                    <h2 className="section-title divider">
                      Subscribe to our newsletter
                    </h2>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="subscribe-content" data-aos="fade-up">
                    <p>
                      Get the latest news, events, and announcements delivered
                      straight to your inbox.
                      <br />
                      <b>We promise not to spam you</b>
                    </p>
                    <form id="form">
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email address here"
                      />
                      <button className="btn-subscribe">
                        <span>send</span>
                        <i className="icon icon-send"></i>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="footer-item">
                <div className="company-brand">
                  <img
                    src="images/main-logo.png"
                    alt="logo"
                    className="footer-logo"
                  />
                  <p>
                    At BookSaw, every page holds a new discovery. Whether you're
                    seeking thrilling adventures, heartwarming tales, or
                    insightful knowledge, our carefully curated collection has
                    something for every reader.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu">
                <h5>About Us</h5>
                <ul className="menu-list">
                  <li className="menu-item">
                    <a href="#">Vision</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Articles</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Careers</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Service Terms</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Donate</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu">
                <h5>Discover</h5>
                <ul className="menu-list">
                  <li className="menu-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Books</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Authors</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Subjects</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Advanced Search</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu">
                <h5>My account</h5>
                <ul className="menu-list">
                  <li className="menu-item">
                    <a href="#">Sign In</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">View Cart</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">My Wishlist</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Track My Order</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              <div className="footer-menu">
                <h5>Help</h5>
                <ul className="menu-list">
                  <li className="menu-item">
                    <a href="#">Help center</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Report a problem</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Suggesting edits</a>
                  </li>
                  <li className="menu-item">
                    <a href="#">Contact us</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;