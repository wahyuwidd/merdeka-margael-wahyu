

export default function Section2 () {
    return (
      <>
        <h1 className="text-3xl md:text-4xl font-bold uppercase text-primary tracking-widest md:text-center md:mb-16">
          Pahlawan Proklamasi: <br /> Soekarno & Hatta
        </h1>
        <div className="flex justify-between">
          <div className="w-full flex justify-center items-center mb-20">
            <h1 className="2xl:px-[20rem] italic">
              "Bangsa yang besar adalah bangsa yang menghormati jasa
              pahlawannya." <br /> - Ir. Soekarno <br /> <br />{" "}
              <p className="not-italic">
                {" "}
                Soekarno adalah Proklamator Kemerdekaan dan Presiden pertama
                Indonesia. Perannya sangat sentral dalam perjuangan kemerdekaan,
                serta dalam pembentukan dasar negara. Dia dikenal sebagai Bapak
                Bangsa dan simbol persatuan Indonesia.
              </p>{" "}
            </h1>
          </div>
          <div className="w-1/2">
            <img
              src="/assets/images/home/soekarno.png"
              alt=""
              className="w-[20rem]"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="w-full flex justify-center items-center">
            <h1 className="2xl:px-[20rem] italic">
              "Kemerdekaan hanyalah diperdapat dan dimiliki oleh bangsa yang
              jiwanya <br /> berkobar-kobar dengan tekad 'Merdeka, merdeka atau
              mati'." <br /> - Moh . Hatta <br />
              <br />{" "}
              <p className="not-italic">
                {" "}
                Hatta, bersama Soekarno, adalah Proklamator Kemerdekaan dan
                Wakil Presiden pertama Indonesia. Dia memainkan peran penting
                dalam perjuangan diplomasi internasional untuk pengakuan
                kemerdekaan Indonesia. Selain itu, Hatta juga dikenal sebagai
                Bapak Koperasi Indonesia.
              </p>{" "}
            </h1>
          </div>
          <div className="w-1/2">
            <img
              src="/assets/images/home/hatta.png"
              alt=""
              className="w-[20rem]"
            />
          </div>
        </div>
      </>
    );
}