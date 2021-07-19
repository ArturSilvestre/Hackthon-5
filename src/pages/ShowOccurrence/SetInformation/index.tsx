import { useRef } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { Container } from './styles';

interface IProps {
  title: string;
  placeholder: string;
  onSubmit: (number: string) => Promise<void>;
  isLoading: boolean;
}

const SetInformation = ({
  title,
  placeholder,
  onSubmit,
  isLoading,
}: IProps): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Container>
      <h5>{title}</h5>

      <div>
        <input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          disabled={isLoading}
        />
        <button
          type="button"
          onClick={() =>
            inputRef.current?.value && onSubmit(inputRef.current?.value)
          }
          disabled={isLoading}
        >
          <FaLongArrowAltRight />
        </button>
      </div>
    </Container>
  );
};

export default SetInformation;
