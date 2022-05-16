import Title from 'antd/lib/typography/Title';
import PageLayout from 'src/components/PageLayout';
import CartPageStyle from './style';
import CartEmpty from 'src/components/Cart/CartEmpty';

const CartPage: React.FC = () => {
  return (
    <CartPageStyle>
      <PageLayout showConnectWallet={false}>
        <Title>Your Cart</Title>
        <CartEmpty />
      </PageLayout>
    </CartPageStyle>
  );
};

export default CartPage;
