import { DateTime } from 'luxon';

import { DateConfig } from '@src/ts/dates';
// import type { DateConfig } from '@src/ts/dates'

export const API_FORMAT_DATE = 'yyyy-MM-dd';
export const DEFAULT_FORMAT_DATE = 'LLLL dd, yyyy';
export const SEO_FORMAT_DATE = 'LLL. dd, yyyy';
export const NEXT_ELECTION_DATE = 'cccc, LLLL dd, yyyy';
export const REGISTRATION_DEADLINES_DATE = 'cccc, LLL dd, yyyy';
export const HELPFUL_INFO_DATE = 'h:mm a ZZZZ';
export const NEWS_DATE = 'h:mm a ZZZZ LLL. d';
export const PRIMARY_STATE_DATE = 'LLL. dd, yyyy';
export const PRIMARY_STATE_DATE_UPDATED = 'h:mm a ZZZZ LLL. dd, yyyy';
export const SCHEDULES_DATE = 'LLL d';
export const PRIMARY_DATE_TODAY = 'LLLL d, yyyy';
export const JUST_YEAR = 'yyyy';
export const ISO_DATE = "yyyy-MM-dd'T'HH:mm:ss+hh:mm";
export const ISO_DATE_00 = "yyyy-MM-dd'T'HH:mm:ss+00:00";

export const formatDate = (date: string | Date | null = '', config: DateConfig = {}): string => {
    const { format = DEFAULT_FORMAT_DATE, local = true, zone = false, utc = false, plus = {} } = config;

    if (!date) {
        return DateTime.now().toFormat(format);
    }

    if (zone) date = `${date}Z`;

    let dateTime = createDateObject(date, config);

    if (local) {
        dateTime = dateTime.toLocal();
        return dateTime.toFormat(format);
    }

    if (utc) {
        dateTime = dateTime.toUTC();
        return dateTime.toFormat(format);
    }

    const preparedDate = Object.keys(plus).length ? dateTime.plus(plus) : dateTime;

    return preparedDate.toFormat(format);
};

export const createDateObject = (date: string | Date | null = '', config: DateConfig = {}) => {
    const { from = 'iso', params } = config;
    switch (from) {
        case 'js':
            return DateTime.fromJSDate(<Date>date, params);

        case 'rfc':
            return DateTime.fromRFC2822(<string>date, params);

        default:
            return DateTime.fromISO(<string>date, params);
    }
};

export const isValidDate = (date: string | Date | string[] | null = ''): null | Date => {
    if (!date) return null;
    let dateInstance = DateTime.fromISO(<string>date);

    if (dateInstance.toString() === 'Invalid DateTime') {
        dateInstance = DateTime.fromJSDate(<Date>date);
    }

    return dateInstance.toString() === 'Invalid DateTime' ? null : <Date>date;
};

export const getClosesDate = (dates: string[] = [], currentDate: string) => {
    if (!dates.length || !currentDate) return '';

    const date = DateTime.fromISO(currentDate);

    const closestDate = dates.reduce((prev, curr) => {
        const prevDate = DateTime.fromISO(prev);
        const currDate = DateTime.fromISO(curr);
        return Math.abs(currDate.diff(date).milliseconds) < Math.abs(prevDate.diff(date).milliseconds) ? curr : prev;
    }, dates?.[0]);

    return closestDate;
};
