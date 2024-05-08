
const Message = () => {
  return (
    <div className="container_section">
      <h1 className="lg:text-[44px] text-[30px] font-semibold lg:text-left text-center mb-6">Notifications & Reports</h1>
      <div className="max-w-[874px] mx-auto">
        <div className="tab-list flex flex-wrap lg:justify-start justify-center  max-w-[790px] mx-auto mb-5">
          <span className="tab-item message-tab active">Notifications (4)</span>
          <span className="tab-item message-tab">Report</span>
        </div>
        <div className="box-shadow bg-white mb-10 rounded-[5px]">
          <div className="single-notification flex gap-4 items-center unseen">
            <div className="w-[50px] h-[50px] bg-[#D9D9D9] rounded-full"></div>
            <div>
              <p className="text-[18px] text-[#898D96] mb-[10px] leading-[1]"><span className="text-[#2F3043] font-semibold">Thrall007</span> followed you </p>
              <p className="text-[16px] text-[#898D96] leading-[1]">5m ago</p>
            </div>
          </div>
          <div className="single-notification flex gap-4 items-center unseen">
            <div className="w-[50px] h-[50px] bg-[#D9D9D9] rounded-full"></div>
            <div>
              <p className="text-[18px] text-[#898D96] mb-[10px] leading-[1]"><span className="text-[#2F3043] font-semibold">Thrall007</span> followed you </p>
              <p className="text-[16px] text-[#898D96] leading-[1]">5m ago</p>
            </div>
          </div>
          <div className="single-notification flex gap-4 items-center unseen">
            <div className="w-[50px] h-[50px] bg-[#D9D9D9] rounded-full"></div>
            <div>
              <p className="text-[18px] text-[#898D96] mb-[10px] leading-[1]"><span className="text-[#2F3043] font-semibold">Thrall007</span> followed you </p>
              <p className="text-[16px] text-[#898D96] leading-[1]">5m ago</p>
            </div>
          </div>
          <div className="single-notification flex gap-4 items-center ">
            <div className="w-[50px] h-[50px] bg-[#D9D9D9] rounded-full"></div>
            <div>
              <p className="text-[18px] text-[#898D96] mb-[10px] leading-[1]"><span className="text-[#2F3043] font-semibold">Thrall007</span> followed you </p>
              <p className="text-[16px] text-[#898D96] leading-[1]">5m ago</p>
            </div>
          </div>
          <div className="single-notification flex gap-4 items-center ">
            <div className="w-[50px] h-[50px] bg-[#D9D9D9] rounded-full"></div>
            <div>
              <p className="text-[18px] text-[#898D96] mb-[10px] leading-[1]"><span className="text-[#2F3043] font-semibold">Thrall007</span> followed you </p>
              <p className="text-[16px] text-[#898D96] leading-[1]">5m ago</p>
            </div>
          </div>
          <div className="single-notification flex gap-4 items-center ">
            <div className="w-[50px] h-[50px] bg-[#D9D9D9] rounded-full"></div>
            <div>
              <p className="text-[18px] text-[#898D96] mb-[10px] leading-[1]"><span className="text-[#2F3043] font-semibold">Thrall007</span> followed you </p>
              <p className="text-[16px] text-[#898D96] leading-[1]">5m ago</p>
            </div>
          </div>
          <div className="single-notification flex gap-4 items-center ">
            <div className="w-[50px] h-[50px] bg-[#D9D9D9] rounded-full"></div>
            <div>
              <p className="text-[18px] text-[#898D96] mb-[10px] leading-[1]"><span className="text-[#2F3043] font-semibold">Thrall007</span> followed you </p>
              <p className="text-[16px] text-[#898D96] leading-[1]">5m ago</p>
            </div>
          </div>
          <div className="single-notification flex gap-4 items-center ">
            <div className="w-[50px] h-[50px] bg-[#D9D9D9] rounded-full"></div>
            <div>
              <p className="text-[18px] text-[#898D96] mb-[10px] leading-[1]"><span className="text-[#2F3043] font-semibold">Thrall007</span> followed you </p>
              <p className="text-[16px] text-[#898D96] leading-[1]">5m ago</p>
            </div>
          </div>

          {/* for report use this code */}

          {/* <div className="single-notification unseen">
            <div>
              <p className="text-[18px] text-[#898D96] mb-[10px] leading-[1]"><span className="text-[#2F3043] font-semibold">Thrall007</span> followed you </p>
              <p className="text-[16px] text-[#898D96] leading-[1]">5m ago</p>
            </div>
          </div>
          <div className="single-notification unseen">
            <div>
              <p className="text-[18px] text-[#898D96] mb-[10px] leading-[1]"><span className="text-[#2F3043] font-semibold">Thrall007</span> followed you </p>
              <p className="text-[16px] text-[#898D96] leading-[1]">5m ago</p>
            </div>
          </div>
          <div className="single-notification unseen">
            <div>
              <p className="text-[18px] text-[#898D96] mb-[10px] leading-[1]"><span className="text-[#2F3043] font-semibold">Thrall007</span> followed you </p>
              <p className="text-[16px] text-[#898D96] leading-[1]">5m ago</p>
            </div>
          </div>
          <div className="single-notification">
            <div>
              <p className="text-[18px] text-[#898D96] mb-[10px] leading-[1]"><span className="text-[#2F3043] font-semibold">Thrall007</span> followed you </p>
              <p className="text-[16px] text-[#898D96] leading-[1]">5m ago</p>
            </div>
          </div>
          <div className="single-notification">
            <div>
              <p className="text-[18px] text-[#898D96] mb-[10px] leading-[1]"><span className="text-[#2F3043] font-semibold">Thrall007</span> followed you </p>
              <p className="text-[16px] text-[#898D96] leading-[1]">5m ago</p>
            </div>
          </div>
          <div className="single-notification">
            <div>
              <p className="text-[18px] text-[#898D96] mb-[10px] leading-[1]"><span className="text-[#2F3043] font-semibold">Thrall007</span> followed you </p>
              <p className="text-[16px] text-[#898D96] leading-[1]">5m ago</p>
            </div>
          </div>
          <div className="single-notification">
            <div>
              <p className="text-[18px] text-[#898D96] mb-[10px] leading-[1]"><span className="text-[#2F3043] font-semibold">Thrall007</span> followed you </p>
              <p className="text-[16px] text-[#898D96] leading-[1]">5m ago</p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Message;
