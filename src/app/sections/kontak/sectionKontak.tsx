import { Send } from "lucide-react";


export default function SectionKontak() {
    return (
        <div className="container mx-auto px-4 items-center">
            <div className="w-full md:flex justify-between gap-40">
                <div className="md:w-1/2">
                  <h1 className="mb-2 text-3xl md:text-6xl mt-24 uppercase font-bold text-primary ">Hubungi Kami</h1>
                  <p className="text-justify mb-12">Jika Anda memiliki pertanyaan, saran, atau ingin tahu lebih banyak tentang apa yang kami lakukan, jangan ragu untuk menghubungi kami melalui:
                  </p><p className="mb-20">
                      Email: idwahyu58@gmail.com <br />
                      No Whatsapp: +62 857 8614 4772 <br />
                      Instagram: @whyuwid_</p>
                </div>
                <div className="xl:p-10 w-full md:w-1/2 rounded-md">
                  <div className="flex justify-between gap-2 mb-2 ">
                    <div>
                        <label className="text-black" htmlFor="">First Name</label>
                        <input type="text" name="" id="" placeholder="First Name" className="w-full p-3 rounded-md bg-gray-200" />
                    </div>
                    <div>
                        <label className="text-black" htmlFor="">Last Name</label>
                        <input type="text" name="" id="" placeholder="Last Name" className="w-full p-3 rounded-md bg-gray-200" />
                    </div>
                  </div>
                  <div className="mb-2">
                    <label className="text-black" htmlFor="">Email</label>
                    <input type="text" name="" id="" placeholder="Email" className="w-full p-3 rounded-md bg-gray-200" />
                  </div>
                  <div>
                    <label className="text-black" htmlFor="">Message</label>
                    <textarea name="" id="" cols={30} rows={10} className="w-full p-3 rounded-md bg-gray-200" placeholder="Your message"></textarea>
                  </div>
                  <div>
                    <button className="w-full p-3 rounded-md bg-primary text-white">Kirim<Send size={16} className="text-white cursor-pointer inline ml-1" /></button>
                  </div>
                </div>
            </div>
          </div>
    )
}