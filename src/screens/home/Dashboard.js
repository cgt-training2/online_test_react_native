// Summary: Dashboard Component used to display information for loggedIn user.
// Created: 11/10/2019 05:35 PM - NS (IN)
import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

//Actions

// Components
import HomeJSXText from '../../components/dashboard/Home';

class Dashboard extends Component {

  UNSAFE_componentWillMount() {
    //Fetching data from fetchNews action defined in news-action
    // Created: 11/08/2019 12:00 pM - VS (IN)
  }
  
  render () {
    return (
      <HomeJSXText />
    );
  }
}

// this will dispatch the control to fetchLoginAccessToken.
function mapDispatchToProps(dispatch) {

    return {
    };
}

//mapStateToProps is used for selecting the part of the data from the store that the connected component needs.
const mapStateToProps = ( state ) => {

  return { 
    userInfo: state.UserInfoReducer.data, 
  };
}

/*
As the first argument passed in to connect, mapStateToProps is used for selecting the part of the data from the store that the connected component needs. 
It’s frequently referred to as just mapState for short.
*/
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);