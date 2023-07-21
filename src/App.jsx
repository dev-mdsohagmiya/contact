import { FaSkype } from "react-icons/fa";
import { LuMail } from "react-icons/lu";

function App() {
  return (
    <>
      <div>
        <div className="container mx-auto mt-10 px-4">
          <div className="text-center py-3">
            <h2 className="text-[55px] text-[#735BE2]">Contact</h2>
            <h2 className="text-[22px] -translate-y-4"> Connect with me</h2>
          </div>
          <div className=" sm:py-6  grid grid-cols-12">
            <div className="md:mx-4 sm:col-span-12 md:col-span-5 lg:col-span-4 bg-gradient-to-tr from-white via-transparent to-gray-200 broder border-1 border border-gray-300 rounded-[20px]">
              <div className="md:mx-4 p-10 ">
                <div>
                  <img src="/contact1.png" alt="" />
                  <h2 className="text-[32px] block text-[#735BE2]">
                    {" "}
                    Ali Hossain{" "}
                  </h2>
                  <span className="block text-[17px] font-bold font-serif text-[#262626]">
                    Web Developer (WordPress)
                  </span>{" "}
                  <span className="block font-serif text-[14px] text-gray-400">
                    Are You Looking For Your Business Online Presence? I am
                    here.
                  </span>{" "}
                  <span className="block text-[16px] font-bold font-serif text-[#262626">
                    <span className="inline-block  translate-y-1 text-[#735BE2]">
                      <FaSkype />
                    </span>{" "}
                    shovo654
                  </span>
                  <span className="block text-[16px] font-bold font-serif text-[#262626">
                    <span className="inline-block  translate-y-1 text-[#735BE2]">
                      <LuMail className="" />
                    </span>
                    <span className="ml-[1px]"> shovoalways@gmail.com</span>
                  </span>
                </div>
              </div>
            </div>
            <div className="sm:mt-6 sm:col-span-12 md:col-span-7 lg:col-span-8 md:mx-4 bg-gradient-to-tr from-white via-transparent to-gray-200 broder border-1 border border-gray-300 rounded-[20px] ">
              <div className="md:mx-4 p-10">
                <div>
                  <div className="py-3">
                    <label className="font-bold text-[17px] font-serif">
                      Your name
                    </label>
                    <input
                      type="text"
                      className="py-2  border-1 border-gray-300 border w-full"
                    />
                  </div>
                  <div className="py-3">
                    <label className="font-bold text-[17px] font-serif">
                      Your email
                    </label>
                    <input
                      type="text"
                      className="py-2  border-1 border-gray-300 border w-full"
                    />
                  </div>
                  <div className="py-3">
                    <label className="font-bold text-[17px] font-serif">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="py-2  border-1 border-gray-300 border w-full"
                    />
                  </div>
                  <div className="py-3">
                    <label className="font-bold text-[17px] font-serif">
                      Your name
                    </label>

                    <textarea
                      className="py-2  border-1 border-gray-300 border w-full"
                      id=""
                      cols="30"
                      rows="10"
                    ></textarea>
                  </div>
                  <div>
                    <button className="py-3 font-serif text-white font-bold text-[17px] bg-[#735BE2] px-16">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
