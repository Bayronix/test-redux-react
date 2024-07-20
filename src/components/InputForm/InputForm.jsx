import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask } from "../../redux/tasksSlice";

const InputForm = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  const handleAddTask = (values, { resetForm }) => {
    if (values.input.trim()) {
      dispatch(addTask(values.input));
      resetForm();
    }
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div>
      <Formik initialValues={{ input: "" }} onSubmit={handleAddTask}>
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="input" placeholder="Enter task" />
            <ErrorMessage name="input" component="div" className="error" />
            <button type="submit" disabled={isSubmitting}>
              Add
            </button>
          </Form>
        )}
      </Formik>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.text}
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InputForm;
