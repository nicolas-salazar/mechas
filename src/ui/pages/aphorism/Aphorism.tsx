import useAphorism from '../../../hooks/useAphorism';
import { Alert } from '../../components';
import MainLayout from '../../layout';

const Aphorism = () => {
  const { author, message } = useAphorism();

  return (
    <MainLayout>
      <Alert onClick={() => {}} title={message} subtitle={author} />
    </MainLayout>
  );
};

export default Aphorism;
