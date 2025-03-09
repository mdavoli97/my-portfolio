import Link from "next/link";

export default function HelpfulHeroes() {
  return (
    <div className="flex h-full flex-col gap-5 p-6 bg-gradient-to-t from-black to-green-800 rounded-md overflow-y-auto scrollbar-thin scrollbar-thumb-white/50 scrollbar-track-white/10">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">Helpful Heroes</h1>
        <Link
          href="https://helpfulheroes.com/"
          target="_blank"
          className="bg-gray-800/30 rounded-md p-2 text-white"
        >
          Visit Page
        </Link>
      </div>
      <div className="space-y-3 max-w-prose">
        <h1 className="border-b border-white/20 py-2">Project Description</h1>

        <p className="text-sm flex flex-col gap-2">
          <span>Hire a firefighter or EMT for your next home project.</span>
        </p>
      </div>
      <div className="space-y-3 max-w-prose">
        <h1 className="border-b border-white/20 py-2">Key Features</h1>

        <div className="text-sm flex flex-col gap-2">
          <span>
            <span className="font-semibold">Hire Firefighters</span> - Hire
            off-duty firefighters for your next project.
          </span>
          <span>
            <span className="font-semibold">Activities</span> - Pick from a list
            of activities.
          </span>
          <p>
            <span>
              <span className="font-semibold">Location</span> - Choose the
              location for your project.
            </span>
          </p>
          <p>
            <span>
              <span className="font-semibold">Time</span> - Select the time for
              your project.
            </span>
          </p>

          <p>
            <span>
              <span className="font-semibold">Payment</span> - Pay for your
              project with Stripe.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
