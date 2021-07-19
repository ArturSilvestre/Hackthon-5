import { useEffect, useState } from 'react';
import { Container, Main } from './styles';

import OccurrencesContainer from './OccurrencesContainer';
import api from '../../services/api';
import OccurrenceTypes from '../../enums/OccurrenceTypes';
import OccurrenceStatus from '../../enums/OccurrenceStatus';

import Header from './Header';

export interface IOccurrence {
  id: string;
  category: OccurrenceTypes;
  address: {
    district: string;
  };
  occurrenceDate: string;
  occurrenceNumber: string | null;
  violationNumber: string | null;
  status: OccurrenceStatus;
}

export default function Dashboard(): JSX.Element {
  const [occurrences, setOccurrences] = useState<IOccurrence[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getOccurrences = async () => {
    setIsLoading(true);

    const response = await api.get('/occurrence/employee/list');

    setOccurrences(response.data.occurrences);

    setIsLoading(false);
  };

  useEffect(() => {
    getOccurrences();
  }, []);

  return (
    <Container>
      {/* <Filters /> */}

      <Main>
        <Header />
        <OccurrencesContainer occurrences={occurrences} />
      </Main>
    </Container>
  );
}
