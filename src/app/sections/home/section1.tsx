export default function Section1() {
  return (
    <div className="md:flex items-center md:justify-between ">
      <div className="w-full flex justify-center items-center">
        <img
          src="/assets/images/home/patung.png"
          alt="Banner1"
          className="h-full w-full"
        />
      </div>
      <div className="md:w-full">
        <h2 className="text-3xl md:text-4xl text-center text-secondary">
          17 Agustus 2024
        </h2>
        <h1 className="text-6xl md:text-7xl font-bold uppercase text-primary tracking-widest">
          Indonesia
        </h1>
        <div className="w-full">
          <h3 className="cd-headline clip ">
            <span className="cd-words-wrapper">
              <b className="is-visible text-3xl md:text-4xl uppercase text-secondary">
                Merdeka
              </b>
              <b className="is-hidden text-3xl md:text-4xl uppercase text-secondary">
                Emas 2045
              </b>
              <b className="is-hidden text-3xl md:text-4xl uppercase text-secondary">
                Abadi
              </b>
              <b className="is-hidden text-3xl md:text-4xl uppercase text-secondary">
                Nan Jaya
              </b>
            </span>
          </h3>
        </div>
        <p className="mt-5 md:text-md p-5 text-justify">
          Selamat Hari Kemerdekaan Indonesia yang ke-79! Mari kita rayakan
          dengan penuh semangat dan rasa syukur atas kemerdekaan yang telah
          diperjuangkan oleh para pahlawan kita. Semoga Indonesia semakin maju,
          sejahtera, dan bersatu dalam keberagaman. Dirgahayu Indonesiaku!
        </p>
        <div className="mt-5">
          <a
            href="/tentang"
            className="p-3 rounded-lg bg-primary text-white uppercase font-semibold"
          >
            Tentang kami
          </a>
        </div>
      </div>
    </div>
  );
}
