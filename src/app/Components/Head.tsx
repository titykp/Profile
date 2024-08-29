import Image from "next/image";

export default function Head() {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-center ">
      <div className="right-section-responsive w-full flex justify-center max-lg:px-[16px] lg:hidden max-lg:py-4">
        <Image
          src={"/myimg.png"}
          width={500}
          height={400}
          alt="myimg"
          className="rounded-full border-solid border-4 border-black"
        />
      </div>

      <div className="nes-container left-section w-full flex flex-col gap-[16px] lg:gap-[37px] justify-center lg:mx-[85px] mx-[16px]">
        <div className="header-title">
          <h1 className="m-0 lg:text-[30px] text-[18px] max-lg:text-center">
            Hello I’m TY Korapat Pengkrajang
          </h1>
        </div>
        <div className="header">
          <p className="m-0 max-lg:text-[10px]">
            I was an electrical engineer who switched careers to be a full-stack
            software developer. I’m interested in programming because the field
            of software development is always evolving, offering endless
            opportunities to learn new technologies and improve my skills.
          </p>
        </div>
      </div>
      <div className="right-section w-full flex justify-center max-lg:mx-[16px] max-lg:hidden">
        <Image
          src={"/myimg.png"}
          width={500}
          height={400}
          alt="myimg"
          className="rounded-full border-solid border-4 border-black"
        />
      </div>
    </section>
  );
}
