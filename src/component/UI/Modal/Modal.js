import classes from './Modal.module.css';

const Modal = (props) => {
  return <div className={`${classes.modal} ${classes.centerFixed} ${props.className}`}>
    {props.children}
  </div>
}

const ModalOverlay = (props) => {
  return <div className={`${classes.centerFixed} ${classes.overlay}`} onClick={props.onClickHandler}></div >
}

export { Modal, ModalOverlay }