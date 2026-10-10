'use client';

// React Imports
import { useState } from 'react';

// Next Imports
import Image from 'next/image';

// Components
import EyeIcon from '@/components/icons/dashboard/EyeIcon';
import EyeSlashIcon from '@/components/icons/login/EyeSlashIcon';

// Actions
import { loginUser } from '@/app/actions/login';

const inputClassName =
  'bg-white border border-[#B1B1B1] text-gray-900 placeholder:text-[#8E8E8E] outline-none rounded-md focus:border-[#54E28D] block w-full font-iranYekan transition-all disabled:opacity-50 py-3.5 px-5 text-base sm:py-4 sm:text-lg';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    try {
      const result = await loginUser(username, password);

      if (result.success) {
        setSuccess(result.message);
        setUsername('');
        setPassword('');
      } else {
        setError(result.message);
      }
    } catch {
      setError('خطای نامشخصی رخ داده است');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative z-10 flex min-h-dvh w-full flex-col items-center justify-center gap-10 px-5 pt-40 pb-12 sm:px-8 sm:pt-44 lg:flex-row lg:gap-16 lg:px-12 lg:pt-12 xl:gap-[4%] 2xl:gap-[5%]">
      {/* Login Image — only alongside the side panel, from xl up */}
      <div className="relative hidden aspect-[19/17] w-[34%] max-w-[47.5rem] shrink-0 overflow-hidden rounded-xl xl:block xl:max-h-[70vh] 2xl:w-[36%]">
        <Image
          src="https://res.cloudinary.com/ye11utoz/image/upload/f_auto,q_auto/newletter-join-us-sign-up_l8df_dj1quo"
          alt="ورود به پنل مدیریت فراایده"
          fill
          sizes="(min-width: 1536px) 36vw, 34vw"
          className="object-cover"
        />
      </div>

      {/* Login Form */}
      <div className="rtl w-full max-w-md xl:w-[30%] xl:min-w-[22rem] xl:max-w-[35rem]">
        <h2 className="font-iranYekan mb-3 text-3xl font-semibold sm:mb-5 sm:text-4xl">ورود</h2>
        <p className="font-iranYekan text-sm text-[#B9B8B8] sm:text-base">
          لطفا برای ورود به پنل مدیریت نام کاربری و رمز عبور خود را وارد کنید.
        </p>

        {/* Error Message */}
        {error && (
          <div className="font-iranYekan mt-5 rounded-md border border-red-300 bg-red-50 px-4 py-3 text-sm text-red-700 sm:text-base">
            {error}
          </div>
        )}

        {/* Success Message */}
        {success && (
          <div className="font-iranYekan mt-5 rounded-md border border-green-300 bg-green-50 px-4 py-3 text-sm text-green-700 sm:text-base">
            {success}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-6 sm:mt-8">
          {/* UserName */}
          <div>
            <label
              htmlFor="username"
              className="font-iranYekan mb-3 block text-lg font-semibold text-[#263A43] sm:mb-5 sm:text-xl"
            >
              نام کاربری
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={inputClassName}
              placeholder="نام کاربری خود را وارد کنید..."
              disabled={loading}
              required
            />
          </div>

          {/* Password */}
          <div className="mt-4 sm:mt-5">
            <label
              htmlFor="password"
              className="font-iranYekan mb-3 block text-lg font-semibold text-[#263A43] sm:mb-5 sm:text-xl"
            >
              رمز عبور
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`${inputClassName} pl-12 sm:pl-14`}
                placeholder="رمز عبور خود را وارد کنید..."
                disabled={loading}
                required
              />

              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                disabled={loading}
                aria-label={showPassword ? 'پنهان کردن رمز عبور' : 'نمایش رمز عبور'}
                aria-pressed={showPassword}
                className="absolute top-1/2 left-4 -translate-y-1/2 cursor-pointer text-[#8E8E8E] transition-opacity hover:opacity-70 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {showPassword ? <EyeSlashIcon size="25" /> : <EyeIcon size="25" />}
              </button>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="bg-primary font-iranYekan mt-8 w-full cursor-pointer rounded-md border border-transparent py-3.5 text-center text-lg font-semibold text-white transition-all hover:border-primary hover:bg-white hover:text-primary disabled:cursor-not-allowed disabled:opacity-50 sm:mt-12 sm:py-4 sm:text-xl"
          >
            {loading ? 'درحال ورود...' : 'ورود'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
