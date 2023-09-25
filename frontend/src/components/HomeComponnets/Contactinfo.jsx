import React from 'react';

const Contactinfo = () => {
  return (
    <div className="connectInfo container">
      <div className="row">
        <div className="col-12 col-md-4 contect-box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-phone-alt"></i>
            </div>
            <h5>Call Us 24x7</h5>
            <p>019328361</p>
          </div>
        </div>

        <div className="col-12 col-md-4 contect-box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h5>headquater</h5>
            <p>sara khan nimoy</p>
          </div>
        </div>

        <div className="col-12 col-md-4 contect-box">
          <div className="box-info">
            <div className="info-image">
              <i className="fas fa-fax"></i>
            </div>
            <h5>fax</h5>
            <p>743 987 449</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactinfo;
