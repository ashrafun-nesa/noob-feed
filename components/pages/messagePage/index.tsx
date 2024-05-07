
const Message = () => {
  return (
    <div className="container_section">
      <h1 className="lg:text-[44px] text-[30px] font-semibold lg:text-left text-center mb-6">Notifications & Messages</h1>
      <div className="max-w-[874px] mx-auto">
        <div className="tab-list flex flex-wrap lg:justify-start justify-center  max-w-[790px] mx-auto">
          <span className="tab-item message-tab active">Notifications (4)</span>
          <span className="tab-item message-tab">Inbox (4)</span>
        </div>
      </div>
    </div>
  );
};

export default Message;
