import Taskbar from "./taskbar";

export default function Desktop({
  children,
  isAppOpen,
  setIsAppOpen,
}: {
  children: React.ReactNode;
  isAppOpen: boolean;
  setIsAppOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="bg-gray-700 container mx-auto h-full rounded-md flex flex-col">
      <div className="h-full bg-[url(/ardillin.jpeg)] bg-cover">{children}</div>
      <Taskbar setIsAppOpen={setIsAppOpen} isAppOpen={isAppOpen} />
    </div>
  );
}
