import Title from './Title'
import Subtitle from './Subtitle'

import logoSource from './logotipo-ih.jpeg'

const Header = () => {

    return (

        <header>

            <img src={logoSource} alt="Logotipo" style={{ width: '10%' }} />

            <Title myTitleText="Soy el título principal" />
            <Subtitle text="Y yo el sbutítulo" />

            <hr></hr>

        </header>
    )
}

export default Header