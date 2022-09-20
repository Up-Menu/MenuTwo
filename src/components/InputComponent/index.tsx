import FormInput from 'src/auth/FormInput';

interface propsType {
  label: string;
  type: string;
  name: string;
  required?: boolean;
}
const InputComponent = (props: propsType) => {
  return (
    <>
      <FormInput
        label={props.label}
        type={props.type}
        name={props.name}
        required={props.required}
        fullWidth
      />
    </>
  );
};

export default InputComponent;
