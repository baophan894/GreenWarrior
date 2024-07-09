import  { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";

const Features = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });

  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  useEffect(() => {
    if (isInView1) {
      controls1.start("visible");
    }
  }, [isInView1, controls1]);

  useEffect(() => {
    if (isInView2) {
      controls2.start("visible");
    }
  }, [isInView2, controls2]);

  useEffect(() => {
    if (isInView3) {
      controls3.start("visible");
    }
  }, [isInView3, controls3]);

  return (
    <>
      <div className="w-[70%] h-[2px] bg-gradient-to-r from-blue-500 to-blue-200"></div>
      <div className="max-w-screen overflow-x-hidden">
        <section className="text-gray-700 gap-8">
          <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
            <div className="mx-auto mb-12 text-center lg:mb-20">
              <h2 className="mb-4 text-3xl font-bromega-bold text-customBlue sm:text-4xl md:text-[40px]">
                Tiến Bộ Số Hóa
              </h2>
              <p className="text-lg font-bromega-light text-gray-500">
                Thúc đẩy sự phát triển của sự hiện diện trực tuyến của bạn thông
                qua các giải pháp công nghệ tiên tiến, phân tích mạnh mẽ và đội
                ngũ chuyên gia được đào tạo chuyên nghiệp.
              </p>
            </div>

            <div className="grid lg:gap-20 lg:grid-cols-2 lg:items-center">
              <div>
                <h3
                  ref={ref1}
                  className="text-2xl font-bromega-bold tracking-tight sm:text-3xl text-customBlue"
                >
                  TYF - Take care of Your Future
                </h3>
                <hr className="border-t border-customBlue my-4 w-[200px]"></hr>
                <div className="mt-8 space-y-8">
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 75 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={controls1}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="flex"
                  >
                    <div>
                      <p className="font-bromega-bold text-justify font-black">
                        TYF ra đời với sứ mệnh trở thành giải pháp toàn diện cho
                        việc gia sư và trông trẻ, nâng cao chất lượng giáo dục
                        và chăm sóc trẻ em. Chúng tôi sẽ giúp bạn xóa tan mọi lo
                        lắng về việc học hành và sự phát triển toàn diện của con
                        cái bạn. Với TYF, mỗi ngày các con sẽ thấy được sự tiến
                        bộ và phát triển, đó là cam kết mà chúng tôi mang đến
                        cho bạn.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 75 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={controls1}
                    transition={{ duration: 0.5, delay: 0.35 }}
                    className="flex"
                  >
                    <div>
                      <p className="font-bromega-light text-justify">
                        Đúng như tên gọi: TYF - nghĩa là Take care of Your
                        Future, chúng ta cùng xây dựng tương lai cho con trẻ.
                        Gia sư của TYF Company sẽ luôn đồng hành cùng con, giúp
                        con nâng cao kiến thức, kỹ năng học tập và rèn luyện
                        tính tự học mỗi ngày. Chúng tôi không chỉ quan tâm đến
                        việc học, mà còn chú trọng đến sự phát triển toàn diện
                        của trẻ, bao gồm cả việc chăm sóc và hỗ trợ trong mọi
                        khía cạnh của cuộc sống.
                      </p>
                    </div>
                  </motion.div>
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 75 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={controls1}
                    transition={{ duration: 0.5, delay: 0.55 }}
                    className="flex"
                  >
                    <div>
                      <p className="font-bromega-light text-justify">
                        TYF luôn tâm niệm rằng sự thành công và phát triển toàn
                        diện của thế hệ trẻ chính là sứ mệnh quan trọng nhất.
                        Chúng tôi không ngừng đổi mới và sáng tạo để mang đến
                        những dịch vụ gia sư và trông trẻ hiệu quả nhất. Với
                        nhiều năm kinh nghiệm trong lĩnh vực tư vấn giáo dục và
                        chăm sóc trẻ em, cùng với đội ngũ gia sư trẻ trung,
                        nhiệt huyết, TYF tin rằng sẽ mang lại những giá trị tốt
                        đẹp nhất cho con trẻ trên con đường học tập và phát
                        triển.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
              <div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: 75 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  initial="hidden"
                  animate={controls1}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  aria-hidden="true"
                  className="mt-10 lg:mt-0"
                >
                  <img
                    src={image1}
                    alt="image1"
                    className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                  />
                </motion.div>
              </div>
            </div>

            <div className="grid lg:gap-20 lg:grid-cols-2 lg:items-center">
              <div className="lg:col-start-2">
                <h3
                  ref={ref2}
                  className="text-2xl font-bromega-bold tracking-tight sm:text-3xl text-customBlue"
                >
                  Gia sư tại Trung tâm TYF
                </h3>
                <hr className="border-t border-customBlue my-4 w-[150px]"></hr>
                <div className="mt-8 space-y-8">
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: -75 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={controls2}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="flex"
                  >
                    <p className="font-bromega-light text-justify">
                      Trung tâm TYF cung cấp dịch vụ gia sư chuyên nghiệp, giúp
                      học sinh cải thiện kiến thức và kỹ năng học tập. Đội ngũ
                      gia sư tại TYF được tuyển chọn kỹ lưỡng, có trình độ
                      chuyên môn cao và giàu kinh nghiệm. Họ luôn tận tâm và
                      linh hoạt trong phương pháp giảng dạy, nhằm đáp ứng nhu
                      cầu học tập đa dạng của từng học sinh.
                    </p>
                  </motion.div>
                </div>
              </div>
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -75 },
                  visible: { opacity: 1, x: 0 },
                }}
                initial="hidden"
                animate={controls2}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1"
              >
                <img
                  src={image2}
                  alt="image2"
                  className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                />
              </motion.div>
            </div>

            <div className="grid lg:gap-20 lg:grid-cols-2 lg:items-center">
              <div>
                <h3
                  ref={ref3}
                  className="text-2xl font-bromega-bold tracking-tight sm:text-3xl text-customBlue"
                >
                  Trông trẻ
                </h3>
                <hr className="border-t border-customBlue my-4 w-[70px]"></hr>
                <div className="mt-8 space-y-8">
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 75 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate={controls3}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="flex"
                  >
                    <div>
                      <p className="font-bromega-light text-justify">
                        Trung tâm TYF cung cấp dịch vụ trông trẻ an toàn và tận
                        tâm. Đội ngũ nhân viên trông trẻ tại TYF được đào tạo
                        chuyên nghiệp, yêu trẻ và có kỹ năng chăm sóc tốt. Họ
                        đảm bảo môi trường vui chơi và học tập lành mạnh cho
                        trẻ, giúp phụ huynh hoàn toàn yên tâm khi giao con cho
                        trung tâm.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
              <div>
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: 75 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  initial="hidden"
                  animate={controls3}
                  transition={{ duration: 0.5, delay: 0.25 }}
                  aria-hidden="true"
                  className="mt-10 lg:mt-0"
                >
                  <img
                    src={image3}
                    alt="image3"
                    className="taos:translate-x-[200px] taos:opacity-0 hover:-translate-y-2 transition ease-in-out duration-300 hover:drop-shadow-xl mx-auto rounded-lg shadow-lg dark:bg-gray-500"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="flex justify-end ml-[30%] w-[70%] h-[2px] bg-gradient-to-r from-blue-200 to-blue-500"></div>
    </>
  );
};

export default Features;
