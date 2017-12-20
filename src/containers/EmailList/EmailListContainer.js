import React, { Component } from 'react';
import { connect } from 'react-redux';

import { _fetchEmails } from '../../redux/modules/fetchEmails';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import CreateIcon from 'material-ui/svg-icons/content/create'

import styles from './styles.css';

import EmailList from './EmailList';

class EmailListContainer extends Component {
  componentDidMount() {
    this.props.fetchEmails( this.props.userId );
  }

  updateEmailList() {
    this.props.fetchEmails( this.props.userId );
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
    emails: state.emails
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
