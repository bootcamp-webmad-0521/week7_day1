import './Button.css'

const Button = props => {

    const targetValue = props.newWindow ? '_blank' : '_self'

    return (
        <a
            href={props.link}
            className="button"
            target={targetValue}
            style={{ color: props.danger ? 'red' : 'green' }}
        >
            {props.buttonText}
        </a>
    )
}

export default Button