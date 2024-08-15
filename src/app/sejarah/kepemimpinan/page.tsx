import SectionKepemimpinan1 from '@/app/sections/sejarah/kepemimpinan/sectionKepemimpinan1'
import SectionKepemimpinan2 from '@/app/sections/sejarah/kepemimpinan/sectionKepemimpinan2';
import { Metadata } from "next";
import home from '@/data/metadata.json';

export async function generateMetadata(
): Promise<Metadata> { 
  return {
    title: 'Kepemimpinan - ' + home.title + ' - ' + home.description,
    description: home.description,
    keywords: home.title,
  }
}

export default function Kepemimpinan() {
    
    return(
        <main className="md:mt-[7rem] mt-[5rem] w-full ">
          <section className="hidden 2xl:block">
            <SectionKepemimpinan1 />
          </section>

        <section className="2xl:hidden bg-[#e3e3e3] ">
          <SectionKepemimpinan2 />
        </section>
    </main>
    )
}