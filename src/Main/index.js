import { Text } from "../components/Text";
import Header from "../components/Header";
import { Container } from "./styles";
import Tasks from "../components/Tasks";

export default function Main() {
    return (
        <Container>
            <Header />

            
            <Tasks />
        </Container>
    )
}