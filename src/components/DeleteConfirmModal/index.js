import Button from "../Button";
import CustomModal from "../CustomModal";
import { Text } from "../Text";
import { Actions } from "./styles";

export default function DeleteConfirmModal({ onConfirm, onClose, visible}) {
    return (
        <CustomModal visible={visible} onClose={onClose}>
            <Text
                size={18}
                weight="600"
            >
                Tem certeza que deseja remover a tarefa?
            </Text>

            <Text
                opacity={0.5}
                style={{ marginTop: 4 }}
            >
                Essa ação não poderá ser desfeita
            </Text>

            <Actions>
                <Button primary={false} onPress={onClose}>Cancelar</Button>
                <Button onPress={onConfirm}>Confirmar</Button>
            </Actions>
        </CustomModal>
    );
}