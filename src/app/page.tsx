import Section1 from "@/app/sections/home/section1";
import Section2 from "@/app/sections/home/section2";
import Section3 from "@/app/sections/home/section3";
import SectionAdditional from "@/app/sections/home/sectionadditional";
import { Metadata } from "next";
import home from '@/data/metadata.json';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: home.title + ' - ' + home.description,
    description: home.description,
    keywords: home.title,
  };
}

export default function Home() {
  return (
    <main className="w-full 2xl:mt-[22rem] xl:mt-[12rem] md:mt-[18rem] mt-[10rem]">
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
