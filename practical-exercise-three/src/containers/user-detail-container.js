import React from "react";
import Component from "../override/component";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import { Grid, Divider, Segment, Dimmer, Loader, Icon } from "semantic-ui-react";
import Api from "../network/api";
import BasicTable from "../components/basic-table";
import Validator from "../utils/validator";

class UserDetailContainer extends Component {
  static propTypes = {
    userId: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      generalInfoList: [],
      addressInfoList: [],
      companyInfoList: [],
      isLoading: false
    };
  }

  //when component finish mounting, fetch data
  componentDidMount() {
    const { userId } = this.props;

    //turn loader on
    this.setState({ isLoading: true });

    //Call api to get data
    Api.getUser(userId).then(
      //store data to state and turn loader off.
      response => {
        this.setState({
          generalInfoList: response.generalInfoList,
          addressInfoList: response.addressInfoList,
          companyInfoList: response.companyInfoList,
          isLoading: false
        });
      },
      error => {
        console.err(error);

        //turn loader off
        this.setState({ isLoading: false });
      }
    );
  }

  render() {
    const {
      generalInfoList,
      addressInfoList,
      companyInfoList,
      isLoading
    } = this.state;

    if (
      !Validator.isEmptyArray(generalInfoList) &&
      !Validator.isEmptyArray(addressInfoList) &&
      !Validator.isEmptyArray(companyInfoList)
    ) {
      return (
        <Segment className="user-detail-container">
          <Link to="/users"><Icon disabled name='arrow left' />Back to user table</Link>
          <h1>User Details</h1>
          <Grid className="fade-in">
            <Grid.Row>
              <Grid.Column mobile={16} computer={8}>
                <BasicTable
                  title="General"
                  data={generalInfoList}
                  className="no-bottom-border"
                />
              </Grid.Column>
            </Grid.Row>
            <Divider />
            <Grid.Row>
              <Grid.Column mobile={16} computer={8}>
                <BasicTable
                  title="Address"
                  data={addressInfoList}
                  className="no-bottom-border"
                />
              </Grid.Column>
              <Grid.Column mobile={16} computer={8}>
                <BasicTable
                  title="Company"
                  data={companyInfoList}
                  className="no-bottom-border"
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      );
    } else {
      return (
        <Dimmer active={isLoading} inverted>
          <Loader size="small">Loading</Loader>
        </Dimmer>
      );
    }
  }
}

export default UserDetailContainer;
