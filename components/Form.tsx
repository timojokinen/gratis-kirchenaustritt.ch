import * as Yup from "yup";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  FormikValues,
  useFormikContext,
} from "formik";
import { useEffect, useState } from "react";

type FormRequiredProps = {
  onSubmit: (values: FormikValues) => Promise<unknown>;
  initialValues: FormikValues;
  children: (
    props: FormikProps<FormikValues> & { error: string | null }
  ) => React.ReactNode;
};

type FormOptionalProps = {
  className?: string;
  handleSignUp?: () => void;
  validationSchema?: Yup.AnySchema;
};

type FormikInterceptorProps = {
  children: React.ReactNode;
  setError: (error: string | null) => void;
  error: string | null;
};

const FormikInterceptor: React.FC<FormikInterceptorProps> = ({
  children,
  setError,
}) => {
  const { values, submitCount } = useFormikContext();

  // reset form error on change or submit
  useEffect(() => {
    setError(null);
  }, [values, submitCount, setError]);

  return <>{children}</>;
};

const Form: React.FC<FormRequiredProps & FormOptionalProps> = ({
  onSubmit,
  initialValues,
  children,
  className,
  validationSchema,
}) => {
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (
    values: FormikValues,
    actions: FormikHelpers<FormikValues>
  ): Promise<void> => {
    try {
      await onSubmit(values);
    } catch (err) {
      if (err.status === 422) {
        (err?.validationErrors ?? []).forEach(
          (err: { property: string; constraints: string[] }) => {
            actions.setFieldError(err.property, err.constraints.join(" "));
          }
        );
      } else {
        setError(err.message);
      }
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {(props) => {
        return (
          <FormikInterceptor setError={setError} error={error}>
            <form
              onSubmit={props.handleSubmit}
              className={className}
              autoComplete="off"
              noValidate
            >
              {children({ ...props, error })}
            </form>
          </FormikInterceptor>
        );
      }}
    </Formik>
  );
};

Form.displayName = "Form";
export default Form;
