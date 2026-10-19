'use server';

import { CONTACT_MESSAGE_MAX_LENGTH } from '@/libs/contactInfo';
import { prisma } from '@/libs/prisma';
import { unstable_noStore as noStore } from 'next/cache';
import { z } from 'zod';

const contactSchema = z.object({
  firstName: z.string().min(2, 'نام باید حداقل ۲ کاراکتر باشد.'),
  lastName: z.string().min(2, 'نام خانوادگی باید حداقل ۲ کاراکتر باشد.'),
  email: z.string().email('ایمیل نامعتبر است.').optional().or(z.literal('')),
  phone: z
    .string()
    .trim()
    .min(1, 'شماره تماس الزامی است.')
    .regex(/^[\d+\-\s()]+$/, 'شماره تماس نامعتبر است.')
    .refine((value) => {
      const digits = value.replace(/\D/g, '');
      return digits.length >= 10 && digits.length <= 13;
    }, 'شماره تماس معتبر وارد کنید.'),
  message: z
    .string()
    .min(5, 'متن پیام خیلی کوتاه است.')
    .max(CONTACT_MESSAGE_MAX_LENGTH, 'متن پیام نباید بیشتر از ۱۰۰۰ کاراکتر باشد.'),
});

export type ContactActionState = {
  ok: boolean;
  message: string;
  fieldErrors?: Record<string, string[] | undefined>;
} | null;

export async function createContact(
  _prevState: ContactActionState,
  formData: FormData,
): Promise<ContactActionState> {
  noStore();

  const raw = {
    firstName: String(formData.get('name') ?? ''),
    lastName: String(formData.get('family') ?? ''),
    email: (formData.get('email') ?? '') as string,
    phone: (formData.get('phone') ?? '') as string,
    message: String(formData.get('message') ?? ''),
  };

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    return {
      ok: false,
      fieldErrors: parsed.error.flatten().fieldErrors,
      message: 'لطفاً خطاهای فرم را برطرف کنید.',
    };
  }

  const { firstName, lastName, email, phone, message } = parsed.data;

  try {
    await prisma.contact.create({
      data: {
        firstName,
        lastName,
        email: email || null,
        phone: phone || null,
        message,
      },
    });
  } catch (error) {
    console.error('Failed to save contact message:', error);

    return {
      ok: false,
      message: 'ارسال پیام با خطا مواجه شد. لطفاً چند لحظه بعد دوباره تلاش کنید.',
    };
  }

  return { ok: true, message: 'پیام شما با موفقیت ثبت شد.' };
}
