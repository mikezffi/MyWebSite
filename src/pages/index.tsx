import Head from 'next/head';
import { BioInfo } from '../components/BioInfo';
import { Contact } from '../components/Contact';

export default function Home() {
  return (
    <div className="container">
      <section id="contact">
        <Contact />
      </section>

      <section id="info">
        <BioInfo />
      </section>

      {/* <section id="skills">
      </section> */}
    </div>
  )
}