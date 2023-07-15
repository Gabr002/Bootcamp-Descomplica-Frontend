import CardBS from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

export const Card = () => {
  return (
    <CardBS>
    <CardBS.Img src="https://picsum.photos/200/300?53" alt="Card image" />
      <CardBS.ImgOverlay>
        <Button variant="primary">
          Profile <Badge bg="secondary">9</Badge>
          <span className="visually-hidden">unread messages</span>
        </Button>
        <CardBS.Text>Last updated 3 mins ago</CardBS.Text>
      </CardBS.ImgOverlay>
      <CardBS.Body>
        <CardBS.Title>Trigonometria</CardBS.Title>
      </CardBS.Body>
    </CardBS>
  );
}