import Image from "next/image";
import profileImage from "@assets/images/demo/peofile-image.png"

type Props = { bigHeading?: boolean, type?: String };

const FeatureImage = ({ bigHeading = true, type }: Props) => {
    return (
        <div className="relative w-full h-full aspect-video" style={{ backgroundImage: `url("/demo/news-image.png")`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}>
            <div className="review-overlay absolute w-full h-[85%] bottom-0 left-0"></div>
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
                <div className={`game-info flex gap-5 items-center mb-1`}>
                    <p className={`text-[#DE0006] text-sm font-semibold  `}>Games name</p>
                    <p className={`text-[#007B08] text-sm font-semibold leading-[1] ${type} capitalize`} >{type}</p>
                    <p className="text-white text-sm font-normal leading-[1]" >Nov 10, 2023</p>
                </div>
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
