'use server';

import { revalidatePath } from 'next/cache';
import { z } from 'zod';

import { prisma } from '@/libs/prisma';

const termsSchema = z.object({
  title: z
    .string()
    .trim()
    .min(2, 'عنوان صفحه باید حداقل ۲ کاراکتر باشد.')
    .max(150, 'عنوان صفحه بیش از حد طولانی است.'),
  content: z.string().min(1, 'محتوای صفحه الزامی است.'),
});

export type UpdateTermsPageResult = {
  success: boolean;
  message: string;
};

export const updateTermsPage = async (data: {
  title: string;
  content: string;
}): Promise<UpdateTermsPageResult> => {
  const parsed = termsSchema.safeParse(data);

  if (!parsed.success) {
    return {
      success: false,
      message: parsed.error.issues[0]?.message ?? 'اطلاعات واردشده معتبر نیست.',
    };
  }

  try {
    const existing = await prisma.termsPage.findFirst();

    if (existing) {
      await prisma.termsPage.update({
        where: { id: existing.id },
        data: parsed.data,
      });
    } else {
      await prisma.termsPage.create({ data: parsed.data });
    }

    revalidatePath('/terms');
    revalidatePath('/admin/terms');

    return { success: true, message: 'قوانین و مقررات با موفقیت ذخیره شد.' };
  } catch (error) {
    console.error('Failed to update terms page:', error);

    return {
      success: false,
      message: 'ذخیره تغییرات با خطا مواجه شد. لطفاً دوباره تلاش کنید.',
    };
  }
};
