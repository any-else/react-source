import dayjs, { isDayjs } from "dayjs";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { vi } from "src/localization/languages/vi";

export const resources = {
  vi: vi,
} as const;

i18n
  .use(initReactI18next) // bind react-i18next to the instance
  .init({
    fallbackLng: "vi",
    lng: "vi",
    debug: true,
    ns: Object.keys(resources),
    resources,

    interpolation: {
      escapeValue: false,
      format(value, format) {
        if (typeof value === "string") {
          switch (format) {
            case "uppercase":
              return value.toUpperCase();
            case "lowercase":
              return value.toLowerCase();
            case "firstLetterUppercase":
              return value.charAt(0).toUpperCase() + value.slice(1);
          }
        }

        if (isDayjs(value) || value instanceof Date) {
          return dayjs(value).format(format);
        }

        return value;
      },
    },
  });

export { i18n };
