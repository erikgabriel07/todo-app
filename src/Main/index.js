import Header from '../components/Header';
import Tasks from '../components/Tasks';
import { Container } from './styles';

export default function Main() {
  return (
    <Container>
      <Header />

      <Tasks />
    </Container>
  );
}