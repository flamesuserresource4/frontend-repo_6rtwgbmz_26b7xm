export default function Footer() {
  return (
    <footer className="relative bg-black py-12 text-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="text-white/80">© {new Date().getFullYear()} Shadow Clan • Crossfire</div>
          <div className="flex items-center gap-4 text-white/70">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#join" className="hover:text-white">Join</a>
            <a href="#" className="hover:text-white">Discord</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
