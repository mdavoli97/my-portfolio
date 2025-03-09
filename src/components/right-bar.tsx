import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function RightBar() {
  const path = usePathname();

  return (
    <div className="flex h-full px-6 py-3 bg-zinc-900 rounded-md flex-col overflow-y-auto scrollbar-thin scrollbar-thumb-white/50 scrollbar-track-white/10">
      <div
        className={cn("space-y-5 ", {
          hidden: path !== "/portfolio",
        })}
      >
        <div className="space-y-3 max-w-prose">
          <h1 className="border-b border-white/20 py-2">Skills</h1>

          <p className="text-sm flex flex-col gap-2">
            <span>
              React JS: Component-based architecture, state management (Redux,
              React Query), performance optimization
            </span>
          </p>
          <p className="text-sm flex flex-col gap-2">
            <span>
              Next JS: SEO-friendly, and scalable web applications. Skilled in
              SSR, SSG, ISR, and API routes to optimize performance and user
              experience
            </span>
          </p>
        </div>

        <div className="space-y-3 max-w-prose">
          <h1 className="border-b border-white/20 py-2">Technologies</h1>

          <p className="text-sm flex flex-col gap-2">
            <span>
              JavaScript - ES2020, HTML, CSS - Tailwind, Bootstrap, ReactJS,
              React Native, Redux - Redux Thunk/Toolkit, Web Services - REST,
              Axios, React-Query, WebSockets - Git - GitHub, GitLab - AWS
              AppSync, Type Checking - TypeScript, NodeJS - Animations -
              Keyframes, Framer Motion, CSS-in-JS - Styled Components, Emotion,
              JSS, Google Maps, React UI Frameworks - Material UI, Ant Design,
              Theme UI, Radix UI, SSR & PWA - NextJS, GatsbyJS
            </span>
          </p>
        </div>

        <div className="space-y-3 max-w-prose">
          <h1 className="border-b border-white/20 py-2">Industry Knowledge</h1>

          <p className="text-sm flex flex-col gap-2">
            <span>UI Figma, Framer UX Agile, Scrum, Lean, startup, SEO</span>
          </p>
        </div>

        <div className="space-y-3 max-w-prose">
          <h1 className="border-b border-white/20 py-2">Languages</h1>

          <p className="text-sm flex flex-col gap-2">
            <span>Advanced English - Native Spanish</span>
          </p>
        </div>
      </div>
    </div>
  );
}
