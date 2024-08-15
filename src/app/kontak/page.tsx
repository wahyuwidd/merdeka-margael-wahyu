import SectionKontak from "@/app/sections/kontak/sectionKontak"
import { Metadata } from "next";
import home from '@/data/metadata.json';

export async function generateMetadata(
): Promise<Metadata> { 
  return {
    title: 'Kontak - ' + home.title + ' - ' + home.description,
    description: home.description,
    keywords: home.title,
  }
}

export default function Kontak() {
    return(
        <main className="w-full md:mt-[15rem] mt-[8rem] mb-[10rem]">
           <section>
              <SectionKontak /> 
           </section>
        </main>
    )
}