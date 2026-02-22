import Button from './ui/Button';

export default function PaypalDonateForm() {
  return (
    <form
      action='https://www.paypal.com/donate'
      method='post'
      target='_top'
      className='flex flex-col items-center gap-2'
    >
      <input type='hidden' name='hosted_button_id' value='WSTLMBNB7QZTC' />

      <Button
        variant='primary'
        size='lg'
        type='submit'
        className='cursor-pointer'
      >
        Donate Today
      </Button>
    </form>
  );
}
