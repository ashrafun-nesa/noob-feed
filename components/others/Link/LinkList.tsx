import React from "react";
import CustomLink from ".";
import { variables } from "@static/variables";

type LinkItemsProps = {
  item:
    | GameGenreI[]
    | GameDeveloperI[]
    | GameThemeI[]
    | GamePublisherI[]
    | GamePlatformI[];
  child?: Boolean;
  slugType?: string;
};

const LinkItems = ({ item, child = false, slugType }: LinkItemsProps) => {
  const LinkBuilder = ({ linkItems, slugType }: any) => {
    return linkItems.map((e: any, index: number) => (
      <>
        <CustomLink
          key={index + e.title}
          query={{ [slugType]: e.slug }}
          href={`${variables.routes.filter}`}
          scroll={true}
          className="link text-brand-tertiary link-hover "
        >
          {e.title?e.title:e.pub_name}
        </CustomLink>
        {linkItems[linkItems.length - 1].title !== e.title && `,`}
        &nbsp;
      </>
    ));
  };
  if (child) {
    let childItemsArr: any = [];

    item.map((e: any, i: Number) => {
      if (e.children) {
        e.children.map((childE: any, childI: Number) => {
          childItemsArr.push(childE);
        });
      }
    });

    const uniqueValuesSet = new Set<string>();
    const filteredArray = childItemsArr.filter((obj: any) => {
      const isUnique = !uniqueValuesSet.has(obj.slug);
      uniqueValuesSet.add(obj.slug);
      return isUnique;
    });

    return <LinkBuilder linkItems={filteredArray} slugType={slugType} />;
  } else {
    return <LinkBuilder linkItems={item} slugType={slugType} />;
  }
};
export default LinkItems;
