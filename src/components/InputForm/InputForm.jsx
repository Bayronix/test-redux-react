import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { actionInput } from "../../redux/action";

const InputForm = () => {
  const input = useSelector((state) => state.input); // Assuming state has `input` key
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(actionInput(values.input)); // Dispatching the input value from the form
  };

  return (
    <Formik initialValues={{ input: "" }} onSubmit={handleSubmit}>
      {() => (
        <Form>
          <Field type="text" name="input" />
          <h3>Answer: {input}</h3>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default InputForm;
