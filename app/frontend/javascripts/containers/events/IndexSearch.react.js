import { connect } from 'react-redux';
import { setFilter } from '../../actions/events';
import React, { Component, PropTypes } from 'react';
import TagSelector from '../../components/categories/TagSelector.react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

const IndexSearch = ({
  filter, categories,
  setFilterTitle, setFilterTag, setFilterStartDate, setFilterEndDate
}) => {
  return (
    <form className="form-inline">
      Search by
      <div className="form-group" style={{ marginLeft: 20, marginRight: 15 }}>
        <label style={{ marginRight: 5 }}>Title</label>
        <input
          type="text"
          className="form-control"
          style={{ width: 100 }}
          onChange={(e) => setFilterTitle(e.target.value)}
        />
      </div>
      <div className="form-group" style={{ marginRight: 15 }}>
        <label style={{ marginRight: 5 }}>Tag</label>
        <TagSelector
          onChange={setFilterTag}
          selectedTagId={filter.tagId}
          categories={categories}
        />
      </div>
      <div className="form-group">
        <label style={{ marginRight: 5 }}>Between</label>
        <DatePicker
          selected={filter.startDate}
          onChange={setFilterStartDate}
          showYearDropdown={true}
        />
      <label style={{ marginLeft: 5, marginRight: 5 }}>and</label>
        <DatePicker
          selected={filter.endDate}
          onChange={setFilterEndDate}
          showYearDropdown={true}Title
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
  return {
    filter: events.filter,
    categories: categories[users.displayedUserId]
  };
}

const mapDispatchToProps = dispatch => {
  return {
    setFilterTitle: (title) => { dispatch(setFilter(title, 'title')) },
    setFilterTag: (tagId) => { dispatch(setFilter(tagId, 'tagId')) },
    setFilterStartDate: (startDate) => { dispatch(setFilter(startDate, 'startDate')) },
    setFilterEndDate: (endDate) => { dispatch(setFilter(endDate, 'endDate')) },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexSearch);
