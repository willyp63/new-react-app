/**
 * Events may only be in intervals of [CALENDAR_STEP_SIZE] minutes.
 * For example if [CALENDAR_STEP_SIZE] is 15, then events can be 15, 30, 45, ... minutes long.
 *
 * The smaller [CALENDAR_STEP_SIZE] is, the more zoomed in the calendar will be.
 */
export const CALENDAR_STEP_SIZE = 15;

/**
 * The default length for a new event in [CALENDAR_STEP_SIZE]s.
 * 
 * So if [CALENDAR_STEP_SIZE] is 15 and [CALENDAR_DEFAULT_EVENT_LENGTH] is 4,
 * then events will default to being 1 hour long
 * 
 * This only comes into play when someone navigates to the new event view directly
 * instead of clicking on the calendar
 */
export const CALENDAR_DEFAULT_EVENT_LENGTH = 4; // 1 hour
