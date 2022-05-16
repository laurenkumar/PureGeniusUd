import { Button, Layout, PageHeader } from 'antd';
import PageLayoutStyle from './style';
import { useHistory } from 'react-router-dom';
import HeaderSearch from './HeaderSearch';
import ConnectWalletButton from '../ConnectWalletButton';

const { Content } = Layout;

const PageLayout: React.FC<{ showConnectWallet?: boolean }> = ({
  children,
  showConnectWallet = true,
}) => {
  const history = useHistory();
  return (
    <PageLayoutStyle>
      <Layout>
        <PageHeader
          title={
            <span className='app-name' onClick={() => history.push('/')}>
              Myflix
            </span>
          }
          subTitle='Your streaming service'
          extra={[
            <Button type='link' key='1' onClick={() => history.push('/')}>
              Home
            </Button>,
            <HeaderSearch />,
            <ConnectWalletButton
              key='4'
              style={{ visibility: showConnectWallet ? 'visible' : 'hidden' }}
            />,
          ]}
        ></PageHeader>
        <Content>
          <div className='container'>{children}</div>
        </Content>
      </Layout>
    </PageLayoutStyle>
  );
};

export default PageLayout;
