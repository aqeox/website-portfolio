import Image from 'next/image';
import Link from 'next/link';

import { Link as FeatherLink } from 'react-feather';

import Campfire from '&/components/experience/campfire';
import Enfront from '&/components/experience/enfront';
import Forge from '&/components/experience/forge';
import Travelry from '&/components/experience/travelry';
import Venuelytics from '&/components/experience/venuelytics';
import { Figure } from '&/components/figure';
import { SmallFigure } from '&/components/small-figure';
import { Accordion } from '&/components/ui/accordion';
import { Button } from '&/components/ui/button';
import CampfireImage from '&/public/screenshots/campfire/campfire.png';
import RaverBotImage from '&/public/screenshots/discord-logo.webp';
import EnfrontImage from '&/public/screenshots/enfront/enfront.png';
import ForgeImage from '&/public/screenshots/forge/forge.png';
import FSCodeImage from '&/public/screenshots/fs-code.png';
import TravelryImage from '&/public/screenshots/travelry/travelry.png';
import VenuelyticsImage from '&/public/screenshots/venuelytics/venuelytics.png';

export const revalidate = 0;

export const metadata = {
  title: 'Hassan Amin',
  description:
    'UI/UX Designer, cat and game. Code and coffee by day',
  icons: {
    icon: '/favicon_io/favicon.ico',
  },
};

export default function Home(): JSX.Element {
  const getShuffledArray = (length: number): number[] => {
    const arr = Array.from({ length }, (_, i: number) => i + 1);

    // Fisher-Yates shuffle
    for (let i = length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
  };

  return (
    <>
      <section className="pb-6 pt-20 lg:px-24 lg:pb-20 lg:pt-40">
        <h1 className="mb-6 text-4xl font-extrabold lg:text-6xl">Hello, I&apos;m Hassan Amin</h1>

        <p className="mb-6 max-w-6xl text-2xl">
        I am currently a UI/UX Designer at Bateriku who prioritizes our users, ideates new solutions, and designs beautiful experiences.
        </p>

        <Link href="https://drive.google.com/file/d/1_d45ytjbqF_ETI4CCn0I4ZuOAYk6NMl3/view?usp=sharing" target="_blank" prefetch={false}>
          <Button as="span">
            <FeatherLink className="mr-2" size={18} /> View My Resume
          </Button>
        </Link>
      </section>

      {/* <section className="py-6 lg:py-20 lg:px-24" >
        
        <h2 className="mb-8 text-3xl font-bold lg:text-4xl">Work Experience</h2>
      <li className="flex gap-4">
      <dl className="flex flex-auto flex-wrap gap-x-5">
      <dd className="w-full flex-none text-sm font-semibold text-zinc-900 dark:text-zinc-100">Bateriku Sdn Bhd</dd>
      <dd className="text-xs text-zinc-500 dark:text-zinc-400">UI/UX Designer</dd>
     </dl>
     
     </li>    
    
       </section> */}


      

      <section className="py-6 lg:py-20 lg:px-24" >
        
        <h2 className="mb-8 text-3xl font-bold lg:text-4xl">Featured Work</h2>

        <Accordion type="single" collapsible>
          <Figure
            title="Motor Maniac"
            description="My latest project, Creating a car ticketing system for an event called Motor Maniac 
            involves several components, including ticket creation, purchase processing, and event management. Here's a high-level overview of how you can design such a system:"
            technologies={['HTML', 'Tailwind', 'Laravel']}
            dates="September 2023 - Present"
            type="work"
            src={TravelryImage}
            alt="Travelry app screenshots"
            extraContent={<Travelry />}
            githubLink="https://github.com/aqeox"
          />

          <Figure
            title="BRACE"
            description="The Brace Stock Management System is a comprehensive and efficient software solution designed to streamline and optimize the management related stock, 
            battery and supply organizations. This system to track all the supplier live stock available and sales for the company"

            technologies={['HTML', 'CSS', 'Laravel']}
            dates="March 2023 - Present"
            type="work"
            src={CampfireImage}
            alt="Campfire Design system documentation homepage"
            extraContent={<Campfire />}
            externalLink="https://bateriku.com/brace"
          />

          <Figure
            title="BLURPP"
            description="The Slurp Food System is an innovative and multifaceted solution designed to enhance the management and operation of food-related establishments, such as restaurants, cafes services. 
            This comprehensive system integrates various features to optimize every aspect of the foodservice industry, from order processing and kitchen management to customer engagement and analytics."
            technologies={['Next.js', 'Golang',  'Pocketbase', 'Docker']}
            dates="August 2023 - Present"
            type="personal"
            src={EnfrontImage}
            alt="Enfront dashboard screenshot"
            extraContent={<Enfront />}
            githubLink="https://github.com/aqeox"
            externalLink="https://blurpp.xyz"
          />

          <Figure
            title="KHIR KHALID"
            description="In December 2022, I joined the owner's son's team as a developer and designer for the annual Ungerboeck hackathon.
            Our team created Venuelytics, an analytics application for venues to compare their statistics against others in the surrounding
            area or worldwide. This was a fantastic opportunity for me to showcase my versatility and test out new technologies and designs.
            I am thrilled to say we took first place, and it is definitely one of my most significant achievements during my time at Momentus."
            technologies={['Nextjs', 'Tailwind']}
            dates="August 2023 - Present"
            type="personal"
            src={VenuelyticsImage}
            alt="Venuelytics dashboard screenshot"
            extraContent={<Venuelytics />}
            externalLink="https://khir-khalid.vercel.app/"
          />

          <Figure
            title="BPLAZ"
            description="The Forge Media was a freelance project I did back in June 2021. The CEO and Founder had a vision
            for a media company in the St. Louis area that was innovative and forward thinking. Having a
            quick, modern, and responsive website was an important step in becoming the best St. Louis has to
            offer."
            technologies={['HTML', 'CSS', 'JS']}
            dates="August 2023 - Present"
            type="work"
            src={ForgeImage}
            alt="Screenshot of The Forge landing page"
            extraContent={<Forge />}
            githubLink="https://github.com/aqeox"
            externalLink="http://dev.manage.bplaz.com/"
            figmaLink="https://www.figma.com/file/sqssQH5kZfAEgXlRgpQyqw/Larson?node-id=0%3A1&t=4c02hVeTeKuW4YzU-1"
          />
        </Accordion>
        
       

      </section>

      {/* <section className="py-6 lg:py-20 lg:px-24">
        <h2 className="mb-8 text-3xl font-bold lg:text-4xl">Other Work</h2>

        <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-3">
          <SmallFigure
            title="Raverbot"
            description="Raver the Discord role saver keeps a server pain-free by storing user roles in a database so you'll never have to spend time
            reassigning them!"
            link="https://github.com/AustinWildgrube/raverbot"
            src={RaverBotImage}
            alt="Discord logo"
          />

          <SmallFigure
            title="FS Personal Language"
            description="During my senior year of college, I was assigned to create a programming language using C++ as one of my final projects."
            link="https://github.com/AustinWildgrube/4280_P4"
            src={FSCodeImage}
            alt="Code from my personal language"
          />
        </div>
      </section> */}
    </>
  );
}
