import { useState } from "react";

import { Form, Input } from "./styles";

import Button from "../Button";

export default function TaskForm({ buttonLabel, onSave }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <Form>
      <Input
        placeholder="Título"
        value={title}
        onChangeText={setTitle}
      />

      <Input
        placeholder="Descrição"
        value={description}
        onChangeText={setDescription}
      />

      <Button
        onPress={() => onSave({ title, description })}
        disabled={title.length === 0 || description.length === 0}
      >
        {buttonLabel}
      </Button>
    </Form>
  );
}