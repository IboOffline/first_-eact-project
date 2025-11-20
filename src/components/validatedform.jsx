import { useForm } from "react-hook-form";

export default function ValidatedForm() {
  const { handleSubmit, register, formState: { errors } } = useForm({
    mode: "onTouched"
  });

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("firstName", {
        required: "First Name required", minLength: {
          value: 3,
          message: "Mindestens 3 Zeichen"
        }
      })}
        placeholder="First Name" />
      <p style={{ color: "red" }}>{errors.firstName?.message}</p>
      <input {...register("lastName", { required: "Last Name required" })}
        placeholder="Last Name" />
      <p style={{ color: "red" }}>{errors.lastName?.message}</p>
      <button type="submit">Submit</button>
    </form>
  );
}