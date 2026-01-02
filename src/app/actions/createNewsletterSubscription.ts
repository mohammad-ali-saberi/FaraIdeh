'use server';

import { prisma } from '@/libs/prisma';
import { z } from 'zod';

const newsletterSchema = z.object({
  email: z
    .string({ message: 'ایمیل الزامی است' })
    .min(1, { message: 'ایمیل نمی‌تواند خالی باشد' })
    .email({ message: 'ایمیل وارد شده معتبر نیست' }),
});

export async function createNewsletterSubscription(email: string) {
  try {
    const validatedData = newsletterSchema.parse({ email });

    const existingSubscription = await prisma.newsletter.findUnique({
      where: { email: validatedData.email },
    });

    if (existingSubscription) {
      if (existingSubscription.isActive) {
        return {
          success: false,
          message: 'این ایمیل قبلاً در خبرنامه ثبت شده است',
        };
      } else {
        await prisma.newsletter.update({
          where: { email: validatedData.email },
          data: { isActive: true },
        });

        return {
          success: true,
          message: 'اشتراک شما با موفقیت فعال شد!',
        };
      }
    }

    await prisma.newsletter.create({
      data: {
        email: validatedData.email,
      },
    });

    return {
      success: true,
      message: 'ایمیل شما با موفقیت ثبت شد!',
    };
  } catch (error) {
    if (error instanceof z.ZodError) {
      return {
        success: false,
        message: error.issues[0].message,
      };
    }

    console.error('Newsletter subscription error:', error);
    return {
      success: false,
      message: 'خطایی در ثبت ایمیل رخ داد. لطفاً دوباره تلاش کنید',
    };
  }
}
