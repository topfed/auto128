import React from "react";

export default function HTML(props) {
  const isDev = process.env.NODE_ENV === "development";
  return (
    <html lang="en-GB">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        <div id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
        {isDev ? (
          <>
            {props.preBodyComponents}
            {props.postBodyComponents}
          </>
        ) : (
          <script
            dangerouslySetInnerHTML={{
              __html: `
              document.addEventListener("DOMContentLoaded",()=>{let i=[],s=!1,t=document.getElementById("searchInput"),l=document.getElementById("searchResults"),m=document.getElementById("menu");if(!t||!l||!m)return;t.addEventListener("focus",()=>{if(s)return;fetch("/search-index.json").then(r=>r.json()).then(d=>{i=d,s=!0})});t.addEventListener("input",e=>{if(!s)return;const q=e.target.value.toLowerCase();l.innerHTML="";const r=i.filter(x=>x.toLowerCase().includes(q));m.style.display=q&&r.length?"none":"",l.style.display=q&&r.length?"":"none",r.slice(0,10).forEach(x=>{const li=document.createElement("li"),a=document.createElement("a");a.href="/"+x+"/",a.textContent=x,li.appendChild(a),l.appendChild(li)})})});
          `,
            }}
          />
        )}
      </body>
    </html>
  );
}
