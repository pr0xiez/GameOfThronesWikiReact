import React from 'react';

const PaginationButton = (props) => {
  return (
    <button className="ui primary button" onClick={event => props.paginationClicked(event.target.value)} value={props.page}>{props.page}</button>
  );
}
 
export default PaginationButton;
