import { Aphorism as AphorismRenderer } from '../../components';
import { HOME_ROUTE } from '../routes';
import { playAudio } from '../../../store/musicPlayerSlice';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import MainLayout from '../../layout';
import useAphorism from '../../../hooks/useAphorism';

const Aphorism = () => {
  const { author, message } = useAphorism();
  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <MainLayout>
      <AphorismRenderer
        helpLabel="Ponte tus audífonos y haz click en cualquier parte"
        onClick={() => {
          dispatch(playAudio());
          history.push(HOME_ROUTE.path);
        }}
        subtitle={author}
        title={message}
      />
    </MainLayout>
  );
};

export default Aphorism;
