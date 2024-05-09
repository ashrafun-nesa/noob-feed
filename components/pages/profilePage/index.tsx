
import CrossIcon from "@/assets/icons/CrossIcon";
import EditCamera from "@/assets/icons/EditCamera";
import FollowIcon from "@/assets/icons/FollowIcon";
import LinkIcon from "@/assets/icons/LinkIcon";
import MessageIcon from "@/assets/icons/MessageIcon";
import TwitchIcon from "@/assets/icons/TwitchIcon";
import Youtube from "@/assets/icons/Youtube";
import YoutubeIcon from "@/assets/icons/YoutubeIcon";
import EpicIcon from "@/assets/icons/demo/EpicIcon";
import NintendoIcon from "@/assets/icons/demo/NintendoIcon";
import PlaystationIcon from "@/assets/icons/demo/PlaystationIcon";
import SteamIcon from "@/assets/icons/demo/SteamIcon";
import XboxIcon from "@/assets/icons/demo/XboxIcon";
import CustomLink from "@/components/others/Link";
import Twitter from "@/assets/icons/Twitter";

const Profile = () => {
  return (
    // <div className="container_section">
    //   <div className="flex lg:flex-row flex-col gap-10">
    //     <div className="lg:w-2/3 w-full mb-10">
    //       <div className="flex lg:flex-row flex-col lg:gap-12 gap-6 items-center">
    //         <div className="lg:w-[235px] lg:h-[235px] w-[185px] h-[185px] rounded-full bg-[#080B1A]"></div>
    //         <div>
    //           <h1 className="lg:text-[44px] text-[30px] font-semibold mb-4 lg:text-left text-center">Zebra_Thunder</h1>
    //           <div className="font-semibold text-[18px] flex items-center lg:justify-start justify-center gap-6 mb-4">
    //             <p>56 Following</p>
    //             <p>1,896 Followers</p>
    //           </div>
    //           <div className="flex items-center gap-5">
    //             <button className="bg-gradient-to-r from-[#2669B1] to-[#2A3E8C] lg:py-4 lg:px-8 px-4 py-3 text-white font-semibold lg:text-[18px] text-[16px} rounded-[5px] tracking-wider flex items-center gap-3 leading-[1]"><FollowIcon /> Follow</button>
    //             <div className="p-[2px] bg-gradient-to-r from-[#2669B1] to-[#2A3E8C] rounded-[5px]">
    //               <button className=" lg:py-[14px] lg:px-8 px-4 py-[10px] bg-white text-[#006DC0] font-semibold lg:text-[18px] text-[16px} rounded-[5px] tracking-wider flex items-center gap-3 leading-[1]"><MessageIcon /> Message</button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="tab-list flex flex-wrap lg:justify-start justify-center mb-5">
    //         <span className="tab-item ">About</span>
    //         <span className="tab-item active">Overview</span>
    //         <span className="tab-item ">Activities</span>
    //         <span className="tab-item ">Following</span>
    //         <span className="tab-item">Report User</span>
    //       </div>

    //       {/* for about tab */}
    //       {/* <div>
    //         <p className="text-base mb-6">Primis ullamcorper dapibus purus sem phasellus augue ultrices penatibus, conubia gravida parturient libero montes erat. Non inceptos iaculis feugiat vitae suscipit viverra justo curae lectus duis vulputate viverra ad dignissim risus molli.</p>
    //         <div>
    //           <p className="mb-4 flex flex-wrap leading-[1]">
    //             <span className="font-semibold tracking-wider flex items-center gap-[10px]">
    //               Name:&nbsp;
    //             </span>{" "}
    //             Andreas Palmer
    //           </p>
    //           <p className="mb-4 flex flex-wrap leading-[1]">
    //             <span className="font-semibold tracking-wider flex items-center gap-[10px]">
    //               DOB:&nbsp;
    //             </span>{" "}
    //             Dec 24, 1998
    //           </p>
    //           <p className="mb-4 flex flex-wrap leading-[1]">
    //             <span className="font-semibold tracking-wider flex items-center gap-[10px]">
    //               Gender:&nbsp;
    //             </span>{" "}
    //             Male
    //           </p>
    //         </div>
    //       </div> */}

    //       {/* for activities tab */}
    //       {/* <div>
    //         <div className="profile-activities">
    //           <span className="text-[#DE0006] text-[14px] mb-[5px]">User_name</span>
    //           <h3 className="text-2xl mb-5 font-semibold">The Best Zelda Dungeons Of All Time</h3>
    //           <p className="text-[#262626] text-[14px]">Class velit penatibus vivamus libero suspendisse gravida diam egestas integer, nec purus dui enim porttitor nulla tellus nostra,</p>
    //         </div>
    //         <div className="profile-activities">
    //           <span className="text-[#DE0006] text-[14px] mb-[5px]">User_name</span>
    //           <h3 className="text-2xl mb-5 font-semibold">The Best Zelda Dungeons Of All Time</h3>
    //           <p className="text-[#262626] text-[14px]">Class velit penatibus vivamus libero suspendisse gravida diam egestas integer, nec purus dui enim porttitor nulla tellus nostra,</p>
    //         </div>
    //         <div className="profile-activities">
    //           <span className="text-[#DE0006] text-[14px] mb-[5px]">User_name</span>
    //           <h3 className="text-2xl mb-5 font-semibold">The Best Zelda Dungeons Of All Time</h3>
    //           <p className="text-[#262626] text-[14px]">Class velit penatibus vivamus libero suspendisse gravida diam egestas integer, nec purus dui enim porttitor nulla tellus nostra,</p>
    //         </div>
    //       </div> */}

    //     </div>
    //     <div className=" lg:w-1/3 w-full">
    //       <h3 className="text-[#264FA0] xl:text-3xl text-2xl font-semibold mb-4">Achievements</h3>
    //       <div className="flex flex-wrap lg:gap-2 gap-[7px] mb-10">
    //         <div className="lg:w-[59px] lg:h-[59px] w-[52px] h-[52px] bg-[#EBEBEB]"></div>
    //         <div className="lg:w-[59px] lg:h-[59px] w-[52px] h-[52px] bg-[#EBEBEB]"></div>
    //         <div className="lg:w-[59px] lg:h-[59px] w-[52px] h-[52px] bg-[#EBEBEB]"></div>
    //         <div className="lg:w-[59px] lg:h-[59px] w-[52px] h-[52px] bg-[#EBEBEB]"></div>
    //         <div className="lg:w-[59px] lg:h-[59px] w-[52px] h-[52px] bg-[#EBEBEB]"></div>
    //         <div className="lg:w-[59px] lg:h-[59px] w-[52px] h-[52px] bg-[#EBEBEB]"></div>
    //         <div className="lg:w-[59px] lg:h-[59px] w-[52px] h-[52px] bg-[#EBEBEB]"></div>
    //         <div className="lg:w-[59px] lg:h-[59px] w-[52px] h-[52px] bg-[#EBEBEB]"></div>
    //         <div className="lg:w-[59px] lg:h-[59px] w-[52px] h-[52px] bg-[#EBEBEB]"></div>
    //         <div className="lg:w-[59px] lg:h-[59px] w-[52px] h-[52px] bg-[#EBEBEB]"></div>
    //         <div className="lg:w-[59px] lg:h-[59px] w-[52px] h-[52px] bg-[#EBEBEB]"></div>
    //         <div className="lg:w-[59px] lg:h-[59px] w-[52px] h-[52px] bg-[#EBEBEB]"></div>
    //         <div className="lg:w-[59px] lg:h-[59px] w-[52px] h-[52px] bg-[#EBEBEB]"></div>
    //         <div className="lg:w-[59px] lg:h-[59px] w-[52px] h-[52px] bg-[#EBEBEB]"></div>
    //         <div className="lg:w-[59px] lg:h-[59px] w-[52px] h-[52px] bg-[#EBEBEB]"></div>
    //         <div className="lg:w-[59px] lg:h-[59px] w-[52px] h-[52px] bg-[#EBEBEB]"></div>
    //         <div className="lg:w-[59px] lg:h-[59px] w-[52px] h-[52px] bg-[#EBEBEB]"></div>
    //         <div className="lg:w-[59px] lg:h-[59px] w-[52px] h-[52px] bg-[#EBEBEB] flex items-center justify-center text-2xl">+4</div>
    //       </div>
    //       <div>
    //         <p className="mb-4 flex flex-wrap leading-[1]">
    //           <span className="font-semibold tracking-wider flex items-center gap-[10px]">
    //             <PlaystationIcon />
    //             {" "}
    //             Playstation:&nbsp;
    //           </span>{" "}
    //           PlayStation _ID
    //         </p>
    //         <p className="mb-4 flex flex-wrap leading-[1]">
    //           <span className="font-semibold tracking-wider flex items-center gap-[10px]">
    //             <XboxIcon />
    //             {" "}
    //             Xbox:&nbsp;
    //           </span>{" "}
    //           Xbox _ID
    //         </p>
    //         <p className="mb-4 flex flex-wrap leading-[1]">
    //           <span className="font-semibold tracking-wider flex items-center gap-[10px]">
    //             <NintendoIcon />
    //             {" "}
    //             Nintendo Switch:&nbsp;
    //           </span>{" "}
    //           Switch _ID
    //         </p>
    //         <p className="mb-4 flex flex-wrap leading-[1]">
    //           <span className="font-semibold tracking-wider flex items-center gap-[10px]">
    //             <SteamIcon />
    //             {" "}
    //             Steam:&nbsp;
    //           </span>{" "}
    //           Steam _ID
    //         </p>
    //         <p className="mb-4 flex flex-wrap leading-[1]">
    //           <span className="font-semibold tracking-wider flex items-center gap-[10px]">
    //             <EpicIcon />
    //             {" "}
    //             Epic:&nbsp;
    //           </span>{" "}
    //           Epic  _ID
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="container_section">
      <div className="lg:w-[80%] md:w-[80%] mx-auto md:mt-8 mt-4">
        <div className="flex justify-center mb-16">
          <div className="lg:w-[235px] lg:h-[235px] md:w-[150px] md:h-[150px] w-[110px] h-[110px] relative">
            <div className="w-full h-full rounded-full bg-[#080B1A]">
              <button className="hover:cursor-pointer edit-camera absolute lg:w-16 lg:h-16 md:w-12 md:h-12 w-10 h-10 flex justify-center items-center bg-[#D6D6D6] rounded-full left-1/2 -translate-x-1/2">
                <EditCamera />
              </button>
            </div>
          </div>
        </div>
        <div
          className={` rounded-md md:px-5 py-6 px-[10px] box-shadow mb-6`}
        >
          <h5 className="md:text-3xl sm:text-2xl text-18 md:mb-7 mb-6 text-[#264FA0] md:px-2">About me</h5>
          <div className="flex flex-wrap">
            <div className="form-wrapper flex flex-col gap-2 mb-5 md:w-1/2 w-full md:px-2">
              <label
                htmlFor="first_name"
                className="text-[18px] font-semibold pl-2"
              >
                First Name
              </label>
              <input
                id="first_name"
                type="text"
                name="first_name"
                className={`input-field w-full px-2 pb-[10px] border-b-[1px] border-[#B4B4B4]text-[18px] outline-none bg-transparent`}
              />
            </div>
            <div className="form-wrapper flex flex-col gap-2 mb-5 md:w-1/2 w-full md:px-2">
              <label
                htmlFor="last_name"
                className="text-[18px] font-semibold pl-2"
              >
                Last Name
              </label>
              <input
                id="last_name"
                type="text"
                name="last_name"
                className={`input-field w-full px-2 pb-[10px] border-b-[1px] border-[#B4B4B4]text-[18px] outline-none bg-transparent`}
              />
            </div>
            <div className="form-wrapper flex flex-col gap-2 mb-5 w-full md:px-2">
              <label
                htmlFor="description"
                className="text-[18px] font-semibold pl-2"
              >
                Description
              </label>
              <textarea
                id="description"
                aria-label={"description"}
                name="description"
                className={`input-field w-full px-2 pb-[10px] border-b-[1px] border-[#B4B4B4]text-[18px] outline-none bg-transparent`}
              />
            </div>
          </div>
        </div>
        <form
          className={`rounded-md md:px-5 py-6 px-[10px] box-shadow mb-6`}
        >
          <h5 className="md:text-3xl sm:text-2xl text-18 md:mb-7 mb-6 text-[#264FA0] md:px-2">
            Gamer Tag
          </h5>
          <div className="flex flex-wrap">
            <div className="form-wrapper flex flex-col gap-2 mb-5 w-full md:px-2">
              <label
                htmlFor="platform"
                className="text-[18px] font-semibold pl-2"
              >
                Game Platform
              </label>
              <div className={`select-wrapper`}>
                <select
                  id="platform"
                  name="platform"
                  className={`input-field w-full px-2 pb-[10px] border-b-[1px] border-[#B4B4B4]text-[18px] outline-none bg-transparent`}
                >
                  <option value="">Select an option</option>
                  {/* {data?.gamers_tag_all.map((e: any, index: number) => (
                    <option value={e.slug} key={index}>
                      {e.title}
                    </option>
                  ))} */}
                </select>
              </div>
              {/* {errors?.platform && (
                <p
                  role="alert "
                  className="text-base font-semibold pl-4 text-brand-primary"
                >
                  {errors.platform.message}
                </p>
              )} */}
            </div>
            <div className="form-wrapper flex flex-col gap-2 mb-5 w-full md:px-2">
              <label
                htmlFor="gamer_tag"
                className="text-[18px] font-semibold pl-2"
              >
                Platform ID
              </label>
              <input
                id="gamer_tag"
                aria-label={"gamer_tag"}
                type="text"
                name="gamer_tag"
                className={`input-field w-full px-2 pb-[10px] border-b-[1px] border-[#B4B4B4]text-[18px] outline-none bg-transparent`}
              />
              {/* {errors?.gamer_tag && (
                <p
                  role="alert "
                  className="text-base font-semibold pl-4 text-brand-primary"
                >
                  {errors.gamer_tag.message}
                </p>
              )} */}
            </div>
          </div>
          <div className="flex justify-center">
            {/* <button
              type="submit"
              className="btn text-white !text-sm ! md:!text-18 md:min-w-[95px] bg-gradient-to-r from-[#2669B1] to-[#2A3E8C]"
              aria-label="Add"
            // onClick={addPlatform}
            >

            </button> */}
            <button type="submit" className="bg-gradient-to-r from-[#2669B1] to-[#2A3E8C] lg:py-4 lg:px-16 px-8 py-3 text-white font-semibold lg:text-[18px] text-[16px} rounded-[5px] tracking-wider flex items-center gap-3 leading-[1]">
              Add
            </button>
          </div>
          <div className="mt-10 ">
            <div
              className="added-role lg:px-[70px] md:px-10 flex justify-between gap-2 items-center"
            >
              <div className="flex items-center md:gap-3 gap-1">
                <figure className="min-w-[21.13px] min-h-[21.09px]">
                  <PlaystationIcon />
                </figure>{" "}
                <p className="md:text-base text-sm 2xs:block hidden">PlayStation</p>
              </div>
              <div className="flex md:gap-10 gap-2 items-center ">
                <p className="truncate md:w-[180px] w-[154px] md:text-base text-sm" title="PlayStation_Id">PlayStation_Id</p>
                <span
                  className="cross-icon hover:cursor-pointer"
                >
                  <CrossIcon />
                </span>
              </div>
            </div>
          </div>
        </form>
        <div
          className={`rounded-md md:px-5 py-6 px-[10px] box-shadow mb-10`}
        >
          <h5 className="md:text-3xl sm:text-2xl text-18 md:mb-7 mb-6">
            Social Media
          </h5>
          <div>
            <div className="added-role lg:px-[70px] md:px-10 flex justify-between gap-2 items-center">
              <div className="flex gap-3 social">
                <TwitchIcon />
                <h5 className="md:text-[22px] text-18 sm:flex hidden">Twitch</h5>
              </div>
              <div className="flex items-center gap-3">
                <div className="relative ">
                  <input
                    id="twitch"
                    aria-label={"twitch"}
                    type="text"
                    name="twitch"
                    className={`input-field w-full px-2 pb-[10px] border-b-[1px] border-[#B4B4B4] text-[18px] outline-none bg-transparent`}
                  />
                  <span className="absolute top-1/2 right-3 -translate-y-1/2">
                    <LinkIcon />
                  </span>
                </div>
                <span
                  className="text-primary font-semibold cursor-pointer"
                >
                  Submit
                </span>
              </div>

            </div>
            <div className="added-role lg:px-[70px] md:px-10 flex justify-between gap-2 items-center">
              <div className="flex gap-3 social">
                <Twitter />
                <h5 className="md:text-[22px] text-18 sm:flex hidden ">Twitter</h5>
              </div>

              <div className="flex md:gap-10 gap-2 items-center">
                <p className="truncate md:w-[180px] w-[154px] md:text-base text-sm" title="Twitter">
                  Twitter
                </p>
                <span
                  className="cross-icon"
                >
                  <CrossIcon />
                </span>
              </div>
            </div>
            <div className="added-role lg:px-[70px] md:px-10 flex justify-between gap-2 items-center">
              <div className="flex gap-3 social">
                <Youtube />
                <h5 className="md:text-[22px] text-18 sm:flex hidden ">YouTube</h5>
              </div>
              {/* {!showSocialMedia.youtube ? (
                <div className="flex items-center gap-3">
                  <div className="relative ">
                    <input
                      id="youtube"
                      aria-label={"youtube"}
                      type="text"
                      name="youtube"
                      className={`input-field w-full py-2 px-5 !pr-9 ${theme == "dark" ? "bg-[#212535]" : "bg-[#D4E1F0CC]"
                        }  sm:text-base text-sm rounded-[10px] outline-none`}
                      onChange={(e: any) =>
                        handleUpdateSocialMedia("youtube", e.target.value)
                      }
                    />
                    <span className="absolute top-1/2 right-3 -translate-y-1/2">
                      <LinkIcon theme={theme} />
                    </span>
                  </div>
                  {socialMedia.youtube && (
                    <span
                      className="text-primary font-semibold cursor-pointer"
                      onClick={() => handleShowSocialMedia("youtube", true)}
                    >
                      Submit
                    </span>
                  )}
                </div>
              ) : (
                <div className="flex md:gap-10 gap-2 items-center">
                  <p className="truncate md:w-[180px] w-[154px] md:text-base text-sm" title={socialMedia.youtube}>
                    {socialMedia.youtube}
                  </p>
                  <span
                    className="cross-icon"
                    onClick={() => {
                      handleShowSocialMedia("youtube", false);
                      handleUpdateSocialMedia("youtube", "");
                    }}
                  >
                    <CrossIcon theme={theme} />
                  </span>
                </div>
              )} */}
            </div>
            {/* <div className="added-role lg:px-[70px] md:px-10 flex justify-between gap-2 items-center">
              <div className="flex gap-3 social">
                <InstagramIcon />
                <h5 className="md:text-[22px] text-18 sm:flex hidden ">
                  Instagram
                </h5>
              </div>

              {!showSocialMedia.instagram ? (
                <div className="flex items-center gap-3">
                  <div className="relative ">
                    <input
                      id="instagram"
                      aria-label={"instagram"}
                      type="text"
                      name="instagram"
                      className={`input-field w-full py-2 px-5 !pr-9 ${theme == "dark" ? "bg-[#212535]" : "bg-[#D4E1F0CC]"
                        } sm:text-base text-sm rounded-[10px] outline-none`}
                      onChange={(e: any) =>
                        handleUpdateSocialMedia("instagram", e.target.value)
                      }
                    />
                    <span className="absolute top-1/2 right-3 -translate-y-1/2">
                      <LinkIcon theme={theme} />
                    </span>
                  </div>
                  {socialMedia.instagram && (
                    <span
                      className="text-primary font-semibold cursor-pointer"
                      onClick={() => handleShowSocialMedia("instagram", true)}
                    >
                      Submit
                    </span>
                  )}
                </div>
              ) : (
                <div className="md:text-base text-sm flex md:gap-10 gap-2 items-center">
                  <p className="truncate md:w-[180px] w-[154px] md:text-base text-sm" title={socialMedia.instagram}>
                    {socialMedia.instagram}
                  </p>
                  <span
                    className="cross-icon"
                    onClick={() => {
                      handleShowSocialMedia("instagram", false);
                      handleUpdateSocialMedia("instagram", "");
                    }}
                  >
                    <CrossIcon theme={theme} />
                  </span>
                </div>
              )}
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
