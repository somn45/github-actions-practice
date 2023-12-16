import { useState } from 'react';

export interface Form {
  name: string;
  password: string;
}

type useInputType = (
  form: Form
) => [Form, (e: React.ChangeEvent<HTMLInputElement>) => void];

const useInput: useInputType = (form) => {
  const [input, setInput] = useState(form);

  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const {
      target: { name, value },
    } = e;
    setInput({
      ...input,
      [name]: value,
    });
  };

  return [input, onchange];
};

export default useInput;
