import { useState } from 'react';

interface MySimpleInputProps {
  label: string;
}

const MySimpleInput = ({
  label
}: MySimpleInputProps) => {
  // For demo purposes, so that we can import this component directly into our test case,
  // we manage the input state internally here. 
  // In a real app, you might want to lift the state up to the parent component, via props. 
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <label htmlFor="my-input">{label}</label>
      <input
        type="text"
        id="my-input"
        value={value}
        onChange={handleChange}
      />
    </>
  );
};

export default MySimpleInput;
