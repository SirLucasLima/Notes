import { Container } from "./styles";

//loading = false, para caso ele não seja informado, será false
export function Button({title, loading = false}){
  return(
    <Container
      type="button"
      disabled={loading}
    >
      { loading ? "Carregando..." : title }
    </Container>
  )
}