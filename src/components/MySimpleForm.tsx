import sendFormData from "../utils/sendFormData";

// Simple form component with text input and select dropdown
const MySimpleForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    sendFormData(formData);
  };

  return (
    <form onSubmit={handleSubmit} aria-labelledby='hat-preference-heading'>
      <h2 id='hat-preference-heading'>Your Hat Preference</h2>

      <label htmlFor='name'>Your name:</label>
      <input type='text' id='name' name='name' />

      <label htmlFor='hat-type'>Your preferred hat:</label>
      <select id='hat-type' name='hat-type'>
        <option value=''>Select a hat</option>
        <option value='tricorn'>Tricorn</option>
        <option value='bowler'>Bowler</option>
        <option value='fez'>Fez</option>
      </select>

      <button type='submit'>Submit</button>
    </form>
  );
};

export default MySimpleForm;
