import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import updateLocale from 'dayjs/plugin/updateLocale';
import { AgoAccent, MainLabel } from './SinceLabel.styles';

dayjs.extend(relativeTime);
dayjs.extend(updateLocale);

dayjs.updateLocale('en', {
  relativeTime: {
    future: 'en %s',
    past: '%s',
    s: 'algunos segundos',
    m: 'un minuto',
    mm: '%d minutos',
    h: 'una hora',
    hh: '%d horas',
    d: 'un día',
    dd: '%d días',
    M: 'un mes',
    MM: '%d meses',
    y: 'un año',
    yy: '%d años',
  },
});

const MECHITAS_PASS_AWAY_DATE_STRING = '2022-01-04T04:27:44.303Z';
const MECHITAS_PASS_AWAY_DATE = new Date(MECHITAS_PASS_AWAY_DATE_STRING);

const SinceLabel = () => (
  <MainLabel>
    Ya son <AgoAccent>{dayjs(MECHITAS_PASS_AWAY_DATE).fromNow()}</AgoAccent>{' '}
    desde que ella te espera allá donde terminan las estrellas
  </MainLabel>
);

export default SinceLabel;
