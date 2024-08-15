import presidents from '@/data/presiden_indonesia.json';

export default function SectionKepemimpinan2() {
    return(
        <><div className="mt-[2rem] flex mb-20 md:mt-[10rem]">
            <h1 className="text-3xl z-20 mt-5 ml-5 md:ml-12 md:text-7xl font-bold uppercase text-primary tracking-widest absolute">
                Presiden RI
            </h1>
        </div><div className="md:mt-[10rem] md:p-10 mt-10 relative z-10">
                {presidents.map((president, index) => (
                    <div
                        key={index}
                        className={`flex items-center gap-5 md:gap-10 p-5 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                    >
                        <img
                            src={president.img}
                            alt={president.name}
                            className="rounded-md w-20 md:w-[10rem]" />
                        <div className="text-left md:text-right">
                            <h1 className="text-lg md:text-2xl font-semibold">{president.name}</h1>
                            <p className="text-sm md:text-xl">{president.title}</p>
                        </div>
                    </div>
                ))}
            </div><div className="absolute top-0 left-0 w-full h-full">
                <img
                    src="/assets/images/additional/arrow2.png"
                    alt=""
                    className="hidden opacity-50 2xl:block absolute w-[20rem] right-0 md:mt-0 bottom-0 md:mr-[30rem] ml-5" />
                <img
                    src="/assets/images/additional/overlay-home3.jpg"
                    alt=""
                    className="w-full h-full object-cover bg-no-repeat" />
            </div></>
    )
}