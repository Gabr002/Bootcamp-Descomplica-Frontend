import Form from 'react-bootstrap/Form'
import { Modal } from "../../components/Modal/Modal";

export const ModalCreateFolder = (open) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('')
    }
    return(
        <Modal
            open={open}
            title="Criar pasta"
            controls={[
                {
                    label: 'Criar e salvar',
                    loadingLabel: 'Salvando',
                    onclick: () => {}
                }
            ]}
        >
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nome da Pasta</Form.Label>
                    <Form.Control type="text" placeholder="Ex: Matematica" />
                </Form.Group>
            </Form>
        </Modal>
    )
}