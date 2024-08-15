

export default function SectionTentang() {
    return (
        <div className="container mx-auto px-4 items-center">
          <img src="/assets/images/tentang/about.png" className="w-[40rem] md:hidden" alt="tentang" />
            <div className="w-full md:flex justify-between mt-10">
                <div className="md:w-1/2">
                  <h1 className="text-3xl md:text-6xl uppercase font-bold text-primary ">Tentang Kami</h1>
                  <p className="text-justify mb-20">Website ini dibuat untuk merayakan Hari Kemerdekaan Indonesia yang ke-79, sebuah momen penting yang mengingatkan kita akan perjuangan panjang para pahlawan bangsa dalam meraih kemerdekaan. Dengan semangat "Merdeka Bersama, Bangun Indonesia Maju", kami ingin mengajak seluruh rakyat Indonesia untuk bersama-sama mengingat, menghargai, dan merayakan perjalanan bangsa kita.</p>
                  <p className="text-justify mb-20">
                    Sejarah panjang bangsa Indonesia dalam meraih kemerdekaan adalah kisah tentang keberanian, pengorbanan, dan persatuan. Setiap tahun pada tanggal 17 Agustus, kita mengenang hari bersejarah ini, bukan hanya sebagai momen kebanggaan nasional, tetapi juga sebagai pengingat bahwa perjuangan untuk kemajuan bangsa harus terus dilanjutkan.
                    Dengan informasi yang disajikan, kami berharap dapat meningkatkan kesadaran akan pentingnya kemerdekaan dan menumbuhkan rasa bangga sebagai bagian dari Negara Kesatuan Republik Indonesia.
                  </p>
                </div>
                <div>
                  <img src="/assets/images/tentang/about.png" className="w-[40rem] hidden md:block" alt="tentang" />
                </div>
            </div>
          </div>
    )
}