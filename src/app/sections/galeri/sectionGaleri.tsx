'use client'
import { ArrowUpRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import galeri from '@/data/galeri.json'

export default function SectionGaleri() {
    const btnScrollDown = () => {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImage, setCurrentImage] : any = useState(null); 
  
    const openModal = (image:any) => {
      setCurrentImage(image);
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

    return(
        <><div>
            <div className="flex flex-col justify-center items-center z-20 absolute w-full text-white">
                <h1 className="md:text-7xl font-bold md:mt-[12rem] text-4xl mt-[2rem] ">Ibu Kota <p className="text-primary inline">Nusantara</p></h1>
                <div className="border mt-5 border-white w-2/3"></div>
                <p className="text-md w-2/3 md:text-xl text-justify mt-10">Ibu Kota Nusantara (IKN) adalah pusat pemerintahan baru yang dirancang sebagai simbol kemajuan dan keberlanjutan Indonesia. Terletak di Pulau Kalimantan, IKN diharapkan menjadi kota pintar yang ramah lingkungan dengan fokus pada pembangunan berkelanjutan, teknologi canggih, dan kesejahteraan sosial. Dengan perpaduan antara arsitektur modern dan nilai-nilai budaya Indonesia, IKN akan menjadi pusat administrasi, ekonomi, dan kebudayaan yang memperkuat identitas nasional.</p>
                <div className="flex gap-5 mt-10">
                    <Link href='https://www.ikn.go.id/' target="_blank" className="p-3 rounded-lg bg-transparent border text-white uppercase">Kunjungi IKN <ArrowUpRight size={20} className="text-white cursor-pointer inline" /></Link>
                </div>
            </div>
            <div className="hidden xl:block">
                <div className="flex flex-col justify-center opacity-80 items-center z-20 bottom-0 mb-5 w-full text-white absolute ">
                    <button onClick={btnScrollDown}>Scroll Down</button>
                    <ChevronDown size={20} className="text-white cursor-pointer" />
                </div>
            </div>
            <div className="w-full h-[54rem] bg-black opacity-40 visible absolute "></div>
            <img src="/assets/images/galeri/ikn2.jpg" className="w-full h-[54rem] object-cover bg-no-repeat" alt="" />
        </div><div className="mt-8">
                <div className="bg-gray-200 h-full py-6 sm:py-8 lg:py-12">
                    <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                        <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
                            <div className="lg:flex items-center gap-12">
                                <h2 className="text-3xl font-bold text-primary md:text-4xl lg:text-5xl uppercase">
                                    Lensa <br /> Kemerdekaan
                                </h2>
                                <p className="text-gray-600 text-justify">
                                    Kilas balik momen-momen berharga yang menggambarkan semangat
                                    perjuangan dan perayaan kemerdekaan Indonesia. Dari potret
                                    sejarah hingga perayaan masa kini, galeri ini membawa Anda
                                    menyusuri jejak visual bangsa yang tak terlupakan.
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
                            {galeri.map((image, index) => (
                                <a
                                    href="#"
                                    key={index}
                                    className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        openModal(image);
                                    } }
                                >
                                    <img
                                        src={image.img}
                                        loading="lazy"
                                        alt={image.alt}
                                        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
                                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
                                    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
                                        {image.title}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {isModalOpen && currentImage && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
                        <div className="relative">
                            <img
                                src={currentImage.img}
                                alt={currentImage.alt}
                                className="max-h-[80vh] max-w-full" />
                            <div className="w-full items-center">
                                <button
                                    onClick={closeModal}
                                    className="m-4 rounded-md bg-primary px-4 py-2 text-white"
                                >
                                    Tutup
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div></>
    )
}