/**
 * Events may only be in intervals of [CALENDAR_STEP] minutes.
 * For example if [CALENDAR_STEP] is 15, then meetings can be 15, 30, 45, ... minutes long.
 *
 * The smaller [CALENDAR_STEP] is, the more zoomed in the calendar will be.
 */
export const CALENDAR_STEP = 15;

/**
 * The default length for a new event in [CALENDAR_STEP]s.
 *
 * So if [CALENDAR_STEP] is 15 and [CALENDAR_DEFAULT_EVENT_LENGTH] is 4,
 * then events will have a default length of 1 hour.
 */
export const CALENDAR_DEFAULT_EVENT_LENGTH = 4;
