export interface Message {
  node: {
    messageContent: string;
    mostlyFor: string;
    isDynamic: boolean;
    _meta: {
      id: string;
      firstPublicationDate: string;
    };
  };
}

export type SearchContext = {
  socialMediaBrands: Array<string>;
  onSocialMediaChange(newValues: Array<string>): void;
};
