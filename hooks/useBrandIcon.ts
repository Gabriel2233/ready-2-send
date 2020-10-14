import { FiFacebook, FiMail, FiTwitter } from "react-icons/fi";
import { ImWhatsapp } from "react-icons/im";

export default function useBrandIcon(companyName: string) {
  const formatedString =
    companyName.charAt(0).toUpperCase() + companyName.slice(1);

  if (formatedString === "Facebook") {
    return {
      icon: FiFacebook,
      color: "blue.500",
    };
  } else if (formatedString === "WhatsApp") {
    return {
      icon: ImWhatsapp,
      color: "green.400",
    };
  } else if (formatedString === "Gmail") {
    return {
      icon: FiMail,
      color: "red.500",
    };
  } else {
    return {
      icon: FiTwitter,
      color: "#0084b4",
    };
  }
}
