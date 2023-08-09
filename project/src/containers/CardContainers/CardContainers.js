import { Card } from '../../components/Card/Card.js'
import { UseAppContext } from '../../store/AppContext.js'

export const CardContainer = (props) => {
    const { state, dispatch } = UseAppContext();
    const handleClick = () => {
        console.log('Clicou');
        dispatch({
            type: 'open modal save pin'
        })
    }

    return (
        <Card {...props} onClick={handleClick} />
    )
}