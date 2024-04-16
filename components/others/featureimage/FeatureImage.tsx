import Image from "next/image";
import profileImage from "@assets/images/demo/peofile-image.png"

type Props = { bigHeading?: boolean };

const FeatureImage = ({ bigHeading = true }: Props) => {
    return (
        <div className="relative w-full h-full aspect-video" style={{ backgroundImage: `url("/demo/news-image.png")`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="review-overlay absolute w-full h-[70%] bottom-0 left-0"></div>
            <div className="absolute top-3 right-3">
                <div className="single-chart relative md:w-[70px] md:h-[70px] w-[56px] h-[56px] ">
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
                    <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-white md:text-[30px] text-[24px]">75</p>
                </div>
            </div>
            <div className={`absolute bottom-0 left-0 w-full  ${bigHeading ? "lg:p-[30px]" : ""}  p-4`}>
                <h5 className={`text-[#FF0049] ${bigHeading ? "lg:mb-[10px]" : ""} mb-2 text-sm font-semibold leading-[1]`}>GTA IV</h5>
                {/* <div className={`flex ${bigHeading ? "lg:mb-[10px]" : ""} mb-2`}>
                    <Image className="mr-[10px]" src={profileImage} alt="profile-img" width={18} height={18} />
                    <p className="text-white text-sm font-semibold mr-5" >Critic Name</p>
                    <p className="text-white text-sm font-normal" >Nov 10, 2023</p>
                </div> */}
                {bigHeading ?
                    <h3 className="lg:text-4xl text-18 text-white leading-[1.12]">Breaking: Grand Theft Auto VI Will Release In 2025</h3>
                    :
                    <h4 className="text-18 text-white leading-[1.12]" >New board game is coming — The Witcher: Path of Destiny!</h4>
                }

            </div>
        </div>
    )
};

export default FeatureImage;
