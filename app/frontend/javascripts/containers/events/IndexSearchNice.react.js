import { connect } from 'react-redux';
import { setFilter } from '../../actions/events';
import React, { Component, PropTypes } from 'react';
import TagSelector from '../../components/categories/TagSelector.react';
import DatePicker from 'react-datepicker';
import { compressedFormat as dateFormat } from '../../constants/date';
import moment from 'moment';

const IndexSearch = ({
  filter, categories, displayedUserId,
  setFilterTitle, setFilterTag, setFilterStartDate, setFilterEndDate
}) => {
  return (
    <form id="index-search" className="form-inline">
      <span>Search by</span>
      <div className="form-group" style={{ marginLeft: 70, marginRight: 50 }}>
        <label style={{ marginRight: 10 }}>Title</label>
        <input
          type="text"
          className="form-control"
          style={{ width: 100 }}
          onChange={(e) => setFilterTitle(displayedUserId, e.target.value)}
        />
      </div>
      <div className="form-group" style={{compressedFormat marginRight: 50 }}>
        <label style={{ marginRight: 10 }}>Tag</label>
        <TagSelector
          onChange={tagId => setFilterTag(displayedUserId, tagId)}
          selectedTagId={filter.tagId}
          categories={categories}
        />
      </div>
      <div className="form-group">
        <label style={{ marginRight: 10 }}>Between</label>
        <DatePicker
          selected={filter.startDate}
          onChange={startDate => setFilterStartDate(displayedUserId, startDate)}
          showYearDropdown={true}
          dateFormat={dateFormat}
        />
      <label style={{ marginLeft: 10, marginRight: 10 }}>and</label>
        <DatePicker
          selected={filter.endDate}
          onChange={endDate => setFilterEndDate(displayedUserId, endDate)}
          showYearDropdown={true}
          dateFormat={dateFormat}
        />
      </div>
    </form>
  )
}

IndexSearch.propTypes = {
  filter: PropTypes.object.isRequired,
  categories: PropTypes.object.isRequired,
  setFilterTitle: PropTypes.func.isRequired,
  setFilterTag: PropTypes.func.isRequired,
  setFilterStartDate: PropTypes.func.isRequired,
  setFilterEndDate: PropTypes.func.isRequired,
};

const mapStateToProps = ({ events, categories, users }) => {
  const { displayedUserId } = users;
  return {
    filter: events.filter,
    categories: categories[displayedUserId],
    displayedUserId
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setFilterTitle: (userId, title) => { dispatch(setFilter(userId, title, 'title')) },
    setFilterTag: (userId, tagId) => { dispatch(setFilter(userId, tagId, 'tagId')) },
    setFilterStartDate: (userId, startDate) => { dispatch(setFilter(userId, startDate, 'startDate')) },
    setFilterEndDate: (userId, endDate) => { dispatch(setFilter(userId, endDate, 'endDate')) },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexSearch);
