import ReactDOM from "react-dom";

import "./modal.css";

// Types
type BackdropTypes = {
  onClose: () => void;
};
type ModalOverlayTypes = {
  children: JSX.Element;
};

// Components
const Backdrop: React.FC<BackdropTypes> = (props) => {
  const { onClose } = props;
  return <div className="backdrop" onClick={onClose}></div>;
};

const ModalOverlay: React.FC<ModalOverlayTypes> = (props) => {
  return (
    <div className="my-modal">
      <div className="content">{props.children}</div>
    </div>
  );
};

const portalElement = document.getElementById("modal") as
  | Element
  | DocumentFragment;

type ModalTypes = {
  onClose: () => void;
  children: JSX.Element;
};
const Modal: React.FC<ModalTypes> = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
