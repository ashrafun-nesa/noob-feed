import FeatureImage from "@/components/others/featureimage/FeatureImage";


type Props = {};

const FeaturedSection = (props: Props) => {
  return (
    <div className="feature-section flex flex-col gap-4 mb-8">
      <div className="flex lg:flex-row flex-col gap-4">
        <div className="w-full"><FeatureImage bigHeading={true} type="news" /></div>
        <div className="w-full"><FeatureImage bigHeading={true} type="review" /></div>
      </div>
      <div className="flex lg:flex-row flex-col gap-4">
        <div className="w-full"><FeatureImage bigHeading={false} type="review" /></div>
        <div className="w-full"><FeatureImage bigHeading={false} type="blogs" /></div>
        <div className="w-full"><FeatureImage bigHeading={false} type="review" /></div>
      </div>
    </div>
  );
};

export default FeaturedSection;