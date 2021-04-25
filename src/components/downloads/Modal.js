import React, { Component } from "react";
import PropTypes from "prop-types";
import { Modal } from "antd";
import { connectModal } from "redux-modal";
import './styles.css';
import VideoAsset from "../VideoAsset/VideoAsset";


class ModalDownload extends Component {
   static propTypes = {
    handleHide: PropTypes.func.isRequired
  };



  

  render() {
    const { show, handleHide} = this.props;
    console.log(this.props);



    return (
      <Modal
        width={1020}
        // title="Download Options"
        visible={show}
        onOk={handleHide}
        onCancel={handleHide}
        footer={null}
        data={this.props}
      >  
        <br></br>
        <h5>{this.props.date}</h5>
        <br></br> 
        {/* <p>{postList}</p> */}


        <VideoAsset />
        

        <br></br>
        {/* <p>{this.props.children}</p> */}
        <br></br>

      </Modal>
    );
  }
}

export default connectModal({ name: "download", destroyOnHide: true })(
  ModalDownload
);
