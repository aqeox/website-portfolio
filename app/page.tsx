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
      {/* <section className="pb-6 pt-20 lg:px-24 lg:pb-20 lg:pt-40">
        <h1 className="mb-6 text-4xl font-extrabold lg:text-6xl">Hello, I&apos;m Hassan Amin</h1>

        <p className="mb-6 max-w-6xl text-2xl">
        I am currently a UI/UX Designer at Bateriku who prioritizes our users, ideates new solutions, and designs beautiful experiences.
        </p>

        <Link href="https://drive.google.com/file/d/1_d45ytjbqF_ETI4CCn0I4ZuOAYk6NMl3/view?usp=sharing" target="_blank" prefetch={false}>
          <Button as="span">
            <FeatherLink className="mr-2" size={18} /> View My Resume
          </Button>
        </Link>
      </section> */}

      {/* <section className="py-6 lg:py-20 lg:px-24" >
        
        <h2 className="mb-8 text-3xl font-bold lg:text-4xl">Work Experience</h2>
      <li className="flex gap-4">
      <dl className="flex flex-auto flex-wrap gap-x-5">
      <dd className="w-full flex-none text-sm font-semibold text-zinc-900 dark:text-zinc-100">Bateriku Sdn Bhd</dd>
      <dd className="text-xs text-zinc-500 dark:text-zinc-400">UI/UX Designer</dd>
     </dl>
     
     </li>    
    
       </section> */}


      

      {/* <section className="py-6 lg:py-20 lg:px-24" >
        
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
        
      </section> */}

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

      {/* Am Editted */}

      <div className="bg-white rounded-2xl border-2 border-zinc-100 flex px-14 py-12">
        <div className="w-1/2">
          <div className="w-60 h-20 bg-white rounded-full border-2 border-stone-50 flex justify-center items-center gap-4" >
            <div className="w-14 h-14 bg-zinc-100 rounded-full" >
            </div>
            <div className="flex-col flex">
            <span className="text-black text-xl font-medium font-['Plus Jakarta Sans']">My Name is </span>
                <span className="text-black text-xl font-bold font-['Plus Jakarta Sans']">Hassan Amin</span>
            </div>
          </div>
          <div className="text-black text-5xl font-bold font-['Plus Jakarta Sans'] mt-6">I’m Hassan Amin,<br/>UI/UX at Bateriku.com</div>
          <div className="w-96 text-neutral-400 text-xl font-normal font-['Inter'] mt-7">I’m Hassan Amin, a passionate tech enthusiast and entrepreneur. Along with my team, I design, develop, and launch amazing websites and digital products for companies and for ourselves.</div>
          <div className="flex gap-6 mt-24">
          <div className="w-56 h-20 bg-neutral-800 rounded-full justify-center items-center flex" >
          <div className="text-white text-xl font-bold font-['Plus Jakarta Sans']">Get in touch</div>
          </div>
          <div className="w-56 h-20 bg-zinc-100 rounded-full justify-center items-center flex" >
          <div className="text-neutral-800 text-xl font-bold font-['Plus Jakarta Sans']">More about me</div>
          </div>
          </div>
        </div>
        <div className="w-1/2 justify-end items-center flex">
          <div className="w-96 h-96 bg-black bg-opacity-20 rounded-full" />
        </div>
      </div>
      <div className=" mt-24 flex gap-10">
        <div className="w-1/2 bg-white rounded-2xl border-2 border-zinc-100 p-14" >
          <div className="w-44 h-12 bg-zinc-100 rounded-full flex justify-center items-center" >
            <div className="text-neutral-800 text-xl font-bold font-['Plus Jakarta Sans']">My thoughts</div>
          </div>
          <div className="text-black text-4xl font-bold font-['Plus Jakarta Sans'] mt-8">Projects</div>
          <div className=" mt-8 flex flex-col gap-4">
            <div className="flex gap-5">
              <div className="w-14 h-14 bg-zinc-300 rounded-full" />
              <div className="flex flex-col">
                <div className="text-black text-xl font-bold font-['Plus Jakarta Sans']">Blurpp.com</div>
                <div className="text-black text-base font-medium font-['Plus Jakarta Sans']">Food System - Partner</div>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="w-14 h-14 bg-zinc-300 rounded-full" />
              <div className="flex flex-col">
                <div className="text-black text-xl font-bold font-['Plus Jakarta Sans']">Blurpp.com</div>
                <div className="text-black text-base font-medium font-['Plus Jakarta Sans']">Food System - Partner</div>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="w-14 h-14 bg-zinc-300 rounded-full" />
              <div className="flex flex-col">
                <div className="text-black text-xl font-bold font-['Plus Jakarta Sans']">Blurpp.com</div>
                <div className="text-black text-base font-medium font-['Plus Jakarta Sans']">Food System - Partner</div>
              </div>
            </div><div className="flex gap-5">
              <div className="w-14 h-14 bg-zinc-300 rounded-full" />
              <div className="flex flex-col">
                <div className="text-black text-xl font-bold font-['Plus Jakarta Sans']">Blurpp.com</div>
                <div className="text-black text-base font-medium font-['Plus Jakarta Sans']">Food System - Partner</div>
              </div>
            </div><div className="flex gap-5">
              <div className="w-14 h-14 bg-zinc-300 rounded-full" />
              <div className="flex flex-col">
                <div className="text-black text-xl font-bold font-['Plus Jakarta Sans']">Blurpp.com</div>
                <div className="text-black text-base font-medium font-['Plus Jakarta Sans']">Food System - Partner</div>
              </div>
            </div>
          </div>
            
        </div>
        <div className="w-1/2 bg-white rounded-2xl border-2 border-zinc-100 p-14" >
        <div className="w-36 h-12 bg-zinc-100 rounded-full flex justify-center items-center" >
            <div className="text-neutral-800 text-xl font-bold font-['Plus Jakarta Sans']">About</div>
          </div>
          <div className="text-black text-4xl font-bold font-['Plus Jakarta Sans'] mt-8">More about me</div>
          <div className=" text-neutral-400 text-xl font-normal font-['Inter'] mt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It</div>
          <div className="text-black text-4xl font-bold font-['Plus Jakarta Sans'] mt-8">Social Media</div>
          <div className="flex flex-row justify-between mt-8">
            <div className="w-36 h-11 justify-start items-start gap-7 inline-flex">
              <img className="w-11 h-11" src="/icon/github_logo.png" />
              <div className="grow shrink basis-0 self-stretch relative">
                <div className="left-0 top-0 absolute text-black text-xl font-extrabold font-['Plus Jakarta Sans']">Github</div>
                <div className="left-0 top-[25px] absolute text-black text-base font-medium font-['Plus Jakarta Sans']">@aqeox</div>
              </div>
            </div>
            <div className="w-36 h-11 justify-start items-start gap-7 inline-flex">
              <img className="w-11 h-11" src="/icon/dribble_logo.png" />
              <div className="grow shrink basis-0 self-stretch relative">
                <div className="left-0 top-0 absolute text-black text-xl font-extrabold font-['Plus Jakarta Sans']">Dribble</div>
                <div className="left-0 top-[25px] absolute text-black text-base font-medium font-['Plus Jakarta Sans']">@youwdin</div>
              </div>
            </div>
            <div className="w-36 h-11 justify-start items-start gap-7 inline-flex">
              <img className="w-11 h-11" src="/icon/linkedin_logo.png" />
              <div className="grow shrink basis-0 self-stretch relative">
                <div className="left-0 top-0 absolute text-black text-xl font-extrabold font-['Plus Jakarta Sans']">Twitter</div>
                <div className="left-0 top-[25px] absolute text-black text-base font-medium font-['Plus Jakarta Sans']">@youwdin</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-24 flex gap-10">
        <div className="w-1/2 " >
          <div className="w-48 h-9 bg-zinc-100 rounded-full flex justify-center items-center" >
            <div className="text-neutral-800 text-xl font-bold font-['Plus Jakarta Sans']">My Companies</div>
          </div>
          <div className="text-black text-4xl font-bold font-['Plus Jakarta Sans'] mt-5 ml-5">Currently working on</div>
        </div>
        <div className="w-1/2 " >
          <div className="w-5/6 text-neutral-400 text-2xl font-light font-['Plus Jakarta Sans'] ml-8">While I am also commonly working on some smaller side projects or personal interests, my day-to-day is spent mostly involved on the following companies.</div>
        </div>
      </div>
      <div className=" mt-24 flex gap-10">
        <div className="w-1/2 bg-white rounded-2xl border-2 border-zinc-100 px-10 py-9 relative" >
          <div className="flex flex-row">
            <div className="w-24 h-24 bg-black rounded-2xl justify-center items-center flex" >
              <img src="/icon/bateriku_logo.svg" alt="" />
            </div>
            <div className="flex flex-col ml-8">
              <div className="text-black text-4xl font-bold font-['Plus Jakarta Sans'] mt-1">Bateriku.com</div>
              <div className=" text-neutral-400 text-xl font-light font-['Plus Jakarta Sans']">
              <ul className="list-disc ml-5">
              <li>Revamp the system</li>
              <li>Code for the Front-end</li>
              </ul>
              </div>
            </div>
            <div className="w-14 h-14 bg-zinc-100 justify-center items-center flex rounded-full absolute right-4 top-3" >
              <div className=" p-1 justify-center items-center inline-flex" >
                <img className="w-full h-full" src="/icon/arrow_up_right.svg" alt="" />
              </div>
            </div>
          </div>
          <div className=" mt-12 h-96 bg-slate-800 rounded-2xl flex justify-center items-center" >
            <img src="/icon/brace_logo.png" alt="" />
          </div>
        </div>
        <div className="w-1/2 bg-white rounded-2xl border-2 border-zinc-100 px-10 py-9 relative" >
          <div className="flex flex-row">
            <div className="w-24 h-24 bg-black rounded-2xl justify-center items-center flex" >
              <img src="/icon/motormaniac_logo.svg" alt="" />
            </div>
            <div className="flex flex-col ml-8">
              <div className="text-black text-4xl font-bold font-['Plus Jakarta Sans']">Motor Maniac</div>
              <div className=" text-neutral-400 text-xl font-light font-['Plus Jakarta Sans'] mt-1">
                <ul className="list-disc ml-5">
              <li>Create the system and design</li>
              <li>Code for the Front-end</li>
              </ul>
              </div>
            </div>
            <div className="w-14 h-14 bg-zinc-100 justify-center items-center flex rounded-full absolute right-4 top-3" >
              <div className=" p-1 justify-center items-center inline-flex" >
                <img className="w-full h-full" src="/icon/arrow_up_right.svg" alt="" />
              </div>
            </div>
          </div>
          <div className=" mt-12 h-96 bg-black rounded-2xl flex justify-center items-center" >
            <img src="/icon/motormaniac_logo.png" alt="" />
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl border-2 border-zinc-100 flex px-14 py-12 h-96 items-end mt-24">
        <div className="w-56 h-14 bg-neutral-800 rounded-full flex justify-center items-center" >
          <div className="text-white text-xl font-bold font-['Plus Jakarta Sans']">View Portfolio</div>
        </div>
      </div>
    </>
  );
}
