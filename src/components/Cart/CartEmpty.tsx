import Button from 'src/components/Button';
import Image from 'src/components/Image';

const CartEmpty: React.FC = () => {
  return (
    <div>
      <div>
        <Image src='/emptyCart.svg' alt='empty cart' width='500px' />
      </div>
      <div>
        <h4>Your cart feels lonely.</h4>
        <p>
          Your shopping cart lives to serve. Give it purpose - fill it with
          books, electronicts, videos, etc. and make it happy.
        </p>
        <div>
          <Button
            style={{
              marginTop: '20px',
              backgroundColor: 'black',
              border: '1px solid rgb(49, 61, 92)',
            }}
          >
            Continue Shopping
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartEmpty;
