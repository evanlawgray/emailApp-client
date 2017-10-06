import React, { Component } from 'react';
import { connect } from 'react-redux';

import { _fetchEmails } from '../../redux/modules/fetchEmails';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import CreateIcon from 'material-ui/svg-icons/content/create'

import styles from './styles.css';

import EmailList from './EmailList';

// const authCookie = 'email_session';

// function getCookie( name ) {
//   var value = "; " + document.cookie;
//   var parts = value.split( "; " + name + "=" );
//   if ( parts.length === 2 ) return parts.pop().split( ";" ).shift();
// }

class EmailListContainer extends Component {
  componentDidMount() {

    // if ( getCookie( authCookie ) ) {
    //   this.props.getEmails( this.props.userId );
    // }

    this.props.fetchEmails( this.props.userInfo.loggedInUserId );
  }

  updateEmailList() {
    this.props.fetchEmails( this.props.userInfo.loggedInUserId );
  }

  render() {
    return(
      <div className={ styles.contentContainer }>
        <EmailList className={ styles.emailList } emails={ this.props.emails } />
        <FloatingActionButton
          style={{ position: 'fixed', right: '10%', bottom: '5%' }}
          onTouchTap={() => this.props.showCompositionView()}
        >
          <CreateIcon />
        </FloatingActionButton>
      </div>
    );
  }
}

function mapStateToProps( state ) {
  return {
    emails: state.emails,
    userInfo: state.user
  }
}

function mapDispatchToProps( dispatch ) {
  return {
    fetchEmails: ( userId ) => {
      dispatch(_fetchEmails( userId ))
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( EmailListContainer );
