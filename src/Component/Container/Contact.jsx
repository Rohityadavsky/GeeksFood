import { AiFillPhone } from "react-icons/ai";
import { MdOutlineMail } from "react-icons/md";
import { FaHome } from "react-icons/fa";
const Contact = () =>{
    return(
        <div>
            <section className="relative z-10 overflow-hidden bg-white py-20 lg:py-[120px]">
                <div className="container mx-auto">
                    <div className="-mx-4 flex flex-warp lg:justify-between">
                        <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
                        <div className="mb-12 max-w-[570px] lg:mb-0">
                            <span className="text-primary mb-4 block text-base font-semibold">Contact Us</span>
                            <h2 className="text-dark mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">GET IN TOUCH WITH US</h2>
                            <p className="text-body-color mb-9 text-base leading-relaxed">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum deserunt nisi distinctio autem tempore maxime tenetur eos adipisci excepturi enim nobis mollitia sit, velit dicta ea aut veniam illo quis!
                            </p>

                            <div className="mb-8 flex w-full max-w-[370px]">
                                <div className="bg-primary text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]">
                                    <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                                    <FaHome />
                                    </svg>
                                </div>
                                <div className="w-full">
                                    <h4 className="text-dark mb-1 text-xl font-bold">Our Location</h4>
                                    <p className="text-body-color text-base">99 S.t Jomblo Park Pekanbaru 28292.Indonesia</p>
                                </div>
                            </div>
                            <div className="mb-8 flex w-full max-w-[370px]">
                            <div className="bg-primary text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]">
                                    <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                                    <AiFillPhone />
                                    </svg>
                                </div>
                                <div className="w-full">
                                    <h4 className="text-dark mb-1 text-xl font-bold">Phone Number</h4>
                                    <p className="text-body-color text-base">(+91)7985406899</p>
                                </div>

                            </div>
                            <div className="mb-8 flex w-full max-w-[370px]">
                            <div className="bg-primary text-primary mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded bg-opacity-5 sm:h-[70px] sm:max-w-[70px]">
                                    <svg width="24" height="24" viewBox="0 0 24 24" className="fill-current">
                                    <MdOutlineMail />

                                    </svg>
                                </div>
                                <div className="w-full">
                                    <h4 className="text-dark mb-1 text-xl font-bold">Email Address</h4>
                                    <p className="text-body-color text-base">rohityadavcsky@gmail.com</p>
                                </div>
                            </div>


                        </div>

                        </div>
                        <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                        <div className="relative rounded-lg bg-white p-8 shadow-lg sm:p-12">
                            <from>
                                <div className="mb-6">
                                    <input type="text" placeholder="Your Name" class="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none" />
                                </div>
                                <div className="mb-6">
                                <input type="email" placeholder="Your Email" class="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none" />

                                </div>
                                <div className="mb-6">
                                <input type="text" placeholder="Your Phone" class="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none" />


                                </div>
                                <div className="mb-6">
                                  <textarea class="text-body-color border-[f0f0f0] focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"></textarea>
                                </div>
                            </from>
                        </div>


                        </div>


                    </div>

                </div>
            </section>
            
        </div>

    );
}
export default Contact;