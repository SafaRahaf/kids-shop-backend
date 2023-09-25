import React from 'react';

const Header = () => {
  return (
    <div>
      <div className="Announcement">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center display-none">
              <p>+880 167 443 4242</p>
              <p>iusuf@gmail.com</p>
            </div>
            <div className="col-12 col-lg-6 justify-content-center justify-contents-lg">
              <Link to="">
                <i className="fab fa-facebook"></i>
              </Link>
              <Link to="">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link to="">
                <i className="fab fa-linkedin-in"></i>
              </Link>
              <Link to="">
                <i className="fab fa-youtube"></i>
              </Link>
              <Link to="">
                <i className="fab fa-pinterest-p"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
