import { AddLabel, AddInput } from "./Add.style";

const AddForm = ({ name, handleChange, type, value }) => {
  return (
    <>
      <AddLabel>{name}</AddLabel>
      <AddInput
        placeholder={name}
        defaultValue={value}
        onBlur={(e) => handleChange(e, name)}
        type={type}
      />
    </>
  );
};

export default AddForm;
