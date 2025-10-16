import { Image, TouchableOpacity } from "react-native";

import CustomModal from "../CustomModal";

import { Text } from "../Text";

import TaskForm from "../TaskForm";

import { Header } from './styles';

import close from '../../assets/images/close.png';

export default function NewTaskModal({ visible, onClose, onSave }) {
  return (
    <CustomModal
      visible={visible}
      onClose={onClose}
    >
      <Header>
        <Text weight="600">Adicionar Tarefa</Text>

        <TouchableOpacity onPress={onClose}>
          <Image source={close} />
        </TouchableOpacity>
      </Header>

      <TaskForm
        buttonLabel="Cadastrar"
        onSave={onSave}
      />
    </CustomModal>
  );
}