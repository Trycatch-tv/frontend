import Button from "../components/Button";
export default function Logout() {
  return (
    <>
      <div className="bg-[#58b3d0] flex flex-col w-full min-h-screen md:flex-row">
        <div className=" text-white mx-auto my-10 md:my-auto ">
          <Button type="submit">Log in</Button>
        </div>
      </div>
    </>
  );
}
