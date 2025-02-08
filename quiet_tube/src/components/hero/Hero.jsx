import H1 from "@/components/ui/H1";
import Primary from "@/components/buttons/Primary";
import Secondary from "@/components/buttons/Secondary";
import LeftImage from "@/assets/images/hero_bg_left.png";
import RightImage from "@/assets/images/hero_bg_right.png";
const Hero = () => {
  return (
    <div className="relative h-full min-h-[496px]">
      <div className="container relative z-10 my-[68px] px-10 pb-4 pt-10 md:px-0">
        <H1 className={"text-center leading-[72px]"}>
          <span className="text-primary">AI-powered Stress relief</span> <br />-
          <span className="text-[53px] sm:text-[66px]">in your pocket</span>
        </H1>
        {/* paragraph */}
        <div className="mx-auto mt-2 max-w-[320px] md:max-w-[618px]">
          <p className="text-center">
            Quiet Tube is a subscription-based app powered by Artificial
            Intelligence that provides guided sessions, music, and tools to help
            you relax and relieve stress. Our mission is to make the world
            happier and healthier.
          </p>
        </div>
        {/* buttons */}
        <div className="mt-8 flex flex-col items-center justify-center gap-[10px] md:flex-row">
          <Primary className={"max-w-[203px] md:max-w-[266px]"}>
            Get the app
          </Primary>
          <Secondary className={"max-w-[203px] md:max-w-[266px]"}>
            Try the Chatbot
          </Secondary>
        </div>
      </div>

      {/* bg images */}
      <img
        src={LeftImage}
        alt="left"
        className="absolute bottom-0 left-0 h-[280px] xl:h-full"
      />
      <img
        src={RightImage}
        alt="right"
        className="absolute bottom-0 right-0 h-[280px] xl:h-full"
      />
    </div>
  );
};

export default Hero;
