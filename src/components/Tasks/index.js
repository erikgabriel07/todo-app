import { Text } from '../Text';

import { Task, TaskAction, TaskDescription, TaskFooter, TaskHeader, TaskIcon, TaskStatus } from './styles';

import pending from '../../assets/images/pending.png';

export default function Tasks() {
  return (
    <Task>
      <TaskHeader>
        <Text size={18} weight="600">Estudar para o Simulado</Text>
      </TaskHeader>
      <TaskDescription>
        <Text opacity={0.5}>Simulado dia 02/10</Text>
      </TaskDescription>
      <TaskFooter>
        <TaskStatus>
          <TaskIcon source={pending} /> <Text color="#E620AE">Pendente</Text>
        </TaskStatus>
        <TaskAction>
          <Text>Ações</Text>
        </TaskAction>
      </TaskFooter>
    </Task>
  );
}