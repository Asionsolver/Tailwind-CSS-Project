import Primary from "../buttons/Primary";
import Secondary from "../buttons/Secondary";
import H1 from "../ui/H1";
import downloadOne from "@/assets/download/download-1.png";

export const Download = () => {
  return (
    <div className="relative h-full">
      <div className="container relative z-10 px-6 pb-4 pt-24 md:px-0">
        <div className="flex max-w-[58rem] flex-col items-center justify-center gap-[50px] md:flex-row">
          <div className="md:flex md:w-full md:flex-col md:gap-[20px]">
            <H1
              className={
                "text-center font-epilogue text-3xl leading-[45px] text-primary md:text-start"
              }
            >
              Unlock the power of AI in your life.
            </H1>
            <p className="text-center font-epilogue text-[1rem] md:text-start">
              Availaable on the Google Playstore and App Store
            </p>

            <div>
              <div className="mt-8 flex flex-col items-center justify-center gap-[10px]">
                <Primary className={"max-w-full"}>
                  Download from Google Play
                </Primary>
                <Secondary className={"max-w-full"}>
                  Download from the App Store
                </Secondary>
              </div>
            </div>
          </div>
          <div className="">
            <img src={downloadOne} alt="phone" className="rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};
