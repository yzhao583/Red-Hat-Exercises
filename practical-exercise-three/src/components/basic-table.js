import React from "react";
import Component from "../override/component";
import PropTypes from "prop-types";
import { Table } from "semantic-ui-react";

class BasicTable extends Component {
  static propTypes = {
    title: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    className: PropTypes.string
  };

  render() {
    const {
      data,
      title,
      className
    } = this.props;

    if (data) {
      return (
        <div className={className}>
          {title ? <h3>{title}</h3> : null}
          <Table basic="very" fixed selectable compact>
            <Table.Body>
              {data.map(item => {
                  return (
                    <Table.Row key={item.key}>
                      <Table.HeaderCell>{item.header}</Table.HeaderCell>
                      <Table.Cell className="content-cell">
                        {item.content}
                      </Table.Cell>
                    </Table.Row>
                  );
                }
              )}
            </Table.Body>
          </Table>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default BasicTable;
