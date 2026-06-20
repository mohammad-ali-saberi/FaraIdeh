import { z } from 'zod';
import { USER_ROLES } from './roles';

export const createUserSchema = z.object({
  photo: z.string().optional().or(z.literal('')),
  fullName: z.string().min(3, 'نام و نام خانوادگی باید حداقل ۳ کاراکتر باشد'),
  username: z
    .string()
    .min(3, 'نام کاربری باید حداقل ۳ کاراکتر باشد')
    .regex(/^[a-zA-Z0-9_]+$/, 'نام کاربری فقط می‌تواند شامل حروف انگلیسی، عدد و _ باشد'),
  password: z.string().min(6, 'رمز عبور باید حداقل ۶ کاراکتر باشد'),
  email: z.string().email('ایمیل معتبر نیست').optional().or(z.literal('')),
  role: z.enum(Object.values(USER_ROLES) as [string, ...string[]], {
    message: 'نقش انتخاب‌شده معتبر نیست',
  }),
  isActive: z.boolean(),
});

export type CreateUserInput = z.infer<typeof createUserSchema>;
