import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import { profile } from "@/data/profile";

// The page is prerendered, so this check runs once at build time. If the photo is
// missing, a monogram keeps the layout intact.
const hasPhoto = existsSync(path.join(process.cwd(), "public", profile.photo));

export function HeroPhoto() {
  return (
    <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[360px]">
      {/* Offset mint disc behind the portrait, echoing the template's tilted card */}
      <div className="absolute inset-0 translate-x-5 translate-y-4 rounded-full bg-mint" aria-hidden />
      <div className="absolute -inset-5 rounded-full border border-dashed border-ink-line" aria-hidden />

      <div className="relative aspect-square overflow-hidden rounded-full bg-paper-soft ring-4 ring-mint">
        {hasPhoto ? (
          <Image
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            fill
            priority
            sizes="(min-width: 640px) 360px, 300px"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-ink-raised">
            <span className="text-6xl font-bold text-mint">UM</span>
          </div>
        )}
      </div>

      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-ink-line bg-ink px-4 py-2.5 shadow-xl">
        <p className="flex items-center gap-2 text-sm font-semibold text-white">
          <span className="h-2 w-2 rounded-full bg-mint-strong motion-safe:animate-pulse" aria-hidden />
          {profile.availability}
        </p>
      </div>
    </div>
  );
}
