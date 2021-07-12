import './App.css'
import Button from './Button'
import Header from './Header'
import Title from './Title'
import UserCard from './UserCard'

function App() {

  return (

    <>

      <Header />

      <p>Lorem ipsum dolor sit amet</p>

      <Button link="https://www.google.es" buttonText="Ir a Google" newWindow={true} danger={false} />
      <Button link="https://www.yahoo.es" buttonText="Ir a Yahoo" danger={true} />

      <Title myTitleText="Listado de cards de usuarios" />

      <UserCard
        name="german"
        lastName="Álvarez"
        age="35"
        image="https://germanalvarez.net/img/german-alvarez-sc.jpg"
        href="https://www.germanalvarez.net"
      />

      <UserCard
        name="mariano"
        lastName="rajoy"
        age="59"
        image="https://aws.revistavanityfair.es/prod/designs/v1/assets/785x589/36811.jpg"
        href="https://www.germanalvarez.net"
      />

      <UserCard
        name="pablo"
        lastName="iglesias"
        age="43"
        image="https://media.vozpopuli.com/2021/02/Pablo-Iglesias-lider-Podemos_1403269812_15947363_1200x675.jpg"
        href="https://www.germanalvarez.net"
      />

      <UserCard
        name="isabel"
        lastName="ayuso"
        age="35"
        image="https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2021/06/23/60d31cba87c7a.jpeg"
        href="https://www.germanalvarez.net"
      />

    </>
  )
}

export default App