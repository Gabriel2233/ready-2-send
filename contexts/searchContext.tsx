import { createContext, useContext, useState } from "react";
import { SearchContext as SearchContextType } from "../utils/types";

const SearchContext = createContext<SearchContextType>({
  socialMediaBrands: ["Facebook", "WhatsApp", "Twitter", "Gmail"],
  onSocialMediaChange: () => {},
});

export const SearchProvider: React.FC = ({ children }) => {
  const search = useProvideSearch();

  return (
    <SearchContext.Provider value={search}>{children}</SearchContext.Provider>
  );
};

export const useSearch = () => {
  return useContext(SearchContext);
};

export const useProvideSearch = () => {
  const [socialMediaBrands, setSocialMediaBrands] = useState<Array<string>>([
    "Facebook",
    "WhatsApp",
    "Twitter",
    "Gmail",
  ]);

  const onSocialMediaChange = (newValues: Array<string>) => {
    setSocialMediaBrands(newValues);
  };

  return {
    socialMediaBrands,
    onSocialMediaChange,
  };
};
