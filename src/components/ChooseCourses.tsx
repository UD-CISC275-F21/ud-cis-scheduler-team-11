import React from "react";
import DropdownBox from "react-dropdown";


export function Dropdown(): JSX.Element {
    const options =["EGGG101 - Introduction to Engineering - Credits: 3", "CISC108 - Intro to Computer Science 1 - Credits: 3", "MATH241 - Analytic Geometry & Calculus - Credits: 4","ENGL110 - Seminar in Composition - 3", "Breadth Requirement (CAH) - Humanities breadth requirement - Credits: 3"];
    const defaultOption = "Click Here.";
    return(
        <div style={styles.dropdown}>
            Major Selector
            <DropdownBox options={options} value={defaultOption} placeholder="Select an option" />
        </div>
    );
}

const styles = {
    classes: {
        width: "20%",
        padding: "0px 90px",
        margin: "50px",
        //margin: "50px auto",
        //background: "gold",
        borderRadius: "10px",
        //display: "flex",
        //flexDirection: "column",
        //alignItems: "center",
        fontSize: 20,
        border: "10px solid red",
    },
    h1: {
        marginLeft: "100px",
    },
} as const;

import * as React from "react";
import { UseFormRegister, useForm } from "react-hook-form";
import "./styles.css";

type FormValuesA = {
  firstName: string;
};

type FormValuesB = {
  age: string;
};

type FormValues = FormValuesA | FormValuesB;

interface Props<T extends FormValues> {
  initialData: T;
  children: (register: UseFormRegister<T>) => React.ReactElement;
}

const FormContainer = <T extends FormValues>(props: Props<T>) => {
  const { register, handleSubmit, reset } = useForm<T>({
    /* Here TS complains about types */
    /* Argument of type 'T' is not assignable 
          to parameter of type 
            'UnpackNestedValue<DeepPartial<T>> | undefined' etc. */
    defaultValues: props.initialData
  });
  const onSubmit = (data: FormValues) => console.log(data);

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {props.children(register)}
        <input type="submit" />
      </form>

      {/* Here TS complains about types */}
      {/* Argument of type 'T' is not assignable 
          to parameter of type 
            'UnpackNestedValue<DeepPartial<T>> | undefined' etc. */}
      <button onClick={() => reset(props.initialData)}>Reset</button>
    </div>
  );
};

const FormA = () => {
  return (
    <>
      <FormContainer<FormValuesA> initialData={{ firstName: "Hans" }}>
        {(register) => {
          return (
            <>
              <input {...register("firstName")} />

              {/* As expected, Typescript reports an error */}
              <input {...register("age")} />
            </>
          );
        }}
      </FormContainer>
    </>
  );
};

export default function App() {
  return <FormA />;
}