import Header from "../components/Header";
import { Container } from "./styles";
import Tasks from "../components/Tasks";

import { tasks } from '../mocks/tasks';
import AddTaskButton from "../components/AddTaskButton";
import CustomModal from "../components/CustomModal";
import DeleteConfirmModal from "../components/DeleteConfirmModal";

export default function Main() {
    function handleEditTask(task) {
        alert(`Alterar Tarefa ${task.id}`);
    }

    function handleDeleteTask(id) {
        alert(`Excluir Tarefa ${id}`);
    }

    function handleChangeStatus(id) {
        alert(`Alterando Status ${id}`);
    }

    return (
        <Container>
            <Header />

            <Tasks
                tasks={tasks}
                onEditTask={handleEditTask}
                onDeleteTask={handleDeleteTask}
                onChangeStatus={handleChangeStatus}
            />

            <AddTaskButton onPress={() => alert('Abrir Formulário Cadastro')} />
            
            <DeleteConfirmModal />
        </Container>
    )
}