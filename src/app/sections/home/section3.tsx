export default function Section3() {
  return (
    <>
      <h1 className="text-3xl md:text-4xl font-bold uppercase text-primary tracking-widest md:text-center md:mb-16 text-right">
        Pahlawan Kemerdekaan: <br /> Tokoh-Tokoh Inspiratif Indonesia
      </h1>
      <div className="flex justify-between">
        <div className="w-1/2 2xl:pl-[20rem]">
          <img
            src="/assets/images/home/soedirman.png"
            alt=""
            className="w-[20rem] transform scale-x-[-1]"
          />
        </div>
        <div className="w-full flex justify-center items-center mb-20 ">
          <h1 className="2xl:px-[20rem] italic text-right">
          &ldquo;Kami berperang terus, jangan sampai menyerah.&ldquo; <br /> - Jenderal
            Soedirman <br /> <br />{" "}
            <p className="not-italic">
              {" "}
              Jenderal Soedirman adalah simbol perjuangan militer dalam
              mempertahankan kemerdekaan Indonesia. Dia memimpin gerilya
              meskipun dalam kondisi kesehatan yang buruk, menunjukkan dedikasi
              luar biasa kepada bangsa.
            </p>{" "}
          </h1>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-full flex justify-center items-center">
          <h1 className="2xl:px-[20rem] italic">
          &ldquo;Habis gelap terbitlah terang.&ldquo; <br /> - R.A. Kartini <br />
            <br />{" "}
            <p className="not-italic">
              {" "}
              Sebagai pelopor emansipasi wanita di Indonesia, Kartini adalah
              simbol perjuangan hak-hak perempuan dan pendidikan bagi semua.
              Meskipun tidak terlibat langsung dalam pertempuran fisik,
              perjuangan Kartini sangat berpengaruh dalam membangun kesadaran
              nasional.
            </p>{" "}
          </h1>
        </div>
        <div className="w-1/2">
          <img
            src="/assets/images/home/kartini.png"
            alt=""
            className="w-[20rem] transform scale-x-[-1] "
          />
        </div>
      </div>
    </>
  );
}
