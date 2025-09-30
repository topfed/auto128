import React from "react";
import { withPrefix } from "gatsby";

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
              __html: ``,
            }}
          />
        )}
        {isDev && <script src={withPrefix("/main.js")} />}
      </body>
    </html>
  );
}
