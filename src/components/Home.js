// src/components/Home.js

import React from 'react';
import ReactPlayer from 'react-player';
import Slider from 'react-slick'; // Import Slider from react-slick
import 'slick-carousel/slick/slick.css'; // Import slick styles
import 'slick-carousel/slick/slick-theme.css'; // Import slick theme styles
import image from '../images/image.jpg'; // Import your image here


const Home = () => {
  const products = [
    { id: 1, name: 'Product 1', description: 'Description of Product 1', image: image },
    { id: 2, name: 'Product 2', description: 'Description of Product 2', image: image },
    { id: 3, name: 'Product 3', description: 'Description of Product 3', image: image },
    { id: 4, name: 'Product 4', description: 'Description of Product 4', image: image },
    { id: 5, name: 'Product 5', description: 'Description of Product 5', image: image },
  ];

  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="home">
      <h1>Welcome to Yugan Industries</h1>
      <p>Precision is our craftsmanship</p>

      <div className="content-container">
        <div className="video-player">
          <ReactPlayer 
            url='https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            controls={true}
            width='100%'
            height='400px'
          />
        </div>

        <div className="products">
          <h2>Our Products</h2>
          {products.length > 0 ? (
            <Slider {...settings}> {/* Use the Slider component */}
              {products.map(product => (
                <div key={product.id} className="product-card">
                  <img src={product.image} alt={product.name} className="product-image" />
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                </div>
              ))}
            </Slider>
          ) : (
            <p>No products available.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;