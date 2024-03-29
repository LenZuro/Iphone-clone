import { footerLinks } from "../constants";

const Footer = () => {
  <footer className="px-5 py-5 sm:px-10">
    <div className="screen-max-width">
      <p className="text-xs font-semibold text-gray">
        More ways to shop:{" "}
        <span className="text-blue underline">Find an Apple Store </span>
        Or <span className="text-blue underline">other retailer</span> Near you.
      </p>
      <p className="text-xs font-semibold text-gray">Or call 555-555-555</p>
    </div>
    <div className="my-5 h-[1px] w-full bg-neutral-700" />
    <div className="flex flex-col justify-between md:flex-row md:items-center">
      <p className="text-xs font-semibold text-gray">
        Copright @ 2024 Apple Inc. All rights reserved.
      </p>
      <div className="flex">
        {footerLinks.map((link, i) => (
          <p key={link} className="text-xs font-semibold text-gray">
            {link}{" "}
            {i !== footerLinks.length - 1 && <span className="mx-2"> | </span>}
          </p>
        ))}
      </div>
    </div>
  </footer>;
};

export default Footer;
