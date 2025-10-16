import { Text } from '../Text';

import { Task, TaskHeader, TaskDescription, TaskFooter, TaskStatus, TaskAction, TaskIcon } from './styles';

import pending from '../../assets/images/pending.png';
import remove from '../../assets/images/delete.png';
import edit from '../../assets/images/edit.png';
import done from '../../assets/images/done.png';

import { TouchableOpacity, FlatList } from 'react-native';

export default function Tasks({ tasks, onEditTask, onDeleteTask, onChangeStatus }) {
    return (
        <FlatList
            data={tasks}
            keyExtractor={task => task.id}
            renderItem={({ item: task }) => (
                <Task>
                    <TaskHeader>
                        <Text size={18} weight='600'>{task.title}</Text>
                    </TaskHeader>
                    <TaskDescription>
                        <Text opacity={0.5}>{task.description}</Text>
                    </TaskDescription>
                    <TaskFooter>
                        <TaskStatus onPress={() => onChangeStatus(task.id)}>
                            <TaskIcon source={task.done ? done : pending} />
                            <Text color={task.done ? '#2192D8' : '#E620AE'}>{task.done ? 'Concluída' : 'Pendente'}</Text>
                        </TaskStatus>
                        <TaskAction>
                            <TouchableOpacity onPress={() => onEditTask(task)}>
                                <TaskIcon source={edit} />
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => onDeleteTask(task.id)}>
                                <TaskIcon source={remove} />
                            </TouchableOpacity>
                        </TaskAction>
                    </TaskFooter>
                </Task>
            )}
        />
    )
}