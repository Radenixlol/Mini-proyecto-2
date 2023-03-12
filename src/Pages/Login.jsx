import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Pelis_link } from "../Links/links";
import { loginWithEmailAndPassword, signInWithGoogle } from "../Firebase/auth";

export function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const onSuccess = () => {
    navigate(Pelis_link);
  };

  const onFail = (_error) => {
    console.log("LOGIN FAILED, Try Again");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await loginWithEmailAndPassword({ userData: formData, onSuccess, onFail });
  };

  const onChange = (event) => {
    const { name, value } = event.target;

    setFormData((oldData) => ({ ...oldData, [name]: value }));
  };

  const handleGoogleClick = async () => {
    await signInWithGoogle({
      onSuccess: () => navigate(Pelis_link),
    });
  };
  return (
    <>
      <div className="w-full h-screen">
        <div className="bg-black/80 fixed w-full h-screen"></div>
        <div className="fixed w-full px-4 py-16 z-50">
          <div className="max-w-[450px] h-[550px] mx-auto bg-black/70 text-white rounded-3xl">
            <div className="max-w-[360px] mx-auto py-14">
              <h1 className="text-2xl font-bold text-center">Ingresa</h1>
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  onChange={onChange}
                  className="p-3 my-2.5 bg-gray-600 rounded-sm"
                  type="email"
                  placeholder="Correo Electrónico"
                  autoComplete="email"
                />
                <input
                  onChange={onChange}
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
              <div className="p-0 mt-5 mb-0 mx-auto border-solid border-t-[1px] border-gray-600 h-1"></div>
              <div className="w-full flex flex-col py-4">
                <button
                  onClick={handleGoogleClick}
                  className="bg-gray-200 py-3 my-6 rounded font-bold"
                >
                  Registrar con Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
