import Head from "next/head";
import Articles from "../components/Articles";
import Header from "../components/Header";
import Main from "../components/Main";


export default function Home() {

  return (
    <div className=''>
      <Head>
        <title>wDot</title>
      </Head>

      <Header />
      <Main />
      <Articles />
           
    </div>
  )
}
