import React, { useEffect, useState } from "react";

const useValidacion = (initialState, validar, fn) => {
  const [values, setValues] = useState(initialState);
  const [errores, setErrores] = useState({});
  const [submitForm, setSubmitForm] = useState(false);

  useEffect(() => {
    if (submitForm) {
      const noErrores = Object.keys(errores).length === 0;

      if (noErrores) {
        fn();
      }

      setSubmitForm(false);
    }
  }, [errores]);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const erroresValidacion = validar(values);
    setErrores(erroresValidacion);
    setSubmitForm(true);
  };  

  const handleBlur = () => {
    const erroresValidacion = validar(values);
    setErrores(erroresValidacion);
  }

  return {
    values,
    errores,
    submitForm,
    handleSubmit,
    handleChange,
    handleBlur
  };
};

export default useValidacion;
