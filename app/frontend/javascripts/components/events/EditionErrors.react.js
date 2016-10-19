import React, { PropTypes } from 'react';

const EditionErrors = ({ errors }) => {
  return (
    <div className='errors'>
      <ul>
        {
          errors.map((err, i) => {
            return (
              <li key={i} className='text-danger'>
                {err}
              </li>
            );
          })
        }
      </ul>
    </div>
  )
}

EditionErrors.propTypes = {
  errors: PropTypes.array.isRequired
};

export default EditionErrors;
