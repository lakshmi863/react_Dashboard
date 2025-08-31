import React, { useState } from 'react';


import './HomePage.css';

const Home = () => {
  const [selectedVariant, setSelectedVariant] = useState('125g | 4.4oz');
  const [purchaseOption, setPurchaseOption] = useState('oneTime');
  const [bundleActive] = useState(true);
  const [quantity, setQuantity] = useState(1);

  const productData = {
    name: 'Manuka Honey UMF® 24+ MGO 1122+',
    reviews: '821 REVIEWS',
    description:
      'Our premium Manuka Honey is sourced from the pristine landscapes of New Zealand, where the native Manuka bush thrives. Each jar contains honey that is rich in Methylglyoxal (MGO) and certified with a Unique Manuka Factor (UMF®) rating of 24+, ensuring its exceptional quality and potency. This honey is renowned for its robust antibacterial properties, making it a natural choice for boosting immunity, soothing sore throats, and promoting overall wellness. Enjoy the rich, earthy flavor and the numerous health benefits of our UMF® 24+ Manuka Honey, perfect for daily consumption or as a special treat.',
    price: 55.0,
    subscribePrice: 44.7,
    bundlePrice: 430.85,
    bundleOriginalPrice: 478.7,
  };

  const images = {
  mainProduct: '/images/image1.png',
  gallery: [
    '/images/image2.png',
    '/images/image3.png',
    '/images/image4.jpg',
    '/images/image5.png',
    '/images/image6.png',
    '/images/image7.png',
    '/images/image8.png',
  
  ],

  variants: [
    { src: '/images/vimage1.png', label: '125g | 4.4oz' },
    { src: '/images/vimage2.png', label: '250g | 8.8oz' },
    { src: '/images/vimage3.png', label: '500g | 17.6oz' },
    { src: '/images/vimage4.png', label: '1kg | 35.3oz' },
    { src: '/images/vimage5.png', label: '2kg | 65.3oz' },
    { src: '/images/vimage6.png', label: '5kg | 85.3oz' },
    { src: '/images/vimage7.png', label: '4kg | 105.3oz' },
  ],
    variants2: [
    { src: '/images/bang1.png', label: '125g | 4.4oz' },
    { src: '/images/bang2.png', label: '250g | 8.8oz' },
    { src: '/images/bang3.png', label: '500g | 17.6oz' },
    { src: '/images/bang4.png', label: '1kg | 35.3oz' },
    { src: '/images/bang5.png', label: '2kg | 65.3oz' },
    { src: '/images/bang6.png', label: '5kg | 85.3oz' },
    
  ],


  badge: [
    '/images/badge1.png',
    '/images/badge2.png',
    '/images/badge3.png',
    '/images/badge4.png',
    '/images/badge5.png',
    '/images/badge6.png',
  ],

  bundle20: '/images/blog1.png',
  bundle24: '/images/blog2.png',
  bundleSpoon: '/images/blog3.png',
};

  const increaseQuantity = () => setQuantity(q => q + 1);
  const decreaseQuantity = () => setQuantity(q => (q > 1 ? q - 1 : 1));

  return (
   <div
  className="homepage-container"
   
>
      <div className="product-details-main">
        {/* -------------------- Product Image -------------------- */}
        <div className="product-image-section"
        
        style={{
          backgroundImage: "url('/images/back.png')",
            width: '500px',
            height: '560px',
            
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <img src={images.mainProduct} alt={productData.name} className="main-product-image" />
          <div className="image-gallery-section">
            {images.gallery.map((img, index) => (
              <img key={index} src={img} alt={`Gallery ${index + 1}`} />
            ))}
          </div>
        </div>

        {/* -------------------- Product Info -------------------- */}
        <div className="product-info-section">
          <h1 className="product-name">{productData.name}</h1>
          <div className="review-section" style={{ display: 'block', textAlign: 'right' }}>
            <span className="stars text-align right"  >⭐⭐⭐⭐⭐</span>
            <span className="reviews">{productData.reviews}</span>
          </div>
          <p className="product-description">{productData.description}</p>
         <div className="variant-images">
              {images.variants2.map((v, idx) => (
                <img
                  key={idx}
                  src={v.src}
                  alt={v.label}
                  className={selectedVariant === v.label ? 'active' : ''}
                  onClick={() => setSelectedVariant(v.label)}
                />
              ))}
            </div>   {/* Variant Selector */}
          <div className="variant-selector-section">
            <p>SIZE: SELECT QMD</p>
            <p className="selected-variant">Variant: {selectedVariant}</p>
            <div className="variant-images">
              {images.variants.map((v, idx) => (
                <img
                  key={idx}
                  src={v.src}
                  alt={v.label}
                  className={selectedVariant === v.label ? 'active' : ''}
                  onClick={() => setSelectedVariant(v.label)}
                />
              ))}
            </div>
          </div>

          {/* Payment Options */}
          <div className="payment-options-container">
            <p className="section-title">PAYMENT OPTIONS (SELECT ONE)</p>
            <div className="payment-options-row">
              <div
                className={`payment-option ${purchaseOption === 'oneTime' ? 'active' : ''}`}
                onClick={() => setPurchaseOption('oneTime')}
              >
                <p className="option-text">One-time purchase</p>
                <p className="option-price">${productData.price.toFixed(2)} USD</p>
              </div>
              <div
                className={`payment-option ${purchaseOption === 'subscribe' ? 'active' : ''}`}
                onClick={() => setPurchaseOption('subscribe')}
              >
                <p className="option-text">Subscribe & save 20%</p>
                <p className="option-price">${productData.subscribePrice.toFixed(2)} USD</p>
              </div>
            </div>
          </div>

          {/* Quantity & Add to Cart */}
          <div className="quantity-cart-container">
            <p className="section-title">SELECT QUANTITY</p>
            <div className="quantity-cart-row">
              <div className="quantity-selector">
                <button onClick={decreaseQuantity}>-</button>
                <input type="number" value={quantity} readOnly />
                <button onClick={increaseQuantity}>+</button>
              </div>
              <button className="add-to-cart-button">ADD TO CART</button>
            </div>
          </div>

          {/* Beauty Bundle */}
          <div className="beauty-bundle-container">
            <div className="bundle-header">
              <p className="bundle-title">Beauty Bundle</p>
            </div>
            <div className="bundle-items-row">
              <div className="bundle-item">
                  <img src={images.bundle20} alt="UMF 20+" />
                  <p className="item-name">UMF 20+</p>
                 <select className="item-variant">
                   <option value="250g">250g</option>
                  <option value="500g">500g</option>
                  <option value="1kg">1kg</option>
                  <option value="2kg">2kg</option>
            </select>
          </div>
                <span className="plus-sign">+</span>
              <div className="bundle-item">
                <img src={images.bundle24} alt="UMF 24+" />
                <p className="item-name">UMF 24+</p>
                <select className="item-variant">
                   <option value="250g">250g</option>
                  <option value="500g">500g</option>
                  <option value="1kg">1kg</option>
                  <option value="2kg">2kg</option>
            </select>
              </div>
              <span className="plus-sign">+</span>
              <div className="bundle-item">
                <img src={images.bundleSpoon} alt="Wooden Spoon" />
                <p className="item-name">Wooden Spoon</p>
              </div>
            </div>
            <div className="bundle-cta">
              <div className="bundle-price-info">
                <p className="old-price">${productData.bundleOriginalPrice.toFixed(2)} USD</p>
                <p className="current-price">${productData.bundlePrice.toFixed(2)} USD</p>
                <p className="sale-tag">Save 10%</p>
              </div>
              <button className="add-bundle-button">ADD BUNDLE TO CART</button>
            </div>
          </div>

          <div class="product-meta-info">
  <div class="rewards-section">
    <div class="rewards-info">
      <img src="images/glog.png" alt="Colourclub logo" class="colourclub-logo" />
      <p>Colourclub members earn up to <span>56</span> reward points when buy this item. Sign up or log in</p>
    </div>
  </div>

  <div class="shipping-afterpay-section">
    <div class="shipping-info-row">
      <div class="shipping-left">
        <p class="meta-title">DELIVERY</p>
        <p class="meta-detail">FREE DELIVERY ON ORDERS OVER $30</p>
      </div>
      <div class="shipping-right">
        <p class="meta-title">ESTIMATED DELIVERY DATE:</p>
        <p class="meta-detail">Jun 9 - Jun 13 To</p>
      </div>
    </div>
    <hr class="divider" />
    <div class="afterpay-section">
      <p class="meta-title"><span className='spancolor'>$</span>AFTER PAY</p>
      <p class="afterpay-detail">or 4 interest-free payments of $13.97 with <span><img src="images/afterpay-logo.png" alt="Afterpay" class="afterpay-logo" /></span></p>
    </div>
  </div>

  <div class="umf-scale-section">
    <p class="scale-title">UMF™ SCALE</p>
    <div class="scale-bar-container">
      <div class="scale-bar"></div>
    </div>
    <div class="scale-labels">
      <span>UMF™ 10+</span>
      <span>UMF™ 15+</span>
      <span>UMF™ 20+</span>
      <span class="umf-active">UMF™ 24+</span>
      <span>UMF™ 26+</span>
      <span>UMF™ 28+</span>
      <span>UMF™ 30+</span>
    </div>
  </div>

  <div class="taste-profile-section">
    <p class="scale-title">TASTE PROFILE</p>
    <div class="taste-bar-container">
      <div class="taste-bar-gradient"></div>
      <div class="taste-slider-handle"></div>
    </div>
    <div class="taste-labels">
      <span>Clean & Intense</span>
      <span>Bold & Intense</span>
    </div>
  </div>
</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
