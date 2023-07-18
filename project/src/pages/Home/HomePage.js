import ReactDOM from 'react-dom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Modal } from '../../components/Modal/Modal'
import { Card } from "../../components/Card/Card"
import { ModalSavePin } from '../../containers/ModalSavePin/ModalSavPin'
import { ModalCreateFolder } from '../../containers/ModalCreateFolder/ModalCreateFolder'


const Teste = () => {
    return(
        <h4>Hello, portal!</h4>
    )
}


export const HomePage = () => {
    return(
        <div>
            <Teste/>
            <ModalCreateFolder open={false}/>
            <Container fluid>
            <Row>
                <Col xs={12} md={2}><Card title="Matemática" image="https://picsum.photos/200/300?53" total={0}/></Col>
                <Col xs={12} md={2}><Card title="Trigonometry" image="https://picsum.photos/200/300?53" total={1}/></Col>
            </Row>
            </Container>
        </div>
    )
}