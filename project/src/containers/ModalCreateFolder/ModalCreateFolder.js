import { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { Modal } from "../../components/Modal/Modal";

export const ModalCreateFolder = ({ open }) => {
    const [ folderName, setFolderName ] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('')
    }

    const handleChange = (e) => {
        setFolderName(e.target.value);
        console.log('Did the submit', setFolderName);
    }

    return(
        <Modal
            open={open}
            title="Criar pasta"
            type='submit'
            controls={[
                {
                    label: 'Create and to save',
                    loadingLabel: 'Saving',
                    variant: 'secondary',
                    loading: false,
                    type: 'submit',
                    form: 'form-Create-Folder'
                }
            ]}
        >
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name the folder</Form.Label>
                    <Form.Control type="text" placeholder="Ex: Math" value={folderName} onchange={handleChange} />
                </Form.Group>
            </Form>
        </Modal>
    )
}