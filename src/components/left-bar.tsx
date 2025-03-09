import { Library } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LeftBar() {
  return (
    <div className="flex h-full p-3 bg-zinc-900 rounded-md">
      <div className="flex justify-between w-full gap-8 items-center h-fit">
        <div className="flex flex-col gap-6">
          <div className="flex gap-5 items-center h-fit group cursor-pointer">
            <div className="size-10 flex items-center justify-center">
              <Library className="size-7 text-white/70 group-hover:text-white shrink-0" />
            </div>
            <p className="text-nowrap text-white/70 group-hover:text-white">
              Project that I have worked on
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <Link href="/shared-spaces" className="flex gap-5 items-center">
              <div className="size-10">
                <Image
                  className="size-10 flex items-center justify-center"
                  src="/shared-spaces-logo.svg"
                  alt="Blog 2"
                  width={200}
                  height={200}
                />
              </div>
              <p className="text-nowrap text-sm">Shared Spaces</p>
            </Link>
            <Link href="/the-edge" className="flex gap-5 items-center">
              <div className="size-10 flex items-center justify-center">
                <Image
                  className="size-7"
                  src="/the-edge-logo.webp"
                  alt="Blog 2"
                  width={200}
                  height={200}
                />
              </div>
              <p className="text-nowrap text-sm">The Edge Treatment Center</p>
            </Link>
            <Link href="/helpful-heroes" className="flex gap-5 items-center">
              <div className="size-10 flex items-center justify-center">
                <Image
                  className="size-10"
                  src="/helpful-heroes-logo.svg"
                  alt="Blog 2"
                  width={200}
                  height={200}
                />
              </div>
              <p className="text-nowrap text-sm">Helpful Heroes</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
