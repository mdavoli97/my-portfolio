import { usePathname } from "next/navigation";
import MySkills from "./my-skills";
import SharedSpacesTechStack from "@/app/shared-spaces/_components/shared-spaces-tech-stack";
import HelpfulHeroesTechStack from "@/app/helpful-heroes/_components/helpful-heroes-tech-stack";
import TheEdgeTechStack from "@/app/the-edge/_components/the-edge-tech-stack";

export default function RightBar() {
  const path = usePathname();

  const selectedPath = (path: string) => {
    switch (path) {
      case "/resume":
        return <MySkills />;
      case "/shared-spaces":
        return <SharedSpacesTechStack />;
      case "/helpful-heroes":
        return <HelpfulHeroesTechStack />;
      case "/the-edge":
        return <TheEdgeTechStack />;
    }
  };

  return (
    <div className="flex h-full px-6 py-3 bg-zinc-900 rounded-md flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-white/50 scrollbar-track-white/10">
      {selectedPath(path)}
    </div>
  );
}
