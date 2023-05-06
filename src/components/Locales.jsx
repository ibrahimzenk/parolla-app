import { useState, useEffect } from "react";

// third-party
import { IntlProvider } from "react-intl";

// load locales files
const loadLocaleData = (locale) => {
  switch (locale) {
    case "en":
      return import("~/utils/locales/en.json");
    default:
      return import("~/utils/locales/tr.json");
  }
};

// ==============================|| LOCALIZATION ||============================== //

const Locales = ({ children }) => {
  const [locale, setLocale] = useState("tr");
  const [messages, setMessages] = useState();

  useEffect(() => {
    loadLocaleData(locale).then((d) => {
      setMessages(d.default);
    });
  }, [locale]);

  return (
    <>
      {messages && (
        <IntlProvider locale={locale} defaultLocale="tr" messages={messages}>
          {children}
        </IntlProvider>
      )}
    </>
  );
};

export default Locales;
