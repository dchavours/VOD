import React from 'react';
import { connect } from 'react-redux';
import todoActions from '../../redux/todo/actions';
import notifActions from '../../redux/pushNotifications/actions'
import BadgeButton from '../../components/BadgeButton';
// import List from '../../components/List';
import List from '../../components/List/List/List';
// import ModalDownload from "../../components/downloads/Modal";

import './styles.css';
// import { Modal } from 'antd';

const { fetchToDoRequest } = todoActions;
const { notifSendRequest } = notifActions

class Dashboard extends React.Component {
  componentDidMount() {
    // Trying to replace logic to see if it works. 
    const { fetchRequest, notifRequest } = this.props;

    notifRequest();
    fetchRequest();
  }



  render() {
    const { loading, todos } = this.props;
    if (loading) {
      return (
        <div className="page-loader-fullscreen height-full width-full">
          <div className="page-loader absolute-center">
            <div />
            <div />
            <div />
          </div>
        </div>
      );
    }
    return (
      <div className="container">
        {/* <ModalDownload/> */}
        <BadgeButton todos={todos} />
        <List todos={todos} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todos: state.TodoReducer.todos,
  loading: state.TodoReducer.fetchLoading,
  // modal: state.ModalReducer.modalProps

});


// So I'm assuming that fetchRequest is sending a dispatch through fetchToDoRequest.
const mapDispatchToProps = {
  fetchRequest: fetchToDoRequest,
  notifRequest: notifSendRequest
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Dashboard);
