import { existsSync } from "node:fs";
import path from "node:path";
import Image from "next/image";
import { profile } from "@/data/profile";

// The page is prerendered, so this check runs once at build time. Until a photo is
// added at public/images/profile.jpg, a monogram card keeps the layout intact.
const hasPhoto = existsSync(path.join(process.cwd(), "public", profile.photo));

export function HeroPhoto() {
  return (
    <div className="relative mx-auto w-full max-w-[340px]">
      <div className="absolute inset-0 translate-x-4 translate-y-3 rotate-6 rounded-[28px] bg-mint" aria-hidden />
      <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-ink-line bg-ink-raised">
        {hasPhoto ? (
          <Image
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            fill
            priority
            sizes="(min-width: 768px) 340px, 80vw"
            className="object-cover"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
            <span className="inline-flex h-28 w-28 items-center justify-center rounded-full bg-mint text-4xl font-bold text-mint-ink">
              UM
            </span>
            <span className="text-lg font-semibold text-white">{profile.name}</span>
            <span className="text-sm text-ink-muted">{profile.role}</span>
          </div>
        )}
      </div>
      <div className="absolute -bottom-5 -left-4 rounded-2xl border border-ink-line bg-ink px-4 py-3 shadow-xl sm:-left-8">
        <p className="flex items-center gap-2 text-sm font-semibold text-white">
          <span className="h-2 w-2 rounded-full bg-mint-strong motion-safe:animate-pulse" aria-hidden />
          {profile.availability}
        </p>
      </div>
    </div>
  );
}
