import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'react-loader-spinner';
import { Container, Content } from './styles';

import api from '../../services/api';
import Colors from '../../styles/Colors';

export default function ConfirmAccount(): JSX.Element {
  const { id } = useParams<{ id: string }>();

  const [isLoading, setIsLoading] = useState(false);

  const activeAccount = useCallback(async () => {
    setIsLoading(true);

    await api.post(`/citizen/active/${id}`);

    setIsLoading(false);
  }, [id]);

  useEffect(() => {
    activeAccount();
  }, [activeAccount]);

  return (
    <Container>
      <Content>
        {isLoading ? (
          <Loader type="ThreeDots" color={Colors.teal} />
        ) : (
          <>
            <h3>
              Confirmado com <span>sucesso!</span>
            </h3>
            <span>Sua conta já pode ser acessada pelo aplicativo</span>
          </>
        )}
      </Content>
    </Container>
  );
}
