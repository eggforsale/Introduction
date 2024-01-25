import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
      <div style={{ textAlign: 'center' }}>
        My age is 21 and I live in Sta Ana, Pampanga. My hobbies are: gaming, 
        watching, reading, and sleeping. I took Computer Engineering because
        my mom said that Computer Engineering is a good course for me,
         honestly I don't know what course I will take after i finish the senior highschool so I decided
         my mom decision and I want to make her happy even what the outcomes or struggle I will take. 
         I don't even know how do I see myself in 5 years, but I can't make my mom disappointed 
         And I don't want to be a burden to her so I will keep moving forward 'till I achieve 
         everything and question again myself that "how do i see myself in past 5 years".' 
         
      </div>
      <div style={{ textAlign: 'center' }}>
        <strong>EXPECTATIONS IN THIS SUBJECT:</strong>
      <ul style={{ listStyleType: 'disc', textAlign: 'left', marginLeft: '2em' }}>
          <li>It's difficult. </li>
          <li>Stress,Exciting,Exciting and EXCITINGGG. </li>
          <li>I don't know, I really don't wanna expect everything in my life, It is, What is.</li>
        </ul>
      </div>
      </section>
    </Layout>
  );
}