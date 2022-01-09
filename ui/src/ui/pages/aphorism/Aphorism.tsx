import { Alert } from '../../components';
import { HOME_ROUTE } from '../routes';
import { useHistory } from 'react-router-dom';
import MainLayout from '../../layout';
import useAphorism from '../../../hooks/useAphorism';

const Aphorism = () => {
  const { author, message } = useAphorism();
  const history = useHistory();

  return (
    <MainLayout>
      <Alert
        helpLabel="Haz click en cualquier parte"
        onClick={() => history.push(HOME_ROUTE.path)}
        subtitle={author}
        title={message}
      />
    </MainLayout>
  );
};

export default Aphorism;
