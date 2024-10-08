import { getPreferenceValues } from "@raycast/api";
import { SITE_TO_LOCALE_MAP } from "./constants";

export const formatPrice = (price: number, currency: string) => {
  const { siteId } = getPreferenceValues<Preferences>();
  const locale = SITE_TO_LOCALE_MAP[siteId];
  return new Intl.NumberFormat(locale, { style: "currency", currency }).format(price);
};

export const formatPercentage = (percentage: number) => {
  const { siteId } = getPreferenceValues<Preferences>();
  const locale = SITE_TO_LOCALE_MAP[siteId];
  return new Intl.NumberFormat(locale, { style: "percent", minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(
    percentage / 100,
  );
};

export const secureThumbnailURL = (url: string): string => {
  return url.replace(/^http:/, "https:").replace("-I.jpg", "-L.jpg");
};
