import  { useEffect, useRef } from "react";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import { motion, useInView, useAnimation } from "framer-motion";
import backgroundImage from "../images/background.png"; // adjust the path as needed

const Contact = () => {
  useEffect(() => {
    document.title = "TYF | Kết nối";
  }, []);
  const ref = useRef();
  const isInView = useInView(ref);
  const mainControlls = useAnimation(isInView);
 
  useEffect(() => {
    if (isInView) {
      mainControlls.start("visible");
    }
  }, [isInView]);
  /* automatically scroll to the top of the page */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Navbar />

      <div className="bg-gradient-to-br from-blue-100 ">
        <div className="object-cover lg:ml-auto lg:text-right after:bg-[url('./small.png')] after:bg-contain after:block after:bg-no-repeat after:w-[420px] after:h-[320px] after:absolute after:top-0 after:-left-20 sm:after:-left-40 before:bg-[url('./small.png')] before:bg-contain before:block before:bg-no-repeat before:w-[220px]  before:absolute before:bottom-0 before:-right-10">
          <motion.div
            variants={{
              visible: { opacity: 1, x: 0, filter: "blur(0px)" },
              hidden: { opacity: 0, x: 75, filter: "blur(5px)" },
            }}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.75, delay: 0.25 }}
            className="  inline-block pt-11 lg:pt-0 mt-6"
          ></motion.div>
        </div>
        <img
          src={backgroundImage}
          alt="background"
          className="absolute inset-0 w-full h-full object-fit  opacity-30 filter "
        />

        <div className="max-w-screen font-poppins overflow-hidden ">
          <section className="z-10 bg-gradient-to-br from-blue-100  py-20  sm:px-20 sm:py-40 ">
            <div className="container mx-auto">
              <div className="-mx-4 flex flex-wrap lg:justify-between">
                <motion.div
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: -75 },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.75, delay: 0.25 }}
                  className="w-full px-4 lg:w-1/2 xl:w-6/12"
                >
                  <div className="mb-12 max-w-[570px] lg:mb-0 pl-4">
                    <h2 className="text-blue-500 mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                      LIÊN HỆ VỚI CHÚNG TÔI
                    </h2>
                    <p className="text-gray-500 mb-9 text-base leading-relaxed">
                      Cảm ơn bạn đã quan tâm đến công ty của chúng tôi. Chúng
                      tôi ở đây để hỗ trợ bạn với bất kỳ thắc mắc hoặc yêu cầu
                      nào bạn muốn.
                      <br />
                      Nếu bạn muốn liên hệ với chúng tôi, bạn có thể sử dụng
                      thông tin liên hệ sau:
                    </p>
                    <motion.div
                      variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: -75 },
                      }}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 0.5, delay: 0.25 }}
                      className="mb-8 flex w-full max-w-[370px]"
                    >
                      <div className="bg-blue-400/20 text-blue-500 mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded  sm:h-[70px] sm:max-w-[70px]">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="fill-current text-blue-500"
                        >
                          <path d="M21.8182 24H16.5584C15.3896 24 14.4156 23.0256 14.4156 21.8563V17.5688C14.4156 17.1401 14.0649 16.7893 13.6364 16.7893H10.4026C9.97403 16.7893 9.62338 17.1401 9.62338 17.5688V21.8173C9.62338 22.9866 8.64935 23.961 7.48052 23.961H2.14286C0.974026 23.961 0 22.9866 0 21.8173V8.21437C0 7.62972 0.311688 7.08404 0.818182 6.77223L11.1039 0.263094C11.6494 -0.0876979 12.3896 -0.0876979 12.9351 0.263094L23.2208 6.77223C23.7273 7.08404 24 7.62972 24 8.21437V21.7783C24 23.0256 23.026 24 21.8182 24ZM10.3636 15.4251H13.5974C14.7662 15.4251 15.7403 16.3995 15.7403 17.5688V21.8173C15.7403 22.246 16.0909 22.5968 16.5195 22.5968H21.8182C22.2468 22.5968 22.5974 22.246 22.5974 21.8173V8.25335C22.5974 8.13642 22.5195 8.01949 22.4416 7.94153L12.1948 1.4324C12.0779 1.35445 11.9221 1.35445 11.8442 1.4324L1.55844 7.94153C1.44156 8.01949 1.4026 8.13642 1.4026 8.25335V21.8563C1.4026 22.285 1.75325 22.6358 2.18182 22.6358H7.48052C7.90909 22.6358 8.25974 22.285 8.25974 21.8563V17.5688C8.22078 16.3995 9.19481 15.4251 10.3636 15.4251Z" />
                        </svg>
                      </div>
                      <div className="w-full">
                        <h4 className="text-dark mb-1 text-xl font-bold">
                          Địa điểm
                        </h4>
                        <p className="text-body-color text-base">
                          22 **** ***** ****** Safi, Morocco
                        </p>
                      </div>
                    </motion.div>
                    <motion.div
                      variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: -75 },
                      }}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 0.5, delay: 0.5 }}
                      className="mb-8 flex w-full max-w-[370px]"
                    >
                      <div className="bg-blue-400/20 text-blue-500 mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded  sm:h-[70px] sm:max-w-[70px]">
                        <svg
                          width="24"
                          height="26"
                          viewBox="0 0 24 26"
                          className="fill-current text-blue-500"
                        >
                          <path d="M22.6149 15.1386C22.5307 14.1704 21.7308 13.4968 20.7626 13.4968H2.82869C1.86042 13.4968 1.10265 14.2125 0.97636 15.1386L0.092295 23.9793C0.0501967 24.4845 0.21859 25.0317 0.555377 25.4106C0.892163 25.7895 1.39734 26 1.94462 26H21.6887C22.1939 26 22.6991 25.7895 23.078 25.4106C23.4148 25.0317 23.5832 24.5266 23.5411 23.9793L22.6149 15.1386ZM21.9413 24.4424C21.8992 24.4845 21.815 24.5687 21.6466 24.5687H1.94462C1.81833 24.5687 1.69203 24.4845 1.64993 24.4424C1.60783 24.4003 1.52364 24.3161 1.56574 24.1477L2.4498 15.2649C2.4498 15.0544 2.61819 14.9281 2.82869 14.9281H20.8047C21.0152 14.9281 21.1415 15.0544 21.1835 15.2649L22.0676 24.1477C22.0255 24.274 21.9834 24.4003 21.9413 24.4424Z" />
                          <path d="M11.7965 16.7805C10.1547 16.7805 8.84961 18.0855 8.84961 19.7273C8.84961 21.3692 10.1547 22.6742 11.7965 22.6742C13.4383 22.6742 14.7434 21.3692 14.7434 19.7273C14.7434 18.0855 13.4383 16.7805 11.7965 16.7805ZM11.7965 21.2008C10.9966 21.2008 10.3231 20.5272 10.3231 19.7273C10.3231 18.9275 10.9966 18.2539 11.7965 18.2539C12.5964 18.2539 13.2699 18.9275 13.2699 19.7273C13.2699 20.5272 12.5964 21.2008 11.7965 21.2008Z" />
                          <path d="M1.10265 7.85562C1.18684 9.70794 2.82868 10.4657 3.67064 10.4657H6.61752C6.65962 10.4657 6.65962 10.4657 6.65962 10.4657C7.92257 10.3815 9.18552 9.53955 9.18552 7.85562V6.84526C10.5748 6.84526 13.7742 6.84526 15.1635 6.84526V7.85562C15.1635 9.53955 16.4264 10.3815 17.6894 10.4657H17.7315H20.6363C21.4782 10.4657 23.1201 9.70794 23.2043 7.85562C23.2043 7.72932 23.2043 7.26624 23.2043 6.84526C23.2043 6.50847 23.2043 6.21378 23.2043 6.17169C23.2043 6.12959 23.2043 6.08749 23.2043 6.08749C23.078 4.90874 22.657 3.94047 21.9413 3.18271L21.8992 3.14061C20.8468 2.17235 19.5838 1.62507 18.6155 1.28828C15.795 0.193726 12.2587 0.193726 12.0903 0.193726C9.6065 0.235824 8.00677 0.446315 5.60716 1.28828C4.681 1.58297 3.41805 2.13025 2.36559 3.09851L2.3235 3.14061C1.60782 3.89838 1.18684 4.86664 1.06055 6.04539C1.06055 6.08749 1.06055 6.12959 1.06055 6.12959C1.06055 6.21378 1.06055 6.46637 1.06055 6.80316C1.10265 7.18204 1.10265 7.68722 1.10265 7.85562ZM3.37595 4.15097C4.21792 3.3932 5.27038 2.93012 6.15444 2.59333C8.34355 1.79346 9.7749 1.62507 12.1745 1.58297C12.3429 1.58297 15.6266 1.62507 18.1525 2.59333C19.0365 2.93012 20.089 3.3511 20.931 4.15097C21.394 4.65615 21.6887 5.32972 21.7729 6.12959C21.7729 6.25588 21.7729 6.46637 21.7729 6.80316C21.7729 7.22414 21.7729 7.68722 21.7729 7.81352C21.7308 8.78178 20.8047 8.99227 20.6784 8.99227H17.7736C17.3526 8.95017 16.679 8.78178 16.679 7.85562V6.12959C16.679 5.7928 16.4685 5.54021 16.1738 5.41392C15.9213 5.32972 8.55405 5.32972 8.30146 5.41392C8.00677 5.49811 7.79628 5.7928 7.79628 6.12959V7.85562C7.79628 8.78178 7.1227 8.95017 6.70172 8.99227H3.79694C3.67064 8.99227 2.74448 8.78178 2.70238 7.81352C2.70238 7.68722 2.70238 7.22414 2.70238 6.80316C2.70238 6.46637 2.70238 6.29798 2.70238 6.17169C2.61818 5.32972 2.91287 4.65615 3.37595 4.15097Z" />
                        </svg>
                      </div>
                      <div className="w-full ">
                        <h4 className="text-dark mb-1 text-xl font-bold">
                          Số điện thoại
                        </h4>
                        <p className="text-body-color text-base">
                          (+212)8 12 34 56 78
                        </p>
                      </div>
                    </motion.div>
                    <motion.div
                      variants={{
                        visible: { opacity: 1, x: 0 },
                        hidden: { opacity: 0, x: -75 },
                      }}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 0.5, delay: 0.75 }}
                      className="mb-8 flex w-full max-w-[370px]"
                    >
                      <div className="bg-blue-400/20 text-blue-500 mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded  sm:h-[70px] sm:max-w-[70px]">
                        <svg
                          width="28"
                          height="19"
                          viewBox="0 0 28 19"
                          className="fill-current text-blue-500"
                        >
                          <path d="M25.3636 0H2.63636C1.18182 0 0 1.16785 0 2.6052V16.3948C0 17.8322 1.18182 19 2.63636 19H25.3636C26.8182 19 28 17.8322 28 16.3948V2.6052C28 1.16785 26.8182 0 25.3636 0ZM25.3636 1.5721C25.5909 1.5721 25.7727 1.61702 25.9545 1.75177L14.6364 8.53428C14.2273 8.75886 13.7727 8.75886 13.3636 8.53428L2.04545 1.75177C2.22727 1.66194 2.40909 1.5721 2.63636 1.5721H25.3636ZM25.3636 17.383H2.63636C2.09091 17.383 1.59091 16.9338 1.59091 16.3499V3.32388L12.5 9.8818C12.9545 10.1513 13.4545 10.2861 13.9545 10.2861C14.4545 10.2861 14.9545 10.1513 15.4091 9.8818L26.3182 3.32388V16.3499C26.4091 16.9338 25.9091 17.383 25.3636 17.383Z" />
                        </svg>
                      </div>
                      <div className="w-full">
                        <h4 className="text-dark mb-1 text-xl font-bold">
                          Email
                        </h4>
                        <p className="text-body-color text-base">
                          tyfcompany@sabir.com
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div
                  variants={{
                    visible: { opacity: 1, y: 0 },
                    hidden: { opacity: 0, y: 75 },
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.75, delay: 0.25 }}
                  className="w-full px-4 lg:w-1/2 xl:w-5/12"
                >
                  <div className="relative rounded-lg bg-white p-8 shadow-lg sm:p-12">
                    <form>
                      <motion.div
                        variants={{
                          visible: { opacity: 1, x: 0 },
                          hidden: { opacity: 0, x: 75 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="mb-6"
                      >
                        <input
                          type="text"
                          placeholder="Your Name"
                          className="text-body-color border-[f0f0f0] focus:border-blue-500 w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                        />
                      </motion.div>

                      <motion.div
                        variants={{
                          visible: { opacity: 1, x: 0 },
                          hidden: { opacity: 0, x: 75 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5, delay: 0.75 }}
                        className="mb-6"
                      >
                        <input
                          type="email"
                          placeholder="Your Email"
                          className="text-body-color border-[f0f0f0] focus:border-blue-500 w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                        />
                      </motion.div>
                      <motion.div
                        variants={{
                          visible: { opacity: 1, x: 0 },
                          hidden: { opacity: 0, x: 75 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5, delay: 0.75 }}
                        className="mb-6"
                      >
                        <input
                          type="text"
                          placeholder="Your Phone"
                          className="text-body-color border-[f0f0f0] focus:border-blue-500 w-full rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                        />
                      </motion.div>
                      <motion.div
                        variants={{
                          visible: { opacity: 1, x: 0 },
                          hidden: { opacity: 0, x: 75 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5, delay: 1 }}
                        className="mb-6"
                      >
                        <textarea
                          rows="6"
                          placeholder="Your Message"
                          className="text-body-color border-[f0f0f0] focus:border-blue-500 w-full resize-none rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                        ></textarea>
                      </motion.div>
                      <motion.div
                        variants={{
                          visible: { opacity: 1, x: 0 },
                          hidden: { opacity: 0, x: 75 },
                        }}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5, delay: 1.25 }}
                      >
                        <button
                          type="submit"
                          className="bg-blue-500 border-blue-500 w-full rounded border p-3 text-white transition hover:bg-opacity-90"
                        >
                          Send Message
                        </button>
                      </motion.div>
                    </form>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>
        </div>
        <div className="w-[70%] h-[2px] bg-gradient-to-r from-blue-700 to-blue-400"></div>
        <div className="h-[42rem] sm:mt-20 mt-[20%]">
          <motion.div
            ref={ref}
            variants={{
              visible: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: 75 },
            }}
            initial="hidden"
            animate={mainControlls}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mx-auto mb-12 text-center lg:mb-20"
          >
            <h2 className="mb-4 text-3xl font-bold text-blue-500 sm:text-4xl md:text-[40px]">
              Vị trí của bạn
            </h2>
            <p className="text-lg text-gray-500">
              Hãy đến văn phòng của chúng tôi, chúng tôi luôn chào đón bạn!
              Đây là nơi bạn có thể tìm thấy văn phòng của chúng tôi
            </p>
          </motion.div>
          <div className="flex justify-center mt-20" id="maps">
            {/* <iframe
              // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53963.183405945514!2d-9.277892282723595!3d32.29307066040157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdac212049843597%3A0x6b618c47dfd85d40!2sSafi!5e0!3m2!1sen!2sma!4v1697811396162!5m2!1sen!2sma"
              src="https://www.google.com/maps/dir/16.0667591,108.2139134/FPT+University+Danang,+Khu+%C4%91%C3%B4+th%E1%BB%8B+FPT+City,+Ng%C5%A9+H%C3%A0nh+S%C6%A1n,+%C4%90%C3%A0+N%E1%BA%B5ng+550000,+Vietnam/@16.0179293,108.1935206,13z/data=!3m1!4b1!4m17!1m7!3m6!1s0x3142116949840599:0x365b35580f52e8d5!2sFPT+University+Danang!8m2!3d15.9688859!4d108.2608913!16s%2Fg%2F11fl0yz7tc!4m8!1m1!4e1!1m5!1m1!1s0x3142116949840599:0x365b35580f52e8d5!2m2!1d108.2608913!2d15.9688859?entry=ttu"
              
            ></iframe> */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.8560693176782!2d108.25831101109372!3d15.968891042051556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3142116949840599%3A0x365b35580f52e8d5!2sFPT%20University%20Danang!5e0!3m2!1sen!2s!4v1718424822727!5m2!1sen!2s"
              allowfullscreen=""
              loading="lazy"
          
              className="w-screen sm:mx-36 mx-10 h-[30rem]"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
