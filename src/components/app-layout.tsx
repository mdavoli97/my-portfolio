"use client";

import Header from "@/components/header";
import LeftBar from "@/components/left-bar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Rnd } from "react-rnd";
import Desktop from "./desktop";
import Footer from "./footer";
import { cn } from "@/lib/utils";
import { useState } from "react";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [isAppOpen, setIsAppOpen] = useState(true);
  const [width, setWidth] = useState(1200);
  const [height, setHeight] = useState(700);

  const maximizeApp = () => {
    setWidth(1536);
    setHeight(779);
  };

  return (
    <main className="bg-gray-900 h-screen p-10 text-white">
      <Desktop setIsAppOpen={setIsAppOpen} isAppOpen={isAppOpen}>
        <Rnd
          className={cn("opacity-100 transition-opacity duration-400", {
            "opacity-0": !isAppOpen,
          })}
          default={{
            x: 0,
            y: 0,
            width: 1200,
            height: 700,
          }}
          size={{
            width: width,
            height: height,
          }}
          onResize={(e, direction, ref) => {
            setWidth(ref.offsetWidth);
            setHeight(ref.offsetHeight);
          }}
          minWidth={800}
          minHeight={600}
          bounds={"parent"}
          dragHandleClassName="drag-handle"
        >
          <section className="bg-black p-2 rounded-md h-full flex flex-col gap-2">
            <Header setIsAppOpen={setIsAppOpen} maximizeApp={maximizeApp} />
            <div className="h-[82%]">
              <ResizablePanelGroup direction="horizontal" className="gap-1">
                <ResizablePanel defaultSize={20} minSize={4}>
                  <LeftBar />
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={60} minSize={40}>
                  {children}
                </ResizablePanel>
                <ResizableHandle />
                <ResizablePanel defaultSize={20} maxSize={30} minSize={20}>
                  <div className="flex h-full items-center justify-center p-6 bg-zinc-900 rounded-md">
                    <span className="font-semibold">Sidebar</span>
                  </div>
                </ResizablePanel>
              </ResizablePanelGroup>
            </div>
            <Footer />
          </section>
        </Rnd>
      </Desktop>
    </main>
  );
}
