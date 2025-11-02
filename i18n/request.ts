// i18n/request.ts
import {getRequestConfig} from 'next-intl/server';
import {routing} from './routing';

export default getRequestConfig(async ({locale}) => {
  const validated =
    routing.locales.includes(locale as any) ? locale : routing.defaultLocale;

  return {
    locale: validated as string,
    messages: (await import(`../messages/${validated}.json`)).default
  };
});
