import FeatureImage from "@/components/others/featureimage/FeatureImage";


type Props = {};

const FeaturedSection = (props: Props) => {
  return (
    <div className="flex flex-col gap-4 mb-8">
      <div className="flex lg:flex-row flex-col gap-4">
        <div className="w-full"><FeatureImage bigHeading={true} /></div>
        <div className="w-full"><FeatureImage bigHeading={true} /></div>
      </div>
      <div className="flex lg:flex-row flex-col gap-4">
        <div className="w-full"><FeatureImage bigHeading={false} /></div>
        <div className="w-full"><FeatureImage bigHeading={false} /></div>
        <div className="w-full"><FeatureImage bigHeading={false} /></div>
      </div>
    </div>
  );
};

export default FeaturedSection;