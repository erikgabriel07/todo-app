import { Modal } from "react-native";

import { Text } from "../Text";
import { ModalBody, Overlay } from "./styles";

export default function CustomModal() {
    return (
        <Modal
            transparent
            statusBarTranslucent
        >
            <Overlay>
                <ModalBody>
                    <Text>Custom Modal</Text>
                </ModalBody>
            </Overlay>
        </Modal>
    );
}