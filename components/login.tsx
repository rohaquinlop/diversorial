import React from "react";
import { useForm } from "react-hook-form";

const JobForm = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data : any) => {
    const fields = { fields: data };
  };

  return (
    <React.Fragment>
      <h1 className="text-center text-4xl font-semibold mt-10">Iniciar Sesión</h1>
      <form
        className="max-w-xl m-auto py-10 mt-10 px-12 border"
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className="text-gray-600 font-medium">Correo</label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          placeholder="ejemplo123@gmail.com"
          autoFocus
          {...register('test', {required: "Please enter a job title",
          })}
        />
        

        <label className="text-gray-600 font-medium block mt-4">Contraseña</label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          type="text"
          placeholder="**********"
          {...register('test', {required: "Please enter a location",
          })}
        />
        

        
        <label className="inline-block">
          <input
            className="mt-4 mr-1"
            type="radio"
            {...register('test', {required: "Please select a job type",
            })}
          />
          Mantener Sesión Iniciada
        </label>


        

        <button
          className="mt-4 w-full bg-green-400 hover:bg-green-600 text-green-100 border py-3 px-6 font-semibold text-md rounded"
          type="submit"
        >
          Iniciar
        </button>
      </form>
    </React.Fragment>
  );
};

export default JobForm;