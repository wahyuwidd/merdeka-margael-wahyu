import Script from "next/script";

export default function SectionAdditional() {
  return (
    <>
      <div className="absolute bottom-0 -z-10 w-full ">
        <img
          src="/assets/images/home/map.png"
          alt="Map Indonesia"
          className="w-full opacity-5 h-full object-contain bg-no-repeat"
        />
      </div>
      <div className="absolute top-0 -z-10 w-full mt-16">
        <img
          src="/assets/images/additional/overlay-home1.png"
          alt=""
          className="w-full h-full object-contain bg-no-repeat"
        />
      </div>
      <div className="absolute top-0 -z-10 w-full mt-16">
        <img
          src="/assets/images/additional/overlay-home2.png"
          alt=""
          className="w-full h-full object-contain bg-no-repeat"
        />
      </div>
      <Script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        strategy="beforeInteractive"
      />
      <Script src="/assets/js/typed.js" strategy="beforeInteractive" />
    </>
  );
}
