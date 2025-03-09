import Link from "next/link";

export default function SharedSpaces() {
  return (
    <div className="flex h-full flex-col gap-5 p-6 bg-gradient-to-t from-black to-blue-800 rounded-md overflow-y-auto scrollbar-thin scrollbar-thumb-white/50 scrollbar-track-white/10">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">Shared Spaces</h1>
        <Link
          href="https://www.sharedspaceswms.com/"
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
            The easy-to-use warehouse management system that is perfectly
            tailored for small and medium-sized businesses.
          </span>
        </p>
      </div>
      <div className="space-y-3 max-w-prose">
        <h1 className="border-b border-white/20 py-2">Key Features</h1>

        <p className="text-sm flex flex-col gap-2">
          <span>
            <span className="font-semibold">Virtual Warehouse</span> - Create a
            virtual representation of your warehouse.
          </span>
          <span>
            <span className="font-semibold">Inventory</span> - Manage your
            inventory with ease.
          </span>
          <span>
            <span className="font-semibold">Inventory Management</span> - Keep
            track of your inventory in real-time.
          </span>
          <span>
            <span className="font-semibold">Order and Shipment Management</span>{" "}
            - Manage orders and shipments from start to finish.
          </span>
          <span>
            <span className="font-semibold">User Management</span> - Control
            access to your system.
          </span>
        </p>
      </div>
    </div>
  );
}
