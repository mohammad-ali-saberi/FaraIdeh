// Components
import LoginPageWrapper from '@/views/auth/login/_loginpage';

// Types
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ورود',
};

const LoginPage = () => {
  return <LoginPageWrapper />;
};

export default LoginPage;
