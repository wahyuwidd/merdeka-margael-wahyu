import heroes from '@/data/pahlawan_nasional_indonesia.json';

export default function SectionPahlawan() {
    return(
        <><div>
            <img src="/assets/images/additional/header-heroes.png" alt="" className="w-full " />
        </div><div className="flex justify-center text-center w-full z-20">
                <h1 className="text-3xl md:text-7xl uppercase font-bold text-primary">Pahlawan Nasional <br /> Indonesia</h1>
            </div><div className="mt-24 grid 2xl:grid-cols-10 xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 gap-2 md:p-20 sm:p-10 p-6 grid-cols-2">
                {heroes.map((hero, index) => (
                    <div key={index} className="">
                        <div className="">
                            <img src={hero.img} alt="" className="w-full h-[12rem] rounded-md" />
                        </div>
                        <div className="text-center mb-2">
                            {hero.nama} <br />
                            {hero.asal}
                        </div>
                    </div>
                ))}
            </div></>
    )
}