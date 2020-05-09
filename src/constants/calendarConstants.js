/**
 * Events may only be in intervals of [CALENDAR_STEP] minutes.
 * For example if [CALENDAR_STEP] is 15, then meetings can be 15, 30, 45, ... minutes long.
 *
 * The smaller [CALENDAR_STEP] is, the more zoomed in the calendar will be.
 */
export const CALENDAR_STEP = 15;

/**
 * The default start time for a new event in [CALENDAR_STEP]s starting at 12:00am.
 *
 * So if [CALENDAR_STEP] is 30 and [CALENDAR_DEFAULT_EVENT_START] is 10,
 * then events will default to starting at 5:00am.
 */
export const CALENDAR_DEFAULT_EVENT_START = 48; // noon

/**
 * The default length for a new event in [CALENDAR_STEP]s.
 */
export const CALENDAR_DEFAULT_EVENT_LENGTH = 4; // 1 hour
