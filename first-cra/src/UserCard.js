import './UserCard.css'
import Button from './Button'

const UserCard = props => {

    const capitalize = value => value[0].toUpperCase() + value.substring(1)

    return (

        <article className="user-card">

            <img src={props.image} alt="Imagen" />

            <br></br>

            <h5>{capitalize(props.name)} {capitalize(props.lastName)} - {props.age} años</h5>

            <Button
                link={props.href}
                newWindow={true}
                danger={false}
                buttonText={`Página de ${props.name}`}
            />

        </article>
    )
}

export default UserCard