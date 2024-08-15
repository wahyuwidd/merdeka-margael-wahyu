import SectionSejarah from "@/app/sections/sejarah/sectionSejarah";
import { Metadata } from "next";
import home from '@/data/metadata.json';

export async function generateMetadata(
): Promise<Metadata> { 
  return {
    title: 'Peristiwa - ' + home.title + ' - ' + home.description,
    description: home.description,
    keywords: home.title,
  }
}

export default function Peristiwa() {
    return (
        <main className="md:mt-[7rem] mt-[5rem]">
            <section>
              <SectionSejarah />
            </section>
        </main>
    );
}
