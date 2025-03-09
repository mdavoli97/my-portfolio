import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Link from "next/link";

export default function Center() {
  return (
    <div className="flex h-full p-5 px-10 bg-zinc-900 rounded-md">
      <Tabs defaultValue="all" className="w-full">
        <TabsList className="bg-transparent gap-5">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="music">Music</TabsTrigger>
          <TabsTrigger value="podcast">Podcast</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
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
        <TabsContent value="music">
          All your music will be displayed here.
        </TabsContent>
        <TabsContent value="podcast">
          All your podcast will be displayed here.
        </TabsContent>
      </Tabs>
    </div>
  );
}
