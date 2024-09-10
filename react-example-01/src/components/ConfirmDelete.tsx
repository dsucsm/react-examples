import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { MdDelete } from "react-icons/md";
import { Task } from "../App";

interface Props {
    task: Task;
    onTaskDelete: (task: Task) => void;
}

function ConfirmDelete({ task, onTaskDelete }: Props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleTaskDelete = (e: React.FormEvent) => {
        e.preventDefault();
        onTaskDelete(task);
    }

    return (
        <>
            <MdDelete onClick={handleShow} className="icon--align" />
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        A task once deleted, can not be restored.
                    </div>
                    <div>
                        Do you want to proceed?
                    </div>

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        No
                    </Button>
                    <Button variant="danger" onClick={handleTaskDelete}>Yes</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ConfirmDelete;