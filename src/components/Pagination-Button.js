import React from 'react';
import PropTypes from 'prop-types';

const PaginationButton = props => (
  <button className="ui primary button" onClick={event => props.paginationClicked(event.target.value)} value={props.page}>{props.page}</button>
);

PaginationButton.propTypes = {
  paginationClicked: PropTypes.func,
  page: PropTypes.number,
};

PaginationButton.defaultProps = {
  paginationClicked: () => { throw Error('No pagination clicked function!'); },
  page: null,
};

export default PaginationButton;
