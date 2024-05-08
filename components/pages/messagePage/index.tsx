
const Message = () => {
  return (
    <div className="container_section">
      <h1 className="lg:text-[44px] text-[30px] font-semibold lg:text-left text-center mb-6">Notifications & Messages</h1>
      <div className="max-w-[874px] mx-auto">
        <div className="tab-list flex flex-wrap lg:justify-start justify-center  max-w-[790px] mx-auto mb-5">
          <span className="tab-item message-tab active">Notifications (4)</span>
          <span className="tab-item message-tab">Inbox (4)</span>
        </div>
        <div className="box-shadow bg-white md:px-5 pt-4 pb-6 mb-5 rounded-[5px] flex md:flex-row flex-col gap-4">
          <div></div>
          <div>
            <div>
              <p className="text-[18px] font-semibold">Pro Gamer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
