import Section1 from "@/app/sections/home/section1";
import Section2 from "@/app/sections/home/section2";
import Section3 from "@/app/sections/home/section3";
import SectionAdditional from "@/app/sections/home/sectionadditional";
import { Metadata, ResolvingMetadata } from "next";
import home from '@/data/metadata.json';

export async function generateMetadata(
  parent: ResolvingMetadata
): Promise<Metadata> {
 
 
  return {
    title: home.title + ' - ' + home.description,
    description: home.description,
    keywords: home.title,
  }
}

export default function Home() {
  return (
    <main className="w-full md:mt-[22rem] mt-[10rem]">
      <section className="container mx-auto flex flex-col items-center justify-center text-center">
        <Section1 />
      </section>

      <SectionAdditional />

      <section className="md:mt-[10rem] mt-[5rem] p-10">
        <Section2 />
      </section>

      <section className="md:mt-[10rem] mt-[5rem] p-10">
        <Section3 />
      </section>
    </main>
  );
}
