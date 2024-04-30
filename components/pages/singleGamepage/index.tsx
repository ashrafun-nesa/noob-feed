import CustomLink from "@/components/others/Link";
import Image from "next/image";
import GameInfo from "../../../assets/images/game-info.png";
import GoogleAds from "@/components/others/googleAds";

const SingleGamePage = () => {
    return (
        <div className="container_section">
            <div className="flex lg:flex-row flex-col gap-10">
                <div className="lg:w-2/3 w-full">
                    <div className="flex lg:flex-row flex-col gap-5 lg:p-6 px-2 py-4 border-[1px] border-[#CBCBCB] rounded-[5px]">
                        <h1 className="xl:text-[44px] leading-[1.23] text-3xl font-semibold mb-5 lg:hidden">Like a Dragon Gaiden: The Man Who Erased His Name </h1>
                        <Image className="mx-auto" width={254} height={344} src={GameInfo} alt="info-image" />
                        <div>
                            <h1 className="xl:text-[44px] leading-[1.23] text-3xl font-semibold mb-5 lg:block hidden">Like a Dragon Gaiden: The Man Who Erased His Name </h1>
                            <p className="mb-4 flex flex-wrap leading-[1]">
                                <span className="font-semibold tracking-wider">
                                    {" "}
                                    Available On:&nbsp;
                                </span>{" "}
                                <CustomLink href="#" className="link text-brand-tertiary link-hover " >
                                    Xbox One
                                </CustomLink>
                            </p>
                            <p className="mb-4 flex flex-wrap leading-[1]">
                                <span className="font-semibold tracking-wider">
                                    {" "}
                                    Publisher(s):&nbsp;
                                </span>{" "}
                                <CustomLink href="#" className="link text-brand-tertiary link-hover " >
                                    Xbox One
                                </CustomLink>
                            </p>
                            <p className="mb-4 flex flex-wrap leading-[1]">
                                <span className="font-semibold tracking-wider">
                                    {" "}
                                    Developer(s):&nbsp;
                                </span>{" "}
                                <CustomLink href="#" className="link text-brand-tertiary link-hover " >
                                    Xbox One
                                </CustomLink>
                            </p>
                            <p className="mb-4 flex flex-wrap leading-[1]">
                                <span className="font-semibold tracking-wider">
                                    {" "}
                                    Genres:&nbsp;
                                </span>{" "}
                                <CustomLink href="#" className="link text-brand-tertiary link-hover " >
                                    Xbox One
                                </CustomLink>
                            </p>
                            <p className="mb-4 flex flex-wrap leading-[1]">
                                <span className="font-semibold tracking-wider">
                                    {" "}
                                    Themes:&nbsp;
                                </span>{" "}
                                <CustomLink href="#" className="link text-brand-tertiary link-hover " >
                                    Xbox One
                                </CustomLink>
                            </p>
                            <p className="mb-4 flex flex-wrap leading-[1]">
                                <span className="font-semibold tracking-wider">
                                    {" "}
                                    Release Date:&nbsp;
                                </span>{" "}
                                2013-06-14
                            </p>
                        </div>
                    </div>
                </div>
                <div className=" lg:w-1/3 w-full">
                    <div className="lg:p-6 px-2 py-4 border-[1px] border-[#CBCBCB] rounded-[5px]">
                        <div className="flex items-center justify-between mb-9">
                            <h2 className="lg:text-3xl text-[22px] leading-[1.45] font-semibold">NoobFeed Rating</h2>
                            <div className="relative">
                                <div className="verdict-circular-percentage md:w-[58px] md:h-[58px] h-[56px] w-[56px] bg-white rounded-full">
                                    <svg viewBox="0 0 36 36" className="circular-chart">
                                        <path className="circle-bg"
                                            d="M18 2.0845
                                            a 15.9155 15.9155 0 0 1 0 31.831
                                            a 15.9155 15.9155 0 0 1 0 -31.831"
                                        />
                                        <path className="circle"
                                            stroke-dasharray="75, 100"
                                            d="M18 2.0845
                                            a 15.9155 15.9155 0 0 1 0 31.831
                                            a 15.9155 15.9155 0 0 1 0 -31.831"
                                        />
                                    </svg>
                                    <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-white md:text-[24px] text-[22px]">75</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between mb-[9px]">
                                <h3 className="lg:text-[24px] text-[22px] font-semibold">User Rating</h3>
                                <p className="font-semibold md:text-[24px] text-[22px]">75</p>
                            </div>
                            <div className="w-full h-2 bg-[#D9D9D9] rounded-[7px] mb-[9px]">
                                <div className="w-[75%] h-full bg-gradient-to-r from-[#2669B1] via-[#28529D] to-[#2A3E8C] rounded-[7px]"></div>
                            </div>
                            <span className="text-sm text-[#686868]">Based on 20 User ratings</span>
                        </div>
                        <div className="flex items-center justify-between ">
                            <h3 className="lg:text-[24px] text-[22px] font-semibold">Your Rating</h3>
                            <p className="font-semibold md:text-[24px] text-[22px]">0</p>
                        </div>
                        <div className="mb-[4px]">
                            <input id="steps-range" type="range" min="0" max="5" step="1" className="slider w-full h-2 rounded-lg appearance-none cursor-pointer bg-[#D9D9D9]" />
                        </div>
                        <span className="text-sm text-[#686868]">Click and drag to submit a rating</span>
                        <button className="mt-9 rounded-[5px] w-full p-4 text-[18px] text-white font-semibold bg-gradient-to-r from-[#2669B1] to-[#2A3E8C] ">Submit Rating</button>
                    </div>
                </div>

            </div>
            <div className="flex lg:flex-row flex-col gap-10 mt-8">
                <div className="lg:w-2/3 w-full">
                    <div className="lg:px-4 lg:py-6 flex lg:flex-row flex-col items-center gap-5">
                        <div className="lg:w-[40%] w-full">
                            <div className="relative min-w-[200px] min-h-[157px] max-w-[355px] max-h-[201px] w-full h-full bg-[#E4E4E4]">
                                <div className="absolute top-3 right-3">
                                    <div className="single-chart relative w-[56px] h-[56px] ">
                                        <svg viewBox="0 0 36 36" className="circular-chart">
                                            <path className="circle-bg"
                                                d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            />
                                            <path className="circle"
                                                stroke-dasharray="75, 100"
                                                d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            />
                                        </svg>
                                        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-white text-[24px]">75</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="relative lg:w-[60%] w-full">
                            <h2 className="lg:text-3xl text-[22px] leading-[1.45] font-semibold mb-[10px]">Like a Dragon Gaiden Review <span className="text-[#DE0006] text-sm font-semibold">PC</span></h2>
                            <p className="text-sm font-semibold mb-[10px]">Mattis malesuada etiam feugiat vestibulum, dignissim aenean mus lectus cubilia sed platea, id parturient morbi blandit habitasse pellentesque.</p>
                            <p className="text-sm feature-section mb-[10px]"><span className="font-semibold review">Review</span> by <span className="font-semibold">Maridead</span> on Nov 10, 2023</p>
                            <p className="text-sm">At ligula blandit aliquet aliquam hac torquent mauris integer cursus tempus consequat, euismod luctus rhoncus nostra dui mi ut velit risus tortor dignissim, libero purus fringilla orci dictumst duis nulla...</p>
                        </div>
                    </div>
                </div>
                <div className=" lg:w-1/3 w-full">
                    <GoogleAds />
                    <h3 className="text-[#264FA0] xl:text-3xl text-2xl font-semibold mb-7 mt-8">Related Games</h3>
                    <div className="flex flex-wrap gap-x-5 gap-y-8">
                        <div className="md:w-[46%] w-full">
                            <div className="relative">
                                <Image className="w-full h-full" src={GameInfo} alt="info-image" />
                                <div className="absolute top-3 right-3">
                                    <div className="single-chart relative w-[56px] h-[56px] ">
                                        <svg viewBox="0 0 36 36" className="circular-chart">
                                            <path className="circle-bg"
                                                d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            />
                                            <path className="circle"
                                                stroke-dasharray="75, 100"
                                                d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            />
                                        </svg>
                                        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-white text-[24px]">75</p>
                                    </div>
                                </div>
                            </div>
                            <h5 className="text-[18px] font-semibold mb-[10px]">Dark Souls Remastered PC</h5>
                            <p className="text-sm">Nov 10, 2023</p>
                        </div>
                        <div className="md:w-[46%] w-full">
                            <div className="relative">
                                <Image className="w-full h-full" src={GameInfo} alt="info-image" />
                                <div className="absolute top-3 right-3">
                                    <div className="single-chart relative w-[56px] h-[56px] ">
                                        <svg viewBox="0 0 36 36" className="circular-chart">
                                            <path className="circle-bg"
                                                d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            />
                                            <path className="circle"
                                                stroke-dasharray="75, 100"
                                                d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            />
                                        </svg>
                                        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-white text-[24px]">75</p>
                                    </div>
                                </div>
                            </div>
                            <h5 className="text-[18px] font-semibold mb-[10px]">Dark Souls Remastered PC</h5>
                            <p className="text-sm">Nov 10, 2023</p>
                        </div>
                        <div className="md:w-[46%] w-full">
                            <div className="relative">
                                <Image className="w-full h-full" src={GameInfo} alt="info-image" />
                                <div className="absolute top-3 right-3">
                                    <div className="single-chart relative w-[56px] h-[56px] ">
                                        <svg viewBox="0 0 36 36" className="circular-chart">
                                            <path className="circle-bg"
                                                d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            />
                                            <path className="circle"
                                                stroke-dasharray="75, 100"
                                                d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            />
                                        </svg>
                                        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-white text-[24px]">75</p>
                                    </div>
                                </div>
                            </div>
                            <h5 className="text-[18px] font-semibold mb-[10px]">Dark Souls Remastered PC</h5>
                            <p className="text-sm">Nov 10, 2023</p>
                        </div>
                        <div className="md:w-[46%] w-full">
                            <div className="relative">
                                <Image className="w-full h-full" src={GameInfo} alt="info-image" />
                                <div className="absolute top-3 right-3">
                                    <div className="single-chart relative w-[56px] h-[56px] ">
                                        <svg viewBox="0 0 36 36" className="circular-chart">
                                            <path className="circle-bg"
                                                d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            />
                                            <path className="circle"
                                                stroke-dasharray="75, 100"
                                                d="M18 2.0845
                                                a 15.9155 15.9155 0 0 1 0 31.831
                                                a 15.9155 15.9155 0 0 1 0 -31.831"
                                            />
                                        </svg>
                                        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-white text-[24px]">75</p>
                                    </div>
                                </div>
                            </div>
                            <h5 className="text-[18px] font-semibold mb-[10px]">Dark Souls Remastered PC</h5>
                            <p className="text-sm">Nov 10, 2023</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default SingleGamePage;
