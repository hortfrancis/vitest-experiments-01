const MySimpleCheckbox = ({ label }: { label: string }) => {
  return (
    <div>
      <label className='checkbox-label'>
        <input type="checkbox" />
        {label}
      </label>
    </div>
  );
};

export default MySimpleCheckbox;
