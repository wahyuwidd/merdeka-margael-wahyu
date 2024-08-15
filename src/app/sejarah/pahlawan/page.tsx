import SectionPahlawan from '@/app/sections/sejarah/sectionPahlawan'
import { Metadata } from "next";
import home from '@/data/metadata.json';

export async function generateMetadata(
): Promise<Metadata> { 
  return {
    title: 'Pahlawan - ' + home.title + ' - ' + home.description,
    description: home.description,
    keywords: home.title,
  }
}

export default function Pahlawan () {
    return(
        <main className="md:mt-[0rem] mt-[5rem]">
            <section>
                <SectionPahlawan />
            </section>
        </main>
    )
}