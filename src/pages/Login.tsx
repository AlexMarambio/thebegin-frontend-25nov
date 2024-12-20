import React, { useState } from "react";
import backgroundImage from "../assets/background-home.svg";
import logo from "../assets/icons/svg/tb-icon-fill-orange.svg";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
  const [loginError, setLoginError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validación simple de campos vacíos
    if (!email || !password) {
      setErrors({
        email: email ? undefined : "El correo electrónico es obligatorio",
        password: password ? undefined : "La contraseña es obligatoria",
      });
      return;
    }

    try {
      const response = await fetch("https://thebegin-backend.vercel.app/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user: email, password }),
      });

      if (response.ok) {
        // Login exitoso
        console.log("Inicio de sesión exitoso");
        localStorage.setItem("token", "TB");
        localStorage.setItem("email", email); // Almacena un token temporal
        navigate("/#"); // Redirige a la página principal
      } else {
        // Maneja errores de login
        const message =
          response.status === 401
            ? "Usuario o contraseña incorrectos"
            : "Error al procesar la solicitud";
        setLoginError(message);
      }
    } catch (error) {
      console.error("Error al enviar la solicitud:", error);
      setLoginError("Error al conectar con el servidor");
    }
  };

  return (
    <>
      <div
        className="flex flex-col min-h-screen"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <a href="/">
              <img alt="The Begin" src={logo} className="mx-auto h-24 w-auto" />
            </a>
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
              Entra a tu cuenta
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm bg-white border rounded-lg p-10">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Correo electrónico
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    autoComplete="email"
                    className={`block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm/6 ${
                      errors.email
                        ? "border-red-500 ring-red-500 focus:ring-red-500"
                        : "border-0 ring-gray-300 focus:ring-tbc-pilarorange-600"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Contraseña
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-tbc-pilarorange-600 hover:text-tbc-pilarorange-400"
                    >
                      ¿Olvidaste tu contraseña?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    autoComplete="current-password"
                    className={`block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm/6 ${
                      errors.password
                        ? "border-red-500 ring-red-500 focus:ring-red-500"
                        : "border-0 ring-gray-300 focus:ring-tbc-pilarorange-600"
                    }`}
                  />
                  {errors.password && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.password}
                    </p>
                  )}
                </div>
              </div>

              {loginError && (
                <p className="mt-2 text-sm text-red-600">{loginError}</p>
              )}

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-tbc-pilarorange-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-tbc-pilarorange-500 transition-colors duration-300 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-tbc-secondarybrown-600"
                >
                  Iniciar sesión
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm/6 text-gray-500">
              Se parte de The Begin,{" "}
              <a
                href="/register"
                className="font-semibold text-tbc-pilarorange-600 hover:text-tbc-pilarorange-400"
              >
                Registrate
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
