import Script from "next/script";
import TypedText from "./components/TypedText";

export default function Home() {
  return (
    <main className="w-full md:mt-[22rem] mt-[10rem]">
    <section className="container mx-auto flex flex-col items-center justify-center text-center">
      <div className="md:flex items-center md:justify-between ">
        <div className="w-full flex justify-center items-center">
          <img src="/orang2.png" alt="" className="h-full w-72" />
        </div>
        <div className="md:w-full">
          <h2 className="text-3xl md:text-4xl text-center text-secondary">17 Agustus 2024</h2>
          <h1 className="text-6xl md:text-7xl font-bold uppercase text-primary tracking-widest">Indonesia</h1>
          <div className="w-full">
            <h3 className="cd-headline clip ">
              <span className="cd-words-wrapper" >
                <b className="is-visible text-3xl md:text-4xl uppercase text-secondary">Merdeka</b>
                <b className="is-hidden text-3xl md:text-4xl uppercase text-secondary">Emas 2045</b>
                <b className="is-hidden text-3xl md:text-4xl uppercase text-secondary">Abadi</b>
                <b className="is-hidden text-3xl md:text-4xl uppercase text-secondary">Nan Jaya</b>
              </span>
            </h3>
          </div>
          {/* <h3 className="text-3xl uppercase text-secondary">Merdeka !!</h3> */}
          <p className="mt-5 md:text-md p-5">Selamat Hari Kemerdekaan Indonesia yang ke-79! Mari kita rayakan dengan penuh semangat dan rasa syukur atas kemerdekaan yang telah diperjuangkan oleh para pahlawan kita. Semoga Indonesia semakin maju, sejahtera, dan bersatu dalam keberagaman. Dirgahayu Indonesiaku!</p>
           </div>
      </div>
    </section>
      <div className="absolute bottom-0 -z-10 w-full ">
        <img
          src="/map.png"
          alt="City"
          className="w-full opacity-5 h-full object-contain bg-no-repeat" />
      </div>
      <div className="absolute top-0 -z-10 w-full mt-16">
        <img src="/overlay-home1.png" alt="" className="w-full h-full object-contain bg-no-repeat" />
      </div>
      {/* <div className="absolute top-0 -z-10 w-full mt-16">
        <img src="/overlay-home2.png" alt="" className="w-full h-full object-contain bg-no-repeat" />
      </div> */}
      <Script src="https://code.jquery.com/jquery-3.6.0.min.js" strategy="beforeInteractive" />
      <Script src="/js/typed.js" strategy="beforeInteractive" />

    <section className="container mx-auto flex flex-col items-center justify-center text-center">
      
    </section>
    </main>
  );
}


