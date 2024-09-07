import dayjs from 'dayjs';

export const modifyDate = (date: string) => {
  const newDate = dayjs(date).format('DD/MM/YYYY');
  return newDate;
};
