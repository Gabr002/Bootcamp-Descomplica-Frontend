import CardBS from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

export const Card = ({ image, title, total, onClick }) => {
  return (
    <CardBS>
    <CardBS.Img src={image} alt="Card image" />
      <CardBS.ImgOverlay>
        <Button variant="primary" onClick={onClick}>
          Saving <Badge bg="secondary">{total}</Badge>
        </Button>
      </CardBS.ImgOverlay>
      <CardBS.Body>
        <CardBS.Title>{title}</CardBS.Title>
      </CardBS.Body>
    </CardBS>
  );
}