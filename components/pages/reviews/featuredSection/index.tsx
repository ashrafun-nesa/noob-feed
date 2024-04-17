import CustomLink from "@/components/others/Link";
import FeatureImage from "@/components/others/featureimage/FeatureImage";


type Props = {};

const FeaturedSection = (props: Props) => {
  return (
    <div className="feature-section flex lg:flex-row flex-col lg:gap-7 gap-5 mb-8">
      <div className="lg:w-2/3 w-full">
        <CustomLink href={`/reviews/single-review`}>
          <FeatureImage bigHeading={true} type="news" />
        </CustomLink>
      </div>
      <div className="flex flex-col lg:gap-7 gap-5 lg:w-1/3 w-full">
        <div className="w-full"><FeatureImage bigHeading={false} type="review" /></div>
        <div className="w-full"><FeatureImage bigHeading={false} type="blogs" /></div>
      </div>
    </div>
  );
};

export default FeaturedSection;
