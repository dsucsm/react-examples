import { useState } from 'react';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import { FcInfo } from "react-icons/fc";
import "../style/Notif.css";

interface Props {
    showNotif: boolean;
    onChangeNotif: () => void;
}

function Notif({ showNotif, onChangeNotif }: Props) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);

    if (showNotif && !show) {
        setShow(true);
    }
    const handleChangeNotif = () => {
        setShow(false);
        onChangeNotif();
    }

    return (
        <Modal show={show} onHide={handleClose}
            className='notif-modal'
            backdrop="static"
            keyboard={false}
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Body className='bg-transparent' >
                <ToastContainer
                    className="p-3"
                    position="middle-center"
                    style={{ zIndex: 1 }}
                >
                    <Toast bg="primary" onClose={handleChangeNotif} show={show} delay={1000} autohide>
                        {/* <Toast bg="primary" onClose={handleChangeNotif} show={show}> */}
                        <Toast.Header>
                            <FcInfo />
                            <strong className="me-auto">&nbsp;Info</strong>
                        </Toast.Header>
                        <Toast.Body>Selected task deleted.</Toast.Body>
                    </Toast>
                </ToastContainer>
            </Modal.Body>
        </Modal>
    );
}

export default Notif;