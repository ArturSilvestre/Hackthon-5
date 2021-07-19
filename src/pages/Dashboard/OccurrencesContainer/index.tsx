import { IOccurrence } from '..';
import OccurrenceCard from '../../../components/OccurrenceCard';
import { Container } from './styles';

interface IProps {
  occurrences: IOccurrence[];
}

const OccurrencesContainer = ({ occurrences }: IProps): JSX.Element => {
  return (
    <Container>
      {occurrences.map(occurrence => (
        <OccurrenceCard data={occurrence} />
      ))}
    </Container>
  );
};

export default OccurrencesContainer;
