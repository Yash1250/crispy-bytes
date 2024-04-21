import { FaGithub , FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


const Contact = ()=>{
    return (
        <div className="flex flex-col   items-center justify-center p-8 min-h-[86vh] relative">
            <h1 className="font-bold text-2xl text-gray-800">CONTACT</h1>
            <div className="bg-orange-600 w-14 h-1"></div>
            <p className="text-orange-600 m-2 font-semibold">Get in Touch</p>
            <div className="fixed right-0  flex flex-col gap-4 mr-6 max-[700px]:hidden">
              <a href="https://github.com/Yash1250" target="_blank"><FaGithub className="bg-orange-500 text-white w-10 h-10 p-2 rounded-full  cursor-pointer"/></a>
              <a href="https://www.linkedin.com/in/yash-mehta-ym/" target="_blank"><FaLinkedin className="bg-orange-500 text-white w-10 h-10 p-2 rounded-full cursor-pointer"/></a>
              <a href="mailto:mehtayashkuleri503@gmail.com"><SiGmail className="bg-orange-500 text-white w-10 h-10 p-2 rounded-full cursor-pointer"/></a>
            </div>
        <div className="mx-auto w-full max-w-[550px]">
          <form action="https://formspree.io/f/xkndkwjy" method="POST">
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Full Name"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@domain.com"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="subject"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Enter your subject"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="message"
                className="mb-3 block text-base font-medium text-[#07074D]"
              >
                Message
              </label>
              <textarea
                rows="4"
                name="message"
                id="message"
                placeholder="Type your message"
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
              ></textarea>
            </div>
            <div>
              <button
                className="hover:shadow-form rounded-md bg-orange-600 py-3 px-8 text-base font-semibold text-white outline-none"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
        )
}

export default Contact;