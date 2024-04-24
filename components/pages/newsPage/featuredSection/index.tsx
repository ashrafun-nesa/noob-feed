import CustomLink from "@/components/others/Link";
import FeatureImage from "@/components/others/featureimage/FeatureImage";


type Props = {};

const FeaturedSection = (props: Props) => {
  return (
    <div className="feature-section flex flex-col lg:gap-7 gap-5 mb-8">
      <div className="flex lg:flex-row flex-col lg:gap-7 gap-5 w-full">
        <div className="lg:w-1/2 w-full">
          <CustomLink href={`/reviews/single-review`}>
            <FeatureImage bigHeading={false} type="review" />
          </CustomLink>
        </div>
        <div className=" lg:w-1/2 w-full"><FeatureImage bigHeading={false} type="blogs" /></div>
      </div>
      <div className="flex lg:flex-row flex-col lg:gap-7 gap-5 w-full">
        <div className=" lg:w-1/2 w-full"><FeatureImage bigHeading={false} type="review" /></div>
        <div className=" lg:w-1/2 w-full"><FeatureImage bigHeading={false} type="blogs" /></div>
      </div>
    </div>
  );
};

export default FeaturedSection;
