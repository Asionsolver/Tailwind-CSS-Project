import { Headphones, Moon, Music2 } from "lucide-react";

import H1 from "../ui/H1";

export const Find = () => {
  return (
    <div className="relative h-full min-h-[496px]">
      <div className="container relative z-10 my-[68px] flex flex-col items-center px-6 pb-4 pt-10 md:items-start md:px-0">
        <H1 className={"font-epilogue text-3xl text-primary md:text-start"}>
          What you&apos;ll find on Quiet Tube
        </H1>
        <div className="mt-[1.2rem] flex flex-col items-start justify-center gap-3 md:gap-[20px]">
          <div className="mt-4 flex flex-col gap-3 md:flex-row">
            <div className="max-w-[28.625rem] rounded-lg border border-white bg-primary p-4">
              <Headphones color="#fff" />
              <h2 className="mt-3 text-xl font-bold text-white">
                Guided sessions
              </h2>
              <p className="text-textBlack mt-1 pb-6 text-sm">
                Hundreds of guided sessions for every mood, led by top
                mindfulness experts.
              </p>
            </div>
            <div className="max-w-[28.625rem] rounded-lg border border-white bg-white p-4">
              <Music2 color="#478764" />

              <h2 className="mt-3 text-xl font-bold text-primary">Music</h2>
              <p className="text-textBlack mt-1 pb-6 text-sm">
                Curated playlists and soundscapes designed to help you focus,
                relax, and sleep.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3 md:flex-row">
            <div className="max-w-[28.625rem] rounded-lg border border-white bg-white p-4">
              <Headphones color="#478764" />
              <h2 className="font-bo ld mt-3 text-xl font-bold text-primary">
                Sleep
              </h2>
              <p className="text-textBlack mt-1 pb-6 text-sm">
                Breathing exercises, body scans, and other tools to help you
                build a meditation practice.
              </p>
            </div>
            <div className="max-w-[28.625rem] rounded-lg border border-white bg-primary p-4">
              <Moon color="#fff" />
              <h2 className="font-bo ld mt-3 text-xl font-bold text-white">
                Tools
              </h2>
              <p className="text-textBlack mt-1 pb-6 text-sm">
                Bedtime stories, nature sounds, and other content to help you
                fall asleep.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
