import { useIntl } from "react-intl";

export default function useFormatMessage(messageId) {
  const intl = useIntl();

  return intl.formatMessage({ id: messageId });
}
