import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Link from "next/link";

export default function Center() {
  return (
    <div className="flex h-full p-5 px-10 bg-zinc-900 rounded-md">
      <Tabs defaultValue="portfolio" className="w-full">
        <TabsList className="bg-transparent gap-5">
          <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
          <TabsTrigger value="blogs">Blogs</TabsTrigger>
          <TabsTrigger value="about">About</TabsTrigger>
        </TabsList>
        <TabsContent value="portfolio">
          <div className="grid grid-cols-4">
            <Link
              href="/portfolio"
              className="flex gap-3 items-center w-full rounded-md overflow-hidden bg-white/10 cursor-pointer"
            >
              <Image
                className="size-14"
                src="/mauro-davoli.jpeg"
                alt="Mauro Davoli"
                width={200}
                height={200}
              />
              <p>Mauro Davoli</p>
            </Link>
          </div>
        </TabsContent>
        <TabsContent value="blogs">Blogs</TabsContent>
        <TabsContent value="about" className="flex flex-col gap-3">
          Created by Mauro Davoli, this portfolio project combines two of my
          greatest passions:{" "}
          <span className="font-bold">Coding and Music.</span>
        </TabsContent>
      </Tabs>
    </div>
  );
}
