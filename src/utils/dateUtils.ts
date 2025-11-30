// src/utils/dateUtils.ts
import dayjs from 'dayjs';

export const formatTime = (date: Date): string => {
    return dayjs(date).format('HH:mm:ss');
};

export const getCurrentDate = (): Date => {
    return dayjs().toDate();
};

export const formatDateTime = (date: Date): string => {
    return dayjs(date).format('DD/MM/YYYY HH:mm:ss');
};

export const isToday = (date: Date): boolean => {
    return dayjs(date).isSame(dayjs(), 'day');
};