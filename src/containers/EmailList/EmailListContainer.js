import React, { Component } from 'react';

import { connect } from 'react-redux';

import { getEmails } from '../../redux/modules/fetchEmails';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import CreateIcon from 'material-ui/svg-icons/content/create'

import styles from './styles.css';

import ComposeEmail from '../ComposeEmail/index';
import EmailList from './EmailList';

// const authCookie = 'email_session';

// function getCookie( name ) {
//   var value = "; " + document.cookie;
//   var parts = value.split( "; " + name + "=" );
//   if ( parts.length === 2 ) return parts.pop().split( ";" ).shift();
// }

class EmailListContainer extends Component {
  constructor() {
    super();

    this.state = {
      composing: false,
    }
  }

  componentDidMount() {

    // if ( getCookie( authCookie ) ) {
    //   this.props.getEmails( this.props.userId );
    // }

    this.props.getEmails(this.props.userInfo.loggedInUserId);
  }

  showCompositionView() {
    this.setState({composing: true});
  }

  hideCompositionView() {
    this.setState({composing: false});
  }

  render() {
    return(
      <div className={ styles.contentContainer }>
        {
          this.state.composing === true && <ComposeEmail userId={ this.props.userInfo.userId } hideSelf={ () => this.hideCompositionView() }/>
        }

        <EmailList emails={ this.props.emails } />
        <FloatingActionButton
          style={{ position: 'fixed', right: '10%', bottom: '5%' }}
          onTouchTap={() => this.showCompositionView()}
        >
          <CreateIcon />
        </FloatingActionButton>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    emails: state.emails,
    userInfo: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getEmails: ( userId ) => {
      dispatch(getEmails( userId ))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailListContainer);
