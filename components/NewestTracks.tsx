import React from "react";
import useSWR, { BareFetcher } from "swr";
import { fetcher } from "../utils/fetcher";
import { cn } from "../utils/tailwind";
import { Track } from "./Track";
import { Data } from "../interfaces/TrackInterfaces";


export const NewestTracks: React.FC = () => {
  const { data } = useSWR("/api/tracks", fetcher as BareFetcher<Data>);

  if (!data) {
    return (
      <div className={cn("flex", "justify-center", "items-center", "h-64")}>
        <div className={cn("loader")}></div>
      </div>
    )
  }
  const { items: tracks } = data;


  return (
    <>
      {
        tracks.slice(0, 5).map(({ track }, index) => (
          <div key={index}>
            <Track track={track} />
          </div>
        ))
      }
    </>
  )
}


