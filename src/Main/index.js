import Header from '../components/Header';
import Tasks from '../components/Tasks';
import { Container } from './styles';

import AddTaskButton from '../components/AddTaskButton';
import DeleteConfirmModal from '../components/DeleteConfirmModal';
import { tasks } from '../mocks/tasks';

export default function Main() {
  function handleDeleteTask(id) {
    alert(`Excluir Tarefa ${id}`);
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

      <DeleteConfirmModal />
    </Container>
  );
}