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
import RightBar from "./right-bar";

export default function AppLayout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [isAppOpen, setIsAppOpen] = useState(true);
  const [width, setWidth] = useState(1200);
  const [height, setHeight] = useState(700);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const maximizeApp = () => {
    setWidth(1536);
    setHeight(779);
    setX(0);
    setY(0);
  };

  return (
    <main className={cn("bg-gray-900 h-screen p-10 text-white", className)}>
      <Desktop setIsAppOpen={setIsAppOpen} isAppOpen={isAppOpen}>
        <Rnd
          className={cn("opacity-100 flex transition-opacity duration-400", {
            "opacity-0 hidden": !isAppOpen,
          })}
          default={{
            x: x,
            y: y,
            width: 1200,
            height: 700,
          }}
          size={{
            width: width,
            height: height,
          }}
          position={{ x: x, y: y }}
          onResize={(e, direction, ref) => {
            setWidth(ref.offsetWidth);
            setHeight(ref.offsetHeight);
          }}
          onDrag={(e, d) => {
            setX(d.x);
            setY(d.y);
          }}
          minWidth={800}
          minHeight={600}
          bounds={"parent"}
          dragHandleClassName="drag-handle"
        >
          <section className="bg-black p-2 rounded-md h-full flex flex-col gap-2">
            <Header setIsAppOpen={setIsAppOpen} maximizeApp={maximizeApp} />
            <ResizablePanelGroup direction="horizontal" className="gap-1">
              <ResizablePanel defaultSize={4} className="min-w-16">
                <LeftBar />
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={66} minSize={40}>
                {children}
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={30} maxSize={30} minSize={20}>
                <RightBar />
              </ResizablePanel>
            </ResizablePanelGroup>
            <Footer />
          </section>
        </Rnd>
      </Desktop>
    </main>
  );
}
