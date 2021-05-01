import { Toast } from 'react-bootstrap';
import './Channels.css';

const Channels = ({ removeChannel, icon }) => {
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
        </Toast.Body>
      </Toast>
    </>
  );
};

export default Channels;
