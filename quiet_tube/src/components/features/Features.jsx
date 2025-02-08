import H1 from "../ui/H1";
import FeaturesImaOne from "@/assets/features/features-1.png";
import FeaturesImaTwo from "@/assets/features/features-2.png";

export const Features = () => {
  return (
    <div className="relative h-full min-h-[496px]">
      <div className="container relative z-10 px-6 pb-4 pt-10 md:px-0">
        <H1 className={"font-epilogue text-3xl text-primary md:text-start"}>
          Unique Features
        </H1>
        <div className="mt-[2.2rem]">
          <div className="relative max-w-[928px]">
            <img
              src={FeaturesImaOne}
              className="w-full rounded-xl object-contain md:h-[592px] md:object-cover md:object-center"
            />
            <div className="absolute left-[2.7rem] -mt-[12.3rem] max-w-[365px] rounded-[1.25rem] bg-white px-4 pt-[1rem] shadow-lg md:left-[3.1rem] md:-mt-[13.7rem] md:h-[188px] md:max-w-[430px]">
              <h2 className="mb-4 font-epilogue text-3xl font-bold text-primary">
                AI-tailored listening
              </h2>
              <p className="mb-4 text-pretty font-poppins text-[1rem] font-normal leading-5 text-textBlack md:mb-0 md:mt-4">
                Get our all-new Artificial Intelligence software tailored to
                your listening habits. Listen to your favorite sounds, podcasts,
                and meditations are your convenience. Resume from previous
                listenings.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-[2.2rem]">
          <div className="relative max-w-[928px]">
            <img
              src={FeaturesImaTwo}
              className="w-full rounded-xl md:h-[592px] md:object-cover md:object-center"
            />
            <div className="absolute right-7 -mt-[11.2rem] max-w-[396px] rounded-[1.25rem] bg-white px-4 pt-[1rem] shadow-2xl md:-mt-[11.5rem] md:h-[166px] md:max-w-[454px] md:pt-[1.75rem]">
              <h2 className="font-epilogue text-3xl font-bold text-primary">
                Relaxation Monitoring
              </h2>
              <p className="mb-4 mt-4 text-pretty font-poppins text-[1rem] font-normal leading-5 text-textBlack">
                Utilize our Artificial Intelligence software to monitor your
                sleep and relaxation schedules. Track your rest hours and get
                more insights from your rest.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
