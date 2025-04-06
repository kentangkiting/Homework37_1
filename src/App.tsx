import "./App.css";
import { Field, Form, Formik } from "formik";
import { Button } from "@mui/material";

function App() {
  const validateEmail = (values: string) => {
    let error = "";
    if (!values) {
      error = "Email tidak boleh kosong";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9._%+-]+\.[A-Z]{2,4}$/i.test(values)) {
      error = "Alamat Email tidak valid!";
    }
    return error;
  };
  const validateUserName = (values: string) => {
    let error = "";
    if (!values) {
      error = "UserName tidak boleh kosong";
    } else if (values.length < 5) {
      error = "username tidak boleh kurang dari 5 character";
    } else if (values.length > 12) {
      error = "username tidak lebih dari 12 character";
    }
    return error;
  };

  const validatePassword = (values: string) => {
    let error = "";
    if (!values) {
      error = "password tidak boleh kosong";
    } else if (values.length < 6) {
      error = "password minimal 6 character";
    }
    return error;
  };

  return (
    <div>
      <Formik
        initialValues={{ email: "", user: "", password: "" }}
        onSubmit={(values) => console.log("ini Values", values)}
      >
        {({ errors, touched }) => (
          <Form>
            <label>email</label>
            <Field
              name="email"
              type="text"
              placeholder="email"
              validate={validateEmail}
              style={{ display: "block", width: "100%" }}
            />
            {errors && touched.email && <div>{errors.email}</div>}
            <label>username</label>
            <Field
              name="user"
              type="text"
              placeholder="user"
              validate={validateUserName}
              style={{ display: "block", width: "100%" }}
            />
            {errors && touched.user && (
              <div style={{ display: "block", width: "100%" }}>
                {errors.user}
              </div>
            )}
            <label>Password</label>
            <Field
              name="password"
              type="password"
              placeholder="password"
              validate={validatePassword}
              style={{ display: "block", width: "100%" }}
            />
            {errors && touched.password && (
              <div style={{ display: "block" }}>{errors.password}</div>
            )}

            <Button type="submit" variant="contained" color="primary">
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
