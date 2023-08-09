import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Modal } from "../../components/Modal/Modal";
import { Button } from '../../components/Button/Button';

export const ModalSavePin = (open) => {
    return(
        <Modal 
        title="Salvar pin" 
        open={open} 
        controls={[
            {
                label: 'Create Folder',
                variant: 'secondary',
                loading: false,
                loadingLabel: 'Creating',
                onclick: () => {
                    console.log('Click in Create Folder');
                }
            }
        ]}>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <Row>
                        <Col xs={8}>Math</Col>
                        <Col xs={4}  className="text-end"><Button label="toSave" loadingLabel="saving" /></Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col xs={8}>Matemática</Col>
                        <Col xs={4}  className="text-end"><Button label="toSave" loadingLabel="saving" /></Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col xs={8}>Math</Col>
                        <Col xs={4}  className="text-end"><Button label="toSave" loadingLabel="saving" /></Col>
                    </Row>
                </ListGroup.Item>
            </ListGroup>
        </Modal>
    )
}