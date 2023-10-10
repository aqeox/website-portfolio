import Image from 'next/image';
import Link from 'next/link';

import Signature from '&/public/signature.png';

const navigation = [
  { name: 'About', href: '' },
  { name: 'Blog', href: '' },
  { name: 'Github', href: 'https://github.com/aqeox' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/in/austin-wildgrube-967071b7/' },
];

export function Navigation() {
  return (
    <header>
      <nav className="container top-0 right-0 left-0 z-50 mx-auto flex items-center justify-between p-4 backdrop-blur-lg lg:px-6 bg-white rounded-2xl border-2 border-zinc-100 mt-9">
        <Link href="/" className="-m-1.5 p-1.5 relative" target="_blank">
          <Image className="h-5 w-40" src={Signature} alt="Hassan/Amin" priority />
        </Link>

        {/* <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map(item => (
            <Link className="text-sm leading-6 text-slate-700" href={item.href} target="_blank" key={item.name}>
              {item.name}
            </Link>
          ))}
        </div> */}
        <div className="w-44 bg-zinc-100 rounded-3xl py-3 px-6" >
          <div className="text-neutral-800 text-xl font-bold font-['Plus Jakarta Sans'] text-center">Get in touch</div>
          </div>
      </nav>
    </header>
  );
}
