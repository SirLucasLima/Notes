import { Container, Logout, Profile } from "./styles";
import { RiShutDownLine } from "react-icons/ri"

export function Header(){
  return(
    <Container>
      <Profile>
        <img 
          src="https://github.com/sirlucaslima.png" 
          alt="Imagem perfil" 
        />
        <div>
          <span>Bem-Vindo</span>
          <strong>Filho do Márcia</strong>
        </div>
      </Profile>
      <Logout>
        <RiShutDownLine/>
      </Logout>
    </Container>
  )
}