import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../Context/AuthContext";

const Login = () => {
  /*const {user, logIn} = UserAuth()*/
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error.message)
    }
  };
  return (
    <>
      <div className="w-full h-screen">
        <div className="bg-black/80 fixed w-full h-screen"></div>
        <div className="fixed w-full px-4 py-16 z-50">
          <div className="max-w-[450px] h-[550px] mx-auto bg-black/70 text-white rounded-3xl">
            <div className="max-w-[360px] mx-auto py-14">
              <h1 className="text-2xl font-bold text-center">Ingresa</h1>
              {error ? <p className='p-3 bg-red-400 my-2'>{error}</p> : null}
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 my-2.5 bg-gray-600 rounded-sm"
                  type="email"
                  placeholder="Correo Electrónico"
                  autoComplete="email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 my-2.5 bg-gray-600 rounded-sm"
                  type="password"
                  placeholder="Contraseña"
                  autoComplete="current-password"
                />
                <button className="bg-cyan-800 py-3 my-6 rounded font-bold">
                  Entrar
                </button>
                <div className="flex justify-between items-center text-sm text-gray-600">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-8">
                  <span className="text-gray-600">
                    ¿Aún no tienes una cuenta?
                  </span>{" "}
                  <Link to="/register">Registrase</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
