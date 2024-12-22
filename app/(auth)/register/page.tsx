import RegisterForm from '@/components/forms/register';
import Container from '@/components/shared/container';

export default function Page() {
  return (
    <main>
      <Container className='max-w-2xl py-8 space-y-8'>
        <div className='space-y-4 text-center'>
          <h2 className='text-xl font-bold text-primary lg:text-3xl'>
            IQ Hub Registration Form
          </h2>
          <p className='text-lg font-semibold lg:text-xl text-primary'>Welcome!</p>
          <p>
            This is the Ique Hub Admissions Portal, your gateway to acquiring
            some of today’s most valuable skills and joining our innovative
            talent community.
          </p>
          <p>
            To get started, create an account or sign in by providing your email
            address, phone number, and password. You can also log in using
            Google, Linkedin or GitHub.
          </p>
          <p>
            If you already have an account, scroll down and click the &quot;Log
            in&quot; button to access it.
          </p>
        </div>
        <RegisterForm />
      </Container>
    </main>
  );
}
