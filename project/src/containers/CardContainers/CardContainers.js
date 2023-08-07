import { Card } from '../../components/Card/Card.js'

export const CardContainer = (props) => {
    const handleClick = () => {
        console.log('Clicou');
    }

    return (
        <Card {...props} onClick={handleClick} />
    )
}