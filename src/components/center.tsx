import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Link from "next/link";

export default function Center() {
  return (
    <div className="flex h-full p-5 px-10 bg-zinc-900 rounded-md">
      <Tabs defaultValue="blogs" className="w-full">
        <TabsList className="bg-transparent gap-5">
          <TabsTrigger value="blogs">Blogs</TabsTrigger>
          <TabsTrigger value="resume">Resume</TabsTrigger>
          <TabsTrigger value="about">About</TabsTrigger>
        </TabsList>
        <TabsContent value="resume">
          <div className="grid grid-cols-2">
            <Link
              href="/resume"
              className="flex gap-3 items-center w-full rounded-md overflow-hidden bg-white/10 cursor-pointer"
            >
              <Image
                className="size-14"
                src="/mauro-davoli.jpeg"
                alt="Mauro Davoli"
                width={200}
                height={200}
              />
              <p className="text-nowrap">Mauro Davoli</p>
            </Link>
          </div>
        </TabsContent>
        <TabsContent value="blogs" className="flex flex-col gap-3 text-sm">
          <h1 className="text-lg">My Blogs</h1>
          <div className="grid grid-cols-3 gap-5">
            <Link
              href="https://www.gogrow.dev/blog/efficiently-caching-translations-in-react-with-zustand-and-google-translate-api"
              target="_blank"
              className="flex flex-col gap-3 items-center"
            >
              <Image
                className="w-full"
                src="/zustand-blog.webp"
                alt="Blog 1"
                width={200}
                height={200}
              />
              <p>
                Efficiently Caching Translations in React with Zustand and
                Google Translate API
              </p>
            </Link>
            <Link
              href="https://www.gogrow.dev/blog/next-js-14-the-power-of-url-in-state-management"
              target="_blank"
              className="flex flex-col gap-3 items-center"
            >
              <Image
                className="w-full"
                src="/state-management-blog.webp"
                alt="Blog 2"
                width={200}
                height={200}
              />
              <p>Next.js 14: The Power of URL in State Management</p>
            </Link>
            <Link
              href="https://www.gogrow.dev/blog/setting-up-react-query-in-your-next-js-13-app"
              target="_blank"
              className="flex flex-col gap-3 items-center"
            >
              <Image
                className="w-full"
                src="/react-query-blog.webp"
                alt="Blog 2"
                width={200}
                height={200}
              />
              <p>Setting Up React Query in Your Next.js 13 App</p>
            </Link>
          </div>
        </TabsContent>
        <TabsContent
          value="about"
          className="flex flex-col gap-3 text-sm max-w-prose"
        >
          <span>
            This project is open source and can be used, modified, and shared by
            anyone. However, proper attribution is required.
          </span>
          <span>
            Please give credit to the original author when using or modifying
            this project. For inquiries regarding contributions or
            collaborations, please contact mdavoli97@gmail.com.
          </span>
          <span>© 2025 Mauro Davoli. All rights reserved.</span>
        </TabsContent>
      </Tabs>
    </div>
  );
}
