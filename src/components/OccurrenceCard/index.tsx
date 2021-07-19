import { useMemo } from 'react';
import { format, differenceInDays } from 'date-fns';
import { FaClock } from 'react-icons/fa';
import { IOccurrence } from '../../pages/Dashboard';
import getOccurrenceTypeInformation from '../../utils/getOccurrenceTypeInformation';
import { Container } from './styles';

interface IProps {
  data: IOccurrence;
}

const OccurrenceCard = ({ data }: IProps): JSX.Element => {
  const { icon, title } = getOccurrenceTypeInformation(data.category);

  const datetime = useMemo(
    () => new Date(data.occurrenceDate),
    [data.occurrenceDate],
  );

  const notificationColor = useMemo(() => {
    const now = Date.now();

    const days = differenceInDays(datetime, now);

    if (days >= 7) {
      return 'red';
    }

    if (days >= 1) {
      return 'yellow';
    }

    return 'green';
  }, [datetime]);

  return (
    <Container>
      <div>
        <p>{title}</p>
        <div>
          {icon({ className: 'type-icon' })}
          {!!notificationColor && (
            <div className={`notification ${notificationColor}`} />
          )}
        </div>
      </div>

      <div>
        <div className="column">
          <span>Bairro</span>
          <p>Jardim Boa Esperança</p>
        </div>
      </div>

      <div>
        <div className="right">
          <FaClock />
          <p className="time">
            {format(datetime, 'HH:mm')} de {format(datetime, 'dd/MM/yy')}
          </p>
        </div>
      </div>
    </Container>
  );
};

export default OccurrenceCard;
