import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";


export default function Home() {

  return (
    <div className=''>
      <Head>
        <title>Web 3.0</title>
      </Head>

      <Header />
      <Main />
           
    </div>
  )
}
