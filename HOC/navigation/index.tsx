import { memo } from "react";
import Header from "./header";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("./footer"));

type Props = { children: React.ReactNode };

const Navigation = async ({ children }: Props) => {
  try {
    return (
      <>
        <Header data={[]} />
        {children}
        <Footer data={[]} setting={[]} />
      </>
    );
  } catch (error) {
    console.error("Error loading navigation page data:", error); // Log the error for debugging
    return (
      <div>Error loading navigation page data. Please try again later.</div>
    );
  }
};

export default memo(Navigation);
