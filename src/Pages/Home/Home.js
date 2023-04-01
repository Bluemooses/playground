import React from 'react';
import './Home.css'

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to Vikings Country</h1>
      <p className="home-subtitle">Where purple and gold reign supreme</p>
      <img
        className="home-image"
        src="https://cdn.vox-cdn.com/thumbor/ieB1VUTZu9Xk4VqBhJmACaUMFpw=/0x0:4797x3198/920x613/filters:focal(1907x1219:2689x2001):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/66345176/usa_today_13456932.0.jpg"
        alt="U.S. Bank Stadium"
      />
    </div>
  );
}

export default Home;