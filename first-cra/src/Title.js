function Title(props) {

    console.log('Estas son las props del títlo', props)

    return <h1>{props.myTitleText}</h1>
}

export default Title