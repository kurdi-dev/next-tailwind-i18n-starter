import Head from "next/head";
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import DarkModeSwitcher from "../components/shared/DarkModeSwitcher";

export default function Home() {
  const router = useRouter();
  const { t, lang } = useTranslation("home");
  const handleLanguageChange = (e) => {
    const language = e.target.value;
    router.push("/", "/", { locale: language });
  };
  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main
        className={`flex flex-col items-center justify-center w-full flex-1 px-20 text-center text-start`}
      >
        <h1 className='text-6xl font-bold text-start'>{t("title")}</h1>

        <p className='mt-4 text-2xl'>{t("getStarted")}</p>
        <code className='mt-3 p-3 font-mono text-lg bg-gray-100 rounded-md dark:text-black'>
          pages/index.js
        </code>
        <div className='flex space-x-4 p-4'>
          <select
            name='language'
            onChange={handleLanguageChange}
            id='lang'
            className='dark:text-black'
          >
            <option value='en'>English</option>
            <option value='ku'>Kurdish</option>
          </select>
          <DarkModeSwitcher />
        </div>
        <div></div>
      </main>

      <footer className='flex items-center justify-center w-full h-24 border-t'>
        <a
          className='flex items-center justify-center'
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by
          <img src='/vercel.svg' alt='Vercel Logo' className='h-4 ml-2' />
        </a>
      </footer>
    </div>
  );
}
