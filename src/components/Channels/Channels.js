import React from 'react';
import { Toast} from 'react-bootstrap';
import './Channels.css';

const Channels = ({ removeChannel, icon, youtubeaddress }) => {

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
          <br/>
          <a href={youtubeaddress} target='_blank' rel='noreferrer'>preview</a>
        </Toast.Body>
      </Toast>
    </>
  );
};

export default Channels;
