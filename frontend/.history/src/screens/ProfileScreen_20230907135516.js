import React from 'react';
import Header from '../components/Header';
import ProfileTab from '../components/ProfileComponents/ProfileTabs';
import Orders from '../components/ProfileComponents/Orders';

const ProfileScreen = () => {
  window.scrollTo(0, 0);

  return (
    <>
      <Header />
      <div className="container mt-lg-5 mt-3">
        <div className="row align-items-start">
          <div className="col-lg-4 p-0 shedow">
            <div className="auther-card pb-0 pb-md-3">
              <div className="auther-card-cover"></div>
              <div className="auther-card-profile row">
                <div className="auther-card-avatar col-md-5">
                  <img src="/images/user.png" alt="userProfileimage" />
                </div>
                <div className="auther-card-details col-md-7">
                  <h5 className="auther-card-name mb-2">
                    <strong>Admin Doe</strong>
                  </h5>
                  <span className="auther-card-position">
                    <>Joined Dec 15 2020</>
                  </span>
                </div>
              </div>
            </div>
            <></>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileScreen;