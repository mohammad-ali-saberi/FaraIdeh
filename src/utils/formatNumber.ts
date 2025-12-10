/**
 * فرمت کردن اعداد به حروف کوتاه (K, M, B)
 * @param num - عدد مورد نظر
 * @param locale - زبان (fa برای فارسی، en برای انگلیسی)
 * @returns عدد فرمت شده
 */
export function formatNumberShort(num: number, locale: 'fa' | 'en' = 'fa'): string {
  if (num < 1000) {
    return num.toString();
  }

  const suffixes = {
    fa: ['', 'هزار', 'میلیون', 'میلیارد', 'تریلیون'],
    en: ['', 'K', 'M', 'B', 'T'],
  };

  const tier = Math.floor(Math.log10(Math.abs(num)) / 3);
  const suffix = suffixes[locale][tier] || '';
  const scale = Math.pow(10, tier * 3);
  const scaled = num / scale;

  // اگر عدد صحیح است، بدون اعشار نمایش بده
  // اگر دارای اعشار است، یک رقم اعشار نمایش بده
  const formatted = scaled % 1 === 0 ? scaled.toFixed(0) : scaled.toFixed(1);

  if (locale === 'fa') {
    // برای فارسی، فاصله بین عدد و پسوند
    return suffix ? `${formatted} ${suffix}` : formatted;
  } else {
    // برای انگلیسی، بدون فاصله
    return `${formatted}${suffix}`;
  }
}

/**
 * مثال‌های استفاده:
 * formatNumberShort(999, 'en')      -> "999"
 * formatNumberShort(1000, 'en')     -> "1K"
 * formatNumberShort(1500, 'en')     -> "1.5K"
 * formatNumberShort(10000, 'en')    -> "10K"
 * formatNumberShort(1000000, 'en')  -> "1M"
 * formatNumberShort(1500000, 'en')  -> "1.5M"
 *
 * formatNumberShort(1000, 'fa')     -> "1 هزار"
 * formatNumberShort(1500, 'fa')     -> "1.5 هزار"
 * formatNumberShort(10000, 'fa')    -> "10 هزار"
 */
