import Title from 'antd/lib/typography/Title';
import HomePageContent from 'src/features/home/HomePage';
import PageLayout from 'src/components/PageLayout';
import HomePageStyle from './style';

const HomePage: React.FC = () => {
  return (
    <HomePageStyle>
      <PageLayout>
        <HomePageContent />
      </PageLayout>
    </HomePageStyle>
  );
};

export default HomePage;
