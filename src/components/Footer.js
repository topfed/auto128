import React from "react";
import { useGlobal } from "../data/useContext";
import Svg from "./Svg";

const Footer = () => {
  const { settings } = useGlobal();
  const options = settings["footer"] || {};
  return (
    <footer className="bg-dark">
      <div className="container cont-space d-flex gap-6 flex-wrap">
        <div className="col-5 mb-3">
          <Svg
            name="LogoFooter"
            width={options?.logo?.width}
            height={options?.logo?.height}
          />
          <p className="mt-4 mb-4">{options?.text}</p>
          <div className="uppercase mt-3 mb-3 text-white">
            {options?.socialTitle}
          </div>
          <div className="d-flex gap-2">
            {options?.socialIcons?.map((e, i) => {
              return (
                <a
                  aria-label={e.name}
                  href={e?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  key={i}
                >
                  <Svg
                    name={e?.name}
                    width={e?.icon?.width}
                    height={e?.icon?.height}
                  />
                </a>
              );
            })}
          </div>
        </div>
        <div className="col-6 d-flex gap-5">
          <div className="col-12">
            <div className="uppercase text-white mb-3">
              {options?.nav1Title}
            </div>
            <div className="d-flex gap-5">
              <nav className="col-6">
                <ul>
                  {options?.nav1?.map((e, i) => {
                    return (
                      <li key={i}>
                        <a href={`/${e?.url}/`}>{e?.name}</a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
              <nav className="col-6">
                <ul>
                  {options?.nav2?.map((e, i) => {
                    return (
                      <li key={i}>
                        <a href={`/${e?.url}/`}>{e?.name}</a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-center p-3 bg-dark-c">
        {options?.copyright}
      </div>
    </footer>
  );
};

export default Footer;
