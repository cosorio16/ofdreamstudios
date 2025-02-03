import Verified from "../icons/Verified";
import Alert from "../icons/Alert";
import Cookies from "../icons/Cookies";
import Globe from "../icons/Globe";

function Footer() {
  return (
    <>
      <footer className="hidden w-full min-h-96 bg-zinc-900 text-white px-20 py-10 text-2xl xl:grid grid-cols-2">
        <div className="flex justify-between flex-col gap-4">
          <h1 className="grow text-4xl flex items-center gap-2">
            OfdreamStudios
            <span className="pb-1">
              <Verified sizes="25" />
            </span>
          </h1>
          <p className="text-2xl w-96">
            BEST PRICES, AFFORDABLE PRICES, SAFE IN YOUR HANDS.
          </p>
          <p className="text-sm">
            &copy; 2025 OfdreamStudios. All Rights Reserved.
          </p>
        </div>
        <div className="flex flex-col">
          <div className="grid grid-cols-3 gap-2 grow justify-items-end">
            <nav>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#">NEW</a>
                </li>
                <li>
                  <a href="#">FEATURING</a>
                </li>
                <li>
                  <a href="#">SALE</a>
                </li>
                <li>
                  <a href="#">DEVELOPER</a>
                </li>
              </ul>
            </nav>
            <nav>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">RELEASES</a>
                </li>
                <li>
                  <a href="#">ABOUT</a>
                </li>
                <li>
                  <a href="#">PQRS</a>
                </li>
              </ul>
            </nav>
            <nav>
              <ul className="flex flex-col gap-3">
                <li>
                  <a href="#">INSTAGRAM</a>
                </li>
                <li>
                  <a href="#">FACEBOOK</a>
                </li>
                <li>
                  <a href="#">TIKTOK</a>
                </li>
                <li>
                  <a href="#">X</a>
                </li>
              </ul>
            </nav>
          </div>
          <nav className="self-end flex items-center gap-10">
            <button className="flex items-center gap-2">
              <Alert sizes={35} />
              Legal
            </button>
            <button className="flex items-center gap-2">
              <Cookies sizes={35} />
              Cookie Settings
            </button>
            <button className="flex items-center gap-2">
              <Globe sizes={35} />
              English
            </button>
          </nav>
        </div>
      </footer>

      <footer className="bg-[#222] text-white px-5 py-10">
        <div className="flex justify-between flex-col gap-4">
          <h1 className="grow text-4xl flex items-center gap-2">
            OfdreamStudios
            <span className="pb-1">
              <Verified sizes="25" />
            </span>
          </h1>
          <p className="text-2xl w-96">
            BEST PRICES, AFFORDABLE PRICES, SAFE IN YOUR HANDS.
          </p>
          <p className="text-sm">
            &copy; 2025 OfdreamStudios. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
