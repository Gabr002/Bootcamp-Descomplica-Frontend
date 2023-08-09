// import ReactDOM from 'react-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
// import { Card } from "../../components/Card/Card"
import { CardContainer } from '../../containers/CardContainers/CardContainers'
import { ModalSavePin } from '../../containers/ModalSavePin/ModalSavPin'
import { ModalCreateFolder } from '../../containers/ModalCreateFolder/ModalCreateFolder'
import { Notification } from '../../components/Notification/Notification'
import { UseAppContext } from '../../store/AppContext';

export const HomePage = () => {
    const { state, dispatch } = UseAppContext();
    return(
        <div>
            <ModalSavePin open={state.mode === 'savePin'}/>
            <ModalCreateFolder open={false}/> 
            <Notification
                message='successfully Create'
                onClose={() =>{
                console.log('Clicou em fechar');
                }}
             /> 

            <Container fluid>
                <Row>
                    <Col xs={12} md={2}><CardContainer title="Math" image="https://picsum.photos/200/300?53" total={0} /></Col>
                    <Col xs={12} md={2}><CardContainer title="Trigonometry" image="https://picsum.photos/200/300?53" total={1}/></Col>
                </Row>
            </Container>
        </div>
    )
}