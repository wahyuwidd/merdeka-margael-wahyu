import SectionTentang from "@/app/sections/tentang/sectionTentang";
import { Metadata } from "next";
import home from '@/data/metadata.json';

export async function generateMetadata(
): Promise<Metadata> { 
  return {
    title: 'Tentang - ' + home.title + ' - ' + home.description,
    description: home.description,
    keywords: home.title,
  }
}

export default function About() {
    return (
        <main className="w-full md:mt-[15rem] mt-[8rem] mb-[15rem]">
          <section>
              <SectionTentang />
          </section>
        </main>
    )
}