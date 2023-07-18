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
        console.log('Fez o submit', setFolderName);
    }

    return(
        <Modal
            open={open}
            title="Criar pasta"
            type='submit'
            controls={[
                {
                    label: 'Criar e salvar',
                    loadingLabel: 'Salvando',
                    variant: 'secondary',
                    loading: false,
                    type: 'submit',
                    form: 'form-criar-pasta'
                }
            ]}
        >
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nome da Pasta</Form.Label>
                    <Form.Control type="text" placeholder="Ex: Matematica" value={folderName} onchange={handleChange} />
                </Form.Group>
            </Form>
        </Modal>
    )
}