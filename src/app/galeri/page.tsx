import SectionGaleri from "@/app/sections/galeri/sectionGaleri";
import { Metadata } from "next";
import home from '@/data/metadata.json';

export async function generateMetadata(
): Promise<Metadata> { 
  return {
    title: 'Galeri - ' + home.title + ' - ' + home.description,
    description: home.description,
    keywords: home.title,
  }
}

export default function Galeri () {
     return (
        <main className="md:mt-[7rem] mt-[5rem] bg-gray-200">
           <section>
              <SectionGaleri />
           </section>
        </main>
     )
}