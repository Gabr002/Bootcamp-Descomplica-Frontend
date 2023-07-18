import ReactDOM from "react-dom"
import Alert from "react-bootstrap/Alert"

export const Notification = ({ message, variant='Sucess', onClose }) => {
    return ReactDOM.createPortal(
        <Alert variant={variant} onClose={onClose} dimissible>
          {message}
        </Alert>,
        document.body
    )
}