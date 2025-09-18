import { Text } from '../Text';

import { Task, TaskHeader, TaskDescription, TaskFooter, TaskStatus, TaskActions, TaskIcon } from './styles';

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
                    <TaskIcon source={pending} />
                    <Text color="#E620AE">Pendente</Text>
                </TaskStatus>
                <TaskActions>
                    <Text>Ações</Text>
                </TaskActions>
            </TaskFooter>
        </Task>
    )
}