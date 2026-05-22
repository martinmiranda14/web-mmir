export type Locale = 'es' | 'en';

export interface I18nString {
  es: string;
  en: string;
}

export const DEFAULT_LOCALE: Locale = 'es';

export function t(value: string | I18nString | undefined, locale: Locale = DEFAULT_LOCALE): string {
  if (!value) return '';
  if (typeof value === 'string') return value;
  return value[locale] ?? value.es ?? '';
}
