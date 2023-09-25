import React from 'react';

const CalltoActionSection = () => {
  return (
    <div className="subscribe-section bd-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>DO you need more tips?</h2>
              <p>Sign up free and get the letest tips.</p>
              <form className="form-section">
                <input placeholder="Your Emal..." name="emial" type="email" />
                <input value="yes. I want!" name="subscribe" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalltoActionSection;
