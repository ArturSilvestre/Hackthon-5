import { useEffect, useState, useCallback } from 'react';
import Loader from 'react-loader-spinner';
import { Container, LoaderContainer, Main } from './styles';

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
  const [selectedType, setSelectedType] = useState<'read' | 'unread'>('unread');
  const [occurrences, setOccurrences] = useState<IOccurrence[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getOccurrences = useCallback(async () => {
    setIsLoading(true);

    const response = await api.get(
      `/occurrence/employee/list?filter=${selectedType}`,
    );

    setOccurrences(response.data.occurrences);

    setIsLoading(false);
  }, [selectedType]);

  useEffect(() => {
    getOccurrences();
  }, [getOccurrences]);

  return (
    <Container>
      {/* <Filters /> */}

      <Main>
        <Header selectedType={selectedType} setSelectedType={setSelectedType} />
        {isLoading && (
          <LoaderContainer>
            <Loader type="ThreeDots" />
          </LoaderContainer>
        )}
        <OccurrencesContainer occurrences={occurrences} />
      </Main>
    </Container>
  );
}
