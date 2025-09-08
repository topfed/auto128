import React from "react";
import { useGlobal } from "../data/useContext";
import Svg from "./Svg";

const Header = () => {
  const { settings, context } = useGlobal();
  const options = settings["header"] || {};
  return (
    <header>
      <div className="container d-flex justify-between items-center">
        <a href="/" aria-label={options?.logoLabel}>
          <Svg
            name="Logo"
            width={options?.logo?.width}
            height={options?.logo?.height}
          />
        </a>
        <input type="checkbox" id="menu-toggle" className="d-none" />
        <nav className="flex-col">
          <input
            type="text"
            id="searchInput"
            placeholder={options?.searchTitle}
            className="mobile-only w-100 mb-2"
          />
          <ul id="searchResults"></ul>
          <ul id="menu">
            {options?.nav?.slice(0, 7)?.map((e, i) => {
              return (
                <li key={i}>
                  <a
                    href={`/${e?.url}/`}
                    className={context.slug === e?.url ? "active" : ""}
                  >
                    {e?.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
        <label
          htmlFor="menu-toggle"
          className="hb mobile-only"
          id="hamburgMenu"
          aria-label={options?.menuLabel}
        >
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>
    </header>
  );
};

export default Header;
