import React, { useState, useRef } from 'react';
import { Toast, Modal } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import './Channels.css';

const Channels = ({ removeChannel, icon, address }) => {
  const [show, setShow] = useState(false);
  const [youtubeChannel, setYoutubeChannel] = useState('JxdTEHA2jrQ');

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <Toast onClose={() => removeChannel(icon)}>
        <Toast.Header></Toast.Header>
        <Toast.Body>
          <img
            src={`${process.env.PUBLIC_URL}/channel-tiers/${icon}.svg`}
            alt={icon}
            className={'Channel-icon'}
          ></img>
          <p onClick={handleShow}>preview</p>
          <Modal show={show} fullscreen={true} onHide={handleClose}>
            <Modal.Body>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${youtubeChannel}`}
              ></ReactPlayer>
            </Modal.Body>
          </Modal>
        </Toast.Body>
      </Toast>
    </>
  );
};

/* 
  Look to see if you can use youtube api to do search by channel id and grab 
  the first video returned from the channels' json
*/
/* TODO: Make image properly responsive and add React Player 
as callback prop to preview text */

export default Channels;
