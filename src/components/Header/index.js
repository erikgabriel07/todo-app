import { Container } from './styles';
import { Text } from '../Text';

export default function Header() {
    return (
        <Container>
            <Text size={24}>
                ToDo
                <Text size={24} weight='700'>APP</Text>
            </Text>
            <Text opacity={0.5}>Add, delete ou marque tarefas como executadas</Text>
        </Container>
    );
}