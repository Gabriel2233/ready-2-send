export type Message = {
  node: {
    messageContent: string;
    mostlyFor: string;
    isDynamic: boolean;
    _meta: {
      id: string;
      firstPublicationDate: string;
    };
  };
};
