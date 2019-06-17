import React from 'react';
import PropTypes from 'prop-types'

const Tab = props => {
  return (
    <div
      className={props.tab === props.selectedTab ? 'tab active-tab' : 'tab' }
      onClick={(event) => props.selectTabHandler(props.tab)}
    >
      {props.tab.toUpperCase()}
    </div>
  );
};

Tab.propType = {
  selectTabHandler: PropTypes.func.isRequired,
  selectedTab: PropTypes.string.isRequired,
  tab: PropTypes.string.isRequired
}

export default Tab;
