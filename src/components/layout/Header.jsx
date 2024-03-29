import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="flex items-center justify-between flex-wrap">
        <Link href="/" className="text-primary font-semibold text-2xl">FOOD ORDERING APP</Link>
        <nav className="flex items-center gap-8 text-gray-500 font-semibold flex-wrap">
          <Link href="/">Home</Link>
          <Link href="/">Menu</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <div className="ml-auto">
            <Link href="/" className="bg-primary rounded-full text-white px-6 py-2">Login</Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
