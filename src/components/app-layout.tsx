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
  const [isAppOpen, setIsAppOpen] = useState(false);
  const [width, setWidth] = useState(1000);
  const [height, setHeight] = useState(580);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const maximizeApp = () => {
    setWidth(document.getElementById("desktop-area")?.offsetWidth ?? 0);
    setHeight(document.getElementById("desktop-area")?.offsetHeight ?? 0);
    setX(0);
    setY(0);
  };

  return (
    <main
      className={cn(
        "bg-gray-900 h-screen p-10 hidden xl:flex text-white",
        className
      )}
    >
      <Desktop setIsAppOpen={setIsAppOpen} isAppOpen={isAppOpen}>
        <Rnd
          className={cn("opacity-100 transition-opacity duration-400", {
            "opacity-0": !isAppOpen,
          })}
          default={{
            x: x,
            y: y,
            width: width,
            height: height,
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
          minHeight={580}
          bounds={"parent"}
          dragHandleClassName="drag-handle"
          disableDragging={!isAppOpen}
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
