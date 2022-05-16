import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Spin from 'antd/lib/spin';
import { getRedirectUrl } from 'src/utils';
import udlogin from 'src/utils/udlogin';

const CallbackPage: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    const uauth = udlogin();

    uauth
      .loginCallback()
      .then(() => {
        const redirectUrl: string = getRedirectUrl() || '/browse';
        history.push('browse');
      })
      .catch((error) => {
        history.push('/');
        console.error('callback error:', error);
      });
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        width: '100%',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Spin size='large' />
    </div>
  );
};

export default CallbackPage;
