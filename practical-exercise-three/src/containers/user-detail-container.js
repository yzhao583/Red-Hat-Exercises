import React from "react";
import Component from "../override/component";
import PropTypes from "prop-types";
import { Grid, Divider, Segment } from "semantic-ui-react";
import Api from "../network/api";
import BasicTable from "../components/basic-table";

class UserDetailContainer extends Component {
  static propTypes = {
    userId: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      generalInfoList: [],
      addressInfoList: [],
      companyInfoList: []
    };
  }

  //when component finish mounting, fetch data
  componentDidMount() {
    const { userId } = this.props;

    Api.getUser(userId).then(
      response => {
        this.setState({
          generalInfoList: response.generalInfoList,
          addressInfoList: response.addressInfoList,
          companyInfoList: response.companyInfoList
        });
      },
      error => {
        console.err(error);
      }
    );
  }

  render() {
    const { generalInfoList, addressInfoList, companyInfoList } = this.state;

    return (
      <Segment>
        <h1>User Details</h1>
        <Grid className="fade-in">
          <Grid.Row>
            <Grid.Column mobile={16} computer={8}>
              <BasicTable title="General" data={generalInfoList} className="no-bottom-border" />
            </Grid.Column>
          </Grid.Row>
          <Divider />
          <Grid.Row>
            <Grid.Column mobile={16} computer={8}>
              <BasicTable title="Address" data={addressInfoList} className="no-bottom-border" />
            </Grid.Column>
            <Grid.Column mobile={16} computer={8}>
              <BasicTable title="Company" data={companyInfoList} className="no-bottom-border" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default UserDetailContainer;
