import Image from "next/image";
import Head from "./Components/Head";
import Project from "./Components/Project";
export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col justify-center ">
      <Head />
      <Project />
    </main>
  );
}
