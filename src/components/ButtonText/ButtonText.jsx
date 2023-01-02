import { Container } from "./styles";

export function ButtonText({title, active = false}) {
  return(
    <Container
      type="button"
      active={active}
    >
      {title}
    </Container>
  )
}