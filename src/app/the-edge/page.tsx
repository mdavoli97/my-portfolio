import Link from "next/link";

export default function TheEdge() {
  return (
    <div className="flex h-full flex-col gap-5 p-6 bg-gradient-to-t from-black to-sky-800 rounded-md overflow-y-auto scrollbar-thin scrollbar-thumb-white/50 scrollbar-track-white/10">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">The Edge</h1>
        <Link
          href="https://www.theedgetreatment.com/"
          target="_blank"
          className="bg-gray-800/30 rounded-md p-2 text-white"
        >
          Visit Page
        </Link>
      </div>
      <div className="space-y-3 max-w-prose">
        <h1 className="border-b border-white/20 py-2">Project Description</h1>

        <p className="text-sm flex flex-col gap-2">
          <span>
            Ready to level up your life? Join a community that gets it and
            supports you with evidence-based treatments and personalized care
            where you’re at.
          </span>
        </p>
      </div>
      <div className="space-y-3 max-w-prose">
        <h1 className="border-b border-white/20 py-2">Key Features</h1>

        <div className="text-sm flex flex-col gap-2">
          <span>
            <span className="font-semibold">Gather Information</span> - Get
            information about the treatment center.
          </span>
          <span>
            <span className="font-semibold">Treatment Programs</span> - Learn
            about the treatment programs offered.
          </span>
          <span>
            <span className="font-semibold">Admissions</span> - Find out how to
            get admitted.
          </span>
          <span>
            <span className="font-semibold">Call Us</span> - Call the treatment
            center.
          </span>
        </div>
      </div>
    </div>
  );
}
