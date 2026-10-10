'use client';

// Components
import LayoutLoginPage from './LayoutLoginPage';
import LoginForm from './LoginForm';

const LoginPageWrapper = () => {
  return (
    <div className="relative w-full overflow-x-hidden bg-white">
      {/* Decorative layer */}
      <LayoutLoginPage />

      {/* Content layer */}
      <LoginForm />
    </div>
  );
};

export default LoginPageWrapper;
