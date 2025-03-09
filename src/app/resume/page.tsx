import Image from "next/image";

export default function Resume() {
  return (
    <div className="flex h-full flex-col gap-5 p-6 bg-gradient-to-t from-black to-red-800 rounded-md overflow-y-auto scrollbar-thin scrollbar-thumb-white/50 scrollbar-track-white/10">
      <div className="flex gap-5 h-fit">
        <Image
          className="size-56 rounded-sm"
          src="/mauro-davoli.jpeg"
          alt="Mauro Davoli"
          width={200}
          height={200}
        />
        <div className="flex flex-col justify-end gap-5">
          <p>Resume</p>
          <h1 className="text-5xl font-bold text-nowrap">Mauro Davoli</h1>
          <div>
            <p>2025</p>
            <p>Frontend Engineer</p>
          </div>
        </div>
      </div>

      <div className="space-y-3 max-w-prose">
        <h1 className="border-b border-white/20 py-2">Profile</h1>

        <p className="text-sm flex flex-col gap-2">
          <span className="font-semibold">
            4+ years of experience with React
          </span>
          <span>
            Frontend Engineer with strong expertise in React and Next.js.
            Skilled in building dynamic, optimized, and scalable user interfaces
            with a focus on performance and usability. I work quickly,
            consistently, and efficiently, delivering high-quality solutions
            within tight deadlines.
          </span>
        </p>
      </div>

      <div className="space-y-3 max-w-prose">
        <h1 className="border-b border-white/20 py-2">
          Professional Experience
        </h1>

        <div className="flex gap-5 text-sm">
          <div className="text-xs min-w-[100px] space-y-1">
            <p>11/2024 – 03/2025</p>
            <p>Montevideo, Uruguay</p>
          </div>
          <p className="flex flex-col gap-2">
            <span className="font-semibold">Senior Frontend Engineer</span>
            <span>Gogrow</span>
            <span className="flex flex-col gap-2">
              <span className="italic">Amber Care</span> - As the project lead
              for development, I successfully guided a frontend team to create
              an innovative mobile/web application designed to enhance patient
              care and streamline healthcare services
              <span className="italic">Shared Spaces</span> - Built from the
              ground up, this app efficiently handles large volumes of real-time
              inventory, logistics, and operational data. Designed with complex
              features like a virtual real-time warehouse simulator, orders,
              shipments, transfers
            </span>
          </p>
        </div>

        <div className="flex gap-5 text-sm">
          <div className="text-xs min-w-[100px] space-y-1">
            <p>05/2021 – 10/2024</p>
            <p>Montevideo, Uruguay</p>
          </div>
          <p className="flex flex-col gap-2">
            <span className="font-semibold">
              Junior - Mid level Frontend Engineer
            </span>
            <span>Gogrow</span>
            <span className="flex flex-col gap-2">
              <span className="italic">
                The Edge Treatment Center - California
              </span>
              - Ensures maximum online visibility by optimizing content,
              structure, and performance
              <span className="italic">Hidrent</span> - As a frontend engineer,
              I contributed to developing a dynamic platform that connects
              people with off-duty firefighters
            </span>
          </p>
        </div>

        <div className="flex gap-5 text-sm">
          <div className="text-xs min-w-[100px] space-y-1">
            <p>10/2020 – 04/2021</p>
            <p>Montevideo, Uruguay</p>
          </div>
          <p className="flex flex-col gap-2">
            <span className="font-semibold">Trainee Frontend Engineer</span>
            <span>Gogrow</span>
            <span className="flex flex-col gap-2">
              <span className="italic">Lever Card</span> - Worked on developing
              a smart wallet integrated into a browser to maximize earnings
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
