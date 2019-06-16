import lodash from "lodash";

class Filter {
  static noValueFilter(value) {
    if (lodash.isNil(value) || lodash.isNaN(value)) {
      return "N/A";
    } else {
      return value;
    }
  }
}

export default Filter;
