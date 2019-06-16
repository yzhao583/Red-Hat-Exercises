import React from "react";
import Component from "../override/component";
import ReactTable from "react-table";
import Validator from "../utils/validator";
import PropTypes from "prop-types";
import "react-table/react-table.css";

class ResponsiveTable extends Component {
  static propTypes = {
    headers: PropTypes.arrayOf(PropTypes.object),
    data: PropTypes.arrayOf(PropTypes.object),
    onRowClick: PropTypes.func,
    loading: PropTypes.bool,
    sortable: PropTypes.bool,
    pages: PropTypes.number,
    manual: PropTypes.bool,
    showPagination: PropTypes.bool,
    expandedRows: PropTypes.object,
    defaultSortCol: PropTypes.string,
    defaultSortOrder: PropTypes.string
  };

  constructor(props) {
    super(props);

    this.state = {
      data: props.data,
      loading: props.loading,
      headers: props.headers,
      pages: props.pages,
      sortable: props.sortable,
      onRowClick: props.onRowClick,
      manual: props.manual,
      showPagination: props.showPagination,
      subComponent: props.subComponent,
      theadComponent: props.theadComponent,
      defaultSortCol: props.defaultSortCol,
      defaultSortOrder: props.defaultSortOrder
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    //watch data changes
    if (nextProps.data && nextProps.data !== prevState.data) {
      return nextProps;
    } else {
      return null;
    }
  }

  //the function to fetch data from server
  fetchData() {
    const { requestData } = this.props;

    //if there is a request data function in props, then use it to fetch data.
    if (Validator.isFunction(requestData)) {
      //start loader
      this.setState({ loading: true });

      //fetch data
      requestData();
    }
  }

  render() {
    const {
      data,
      loading,
      headers,
      pages,
      sortable,
      onRowClick,
      manual,
      showPagination,
      subComponent,
      theadComponent,
      defaultSortCol,
      defaultSortOrder
    } = this.state;
    const { expandedRows } = this.props;

    let classes = "-highlight responsive-table";
    let isSortHandledByServer = false;
    let isPaginationShown = true;
    let defaultPageSize = 0;
    let defaultSortObj = { id: "", desc: true };

    //if there is no data, add 'no-data' class to the table
    if (Validator.isArray(data) && data.length === 0) {
      classes = "-highlight responsive-table no-data";

      //if the table row is clickable, add 'clickable' class to the table row
    } else if (Validator.isFunction(onRowClick)) {
      classes = "-highlight responsive-table clickable";
    } else {
      classes = "-highlight responsive-table";
    }

    //check if the pagination bar should be shown, 'true' by default
    if (Validator.isUndefined(showPagination)) {
      isPaginationShown = true;
    } else {
      isPaginationShown = showPagination;
    }

    //if manual is not exsited in the props, server should handle sort
    if (Validator.isUndefined(manual)) {
      isSortHandledByServer = true;
    } else {
      isSortHandledByServer = manual;
    }

    //check and set default page size
    if (Validator.isArray(data) && !Validator.isEmptyArray(data)) {
      defaultPageSize = data.length;
    } else {
      defaultPageSize = 10;
    }

    //check and set default sort column
    if (!Validator.isUndefined(defaultSortCol)) {
      defaultSortObj.id = defaultSortCol;
    }

    //check and set default sort order
    if (!Validator.isUndefined(defaultSortOrder) && defaultSortOrder.toLowerCase() === "asc") {
      defaultSortObj.desc = false;
    }

    return (
      <div className="responsive-table-container">
        <ReactTable
          data={data}
          noDataText="No data available"
          loading={loading}
          columns={headers}
          defaultPageSize={defaultPageSize}
          className={classes}
          manual={isSortHandledByServer}
          onFetchData={this.fetchData}
          pages={pages}
          sortable={sortable}
          getTrProps={onRowClick}
          showPagination={isPaginationShown}
          previousText="<"
          nextText=">"
          minRows={defaultPageSize}
          SubComponent={subComponent}
          TheadComponent={theadComponent}
          expanded={expandedRows}
          defaultSorted={[defaultSortObj]}
        />
      </div>
    );
  }
}

export default ResponsiveTable;
