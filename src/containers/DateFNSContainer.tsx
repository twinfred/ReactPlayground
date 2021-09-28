import { addDays, format, getUnixTime } from "date-fns";
import { zonedTimeToUtc } from 'date-fns-tz';
import ko from "date-fns/esm/locale/ko";


function DateFNSContainer() {
  const today = new Date();
  const tomorrow = addDays(today, 1);
  const timeInKorea = zonedTimeToUtc(today, 'Asia/Korea');

  return (
    <>
      <h2>2. Using date-fns to do some magic to dates.</h2>
      <p>Today is {format(today, 'iiii - P')}</p>
      <p>In Unix time, it is currently {getUnixTime(today)}</p>
      <p>Tomorrow is {format(tomorrow, 'iiii - P')}</p>
      <p>If we were in Korea, we would write today's date like this: {format(timeInKorea, 'iiii - P', { locale: ko })}</p>
    </>
  )
}

export default DateFNSContainer;