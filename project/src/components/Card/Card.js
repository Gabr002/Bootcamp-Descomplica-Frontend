import CardBS from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

export const Card = ({ image, title, total }) => {
  return (
    <CardBS>
    <CardBS.Img src={image} alt="Card image" />
      <CardBS.ImgOverlay>
        <Button variant="primary">
          Profile <Badge bg="secondary">{total}</Badge>
          <span className="visually-hidden">unread messages</span>
        </Button>
        <CardBS.Text>Last updated 3 mins ago</CardBS.Text>
      </CardBS.ImgOverlay>
      <CardBS.Body>
        <CardBS.Title>{title}</CardBS.Title>
      </CardBS.Body>
    </CardBS>
  );
}