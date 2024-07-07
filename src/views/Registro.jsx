import React from "react";
import { Link } from "react-router-dom";

export default function Registro() {
  return (
    <>
      <h1 className="text-4xl font-black">Crea tu cuenta!</h1>
      <p>Crea tu cuenta llenando el formulario!</p>
      <div className="bg-white shadow-md rounded-md mt-10 px-5 py-10">
        <form action="">
          <div className="mb-4">
            <label 
							className="text-slate-800" 
							htmlFor="name">
							Nombre:
            </label>
						<input 
							type="text" 
							id="name" 
							className="mt-2 w-full p-3 bg-gray-50" 
							name="name" 
							placeholder="Tu Nombre" 
						/>
          </div>
					<div className="mb-4">
            <label 
							className="text-slate-800" 
							htmlFor="email">
							Email:
            </label>
						<input 
							type="text" 
							id="email" 
							className="mt-2 w-full p-3 bg-gray-50" 
							name="email" 
							placeholder="Tu Email" 
						/>
          </div>
					<div className="mb-4">
            <label 
							className="text-slate-800" 
							htmlFor="password">
							Contraseña:
            </label>
						<input 
							type="password" 
							id="password" 
							className="mt-2 w-full p-3 bg-gray-50" 
							name="password" 
							placeholder="Tu Contraseña" 
						/>
          </div>
					<div className="mb-4">
            <label 
							className="text-slate-800" 
							htmlFor="repetirPassword">
							Repetir Contraseña:
            </label>
						<input 
							type="password" 
							id="repetirPassword" 
							className="mt-2 w-full p-3 bg-gray-50" 
							name="repetirPassword" 
							placeholder="Repite tu Contraseña" 
						/>
          </div>
					<input
						type="submit"
						value="Crear Cuenta"
						className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer rounded"
					/>
        </form>
          <nav className='mt-5'>
            <Link to='/auth/login' className='text-indigo-600 hover:text-indigo-800'>¿Ya tienes cuenta? Inicia Sesión</Link>
          </nav>
      </div>
    </>
  );
};
