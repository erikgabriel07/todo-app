import { useState } from 'react';
import { ActivityIndicator, Image } from 'react-native';

import { Text } from '../components/Text';

import AddTaskButton from '../components/AddTaskButton';
import DeleteConfirmModal from '../components/DeleteConfirmModal';
import EditalTaskModal from '../components/EditTaskModal';
import Header from '../components/Header';
import NewTaskModal from '../components/NewTaskModal';
import Tasks from '../components/Tasks';

import { CenteredContainer, Container } from './styles';

import task from '../assets/images/task.png';

import { tasks as mockup } from '../mocks/tasks';

export default function Main() {
  const [tasks, setTasks] = useState(mockup);
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [isNewTaskModalVisible, setIsNewTaskModalVisible] = useState(false);
  const [isEditTaskModalVisible, setIsEditTaskModalVisible] = useState(false);
  const [taskIdBeingDeleted, setTaskIdBeingDeleted] = useState();
  const [taskBeingEdited, setTaskBeingEdited] = useState();
  const [isLoading, setIsLoading] = useState(false);

  function handleDeleteTask(id) {
    setTaskIdBeingDeleted(id);
    setIsDeleteModalVisible(true);
  }

  function handleConfirmDeleteTask() {
    alert(`Exclua tarefa de id:  ${taskIdBeingDeleted}`);
    setIsDeleteModalVisible(false);
  }

  function handleEditTask(task) {
    setTaskBeingEdited(task);
    setIsEditTaskModalVisible(true);
  }

  function handleChangeStatus(id) {
    alert(`Alterar Tarefa ${id}`);
  }

  function handleCreateTask(task) {
    alert(`{ title: ${task.title}, description: ${task.description}}`);
    setIsNewTaskModalVisible(false);
  }

  function handleSaveEdit(task) {
    alert(`{ id: ${task.id}, title: ${task.title}, description: ${task.description}}`);
    setIsEditTaskModalVisible(false);
  }

  return (
    <Container>
      <Header />

      {tasks.length > 0 && !isLoading && (
        <Tasks
          tasks={tasks}
          onDelete={handleDeleteTask}
          onEditTask={handleEditTask}
          onChangeStatus={handleChangeStatus}
        />
      )}

      {isLoading && (
        <CenteredContainer>
          <ActivityIndicator size={'large'} color="#333" />
        </CenteredContainer>
      )}

      {tasks.length === 0 && (
        <CenteredContainer>
          <Image source={task} style={{ width: 150, height: 150 }} />

          <Text
            weight="600"
            size={20}
            opacity={0.8}
            style={{ marginTop: 16 }}
          >
            Sem Tarefas
          </Text>
          <Text opacity={0.5} style={{ marginTop: 8 }}>Não há tarefas a serem visualizadas</Text>
        </CenteredContainer>
      )}

      <AddTaskButton onPress={() => setIsNewTaskModalVisible(true)} />

      <DeleteConfirmModal
        visible={isDeleteModalVisible}
        onClose={() => setIsDeleteModalVisible(false)}
        onConfirm={handleConfirmDeleteTask}
      />

      <NewTaskModal
        visible={isNewTaskModalVisible}
        onClose={() => setIsNewTaskModalVisible(false)}
        onSave={handleCreateTask}
      />

      <EditalTaskModal
        visible={isEditTaskModalVisible}
        onClose={() => setIsEditTaskModalVisible(false)}
        onSave={handleSaveEdit}
        task={taskBeingEdited}
      />
    </Container>
  );
}