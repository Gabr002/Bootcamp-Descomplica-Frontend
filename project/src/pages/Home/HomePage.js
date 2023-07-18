import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Modal } from '../../components/Modal/Modal'
import { Card } from "../../components/Card/Card"
import { ModalSavePin } from '../../containers/ModalSavePin/ModalSavPin'
import { ModalCreateFolder } from '../../containers/ModalCreateFolder/ModalCreateFolder'


export const HomePage = () => {
    return(
        <div>
            <ModalCreateFolder/>
            <Container>
            <Row>
                <Col xs={12} md={3}><Card title="Matemática" image="https://picsum.photos/200/300?53" total={0}/></Col>
                <Col xs={12} md={3}><Card title="Trigonometria" image="https://picsum.photos/200/300?53" total={1}/></Col>
            </Row>
            </Container>
        </div>
    )
}