import { AddLabel, AddInput, ErrorP } from "./Edit.style";

const EditForm = ({ name, handleChange, type, value, error }) => {
  return (
    <>
      <AddLabel>{name}</AddLabel>
      <AddInput
        placeholder={name}
        defaultValue={value}
        onBlur={(e) => handleChange(e, name)}
        type={type}
      />
      {error && <ErrorP>{error}</ErrorP>}
    </>
  );
};

export default EditForm;
