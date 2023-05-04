import Button from "../components/Button";
export default function Register() {
  return (
    <>
      <div className="bg-[#58b3d0] flex flex-col w-full min-h-screen md:flex-row ">
        <div className=" text-white mx-auto my-10 md:my-auto ">
          <span>Te damos la bienvenida a</span>
          <h1 className="font-sans text-5xl font-bold text-center ">
            Dev MasterClass <span className="text-[#FCE690]">+</span>
          </h1>
        </div>
        <div className=" flex flex-col rounded-2xl bg-white w-96 h-auto m-0 mx-auto md:my-auto  ">
          <h2 className=" text-center py-10 font-semibold text-lg">
            INICIAR SESION
          </h2>
          <form className="flex flex-col w-60 mx-auto py-5" onSubmit={null}>
            <label>Correo: </label>
            <input
              className="mb-5 border-slate-600 border rounded-md p-2"
              value={null}
              placeholder="example@gmail.com"
              onChange={null}
              type="text"
            />
            <label>Nombres: </label>
            <input
              className="mb-5  border-slate-600 border rounded-md p-2"
              value={null}
              placeholder="Nombre y apellido"
              onChange={null}
              type="text"
            />
            <label>Crear Contraseña: </label>
            <input
              className="mb-5  border-slate-600 border rounded-md p-2"
              value={null}
              placeholder="Contraseña"
              onChange={null}
              type="password"
            />
            <label>Confirmar Contraseña: </label>
            <input
              className="mb-5  border-slate-600 border rounded-md p-2"
              value={null}
              placeholder="Contraseña"
              onChange={null}
              type="password"
            />

            <Button type="submit">Log in</Button>
          </form>
          <a className="text-center  text-xs py-5" href="">
            Olvide mi contraseña
          </a>
        </div>
      </div>
    </>
  );
}
