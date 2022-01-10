import { Dedication as TDedication } from '../../../types/dedication';
import { AuthorLabel, Container, Message } from './Dedication.styles';

type DedicationProps = Omit<TDedication, 'createdAt' | 'id'>;

const Dedication = ({ author, message }: DedicationProps) => (
  <Container>
    <Message>{`"${message}"`}</Message>
    <AuthorLabel>{author}</AuthorLabel>
  </Container>
);

export default Dedication;
