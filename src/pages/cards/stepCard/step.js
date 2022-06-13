import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Step = () => {

  const isFirstStep = window.location.pathname === '/cardInfo';
  const isSecondStep = window.location.pathname === '/cardPayment';
  const isThirdStep = window.location.pathname === '/cardSuccess';

  return (
    
    <React.Fragment>
        <div className="steps">
          <div className={`${isFirstStep ? 'step active' : 'step'}`}>
            <div>1</div>
            <div>
              {isSecondStep || isThirdStep ? (
                <Link to="/cardInfo">Step 1</Link>
              ) : (
                'Step 1'
              )}
            </div>
          </div>
          <div className={`${isSecondStep ? 'step active' : 'step'}`}>
            <div>2</div>
            <div>
              {isThirdStep ? <Link to="/cardPayment">Step 2</Link> : 'Step 2'}
            </div>
          </div>
          <div className={`${window.location.pathname === '/third' ? 'step active' : 'step'}`}>
            <div>3</div>
            <div>Step 3</div>
          </div>
        </div>
        <div></div>
    </React.Fragment>
  );
};

export default Step;