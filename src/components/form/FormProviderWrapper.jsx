import { FormProvider, useForm } from "react-hook-form";

export default function FormProviderWrapper({
  children,
  defaultValues,
  onSubmit,
}) {
  const methods = useForm({
    defaultValues,
    mode: "onChange",
    reValidateMode: "onChange",
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
}
