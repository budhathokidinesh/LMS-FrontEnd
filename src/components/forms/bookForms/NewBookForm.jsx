import { CustomInput } from "@components/customInput/CustomInput";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { newBookInputs } from "@assets/customInputs/bookInputes";
import useForm from "@hooks/useForm";
import { postNewBookAction } from "../../../features/book/bookAction.js";

const initialState = {};

const NewBookForm = () => {
  const { form, setForm, handleOnChange } = useForm(initialState);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    postNewBookAction(form);
  };
  return (
    <div className="p-4">
      <h3>Insert new book details.</h3>
      <hr />

      <Form className="m-2" onSubmit={handleOnSubmit}>
        {newBookInputs.map((input) => (
          <CustomInput key={input.name} {...input} onChange={handleOnChange} />
        ))}
        <hr />
        <div className="d-grid">
          <Button type="submit">Submit</Button>
        </div>
      </Form>
    </div>
  );
};

export default NewBookForm;
