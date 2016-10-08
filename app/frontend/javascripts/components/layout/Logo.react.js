import React, { PropTypes } from 'react';

const Logo = ({ size = 70 }) => {
  return (
    <div className='logo'>
      <div>
        READ
        <br/>
        MY BIO
      </div>
    </div>
  )
}

Logo.propTypes = {
  size: PropTypes.number
};

export default Logo;
