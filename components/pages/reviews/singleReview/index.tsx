import Image from "next/image";
import InnerImage from "../../../../assets/images/inner-page.png";
import GameInfo from "../../../../assets/images/game-info.png";
import StarRating from "../../../../assets/images/star-rating.png";
import GoogleAds from "@/components/others/googleAds";
import LinkItems from "@/components/others/Link/LinkList";
import CustomLink from "@/components/others/Link";
import ChatIcon from "@/assets/icons/ChatIcon";
import FlagIcon from "@/assets/icons/FlagIcon";

const SingleReview = () => {
  return (
    <div className="container_section">
      <div className="flex lg:flex-row flex-col gap-10">
        <div className="lg:w-2/3 w-full">
          <h1 className="text-[#264FA0] lg:text-[44px] text-[30px] leading-[1.33] font-semibold mb-2">Avatar: Frontiers of Pandora PlayStation 5 Review: A Euphoric Depiction Of A Modern Classic</h1>
          <p className="text-[#DE0006] text-sm font-semibold mb-4">PlayStation 5</p>
          <h3 className="lg:text-[28px] text-[20px] font-normal leading-[1.29] mb-4">Here&apos;s how to evolve Duraludon into Archaludon in The Indigo Disk DLC.</h3>
          <p className="text-base pb-4 mb-4 border-b-[1px] border-[#E8E8E8]"><span className="text-[#DE0006]">Reviewed</span> by <span className="text-[#DE0006]">Critic Name</span> on November 10,2023 </p>
          <p className="text-[18px] mb-8 leading-[1.56]">The latest week of Destiny 2&apos;s Season of the Wish brings a new Exotic weapon into the game for players to chase: Wish-Keeper, a new Exotic bow. This one is similar to past seasonal Exotics, like Vexcalibur and Retrofit Zero, in that you&apos;ll earn the opportunities to craft different versions over time as you replay its Exotic mission, Starcrossed.</p>
          <Image className="mb-8" src={InnerImage} alt="" />
          <p className="text-[18px] mb-8 leading-[1.56]">At the end of the hallway, you&apos;ll find another orange well, but you don&apos;t need to worry about it from this side. Jump across the gap to the platforms on the far side and you&apos;ll find a room with a round entranceway and a rotating door. This spot provides pretty good cover to kill the enemies inside, giving you an easier time of taking down the third and final Wyvern. When you hit the third switch, all the Unwelcome mist will disappear. From the switch, head out through the hole on the right side of the room, beside the round entrance you came in through, to return to the first arena.</p>
          <p className="text-[18px] mb-8 leading-[1.56]">The Vex portal you first passed as you came in is now unlocked, but is guarded by several strong foes. You&apos;ll see an Elite enemy called a Malignant Wyvern, and a giant Gate Lord-like Minotaur called Ixion, Covetous Mind. Both are tough, but especially with Dragon&apos;s Breath, you should be able to hang well back in cover and hit them for major damage from far away, making this fight pretty simple. Clear out all the enemies to open the gate and progress.</p>
          <p className="text-[18px] mb-8 leading-[1.56]">The gate will take you into a minor jumping puzzle, where you&apos;ll need to make your way across some large gaps to small ledges. It&apos;s not especially difficult to cross, though. You&apos;ll exit into an open area with some enemies. Make your way along the path to the right and follow it through the Vex structure. You&apos;ll hit a large gap that you can&apos;t cross, but you can follow the ledges to the right along the cliff walls until you reach a cave full of Taken. Clear them out, and then a handful of Vex just beyond them, to enter another arena called the Roost.</p>
          <p className="text-[18px] leading-[1.56]">Here&apos;s where the mission combines everything you&apos;ve previously had to do into a new mechanic. Taken enemies will spawn in this room including an Obdurate Phalanx with an icon, and you&apos;ll find an orange well for the Dam&apos;s Gift buff here. You&apos;re working to open another blue barrier, which is just ahead and down a short flight of stairs. Just in front of the barrier is the blue well for the Sire&apos;s Obligation buff. As before, the barrier has three icons, indicating that you have to kill three Obdurate Phalanxes to open it, and to do so in order.</p>
          <p className="text-[18px] mb-8 leading-[1.56]">The other two Phalanxes are in caves that connect to this central location. One is to the left of the barrier and the other is to the right of the orange well. Icons can be found at the opening of the caves to tell you which Phalanx is inside.</p>
          <p className="text-[18px] leading-[1.56] mb-6">So to advance through this encounter, you need both the Dam&apos;s Gift buff and the Sire&apos;s Obligation buff. When you pick up both, they combine into a new buff called Crowned by Dragons. The good news is that Crowned by Dragons will protect you from orange Unwelcome mist and let you kill Obdurate Phalanxes. As before, though, you need to continually reclaim the buff to keep the timer from running out. If the buff timer expires, the barrier lock will reset and you&apos;ll need to start over. However, touching either the blue or the orange well will restore the Crowned by Dragons timer. Once you have both buffs, either well will refresh it, so you no longer have to worry about touching both.</p>
          <p className="text-base mb-1"><span className="text-[#DE0006]">Critic Name</span> </p>
          <p className="text-base pb-4 mb-4 border-b-[1px] border-[#E8E8E8]">Editor, NoobFeed</p>
          <div className="lg:mt-16 lg:mb-16 my-9">
            <div className="bg-gradient-to-r from-[#2669B1] to-[#2A3E8C] pb-[22px] md:pt-[22px] pt-[127px] md:mt-0 mt-[120px] px-5 text-white relative rounded-[5px] md:w-[95%]">
              <h3 className="lg:text-[28px] font-semibold leading-[1.29] mb-[10px]">Verdict</h3>
              <Image src={StarRating} alt="" />
              <p className="xl:text-[18px] text-base leading-[1.56] md:w-[70%] w-full mt-[10px]">Consectetur adipiscing elit conubia quisque, per est nascetur diam sed leo nisi hendrerit volutpat, sagittis turpis cubilia eget ad vivas eleifend tempus. Habitasse torquent justo cursus potenti iaculis primis.</p>
              <div className="verdict-circular-percentage absolute lg:-right-20 md:-right-[85px] md:-translate-x-0 right-1/2 translate-x-1/2 md:top-1/2 -top-24 md:-translate-y-1/2 md:w-[263px] md:h-[263px] sm:h-[239px] h-[220px] sm:w-[239px] w-[220px] md:p-[27px] p-[17px] bg-white rounded-full">
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
                <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold text-white md:text-[89px] text-[70px]">75</p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-3 lg:mb-10 mb-7 ">
              <ChatIcon />
              <h5 className="lg:text-[30px] text-[24px] font-semibold">3 Comments</h5>
            </div>
            <div className="comment-wrapper flex lg:gap-5 gap-3">
              <div className="profile-pic lg:w-[49px] lg:h-[49px] w-[30px] h-[30px] rounded-full bg-[#E4E4E4]"></div>
              <div className="comment-section">
                <div className="lg:p-5 p-4 pt-4 bg-white border-[1px] border-[#E1E9F1] rounded-[5px] relative">
                  <div className="text-[#262626] flex items-center justify-between mb-2">
                    <p className="lg:text-[18px] text-[16px] font-semibold">Critic Name</p>
                    <p className="lg:text-[16px] text-[14px]">1 day ago</p>
                  </div>
                  <p className="lg:text-[16px] text-[14px] leading-[1.8] w-[99%]">Consectetur adipiscing elit conubia quisque, per est nascetur diam sed leo nisi hendrerit volutpat, sagittis turpis cubilia eget ad vivamus eleifend tempus. Habitasse torquent justo cursus potenti iaculis primis nisi sociis commodo.</p>
                  <span className="absolute right-3 bottom-[14px]"><FlagIcon /></span>
                </div>
                <span className="pl-5 mt-[10px] inline-block lg:text-[18px] text-[16px] font-semibold cursor-pointer">Reply</span>
              </div>
            </div>
            <div className="comment-wrapper flex lg:gap-5 gap-3">
              <div className="lg:w-[49px] lg:h-[49px] w-[30px] h-[30px]">
              </div>
              <div className="comment-section flex lg:gap-5 gap-3">
                <div className="profile-pic lg:w-[39px] lg:h-[39px] w-[25px] h-[25px] rounded-full bg-[#E4E4E4]"></div>
                <div className="reply-section">
                  <div className="lg:p-5 p-4 pt-4 bg-white border-[1px] border-[#E1E9F1] rounded-[5px] relative">
                    <div className="text-[#262626] flex items-center justify-between mb-2">
                      <p className="lg:text-[18px] text-[16px] font-semibold">Critic Name</p>
                      <p className="lg:text-[16px] text-[14px]">1 day ago</p>
                    </div>
                    <p className="lg:text-[16px] text-[14px] leading-[1.8] w-[99%]">Consectetur adipiscing elit conubia quisque, per est nascetur diam sed leo nisi hendrerit volutpat, sagittis turpis cubilia eget ad vivamus eleifend tempus. Habitasse torquent justo cursus potenti iaculis primis nisi sociis commodo.</p>
                    <span className="absolute right-3 bottom-[14px]"><FlagIcon /></span>
                  </div>
                  <span className="pl-5 mt-[10px] inline-block lg:text-[18px] text-[16px] font-semibold cursor-pointer">Reply</span>

                </div>
              </div>
            </div>
            <div className="comment-wrapper flex lg:gap-5 gap-3">
              <div className="profile-pic lg:w-[49px] lg:h-[49px] w-[30px] h-[30px] rounded-full bg-[#E4E4E4]"></div>
              <div className="comment-section">
                <textarea className="lg:text-[16px] text-[14px] w-full mb-5 lg:p-5 p-4 pt-4 bg-white border-[1px] border-[#E1E9F1] rounded-[5px] relative outline-none" rows={3} placeholder=" Start the discussion...">
                </textarea>
                <div className="flex justify-end">
                  <button className="bg-gradient-to-r from-[#2669B1] to-[#2A3E8C] lg:py-4 lg:px-8 px-6 py-3 text-white font-semibold lg:text-[18px] text-[16px} rounded-[5px]">Comment</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:w-1/3 w-full">
          <div className="lg:py-6 flex flex-col lg:items-start items-center">
            <GoogleAds />
            <h3 className="text-[#264FA0] xl:text-3xl text-2xl font-semibold mb-4 mt-10">Game Information</h3>
            <div className="box-shadow md:p-5 p-4 pb-7 ">
              <div className="relative">
                <Image width={356} height={485} src={GameInfo} alt="info-image" />
                <div className="absolute top-3 right-3">
                  <div className="single-chart relative md:w-[80px] md:h-[80px] w-[56px] h-[56px]">
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
                <h3 className="xl:text-3xl text-2xl font-semibold max-w-[300px] pt-[10px] mb-5">Avatar: Frontiers of Pandora</h3>
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

        </div>
      </div>
    </div >
  );
};

export default SingleReview;
