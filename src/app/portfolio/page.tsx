import Image from "next/image";

export default function Page() {
  return (
    <div className="flex h-full p-6 bg-gradient-to-t from-black to-red-800 rounded-md">
      <div className="flex gap-5 h-fit">
        <Image
          className="size-56 rounded-sm"
          src="/mauro-davoli.jpeg"
          alt="Mauro Davoli"
          width={200}
          height={200}
        />
        <div className="flex flex-col justify-end gap-5">
          <p>Portfolio</p>
          <h1 className="text-7xl font-bold text-nowrap">Mauro Davoli</h1>
          <div>
            <p>2025</p>
            <p>Frontend Engineer</p>
          </div>
        </div>
      </div>
    </div>
  );
}
