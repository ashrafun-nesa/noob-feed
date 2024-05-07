import FollowIcon from "@/assets/icons/FollowIcon";
import MessageIcon from "@/assets/icons/MessageIcon";
import EpicIcon from "@/assets/icons/demo/EpicIcon";
import NintendoIcon from "@/assets/icons/demo/NintendoIcon";
import PlaystationIcon from "@/assets/icons/demo/PlaystationIcon";
import SteamIcon from "@/assets/icons/demo/SteamIcon";
import XboxIcon from "@/assets/icons/demo/XboxIcon";
import CustomLink from "@/components/others/Link";

const Profile = () => {
  return (
    <div className="container_section">
      <div className="flex lg:flex-row flex-col gap-10">
        <div className="lg:w-2/3 w-full mb-10">
          <div className="flex lg:flex-row flex-col lg:gap-12 gap-6 items-center">
            <div className="lg:w-[235px] lg:h-[235px] w-[185px] h-[185px] rounded-full bg-[#080B1A]"></div>
            <div>
              <h1 className="lg:text-[44px] text-[30px] font-semibold mb-4 lg:text-left text-center">Zebra_Thunder</h1>
              <div className="font-semibold text-[18px] flex items-center lg:justify-start justify-center gap-6 mb-4">
                <p>56 Following</p>
                <p>1,896 Followers</p>
              </div>
              <div className="flex items-center gap-5">
                <button className="bg-gradient-to-r from-[#2669B1] to-[#2A3E8C] lg:py-4 lg:px-8 px-4 py-3 text-white font-semibold lg:text-[18px] text-[16px} rounded-[5px] tracking-wider flex items-center gap-3 leading-[1]"><FollowIcon /> Follow</button>
                <div className="p-[2px] bg-gradient-to-r from-[#2669B1] to-[#2A3E8C] rounded-[5px]">
                  <button className=" lg:py-[14px] lg:px-8 px-4 py-[10px] bg-white text-[#006DC0] font-semibold lg:text-[18px] text-[16px} rounded-[5px] tracking-wider flex items-center gap-3 leading-[1]"><MessageIcon /> Message</button>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-list flex flex-wrap lg:justify-start justify-center ">
            <span className="tab-item ">About</span>
            <span className="tab-item">Overview</span>
            <span className="tab-item active">Activities</span>
            <span className="tab-item ">Following</span>
            <span className="tab-item">Report User</span>
          </div>
        </div>
        <div className=" lg:w-1/3 w-full">
          <h3 className="text-[#264FA0] xl:text-3xl text-2xl font-semibold mb-4">Achievements</h3>
          <div className="flex flex-wrap lg:gap-2 gap-[7px] mb-10">
            <div className="lg:w-[59px] lg:h-[59px] w-[52px] h-[52px] bg-[#EBEBEB]"></div>
            <div className="lg:w-[59px] lg:h-[59px] w-[52px] h-[52px] bg-[#EBEBEB]"></div>
            <div className="lg:w-[59px] lg:h-[59px] w-[52px] h-[52px] bg-[#EBEBEB]"></div>
            <div className="lg:w-[59px] lg:h-[59px] w-[52px] h-[52px] bg-[#EBEBEB]"></div>
            <div className="lg:w-[59px] lg:h-[59px] w-[52px] h-[52px] bg-[#EBEBEB]"></div>
            <div className="lg:w-[59px] lg:h-[59px] w-[52px] h-[52px] bg-[#EBEBEB]"></div>
            <div className="lg:w-[59px] lg:h-[59px] w-[52px] h-[52px] bg-[#EBEBEB]"></div>
            <div className="lg:w-[59px] lg:h-[59px] w-[52px] h-[52px] bg-[#EBEBEB]"></div>
            <div className="lg:w-[59px] lg:h-[59px] w-[52px] h-[52px] bg-[#EBEBEB]"></div>
            <div className="lg:w-[59px] lg:h-[59px] w-[52px] h-[52px] bg-[#EBEBEB]"></div>
            <div className="lg:w-[59px] lg:h-[59px] w-[52px] h-[52px] bg-[#EBEBEB]"></div>
            <div className="lg:w-[59px] lg:h-[59px] w-[52px] h-[52px] bg-[#EBEBEB]"></div>
            <div className="lg:w-[59px] lg:h-[59px] w-[52px] h-[52px] bg-[#EBEBEB]"></div>
            <div className="lg:w-[59px] lg:h-[59px] w-[52px] h-[52px] bg-[#EBEBEB]"></div>
            <div className="lg:w-[59px] lg:h-[59px] w-[52px] h-[52px] bg-[#EBEBEB]"></div>
            <div className="lg:w-[59px] lg:h-[59px] w-[52px] h-[52px] bg-[#EBEBEB]"></div>
            <div className="lg:w-[59px] lg:h-[59px] w-[52px] h-[52px] bg-[#EBEBEB]"></div>
            <div className="lg:w-[59px] lg:h-[59px] w-[52px] h-[52px] bg-[#EBEBEB] flex items-center justify-center text-2xl">+4</div>
          </div>
          <div>
            <p className="mb-4 flex flex-wrap leading-[1]">
              <span className="font-semibold tracking-wider flex items-center gap-[10px]">
                <PlaystationIcon />
                {" "}
                Playstation:&nbsp;
              </span>{" "}
              PlayStation _ID
            </p>
            <p className="mb-4 flex flex-wrap leading-[1]">
              <span className="font-semibold tracking-wider flex items-center gap-[10px]">
                <XboxIcon />
                {" "}
                Xbox:&nbsp;
              </span>{" "}
              Xbox _ID
            </p>
            <p className="mb-4 flex flex-wrap leading-[1]">
              <span className="font-semibold tracking-wider flex items-center gap-[10px]">
                <NintendoIcon />
                {" "}
                Nintendo Switch:&nbsp;
              </span>{" "}
              Switch _ID
            </p>
            <p className="mb-4 flex flex-wrap leading-[1]">
              <span className="font-semibold tracking-wider flex items-center gap-[10px]">
                <SteamIcon />
                {" "}
                Steam:&nbsp;
              </span>{" "}
              Steam _ID
            </p>
            <p className="mb-4 flex flex-wrap leading-[1]">
              <span className="font-semibold tracking-wider flex items-center gap-[10px]">
                <EpicIcon />
                {" "}
                Epic:&nbsp;
              </span>{" "}
              Epic  _ID
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
