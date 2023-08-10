import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Modal } from "../../components/Modal/Modal";
import { Button } from '../../components/Button/Button';
import { UseAppContext } from '../../store/AppContext'
import { closeModalAction } from '../../store/actions';

export const ModalSavePin = ({open}) => {
    const { dispatch } = UseAppContext();

    const handleClose = () => {
        console.log('Close');
        dispatch({
            type: 'Close Modals'
        })
    }

    return(
        <Modal 
        title="Salvar pin" 
        open={open} 
        onHide={handleClose}
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