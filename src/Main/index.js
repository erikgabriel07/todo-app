import { useState } from "react";

import Header from "../components/Header";
import { Container } from "./styles";
import Tasks from "../components/Tasks";

import { tasks } from '../mocks/tasks';
import AddTaskButton from "../components/AddTaskButton";
import DeleteConfirmModal from "../components/DeleteConfirmModal";

export default function Main() {
    const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false);
    const [TaskIdBeingDeleted, setTaskIdBeingDeleted] = useState();

    function handleEditTask(task) {
        alert(`Alterar Tarefa ${task.id}`);
    }

    function handleDeleteTask(id) {
        setIsDeleteModalVisible(true);
        setTaskIdBeingDeleted(id);
    }

    function handleConfirmDeleteTask() {
        alert(`Excluindo tarefa: ${TaskIdBeingDeleted}`);
        setIsDeleteModalVisible(false);
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
            
            <DeleteConfirmModal
                visible={isDeleteModalVisible}
                onClose={() => setIsDeleteModalVisible(false)}
                onConfirm={handleConfirmDeleteTask}
            />
        </Container>
    )
}