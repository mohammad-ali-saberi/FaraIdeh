// Format date to Persian
export const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('fa-IR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
};

export const formatJalaliDateShort = (date: Date | string): string => {
  const d = new Date(date);
  const year = d.toLocaleDateString('fa-IR', { year: 'numeric' });
  const month = d.toLocaleDateString('fa-IR', { month: '2-digit' });
  const day = d.toLocaleDateString('fa-IR', { day: '2-digit' });

  return `${year}/${month}/${day}`;
};
