import Header from "@/components/header";
import LeftBar from "@/components/left-bar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-gray-900 h-screen p-10 text-white">
      <section className="bg-black p-2 rounded-md h-full space-y-2 container mx-auto">
        <Header />
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
              <div className="flex h-full items-center justify-center p-6 bg-gray-800 rounded-md">
                <span className="font-semibold">Sidebar</span>
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
        <footer className="h-[12%]">Ducati</footer>
      </section>
    </main>
  );
}
