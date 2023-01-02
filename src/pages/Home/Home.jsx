import { ButtonText } from "../../components/ButtonText/ButtonText";
import { Header } from "../../components/Header/Header";
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { FiPlus } from "react-icons/fi"

export default function Home(){
  return(
    <Container>
      <Brand>
        <h1>Notes</h1>
      </Brand>
      <Header/>
      <Menu>
        <li><ButtonText title="Todos" active /></li>
        <li><ButtonText title="React"/></li>
        <li><ButtonText title="NodeJs"/></li>
      </Menu>
      <Search>

      </Search>
      <Content>

      </Content>
      <NewNote>
        <FiPlus/>
        New note
      </NewNote>
    </Container>
  );
};