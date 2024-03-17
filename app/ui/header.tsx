import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-fill-primary h-[60px] px-8 flex items-center">
      <a href="/">
        <Image
          width={160}
          height={24}
          src="https://storage.googleapis.com/fitbod-web-internal/logo.svg"
          alt="Fitbod"
        />
      </a>
    </header>
  );
}
