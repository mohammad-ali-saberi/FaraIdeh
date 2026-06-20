export const USER_ROLES = {
  admin: 'admin',
  writer: 'writer',
  editor: 'editor',
  user: 'user',
} as const;

export type UserRole = (typeof USER_ROLES)[keyof typeof USER_ROLES];

export const roleLabels: Record<UserRole, string> = {
  admin: 'مدیر',
  writer: 'نویسنده',
  editor: 'ویرایشگر',
  user: 'کاربر',
};
