export default function SharedSpacesTechStack() {
  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-lg font-semibold">Tech Stack</h1>
      <div className="flex flex-col gap-1">
        <p className="text-sm">
          This project was built using the following technologies:
        </p>
        <ul className="list-disc ml-5">
          <li>React</li>
          <li>Next</li>
          <li>Zustand</li>
          <li>App router</li>
          <li>Typescript</li>
          <li>Tailwind CSS</li>
        </ul>
      </div>
    </div>
  );
}
