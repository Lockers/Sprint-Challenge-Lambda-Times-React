import React from 'react';
import Tab from './Tab';
import PropTypes from 'prop-types'

const Tabs = props => {
  return (
    <div className="tabs">
      <div className="topics">
        <span className="title">TRENDING TOPICS:</span>
        { 
            props.tabs.map((tab, index) => {
            return <Tab tab={tab} selectTabHandler={props.selectTabHandler} selectedTab={props.selectedTab} key={index} />
            })
        }
      </div>
    </div>
  );
};

Tabs.propTypes = {
  selectTabHandler: PropTypes.func.isRequired,
  selectedTab: PropTypes.string.isRequired,
  tabs: PropTypes.arrayOf(
    PropTypes.string.isRequired
  )
}

export default Tabs;
