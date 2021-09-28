import { addDays, format, getUnixTime, differenceInDays, addMinutes, addHours } from "date-fns";
import { zonedTimeToUtc } from 'date-fns-tz';
import ko from "date-fns/esm/locale/ko";


function DateFNSContainer() {
  const today = new Date();
  const tomorrow = addDays(today, 1);
  const oneHour45MinsFromNow = addHours(addMinutes(today, 42), 1);
  const timeInKorea = zonedTimeToUtc(today, 'Asia/Korea');
  const christmas = new Date('December 25 ' + today.getFullYear());
  const daysUntilChristmas = differenceInDays(christmas, today);

  return (
    <>
      <h2>2. Using date-fns to do some magic to dates and times.</h2>
      <p>Today is {format(today, 'iiii - P')}</p>
      <p>In Unix time, it is currently {getUnixTime(today)}</p>
      <p>Tomorrow is {format(tomorrow, 'iiii - P')}</p>
      <p>It is currently {format(today, 'h:m a')}, but in one hour and 42 minutes, it will be {format(oneHour45MinsFromNow, 'h:m a')}</p>
      <p>If we were in Korea, we would write today's date like this: {format(timeInKorea, 'iiii - P', { locale: ko })}</p>
      <p>There {daysUntilChristmas === 1 ? 'is' : 'are'} {daysUntilChristmas} {daysUntilChristmas === 1 ? 'day' : 'days'} until Christmas.</p>
    </>
  )
}

export default DateFNSContainer;