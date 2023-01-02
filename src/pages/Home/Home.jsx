import { ButtonText } from "../../components/ButtonText/ButtonText";
import { Header } from "../../components/Header/Header";
import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { FiPlus, FiSearch } from "react-icons/fi"
import { Input } from "../../components/Input/Input";

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
        <Input placeholder="Pesquisar pelo título" icon={FiSearch}/>
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