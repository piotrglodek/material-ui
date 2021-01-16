// components
import Header from '../components/Header';
import PageHeader from '../components/PageHeader';
// MUI
import PeopleOutlineTwoToneIcon from '@material-ui/icons/PeopleOutlineTwoTone';

function App() {
  return (
    <>
      <Header />
      <PageHeader
        title='Page header'
        subTitle='Page description'
        icon={<PeopleOutlineTwoToneIcon fontSize='large' />}
      />
    </>
  );
}

export default App;
