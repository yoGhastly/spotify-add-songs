import React from "react";
import { Track as ITrack } from "../interfaces/TrackInterfaces";
import { cn } from "../utils/tailwind";


interface Props {
  track: ITrack;
}

export const Track: React.FC<Props> = (track) => {
  const { track: { track_number, external_urls, name, artists } } = track;

  return (
    <div className={cn(
      "flex flex-row items-baseline",
      "border-b border-gray-400",
      "max-w-xs w-full mt-8"
    )}>
      <p className="text-sm font-bold">{track_number}</p>
      <div className="flex flex-col pl-3">
        <a
          className="font-medium truncate w-60 sm:w-96 md:w-full"
          href={external_urls.spotify}
          target="_blank"
          rel="noopener noreferrer"
        >
          {name}
        </a>
        <p
          className="text-gray-500 mb-4 truncate w-60 sm:w-96 md:w-full"
          color="gray.500"
        >
          {artists[0].name}
        </p>
      </div>
    </div>
  )
}

