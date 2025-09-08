import React from "react";

const Svg = ({ name = null, width = "auto", height = "auto" }) => {
  switch (name) {
    case "Logo":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 4047 800"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <path
            fill="#B10216"
            d="M503.5 113.2c-1-18.2-1.7-36.4 0-54.3 2-20 6-39.7 12.3-58.8a403.2 403.2 0 0 0-65 46.6c-27.1 24-44.8 39.5-56.6 66-14.7 32.8-11.7 62.9-8.9 89.9 4 37.8 16.2 74.4 35.5 107.2 0 0 37.4-36.8 40.4-40.2 14.6-17 31.7-34.4 39.1-55.8 7.8-22.4 6-44.8 5-68-.4-10.8-1.2-21.7-1.8-32.6ZM468.3 87c-1.6 4.6-7 20.1-17 54.3a1419 1419 0 0 0-12.3 44c-8.2 33-13.2 67-15 101-5.7-28-13.7-87.8 11.1-155 11-29.5 26.9-57 47-81.1-3.4 8.5-8.4 21.2-13.8 36.8Z"
          />
          <path
            fill="#333"
            d="M270.5 124a273.8 273.8 0 0 1-71.2-88.7 403 403 0 0 0-13 79c-2.4 36-3.9 59.6 6.4 86.7 12.9 33.6 36.3 52.7 57.4 69.8a267 267 0 0 0 100.8 50.7s.5-52.5.2-57c-1.7-22.2-2-46.7-11.7-67-10.4-21.5-27.4-36-44.7-51.8l-24.2-21.6Zm-43.5 6.3c8.4 17 17.2 33.8 26.4 50.4 6.9 12.5 15.6 28.3 22.4 39.8 17.6 29.2 38 56.7 60.8 82A284.4 284.4 0 0 1 235 185a277.3 277.3 0 0 1-24.1-90.7c3.5 8.5 9 21 16.1 36Z"
          />
          <path
            fill="#B10216"
            d="M113.4 296.6a273.5 273.5 0 0 1-113-12.4c13.3 23.1 28.9 45 46.5 65 23.9 27.2 39.5 44.9 65.9 56.7 32.8 14.7 62.9 11.6 89.9 8.9 37.8-4 74.4-16.2 107.1-35.5 0 0-36.7-37.5-40.2-40.4-16.8-14.6-34.3-31.7-55.6-39.2-22.5-7.8-44.8-6-68.1-5-10.8.5-21.7 1.2-32.5 1.9ZM87 331.7c17.9 6.1 36 11.8 54.2 17 14.6 4.3 29.3 8.4 44 12.2a529 529 0 0 0 101 15c-28.1 5.8-87.8 13.8-155-11a277 277 0 0 1-81-47.1c8.5 3.5 21.1 8.5 36.8 14Z"
          />
          <path
            fill="#333"
            d="M124.2 529.6a273.7 273.7 0 0 1-88.7 71.2 403 403 0 0 0 79 13c36 2.4 59.6 3.9 86.6-6.4 33.6-12.9 52.7-36.3 69.8-57.4 23.9-29.6 41.2-64 50.7-100.8 0 0-52.5-.5-57-.2-22.2 1.6-46.7 1.9-67 11.7-21.4 10.4-36 27.4-51.7 44.6-7.3 8-14.4 16.2-21.7 24.4Zm6.3 43.5c4.4-2 19.1-9.3 50.3-26.4 12.5-6.9 28.3-15.5 39.8-22.4a534.2 534.2 0 0 0 82-60.8 284.6 284.6 0 0 1-117.4 101.7 277 277 0 0 1-90.6 24.1c8.5-3.5 21-9 35.9-16.2Z"
          />
          <path
            fill="#B10216"
            d="M296.6 686.8a273.9 273.9 0 0 1-12.4 113c23.2-13.3 45-28.9 65-46.5 27.2-24 44.9-39.5 56.7-66 14.7-32.8 11.6-62.9 8.9-89.8-4-38-16.2-74.5-35.5-107.3 0 0-37.4 36.8-40.4 40.2-14.6 16.9-31.7 34.4-39.1 55.7-7.8 22.5-6 44.9-5 68.2.4 10.7 1.2 21.6 1.8 32.5Zm35.2 26.3c1.6-4.6 7-20 16.9-54.3 4-13.7 9-31 12.3-44 8.2-33 13.2-66.9 15-101 5.7 28 13.7 87.8-11 155-11 29.5-27 57-47.1 81.2 3.5-8.6 8.4-21.2 13.9-36.9Z"
          />
          <path
            fill="#333"
            d="M529.6 676a273.8 273.8 0 0 1 71.2 88.8c5-18.4 10.9-45.6 13-79 2.3-36.2 3.8-59.7-6.5-86.8-12.8-33.6-36.2-52.7-57.2-69.8a267 267 0 0 0-101-50.7s-.4 52.5 0 57c1.6 22.2 1.8 46.7 11.6 67 10.4 21.5 27.4 36 44.6 51.8l24.3 21.6Zm43.5-6.3c-2.1-4.4-9.3-19.2-26.4-50.4a1418 1418 0 0 0-22.4-39.8 529.9 529.9 0 0 0-60.8-82A284.6 284.6 0 0 1 565.2 615a277.3 277.3 0 0 1 24 90.7c-3.5-8.5-9-21-16-36Z"
          />
          <path
            fill="#B10216"
            d="M686.7 503.4a273.5 273.5 0 0 1 113 12.4 407.6 407.6 0 0 0-46.6-65c-23.8-27.2-39.4-44.8-65.8-56.7-32.8-14.7-63-11.6-89.9-8.8-37.8 4-74.4 16.1-107.2 35.5 0 0 36.8 37.4 40.2 40.4 17 14.6 34.4 31.7 55.7 39.1 22.5 7.8 44.8 6 68.1 5 10.8-.4 21.7-1.2 32.5-1.8Zm26.3-35.1c-4.6-1.7-20-7-54.2-17a1420 1420 0 0 0-44-12.2c-33.1-8.3-67-13.3-101-15a284 284 0 0 1 155 11c29.4 11 56.9 27 81 47.1-8.5-3.5-21.1-8.5-36.8-14Z"
          />
          <path
            fill="#333"
            d="M675.9 270.4a273.7 273.7 0 0 1 88.7-71.2 403.8 403.8 0 0 0-79-13c-36-2.4-59.6-3.9-86.6 6.4-33.6 12.9-52.7 36.3-69.8 57.4a267.2 267.2 0 0 0-50.7 100.9s52.4.4 57 .1c22.2-1.6 46.7-1.9 67-11.7 21.4-10.4 36-27.4 51.7-44.6 7.3-8 14.4-16.2 21.7-24.3Zm-6.3-43.5a1021 1021 0 0 0-50.3 26.4c-13.4 7.3-26.7 14.8-39.8 22.4a529.7 529.7 0 0 0-82 60.8A284.6 284.6 0 0 1 615 234.8a277 277 0 0 1 90.6-24.1c-8.5 3.6-21 9-35.9 16.2Z"
          />
          <path
            fill="#333"
            d="M900.1 256.4v-39H1173v39h-114.4V581h-44V256.4H900ZM1240.8 581V217.4h122.9c28.4 0 51.7 4.8 70 14.5a92.8 92.8 0 0 1 40.4 39.6c8.8 16.8 13.2 36 13.2 57.4s-4.4 40.4-13.2 57a92.5 92.5 0 0 1-40.3 39c-18 9.4-41.2 14-69.4 14H1265v-39.7h98c19.4 0 35-2.9 46.9-8.5a53.8 53.8 0 0 0 25.9-24.2 81 81 0 0 0 8.2-37.6c0-14.6-2.8-27.3-8.2-38.2a55.6 55.6 0 0 0-26.1-25.2c-12-6-27.8-9-47.4-9h-77.4V581h-44ZM1412 417.6l89.5 163.4h-51.2l-88-163.4h49.7Zm387.3-200.2h44V458c0 24.9-5.8 47-17.5 66.6a123 123 0 0 1-49.2 46 158.2 158.2 0 0 1-74.6 16.7c-28.5 0-53.4-5.6-74.6-16.7a124.3 124.3 0 0 1-49.3-46 127.9 127.9 0 0 1-17.4-66.6V217.4h44v237.2c0 17.7 3.9 33.5 11.7 47.4a84 84 0 0 0 33.4 32.5 109 109 0 0 0 52.2 11.7c20.2 0 37.6-4 52.2-11.7a82.6 82.6 0 0 0 33.4-32.5 94.8 94.8 0 0 0 11.7-47.4V217.4Zm330.8 90.9c-2.1-18-10.7-32-25.9-42a99.4 99.4 0 0 0-55.8-14.8 106 106 0 0 0-42.2 7.8 67.5 67.5 0 0 0-28 21.5 51.5 51.5 0 0 0-10 31c0 9.7 2.3 18 7 25a61.5 61.5 0 0 0 18 17.3 130 130 0 0 0 23.1 11.2c8 2.8 15.5 5.1 22.2 6.9l37 10c9.4 2.4 20 5.9 31.6 10.2a146 146 0 0 1 33.5 18 83 83 0 0 1 37.1 72c0 19.5-5.1 37.3-15.4 53.1a105.2 105.2 0 0 1-44.8 37.9c-19.5 9.3-43.2 14-71.2 14-26 0-48.6-4.2-67.6-12.6-19-8.4-33.9-20.1-44.8-35.2a100.3 100.3 0 0 1-18.3-52.4h45.5a57 57 0 0 0 13.8 34.1 75 75 0 0 0 31 20 125 125 0 0 0 40.4 6.3c16.8 0 32-2.7 45.3-8.1a77.7 77.7 0 0 0 31.8-23.1 54.7 54.7 0 0 0 11.7-34.8c0-12.1-3.4-22-10.1-29.5a74.4 74.4 0 0 0-26.7-18.5c-11-4.7-22.9-8.9-35.6-12.4l-44.8-12.8a166.6 166.6 0 0 1-67.5-35 76.8 76.8 0 0 1-24.8-59.4c0-20.4 5.5-38.2 16.5-53.3 11.1-15.3 26-27.1 44.7-35.5a151 151 0 0 1 63-12.8c23.5 0 44.3 4.2 62.6 12.6a108.1 108.1 0 0 1 43.3 34 85 85 0 0 1 17 49.3h-42.6Zm100.1-51.9v-39H2503v39h-114.4V581h-44V256.4h-114.4Z"
          />
          <path
            fill="#B10216"
            d="m2575.7 217.4 113.6 320.5h3.2l113.7-320.5h34.8L2708.7 581h-35.5l-132.3-363.6h34.8ZM2872.6 581h-34.8L2970 217.4h35.5L3137.9 581H3103l-114-320.5h-2.5l-114 320.5Zm25-139.4H3078v29.8h-180.4v-29.8ZM3200.2 581V217.4h33.2v333.8h173.3V581h-206.5Zm281.2 0V217.4h211v29.8h-177.8V384h166.6v29.8h-166.6v137.3H3696V581h-214.5Zm274.9-333.8v-29.8h263.6v29.8h-115.2V581h-33.2V247.2h-115.2Z"
          />
          <path
            fill="#333"
            fillOpacity=".2"
            d="m2575.7 217.4 113.6 320.5h3.2l113.7-320.5h34.8L2708.7 581h-35.5l-132.3-363.6h34.8ZM2872.6 581h-34.8L2970 217.4h35.5L3137.9 581H3103l-114-320.5h-2.5l-114 320.5Zm25-139.4H3078v29.8h-180.4v-29.8ZM3200.2 581V217.4h33.2v333.8h173.3V581h-206.5Zm281.2 0V217.4h211v29.8h-177.8V384h166.6v29.8h-166.6v137.3H3696V581h-214.5Zm274.9-333.8v-29.8h263.6v29.8h-115.2V581h-33.2V247.2h-115.2Z"
          />
        </svg>
      );
    case "LogoFooter":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 4047 800"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <path
            fill="#B10216"
            d="M503.5 113.2c-1-18.2-1.7-36.4 0-54.3 2-20 6-39.7 12.3-58.8a403.2 403.2 0 0 0-65 46.6c-27.1 24-44.8 39.5-56.6 66-14.7 32.8-11.7 62.9-8.9 89.9 4 37.8 16.2 74.4 35.5 107.2 0 0 37.4-36.8 40.4-40.2 14.6-17 31.7-34.4 39.1-55.8 7.8-22.4 6-44.8 5-68-.4-10.8-1.2-21.7-1.8-32.6ZM468.3 87c-1.6 4.6-7 20.1-17 54.3a1419 1419 0 0 0-12.3 44c-8.2 33-13.2 67-15 101-5.7-28-13.7-87.8 11.1-155 11-29.5 26.9-57 47-81.1-3.4 8.5-8.4 21.2-13.8 36.8Z"
          />
          <path
            fill="#fff"
            d="M270.5 124a273.8 273.8 0 0 1-71.2-88.7 403 403 0 0 0-13 79c-2.4 36-3.9 59.6 6.4 86.7 12.9 33.6 36.3 52.7 57.4 69.8a267 267 0 0 0 100.8 50.7s.5-52.5.2-57c-1.7-22.2-2-46.7-11.7-67-10.4-21.5-27.4-36-44.7-51.8l-24.2-21.6Zm-43.5 6.3c8.4 17 17.2 33.8 26.4 50.4 6.9 12.5 15.6 28.3 22.4 39.8 17.6 29.2 38 56.7 60.8 82A284.4 284.4 0 0 1 235 185a277.3 277.3 0 0 1-24.1-90.7c3.5 8.5 9 21 16.1 36Z"
          />
          <path
            fill="#B10216"
            d="M113.4 296.6a273.5 273.5 0 0 1-113-12.4c13.3 23.1 28.9 45 46.5 65 23.9 27.2 39.5 44.9 65.9 56.7 32.8 14.7 62.9 11.6 89.9 8.9 37.8-4 74.4-16.2 107.1-35.5 0 0-36.7-37.5-40.2-40.4-16.8-14.6-34.3-31.7-55.6-39.2-22.5-7.8-44.8-6-68.1-5-10.8.5-21.7 1.2-32.5 1.9ZM87 331.7c17.9 6.1 36 11.8 54.2 17 14.6 4.3 29.3 8.4 44 12.2a529 529 0 0 0 101 15c-28.1 5.8-87.8 13.8-155-11a277 277 0 0 1-81-47.1c8.5 3.5 21.1 8.5 36.8 14Z"
          />
          <path
            fill="#fff"
            d="M124.2 529.6a273.7 273.7 0 0 1-88.7 71.2 403 403 0 0 0 79 13c36 2.4 59.6 3.9 86.6-6.4 33.6-12.9 52.7-36.3 69.8-57.4 23.9-29.6 41.2-64 50.7-100.8 0 0-52.5-.5-57-.2-22.2 1.6-46.7 1.9-67 11.7-21.4 10.4-36 27.4-51.7 44.6-7.3 8-14.4 16.2-21.7 24.4Zm6.3 43.5c4.4-2 19.1-9.3 50.3-26.4 12.5-6.9 28.3-15.5 39.8-22.4a534.2 534.2 0 0 0 82-60.8 284.6 284.6 0 0 1-117.4 101.7 277 277 0 0 1-90.6 24.1c8.5-3.5 21-9 35.9-16.2Z"
          />
          <path
            fill="#B10216"
            d="M296.6 686.8a273.9 273.9 0 0 1-12.4 113c23.2-13.3 45-28.9 65-46.5 27.2-24 44.9-39.5 56.7-66 14.7-32.8 11.6-62.9 8.9-89.8-4-38-16.2-74.5-35.5-107.3 0 0-37.4 36.8-40.4 40.2-14.6 16.9-31.7 34.4-39.1 55.7-7.8 22.5-6 44.9-5 68.2.4 10.7 1.2 21.6 1.8 32.5Zm35.2 26.3c1.6-4.6 7-20 16.9-54.3 4-13.7 9-31 12.3-44 8.2-33 13.2-66.9 15-101 5.7 28 13.7 87.8-11 155-11 29.5-27 57-47.1 81.2 3.5-8.6 8.4-21.2 13.9-36.9Z"
          />
          <path
            fill="#fff"
            d="M529.6 676a273.8 273.8 0 0 1 71.2 88.8c5-18.4 10.9-45.6 13-79 2.3-36.2 3.8-59.7-6.5-86.8-12.8-33.6-36.2-52.7-57.2-69.8a267 267 0 0 0-101-50.7s-.4 52.5 0 57c1.6 22.2 1.8 46.7 11.6 67 10.4 21.5 27.4 36 44.6 51.8l24.3 21.6Zm43.5-6.3c-2.1-4.4-9.3-19.2-26.4-50.4a1418 1418 0 0 0-22.4-39.8 529.9 529.9 0 0 0-60.8-82A284.6 284.6 0 0 1 565.2 615a277.3 277.3 0 0 1 24 90.7c-3.5-8.5-9-21-16-36Z"
          />
          <path
            fill="#B10216"
            d="M686.7 503.4a273.5 273.5 0 0 1 113 12.4 407.6 407.6 0 0 0-46.6-65c-23.8-27.2-39.4-44.8-65.8-56.7-32.8-14.7-63-11.6-89.9-8.8-37.8 4-74.4 16.1-107.2 35.5 0 0 36.8 37.4 40.2 40.4 17 14.6 34.4 31.7 55.7 39.1 22.5 7.8 44.8 6 68.1 5 10.8-.4 21.7-1.2 32.5-1.8Zm26.3-35.1c-4.6-1.7-20-7-54.2-17a1420 1420 0 0 0-44-12.2c-33.1-8.3-67-13.3-101-15a284 284 0 0 1 155 11c29.4 11 56.9 27 81 47.1-8.5-3.5-21.1-8.5-36.8-14Z"
          />
          <path
            fill="#fff"
            d="M675.9 270.4a273.7 273.7 0 0 1 88.7-71.2 403.8 403.8 0 0 0-79-13c-36-2.4-59.6-3.9-86.6 6.4-33.6 12.9-52.7 36.3-69.8 57.4a267.2 267.2 0 0 0-50.7 100.9s52.4.4 57 .1c22.2-1.6 46.7-1.9 67-11.7 21.4-10.4 36-27.4 51.7-44.6 7.3-8 14.4-16.2 21.7-24.3Zm-6.3-43.5a1021 1021 0 0 0-50.3 26.4c-13.4 7.3-26.7 14.8-39.8 22.4a529.7 529.7 0 0 0-82 60.8A284.6 284.6 0 0 1 615 234.8a277 277 0 0 1 90.6-24.1c-8.5 3.6-21 9-35.9 16.2Z"
          />
          <path
            fill="#fff"
            d="M900.1 256.4v-39H1173v39h-114.4V581h-44V256.4H900ZM1240.8 581V217.4h122.9c28.4 0 51.7 4.8 70 14.5a92.8 92.8 0 0 1 40.4 39.6c8.8 16.8 13.2 36 13.2 57.4s-4.4 40.4-13.2 57a92.5 92.5 0 0 1-40.3 39c-18 9.4-41.2 14-69.4 14H1265v-39.7h98c19.4 0 35-2.9 46.9-8.5a53.8 53.8 0 0 0 25.9-24.2 81 81 0 0 0 8.2-37.6c0-14.6-2.8-27.3-8.2-38.2a55.6 55.6 0 0 0-26.1-25.2c-12-6-27.8-9-47.4-9h-77.4V581h-44ZM1412 417.6l89.5 163.4h-51.2l-88-163.4h49.7Zm387.3-200.2h44V458c0 24.9-5.8 47-17.5 66.6a123 123 0 0 1-49.2 46 158.2 158.2 0 0 1-74.6 16.7c-28.5 0-53.4-5.6-74.6-16.7a124.3 124.3 0 0 1-49.3-46 127.9 127.9 0 0 1-17.4-66.6V217.4h44v237.2c0 17.7 3.9 33.5 11.7 47.4a84 84 0 0 0 33.4 32.5 109 109 0 0 0 52.2 11.7c20.2 0 37.6-4 52.2-11.7a82.6 82.6 0 0 0 33.4-32.5 94.8 94.8 0 0 0 11.7-47.4V217.4Zm330.8 90.9c-2.1-18-10.7-32-25.9-42a99.4 99.4 0 0 0-55.8-14.8 106 106 0 0 0-42.2 7.8 67.5 67.5 0 0 0-28 21.5 51.5 51.5 0 0 0-10 31c0 9.7 2.3 18 7 25a61.5 61.5 0 0 0 18 17.3 130 130 0 0 0 23.1 11.2c8 2.8 15.5 5.1 22.2 6.9l37 10c9.4 2.4 20 5.9 31.6 10.2a146 146 0 0 1 33.5 18 83 83 0 0 1 37.1 72c0 19.5-5.1 37.3-15.4 53.1a105.2 105.2 0 0 1-44.8 37.9c-19.5 9.3-43.2 14-71.2 14-26 0-48.6-4.2-67.6-12.6-19-8.4-33.9-20.1-44.8-35.2a100.3 100.3 0 0 1-18.3-52.4h45.5a57 57 0 0 0 13.8 34.1 75 75 0 0 0 31 20 125 125 0 0 0 40.4 6.3c16.8 0 32-2.7 45.3-8.1a77.7 77.7 0 0 0 31.8-23.1 54.7 54.7 0 0 0 11.7-34.8c0-12.1-3.4-22-10.1-29.5a74.4 74.4 0 0 0-26.7-18.5c-11-4.7-22.9-8.9-35.6-12.4l-44.8-12.8a166.6 166.6 0 0 1-67.5-35 76.8 76.8 0 0 1-24.8-59.4c0-20.4 5.5-38.2 16.5-53.3 11.1-15.3 26-27.1 44.7-35.5a151 151 0 0 1 63-12.8c23.5 0 44.3 4.2 62.6 12.6a108.1 108.1 0 0 1 43.3 34 85 85 0 0 1 17 49.3h-42.6Zm100.1-51.9v-39H2503v39h-114.4V581h-44V256.4h-114.4Z"
          />
          <path
            fill="#B10216"
            d="m2575.7 217.4 113.6 320.5h3.2l113.7-320.5h34.8L2708.7 581h-35.5l-132.3-363.6h34.8ZM2872.6 581h-34.8L2970 217.4h35.5L3137.9 581H3103l-114-320.5h-2.5l-114 320.5Zm25-139.4H3078v29.8h-180.4v-29.8ZM3200.2 581V217.4h33.2v333.8h173.3V581h-206.5Zm281.2 0V217.4h211v29.8h-177.8V384h166.6v29.8h-166.6v137.3H3696V581h-214.5Zm274.9-333.8v-29.8h263.6v29.8h-115.2V581h-33.2V247.2h-115.2Z"
          />
          <path
            fill="#333"
            fillOpacity=".2"
            d="m2575.7 217.4 113.6 320.5h3.2l113.7-320.5h34.8L2708.7 581h-35.5l-132.3-363.6h34.8ZM2872.6 581h-34.8L2970 217.4h35.5L3137.9 581H3103l-114-320.5h-2.5l-114 320.5Zm25-139.4H3078v29.8h-180.4v-29.8ZM3200.2 581V217.4h33.2v333.8h173.3V581h-206.5Zm281.2 0V217.4h211v29.8h-177.8V384h166.6v29.8h-166.6v137.3H3696V581h-214.5Zm274.9-333.8v-29.8h263.6v29.8h-115.2V581h-33.2V247.2h-115.2Z"
          />
        </svg>
      );
    case "Facebook":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 160 160"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <rect
            width="122.5"
            height="122.5"
            x="18.8"
            y="18.8"
            rx="10"
            ry="10"
            fill="#b10216"
          />
          <path
            fill="none"
            stroke="#b10216"
            strokeWidth="4px"
            d="M149.2 143.5c2.4-3.5 3.8-7.7 3.8-12.3M106 153h25.2c2.5 0 4.8-.4 7-1.1M153 95.9V28.8c0-12-9.8-21.8-21.8-21.8H28.8C16.8 7 7 16.7 7 28.8v102.4c0 12 9.7 21.8 21.8 21.8H99"
          />
          <path
            fill="#fff"
            d="M107.9 143.5H86.4V59.2c0-13.7 12.1-23 22.5-24.5 10.4-1.6 18 2 18 2V56h-16c-2.1 0-3 2-3 3.2v84.3Z"
          />
          <path fill="#fff" d="M122.6 96.2H69.5V74.6h57.4l-4.3 21.6z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 160 160"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <rect
            width="122.5"
            height="122.5"
            x="18.8"
            y="18.8"
            rx="10"
            ry="10"
            fill="#b10216"
          />
          <path
            fill="none"
            stroke="#b10216"
            strokeWidth="4px"
            d="M149.2 143.5c2.4-3.5 3.8-7.7 3.8-12.3M106 153h25.2c2.5 0 4.8-.4 7-1.1M153 95.9V28.8c0-12-9.8-21.8-21.8-21.8H28.8C16.8 7 7 16.7 7 28.8v102.4c0 12 9.7 21.8 21.8 21.8H99"
          />
          <path
            fill="#fff"
            d="M111.3 41.8h-63a7.8 7.8 0 0 0-7.8 7.8v61.1c0 4.4 3.5 7.9 7.8 7.9h63c4.3 0 7.8-3.5 7.8-7.9V49.6c0-4.3-3.5-7.8-7.8-7.8Zm-1.5 22.8H98.3c-1.3-1.6-2.9-3-4.6-4.2V51h16v13.5Zm-30 .7a14.8 14.8 0 1 1 0 29.7 14.8 14.8 0 0 1 0-29.7ZM50 109.2v-37H57a24.2 24.2 0 1 0 46.2 1.7h6.6v35.3H49.9Z"
          />
        </svg>
      );
    case "Phone":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 134.3 134.3"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <path
            d="M36.8 102c30.1 30 58.7 27.2 58.7 27.2l8-8L81 98.8l-11.5 11.4s-12-7.8-24.5-20.4c-12.6-12.6-21-25-21-25l11.5-11.5-22.4-22.5-8 8S2.2 67.4 32.4 97.5l4.4 4.4Z"
            fill="#fff"
            stroke="#fff"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M57.3 56a21 21 0 0 1 21 21M57.3 31.5A45.5 45.5 0 0 1 102.8 77M57.3 5a72 72 0 0 1 72 72"
            fill="none"
            stroke="#fff"
            strokeWidth="4"
            strokeMiterlimit="4"
          />
        </svg>
      );
    case "business":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 144 139.1"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <path
            d="M15.5 52.4h10v42h-10"
            fill="none"
            stroke="#ec2129"
            strokeWidth="4"
            strokeMiterlimit="4"
          />
          <path
            d="M7 111.8h130v15.9H7zM137 35.9H7V27L72 7l65 20v8.9z"
            fill="#303a44"
            stroke="#303a44"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M128 52.4h-10v42h10M118 45.4v56M88 45.4v56M55.5 45.4v56"
            fill="none"
            stroke="#ec2129"
            strokeWidth="4"
            strokeMiterlimit="4"
          />
          <circle cx="72" cy="23.4" r="9.2" fill="#fff" strokeWidth="0" />
          <path
            d="M41 123.2h61.5M25.5 132.1H118"
            fill="none"
            stroke="#ec2129"
            strokeWidth="4"
            strokeMiterlimit="4"
          />
        </svg>
      );
    case "entertainment":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 166.3 182.6"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <path
            d="m70.1 111.8-.6-1-.6-1-.2-.3c-12.2-19.3-28-22.8-32.5-31.6-4.9-9.6-2-15.7-8.2-28-4.6-9-12.8-13.9-18.3-11S3.4 51.2 8 60c6.3 12.4 13 13.5 17.9 23 4.5 8.9-2 23.7 6.5 44.9l.2.4.4 1 .5 1.1c0 .3.2.5.3.8a57.7 57.7 0 0 0 1.6 3.1c6.7 12.5 16.7 21 25.5 22.4a69 69 0 0 0 14.5-7.4c3.9-8 3-21-3.2-33.8l-.6-1.1-1-2-.5-.7Z"
            fill="none"
            stroke="#b10216"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path
            d="M149.9 126.3a42.3 42.3 0 0 0 .4-2.2l.1-.4c4-22.5-5.4-35.7-2.8-45.3 2.8-10.3 9-12.8 12.7-26.2 2.6-9.7-.1-18.8-6-20.4s-13 4.8-15.7 14.5c-3.6 13.4.6 18.8-2.2 29.1C133.8 85 119 91.6 111 113l-.2.4c0 .4-.2.7-.3 1.1l-.4 1c0 .4-.2.6-.3 1a62.5 62.5 0 0 0-.9 3.3c-3.4 13.7-1.7 26.7 3.8 33.7a66 66 0 0 0 15.7 4.2c8.3-3.2 16.3-13.5 20.3-27.1l.4-1.3.5-2.1.2-.9Z"
            fill="none"
            stroke="#b10216"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path
            d="M104.3 94.2l-.2-1.1-.2-1.2-.1-.4c-5-22.3-18.6-31-19.9-40.7-1.3-10.7 3.6-15.4 1.8-29.2-1.2-10-7.2-17.3-13.4-16.5-6.1.7-10.1 9.4-8.9 19.3 1.8 13.8 7.7 17.2 9 27.8 1.3 9.8-9.8 21.6-9 44.4v1.6l.1 1.1v1l.3 2 .2 1.4c2 14 8.6 25.3 16.3 29.7a67.5 67.5 0 0 0 16.2-2c6.4-6.2 9.9-18.8 8.4-32.9l-.1-1.3-.3-2.2-.2-.8Z"
            fill="none"
            stroke="#b10216"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path
            d="M25.3 79.6l10.1-5.2M30.3 90.8l10-5.2M72.1 46.3l11.2-1.7M73.1 58.5l11.2-1.6M138.9 70l11.8 3.6M133.4 80.9l13.9 4.4"
            fill="none"
            stroke="#b10216"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <circle
            cx="92.6"
            cy="136.2"
            r="43.9"
            fill="#303a44"
            stroke="#303a44"
            strokeWidth="5"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "featured":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 85 144"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <rect
            x="10"
            y="5"
            width="65"
            height="13"
            rx="2"
            ry="2"
            stroke="#b10216"
            strokeWidth="4"
            strokeMiterlimit="4"
            fill="none"
          />
          <path
            d="m34 82 8.5 57L51 82"
            stroke="#303a44"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M66.5 18h-48l-5 63h58l-5-63z"
            stroke="#b10216"
            strokeWidth="4"
            strokeMiterlimit="4"
            fill="none"
          />
          <path
            d="M0 81h85"
            stroke="#b10216"
            strokeWidth="4"
            strokeMiterlimit="4"
            fill="none"
          />
          <path
            d="M17.4 32.1h25.1M17.4 49h25.1M17.4 66h25.1"
            stroke="#b10216"
            strokeWidth="4"
            strokeMiterlimit="4"
            fill="none"
          />
        </svg>
      );
    case "evaluating":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 135.6 150.9"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <circle cx="69" cy="75.5" r="27.3" fill="#303a44" strokeWidth="0" />
          <path
            d="M83 41.5C80.3 19.7 75 5 69 5c-8.8 0-16 31.5-16 70.5s7.2 70.4 16 70.4c6 0 11.3-14.7 14-36.5"
            fill="none"
            stroke="#b10216"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path
            d="M46.6 46.4C26.4 37.8 11 35 8 40.1c-4.4 7.7 19.4 29.6 53 49 33.7 19.5 64.6 29.1 69 21.5 3-5.2-7-17.1-24.6-30.4"
            fill="none"
            stroke="#b10216"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path
            d="M32.6 80.3C15.1 93.6 5 105.5 8 110.7c4.4 7.6 35.3-2 69-21.4 33.7-19.5 57.4-41.4 53-49-3-5.3-18.4-2.5-38.5 6"
            fill="none"
            stroke="#b10216"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <circle cx="13.2" cy="53" r="13.2" fill="#303a44" strokeWidth="0" />
          <circle
            cx="59.4"
            cy="131.3"
            r="13.2"
            fill="#303a44"
            strokeWidth="0"
          />
          <circle
            cx="109.5"
            cy="39.9"
            r="13.2"
            fill="#303a44"
            strokeWidth="0"
          />
        </svg>
      );
    case "finance":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 152.9 158"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <path
            d="M130.9 96v50.7M118.7 142.3l24.5 8.7M34.3 142.3 9.7 151M22 96v50.7"
            stroke="#303a44"
            strokeWidth="4"
            strokeLinecap="round"
            strokeMiterlimit="4"
            fill="none"
          />
          <path
            d="M7 7h138.9v88H7z"
            stroke="#b10216"
            strokeWidth="4"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M39.5 64.9 62 42.4l21.7 21.7 23.9-23.9"
            stroke="#b10216"
            strokeWidth="4"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M85.9 39.2h22.7v22.9"
            stroke="#b10216"
            strokeWidth="4"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      );
    case "focus":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 167.3 142"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <path
            d="M94.7 34.3h67.6V137H5V34.3h67.7"
            stroke="#b10216"
            strokeWidth="4"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M30.4 122c-6.3 0-8.7-4.6-8.7-4.6v-7.2c0-6.2 5-11.3 11.2-11.3l7.9-.8c0 5.8 10.4 9.4 10.4 9.4s10.4-3.6 10.4-9.4l7.9.8c6.2 0 11.2 5 11.2 11.3v7.2s-1.8 4.5-8.7 4.5H30.4Z"
            stroke="#b10216"
            strokeWidth="6"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M93.3 56.1h35M93.3 76.1h55.4M93.3 96.1h35M93.3 116.1h55.4"
            stroke="#b10216"
            strokeWidth="4"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M38.5 61.7v15.7a12.7 12.7 0 1 0 25.3 0V61.7H38.5Z"
            stroke="#303a44"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M68.5 67.8s-27.9-1-24.4-9.8c2.7-6.8 10.4-10 17.1-7.3 6.8 2.7 8.9 13.1 7.3 17Z"
            fill="#303a44"
            stroke="#303a44"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <path
            d="M37.8 67S57 57 51.5 52a10.2 10.2 0 0 0-14.4.5c-3.8 4.1-1.8 12.1.5 14.4Z"
            fill="#303a44"
            stroke="#303a44"
            strokeWidth="6"
            strokeLinejoin="round"
          />
          <path
            d="M72.7 5h22v37.3h-22zM60.3 29h12.4M94.7 29H107"
            stroke="#303a44"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      );
    case "food-drink":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 174 134.9"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <path
            d="m45 121.5 44-44 8.5 8.3L53.3 130z"
            fill="#303a44"
            stroke="#303a44"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m107.5 60.7 13.9-13.9 41-41c8.8 8.7 8.8 23 0 31.7l-25 25-13.9 14-11.5-7.2-6.2 6-6.5-6.5"
            fill="none"
            stroke="#b10216"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="43.9"
            cy="24"
            r="2.9"
            fill="none"
            stroke="#b10216"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M118.1 71.4 106.5 59.7 89 42.4 57.4 10.6a19 19 0 0 0-26.8 0L5 36l62.6 62.6 30.7-30.8L110 79.5l8.1-8.1Z"
            fill="none"
            stroke="#b10216"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M78.2 88 22 31.8"
            fill="none"
            stroke="#b10216"
            strokeWidth="5"
            strokeLinejoin="round"
          />
          <path
            d="m119.4 70.1-11.7 11.7c1.5-1.5 5-.5 7.7 2.2s3.6 6.1 2.1 7.7l2.9 2.8c1.5-1.5 5-.5 7.7 2.2s3.7 6.1 2.1 7.7l2.9 2.8c1.5-1.5 5-.5 7.7 2.2s3.7 6.1 2.1 7.7l2.9 2.8c1.5-1.5 5-.5 7.7 2.2s3.7 6.1 2.1 7.7l11.7-11.7-47.9-48Z"
            fill="#303a44"
            stroke="#303a44"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "health-wellness":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 161.5 118.4"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <circle cx="47.1" cy="44.1" r="40.5" fill="#303a44" strokeWidth="0" />
          <circle
            cx="114.3"
            cy="44.1"
            r="40.5"
            fill="#303a44"
            strokeWidth="0"
          />
          <path
            d="m90.7 44.1-10 74.3S19.6 87 9.3 58.5C-1 30.1 90.7 44.1 90.7 44.1Z"
            fill="#303a44"
            strokeWidth="0"
          />
          <path
            d="m70.7 44.1 10 74.3S142 87 152.2 58.5c10.3-28.4-81.5-14.4-81.5-14.4Z"
            fill="#303a44"
            strokeWidth="0"
          />
          <path
            d="M0 50.1h43.3l5.6 7.3 19.6-43.8 25 73 19.1-43.8 5.9 7.3h43"
            stroke="#b10216"
            strokeWidth="4"
            strokeMiterlimit="4"
            fill="none"
          />
        </svg>
      );
    case "home-improvement":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 198 166.5"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <path
            d="M68 159.5h62"
            stroke="#b10216"
            strokeWidth="4"
            strokeMiterlimit="4"
            fill="none"
          />
          <path
            d="M163.8 69.8a5 5 0 0 0-1.5-1.5L98 6 35.6 68.3a5 5 0 0 0-2.3 4.2v82a5 5 0 0 0 5 5h121.4a5 5 0 0 0 5-5v-82c0-1-.3-2-.9-2.7ZM65.2 29.6V18.3a5 5 0 0 0-5-5H48.5a5 5 0 0 0-5 5v33.1l21.7-21.6Z"
            fill="#303a44"
            strokeWidth="0"
          />
          <path
            d="M115 154.5v-40a5 5 0 0 0-5-5H88a5 5 0 0 0-5 5v40a5 5 0 0 1-5 5h42a5 5 0 0 1-5-5Z"
            fill="#fff"
            strokeWidth="0"
          />
          <circle cx="99" cy="53" r="12" fill="#fff" strokeWidth="0" />
          <path
            d="M78 149.5h42M5 99 95.5 8.5c2-2 5-2 7 0L193 99"
            stroke="#b10216"
            strokeWidth="4"
            strokeMiterlimit="4"
            fill="none"
          />
        </svg>
      );
    case "insurance":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 141.6 159.5"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <path
            d="M15.1 90.9 69 37.1M22.2 108.9 69 62M31.3 124.7l37.1-37.1M46.5 134.5 71 110M133.7 47.3 97.4 11M132.8 71.4 74.7 13.3M127.3 90.9 73.5 37.1"
            stroke="#b10216"
            strokeWidth="4"
            strokeMiterlimit="4"
            fill="none"
          />
          <path
            d="m76 152.9-6.3-1.8A88 88 0 0 1 5.5 70.7l-.2-5.3H76V153ZM16 75.4a78 78 0 0 0 50 64v-64H16Z"
            stroke="#fff"
            strokeWidth="4"
            strokeMiterlimit="4"
            fill="none"
          />
          <path
            d="M136.3 75.4H66V5h5c20.6 0 41.3 2 61.6 5.9l4 .7v59.1l-.3 4.8ZM76 65.4h50.6V20A317 317 0 0 0 76 15v50.4Z"
            stroke="#fff"
            strokeWidth="4"
            strokeMiterlimit="4"
            fill="none"
          />
          <path
            d="M71 71.4v74.9a83.2 83.2 0 0 0 60.5-74.9H71ZM10.4 14.9 71 10v60.4H10.4V14.9z"
            fill="#303a44"
            strokeWidth="0"
          />
          <path
            d="M71 10c-20.7 0-41 2-60.6 5.8v50.4a83.2 83.2 0 0 0 60.6 80c35-9.8 60.6-41.9 60.6-80V15.8A321.1 321.1 0 0 0 71 10ZM71 10v136.3M10.4 70.4h121.2"
            stroke="#b10216"
            strokeWidth="4"
            strokeMiterlimit="4"
            fill="none"
          />
        </svg>
      );
    case "legal":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 188.7 151.3"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <rect
            x="87.3"
            width="14"
            height="141.9"
            rx="5"
            ry="5"
            fill="#303a44"
            strokeWidth="0"
          />
          <path
            d="M123.8 144.3h-59"
            fill="#303a44"
            stroke="#303a44"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M156.3 34.8s-30.8-16.6-62-16.6-62 16.6-62 16.6"
            stroke="#303a44"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M88.7 119.6H100v24.7H88.7z"
            fill="#303a44"
            stroke="#303a44"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M32.3 46.3v16.5M156.3 46.3v16.5M5 74.6l27.3-11.8 27.4 11.8M129 74.6l27.3-11.8 27.4 11.8"
            stroke="#303a44"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M59.7 79.3a27.3 27.3 0 1 1-54.7 0M183.7 79.3a27.3 27.3 0 1 1-54.7 0"
            stroke="#b10216"
            strokeWidth="4"
            strokeMiterlimit="4"
            fill="none"
          />
        </svg>
      );
    case "lifestyle":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 181 114.9"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <path
            d="M84.4 70l23.6 39.9h53.8M28.7 69.9 5 109.9h88M147.6 62.1l28.4 47.8"
            stroke="#303a44"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M82.3 66.4 56.5 22.9 30.8 66.4l13.9 5.8 13.5-5.8 8.7 4.5 15.4-4.5zM145.1 57.8 117 10.4l-11.2 22-5.5-3-16.8 28.4 16.6 6.9 16.2-6.9 10.5 5.4 18.3-5.4z"
            stroke="#b10216"
            strokeWidth="4"
            strokeMiterlimit="4"
            fill="none"
          />
        </svg>
      );
    case "other-business":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 124.2 148.5"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <path
            d="M61.7 14a9 9 0 0 1 18 0M88.7 25.6h30.5v117.9h-94v-23.2M25.2 73.9V25.6h27.5"
            stroke="#303a44"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M86.7 31.1h20V131h-76v-11.7M30.7 31.1h24"
            stroke="#b10216"
            strokeWidth="4"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M86.7 31h20s0 55.8-25.7 88.3H5C30.7 88.8 30.7 31 30.7 31h24"
            stroke="#b10216"
            strokeWidth="4"
            strokeLinejoin="round"
            fill="none"
          />
          <rect
            x="52.7"
            y="17.1"
            width="36"
            height="16.9"
            rx="2"
            ry="2"
            stroke="#303a44"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      );
    case "pinterest":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 160 160"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <rect
            x="18.8"
            y="18.8"
            width="122.5"
            height="122.5"
            rx="10"
            ry="10"
            fill="#303a44"
            strokeWidth="0"
          />
          <path
            d="M149.2 143.5c2.4-3.5 3.8-7.7 3.8-12.3M106 153h25.2c2.5 0 4.8-.4 7-1.1M153 95.9V28.8c0-12-9.8-21.8-21.8-21.8H28.8C16.8 7 7 16.7 7 28.8v102.4c0 12 9.7 21.8 21.8 21.8H99"
            stroke="#b10216"
            strokeWidth="4"
            strokeMiterlimit="4"
            fill="none"
          />
          <path
            d="M58.2 79.4c.1 1.5-1 8-2.6 8S43 83.1 43 65.8s15.5-33.7 39-33.7 35 17.1 35 32-8.4 36.3-28.6 36.3C78 100.4 74.1 94 74.1 94s-3.5 12.8-4.4 15.6c-.9 2.8-10 19.3-11.3 18.4s-.8-15.9.2-21c1-5.2 6.5-27.9 7-29.7.6-1.8-3.3-9 .2-17.5C69.3 51 81 51.4 82 58.9s-10.7 28.3.4 31.5 21.2-9.9 21.2-27.8-18.3-24.3-30.9-20c-12.6 4.2-19 14.8-19 24.5s4.4 11 4.4 12.3Z"
            fill="#fff"
            strokeWidth="0"
          />
        </svg>
      );
    case "reputation":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 138.1 138"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <circle
            cx="66"
            cy="72"
            r="5.3"
            stroke="#b10216"
            strokeWidth="4"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M69.2 39.2 66 39a33 33 0 1 0 32.8 29.8"
            stroke="#b10216"
            strokeWidth="4"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M80 12.6A61 61 0 1 0 125.3 58"
            stroke="#b10216"
            strokeWidth="4"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M66 72 106.1 31.9"
            stroke="#303a44"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M82.3 55.7V28.3L105.6 5v27.4M82.4 55.7h27.4l23.3-23.2h-27.5"
            stroke="#303a44"
            strokeWidth="4"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      );
    case "search":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 153.7 153.7"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <rect
            x="-.5"
            y="115.3"
            width="61.8"
            height="16"
            rx="5"
            ry="5"
            transform="rotate(-45 30.4 123.2)"
            fill="#303a44"
            stroke="#303a44"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="m52.7 97.4 8.5-8.5 3.6 3.6-8.5 8.5z"
            fill="#303a44"
            stroke="#303a44"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="100.3"
            cy="53.4"
            r="48.4"
            stroke="#b10216"
            strokeWidth="4"
            strokeMiterlimit="4"
            fill="none"
          />
          <path
            d="M72.5 36.8c3.1-5.3 7.8-9.6 13.2-12.4M90.6 22.4c3-1 6.3-1.4 9.7-1.4M106.9 21.6l4 1.1"
            stroke="#b10216"
            strokeWidth="4"
            strokeMiterlimit="4"
            fill="none"
          />
        </svg>
      );
    case "twitter":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 160 160"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <rect
            x="18.8"
            y="18.8"
            width="122.5"
            height="122.5"
            rx="10"
            ry="10"
            fill="#303a44"
            strokeWidth="0"
          />
          <path
            d="M149.2 143.5c2.4-3.5 3.8-7.7 3.8-12.3M106 153h25.2c2.5 0 4.8-.4 7-1.1M153 95.9V28.8c0-12-9.8-21.8-21.8-21.8H28.8C16.8 7 7 16.7 7 28.8v102.4c0 12 9.7 21.8 21.8 21.8H99"
            stroke="#b10216"
            strokeWidth="4"
            strokeMiterlimit="4"
            fill="none"
          />
          <path
            d="M120.6 54.3a25 25 0 0 1-5.5 1.6c1.6-2.4 2.9-5.2 3.6-8.1-3 2-6.3 3.2-10 3.8-3.2-3-7.5-4.9-12.2-4.9-10 0-18 8.1-18 18l-.1 3a54.7 54.7 0 0 1-35.5-18.6 20.8 20.8 0 0 0 4.4 22.5 60 60 0 0 1-7.8-2.3 22.8 22.8 0 0 0 12.5 18c-2 .2-3.9.4-5.8.4A22.9 22.9 0 0 0 61 99.3a42.6 42.6 0 0 1-17.6 7.5 48 48 0 0 0 71-44.1c2.6-2.3 4.8-5.1 6.2-8.4Z"
            fill="#fff"
            strokeWidth="0"
          />
        </svg>
      );
    case "verification":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 166.7 127.4"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <path
            d="M35.7 38v72c0 9.6 21.3 17.4 47.6 17.4S131 119.6 131 110V38H35.7Z"
            fill="#303a44"
          />
          <circle cx="159.7" cy="82.7" r="6.7" fill="#303a44" />
          <circle cx="159.7" cy="73.5" r="6.9" fill="#303a44" />
          <path d="M153 82.7h13.3v16.2H153z" fill="#303a44" />
          <path
            d="M159.7 38v44.7"
            stroke="#303a44"
            strokeWidth="6"
            strokeMiterlimit="4"
            fill="none"
          />
          <path
            d="M83.3 69.1 7 38 83.3 7l76.4 31-76.4 31.1z"
            fill="#fff"
            strokeWidth="0"
          />
          <path
            d="M83.3 69.1 7 38 83.3 7l76.4 31-76.4 31.1z"
            fill="none"
            stroke="#b10216"
            strokeLinejoin="round"
            strokeWidth="4"
          />
        </svg>
      );
    case "youTube":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 160 160"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <path
            d="M106 153h25.2c2.5 0 4.8-.4 7-1.1"
            stroke="#b10216"
            strokeWidth="4"
            strokeMiterlimit="4"
          />
          <rect
            width="122.5"
            height="122.5"
            x="18.8"
            y="18.8"
            rx="10"
            ry="10"
            fill="#303a44"
          />
          <path
            d="M149.2 143.5c2.4-3.5 3.8-7.7 3.8-12.3M153 95.9V28.8c0-12-9.8-21.8-21.8-21.8H28.8C16.8 7 7 16.7 7 28.8v102.4c0 12 9.7 21.8 21.8 21.8H99"
            stroke="#b10216"
            strokeWidth="4"
            strokeMiterlimit="4"
          />
          <path
            d="M108.6 49.6H51.4c-8 0-14.5 6.5-14.5 14.5v31.8c0 8 6.5 14.5 14.5 14.5h57.2c8 0 14.5-6.5 14.5-14.5V64.1c0-8-6.5-14.5-14.5-14.5ZM71 91.8V67.3l23.5 12.2L71 91.8Z"
            fill="#fff"
          />
        </svg>
      );
    case "website":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 142 167.3"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <path
            d="M113.5 9.8A73.3 73.3 0 1 1 9.8 113.5M61.7 135v25.3M25 160.3h73.3"
            stroke="#303a44"
            strokeWidth="4"
            strokeLinecap="round"
            strokeMiterlimit="4"
          />
          <circle
            cx="61.7"
            cy="61.7"
            r="54.7"
            stroke="#b10216"
            strokeWidth="4"
            strokeLinejoin="round"
            fill="none"
          />
          <ellipse
            cx="61.7"
            cy="61.7"
            rx="54.7"
            ry="29"
            transform="rotate(-45 61.7 61.7)"
            stroke="#b10216"
            strokeWidth="4"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="m23 23 77.3 77.3"
            stroke="#b10216"
            strokeWidth="4"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      );
    case "location":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 120.6 188.3"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <path
            d="M42 69.2a20.4 20.4 0 1 0 0-17.8"
            stroke="#303a44"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            d="M113.2 54a53.3 53.3 0 1 0-99.1 32.8l46.2 86.7 38.3-71.9"
            stroke="#b10216"
            strokeWidth="4"
            strokeMiterlimit="4"
            fill="none"
          />
          <path
            d="M112 72.9c1-4 1.6-8.3 1.6-12.6"
            stroke="#b10216"
            strokeWidth="4"
            strokeMiterlimit="4"
            fill="none"
          />
          <path
            d="M106.5 86.9c1.1-2 2.1-4 3-6.1"
            stroke="#b10216"
            strokeWidth="4"
            strokeMiterlimit="4"
            fill="none"
          />
        </svg>
      );
    case "source1":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 345.7 443.2"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <path
            d="M313.5 122.5h49.9a27 27 0 0 0 27.1-27.1V45.5a27 27 0 0 0-27.1-27.1h-49.9a27 27 0 0 0-27.1 27.1v49.9c.4 15.1 12 27.1 27.1 27.1Z"
            fill="#426da9"
            transform="translate(-147.1 -18.4)"
          />
          <path
            d="M264.6 148.3a30.8 30.8 0 0 0-30.7-30.7h-56a30.8 30.8 0 0 0-30.8 30.7v56.5a30.7 30.7 0 0 0 30.7 30.3H234a30.4 30.4 0 0 0 30.7-30.3Z"
            fill="#6d2077"
            transform="translate(-147.1 -18.4)"
          />
          <path
            d="M228.6 280.5h-34.8a18.8 18.8 0 0 0-18.6 18.7v34.7a18.8 18.8 0 0 0 18.6 18.7h34.8a18.8 18.8 0 0 0 18.6-18.7v-34.7a18.8 18.8 0 0 0-18.6-18.7Z"
            fill="#af1685"
            transform="translate(-147.1 -18.4)"
          />
          <path
            d="M323.5 66.3H295A15 15 0 0 0 280 81.4V110A15 15 0 0 0 295 125h28.5c8.5 0 15.6-7 15.1-15V81.3c-.4-8.4-6.6-15.1-15.1-15.1ZM174 358.2h-40.5a22.3 22.3 0 0 0-22.3 22.3v40.9c0 12 10.3 21.8 22.3 21.8h41a22.3 22.3 0 0 0 22.2-22.2v-40.5a23 23 0 0 0-22.7-22.3Z"
            fill="#e63888"
          />
          <path
            d="M234.5 162a81 81 0 0 0-81.4 81 81 81 0 0 0 80.5 81.4h.9c21.8 0 42.3-8.5 56-23.1a15 15 0 0 0 5-10.3 14.2 14.2 0 0 0-13.8-13.8c-4 0-8 2.7-10.7 5.4a50 50 0 0 1-37 14.2 54.1 54.1 0 0 1-53.8-44.5h123.3a1.6 1.6 0 0 0 1.3-.4 14.2 14.2 0 0 0 10.7-13.8c-.5-40.5-37.8-76.1-81-76.1Zm-52 64.5a54.8 54.8 0 0 1 52-37.8c24.5 0 45 15.5 51.6 37.8Z"
            fill="#1d4f91"
          />
          <path
            d="M316 322.6a2 2 0 0 1-1.8-1.8v-17.3h-3.6a2 2 0 0 1-1.8-1.8 2 2 0 0 1 1.8-1.8h11.1a1.8 1.8 0 0 1 0 3.6h-4v17.3a1.6 1.6 0 0 1-1.8 1.8Zm20.4 0c-.9 0-1.3-.9-1.8-1.3l-4.9-14.3v14.3a2 2 0 0 1-1.7 1.8 2 2 0 0 1-1.8-1.8v-18.7a2.9 2.9 0 0 1 2.6-2.7 2.4 2.4 0 0 1 2.3 2.2l4.9 14.3 4.9-14.3a5.4 5.4 0 0 1 2.2-2.2 2.9 2.9 0 0 1 2.6 2.7v18.7a2 2 0 0 1-1.7 1.8 2 2 0 0 1-1.8-1.8V307l-2.7 8.5-1.3 5.8c-.5.9-1 1.3-1.8 1.3Z"
            fill="#1d4f91"
          />
        </svg>
      );
    case "source2":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="126.4 2.3 589 589"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <circle cx="420.9" cy="296.8" r="294.5" fill="#3c5a9a" />
          <path
            className="bg"
            d="M517 93h-66c-38 0-81 16-81 72v59h-45v72h46v205h85V294h56l5-70h-63v-40c0-22 24-21 25-21h38V93z"
          />
        </svg>
      );
    case "source3":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="1 1 22 22"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <path
            fill="#4285F4"
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.07 5.07 0 0 1-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
          />
          <path
            fill="#34A853"
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77A6.55 6.55 0 0 1 12 18.63a6.57 6.57 0 0 1-6.16-4.53H2.18v2.84A10.99 10.99 0 0 0 12 23z"
          />
          <path
            fill="#FBBC05"
            d="M5.84 14.09a6.6 6.6 0 0 1 0-4.18V7.07H2.18a10.86 10.86 0 0 0 0 9.86l2.85-2.22.81-.62z"
          />
          <path
            fill="#EA4335"
            d="M12 5.38a6 6 0 0 1 4.21 1.64l3.15-3.15A10.55 10.55 0 0 0 12 1C7.7 1 3.99 3.47 2.18 7.07l3.66 2.84A6.57 6.57 0 0 1 12 5.38z"
          />
          <path className="none" d="M1 1h22v22H1z" />
        </svg>
      );
    case "source4":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2499.9 2500"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <defs>
            <radialGradient
              id="a"
              cx="332.1"
              cy="2511.8"
              r="3263.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.1" stopColor="#fa8f21" />
              <stop offset="0.8" stopColor="#d82d7e" />
            </radialGradient>
            <radialGradient
              id="b"
              cx="1516.1"
              cy="2623.8"
              r="2572.1"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.6" stopColor="#8c3aaa" stopOpacity="0" />
              <stop offset="1" stopColor="#8c3aaa" />
            </radialGradient>
          </defs>

          <path
            fill="url(#a)"
            d="M833.4 1250a416.6 416.6 0 1 1 833.3-.1 416.6 416.6 0 0 1-833.3.1m-225.3 0a641.8 641.8 0 1 0 1283.7 0 641.8 641.8 0 0 0-1283.7 0m1159.2-667.3a150 150 0 1 0 150-150 150 150 0 0 0-150 150M745 2267.5c-121.9-5.6-188.1-25.9-232.1-43-58.4-22.8-100-49.8-143.8-93.5s-70.9-85.4-93.5-143.7c-17.2-44-37.5-110.3-43-232.1-6-131.8-7.3-171.4-7.3-505.2s1.3-373.3 7.3-505.1c5.5-122 26-188 43-232.2 22.7-58.3 49.8-100 93.5-143.8s85.3-70.8 143.8-93.5c44-17.1 110.2-37.4 232.1-43 131.8-6 171.3-7.2 505-7.2s373.3 1.3 505.1 7.2c122 5.6 188 26 232.2 43 58.3 22.7 100 49.8 143.8 93.5s70.7 85.5 93.5 143.8c17.1 44 37.4 110.3 43 232.2 6 131.8 7.2 171.3 7.2 505.1s-1.2 373.3-7.2 505.2c-5.6 121.8-26 188-43 232-22.8 58.4-49.8 100-93.5 143.8s-85.5 70.7-143.8 93.5c-44 17.1-110.3 37.4-232.1 43-131.8 6-171.4 7.2-505.2 7.2s-373.3-1.2-505-7.2"
          />
          <path
            fill="url(#b)"
            d="M833.4 1250a416.6 416.6 0 1 1 833.3-.1 416.6 416.6 0 0 1-833.3.1m-225.3 0a641.8 641.8 0 1 0 1283.7 0 641.8 641.8 0 0 0-1283.7 0m1159.2-667.3a150 150 0 1 0 150-150 150 150 0 0 0-150 150M745 2267.5c-121.9-5.6-188.1-25.9-232.1-43-58.4-22.8-100-49.8-143.8-93.5s-70.9-85.4-93.5-143.7c-17.2-44-37.5-110.3-43-232.1-6-131.8-7.3-171.4-7.3-505.2s1.3-373.3 7.3-505.1c5.5-122 26-188 43-232.2 22.7-58.3 49.8-100 93.5-143.8s85.3-70.8 143.8-93.5c44-17.1 110.2-37.4 232.1-43 131.8-6 171.3-7.2 505-7.2s373.3 1.3 505.1 7.2c122 5.6 188 26 232.2 43 58.3 22.7 100 49.8 143.8 93.5s70.7 85.5 93.5 143.8c17.1 44 37.4 110.3 43 232.2 6 131.8 7.2 171.3 7.2 505.1s-1.2 373.3-7.2 505.2c-5.6 121.8-26 188-43 232-22.8 58.4-49.8 100-93.5 143.8s-85.5 70.7-143.8 93.5c-44 17.1-110.3 37.4-232.1 43-131.8 6-171.4 7.2-505.2 7.2s-373.3-1.2-505-7.2"
          />
        </svg>
      );
    case "source5":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="7 7 498 497.9"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <defs>
            <linearGradient
              id="a"
              x1="-974.5"
              x2="-622.4"
              y1="1306.8"
              y2="1658.9"
              gradientTransform="translate(1054.4 -1226.8)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stopColor="#2489be" />
              <stop offset="1" stopColor="#0575b3" />
            </linearGradient>
          </defs>
          <path
            fill="url(#a)"
            d="M256 7a249 249 0 1 0 0 498 249 249 0 0 0 0-498zm-66.4 369.4h-54.7V199.8h54.7v176.6zM162 176.6a32.5 32.5 0 0 1-32.3-32.6c0-18 14.4-32.5 32.3-32.5s32.3 14.5 32.3 32.5-14.5 32.6-32.3 32.6zm232.4 199.8H340v-92.7c0-25.5-9.6-39.7-29.7-39.7-22 0-33.3 14.8-33.3 39.7v92.7h-52.5V199.8H277v23.7s15.7-29.1 53.2-29.1c37.4 0 64.2 22.8 64.2 70.1v111.9z"
          />
        </svg>
      );
    case "source6":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 799.9 761"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <path
            fill="#00b67a"
            d="M799.9 290.8H494.4L400.1 0l-94.7 290.8L0 290.5l247.4 180L152.7 761l247.4-179.6L647 761l-94.3-290.5z"
          />
          <path fill="#005128" d="m574 536.2-21.2-65.7-152.7 110.9z" />
        </svg>
      );
    case "source7":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0.3 0.3 500 452"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <path
            fill="#000"
            d="M394 .3h76.7L303.2 191.7l197 260.5H346L225 294.2l-138.3 158H10.1l179.2-204.8L.3.2h158.2l109.2 144.5zm-26.9 406h42.5L135.4 43.7H89.8z"
          />
        </svg>
      );
    case "source8":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 926.7 1220"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <path
            fill="#bf2519"
            d="M23.6 587.4C3.8 619.1-4.5 718.8 2.4 784.9c2.4 21.8 6.4 40 12.1 50.9 7.9 15 21.2 24 36.3 24.5 9.7.5 15.8-1.2 198.3-59.9l81.5-26.1c20.2-5.2 33.9-23.8 35.2-47.5 1.3-24.4-11.2-45.9-32-53.6l-57.3-23.3C80.3 569 71.5 565.8 61.6 565.7c-15.2-.5-28.6 7.1-38 21.7m438.8 602.9c3.2-9.2 3.6-15.5 4.1-207.3l.5-85.6c1.3-20.8-12.1-39.7-34.1-48.2-22.7-8.7-47.1-3.3-60.8 13.7 0 0-40 47.5-40.2 47.5-137.4 161.4-143.2 168.9-146.5 178.4a39 39 0 0 0-2.2 17.6c.8 8.6 4.7 17 11.1 24.9 31.9 37.9 184.7 94.1 233.5 85.7 17.1-2.9 29.4-12.4 34.6-26.7m310.1-66.7c46.1-18.4 146.6-146.2 153.7-195.5a42.9 42.9 0 0 0-14.7-41.3c-7.7-5.8-13.6-8.1-196.1-68 0 0-80-26.4-81.1-26.9-19.4-7.5-41.5-.5-56.3 17.8-15.5 18.8-17.8 43.7-5.4 62.4l32.2 52.4c108.3 175.9 116.6 188.3 124.4 194.4 12 9.5 27.3 11.1 43.3 4.7m-94.3-452.8c207.3-50.2 215.4-52.9 223.5-58.3 12.6-8.5 18.9-22.6 17.8-39.8V571C914.2 520 825 387.6 781 366.1c-15.6-7.5-31.2-7-44.1 1.7-8 5.2-13.9 13.1-124.9 165l-50.7 69c-13.2 16.1-13.4 39.1-.5 58.9 13.4 20.5 36 30.4 56.7 24.7l-1 1.7a618 618 0 0 1 61.7-16.3M470.1 499.6c-3.6-82.2-28.3-448.1-31.2-465a43.7 43.7 0 0 0-33.4-30.7c-53-13.1-255.3 43.6-292.8 82.2-12.1 12.6-16.5 28-12.9 41.7 5.9 12.1 256.6 406.5 256.6 406.5 37 60.1 67.3 50.7 77.2 47.6 9.8-2.9 39.9-12.3 36.5-82.3"
          />
        </svg>
      );
    case "source9":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="5.24 13.43 54.05 37.95"
          preserveAspectRatio="xMidYMid meet"
          style={{
            display: "block",
            height: height,
            width: width,
          }}
          fill="none"
        >
          <path
            fill="#fff"
            className="bg"
            d="M41.27 31.81c-4.94-2.64-9.67-5.07-14.5-7.6v15.16c5.08-2.77 10.45-5.3 14.52-7.56z"
          />
          <path
            fill="#e8e0e0"
            d="M41.27 31.81a1838.9 1838.9 0 0 0-14.5-7.6l12.75 8.57 1.75-.97z"
          />
          <path
            fill="#cd201f"
            d="M27.7 51.24c-10.27-.19-13.78-.36-15.94-.8a7 7 0 0 1-3.65-1.9 7.7 7.7 0 0 1-1.73-3.34c-.38-1.27-.53-2.32-.74-4.9a116.4 116.4 0 0 1 0-15.88c.33-2.94.49-6.42 2.68-8.45a7.2 7.2 0 0 1 3.6-1.82c2.1-.4 11.1-.72 20.42-.72 9.3 0 18.31.32 20.42.72a7.03 7.03 0 0 1 4.2 2.5c2 3.14 2.04 7.05 2.24 10.11.09 1.46.09 9.74 0 11.2-.31 4.83-.57 6.54-1.28 8.32a6.13 6.13 0 0 1-1.48 2.36 7.08 7.08 0 0 1-3.76 1.93c-8.88.66-16.43.8-24.99.67zm13.6-19.43c-4.95-2.64-9.68-5.09-14.52-7.63v15.17c5.1-2.77 10.46-5.3 14.53-7.56z"
          />
        </svg>
      );
    default:
      return null;
  }
};

export default Svg;
