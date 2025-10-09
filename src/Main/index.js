import { useState } from 'react';

import Header from '../components/Header';
import Tasks from '../components/Tasks';
import { Container } from './styles';

import AddTaskButton from '../components/AddTaskButton';
import DeleteConfirmModal from '../components/DeleteConfirmModal';
import { tasks } from '../mocks/tasks';

export default function Main() {
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
  const [taskIdBeingDeleted, setTaskIdBeingDeleted] = useState();

  function handleDeleteTask(id) {
    setTaskIdBeingDeleted(id);
    setIsDeleteModalVisible(true);
  }

  function handleConfirmDeleteTask() {
    alert(`Exclua tarefa de id:  ${taskIdBeingDeleted}`);
    setIsDeleteModalVisible(false);
  }

  function handleEditTask(task) {
    alert(`Alterar Tarefa ${task.id}`);
  }

  function handleChangeStatus(id) {
    alert(`Alterar Tarefa ${id}`);
  }

  return (
    <Container>
      <Header />

      <Tasks
        tasks={tasks}
        onDelete={handleDeleteTask}
        onEditTask={handleEditTask}
        onChangeStatus={handleChangeStatus}
      />

      <AddTaskButton onPress={() => alert('Abrir Formulario Cadastro')} />

      <DeleteConfirmModal
        visible={isDeleteModalVisible}
        onClose={() => setIsDeleteModalVisible(false)}
        onConfirm={handleConfirmDeleteTask}
      />
    </Container>
  );
}