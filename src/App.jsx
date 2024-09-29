import React from 'react';
import { useForm } from 'react-hook-form';

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const check = (data) => {
    console.log(data.email);
    console.log(data.password);
  };

  return (
    <>
      <form onSubmit={handleSubmit(check)}>
        <input
          type="email"
          {...register("email", { required: true })}
        />
        {errors.email && <span>This field is required</span>}
        
        <input
          type="password"
          {...register("password", { required: true })}
        />
        {errors.password && <span>This field is required</span>}
        
        <button type="submit">Done</button>
      </form>
    </>
  );
};

export default App;
