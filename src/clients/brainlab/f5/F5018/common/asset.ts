export const selectors = {
  tab: "div.scroll_tab_inner",
  extraTab: "div.scroll_tab_inner>li.tab-extra",
  tabPanel: "div.cmp-tabs",
};

export const tabActiveClasses = ["tab_selected", "cmp-tabs__tab--active"];

export const triggerMetrics = (mboxName: string) => {
  console.log("mbox=", mboxName);
  // @ts-ignore
  adobe && adobe.target && adobe.target.trackEvent({ mbox: mboxName });
};

export const cloudSvgIcon: string = `
<svg width="80" height="81" viewBox="0 0 80 81" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_1_4390)">
    <path d="M75.213 32.611C75.402 31.771 75.498 30.913 75.498 30.0535C75.498 23.545 70.1235 18.25 63.516 18.25C58.8105 18.25 54.5145 21.013 52.593 25.201C50.097 24.2995 47.295 24.3985 44.82 25.489C43.176 24.688 41.3535 24.25 39.516 24.25C34.8105 24.25 30.5145 27.013 28.593 31.201C27.456 30.79 26.2635 30.5815 25.0395 30.5815C19.572 30.5815 15.0825 34.777 14.7105 40.0735C11.088 40.4455 8.25 43.4785 8.25 47.1415C8.25 51.061 11.4855 54.25 15.462 54.25H24.348C21.93 55.4005 20.25 57.829 20.25 60.6415C20.25 64.561 23.4855 67.75 27.462 67.75H57.9345C62.796 67.75 66.75 63.853 66.75 59.0635C66.75 56.311 65.4375 53.7505 63.213 52.111C63.402 51.271 63.498 50.413 63.498 49.5535C63.498 49.1125 63.4695 48.679 63.42 48.25H69.9345C74.796 48.25 78.75 44.353 78.75 39.5635C78.75 36.811 77.4375 34.2505 75.213 32.611ZM9.75 47.1415C9.75 44.0635 12.3015 41.548 15.438 41.533C15.8505 41.5315 16.185 41.1955 16.185 40.783C16.185 35.9845 20.157 32.0815 25.0395 32.0815C26.31 32.0815 27.54 32.3425 28.6935 32.857C28.881 32.941 29.097 32.944 29.2875 32.8645C29.478 32.785 29.628 32.632 29.7 32.4385C31.2255 28.438 35.1705 25.75 39.5175 25.75C41.238 25.75 42.948 26.1715 44.4615 26.968C44.4615 26.968 44.4615 26.968 44.463 26.968C47.8785 28.768 49.9995 32.2495 49.9995 36.052C49.9995 36.64 49.9215 37.246 49.8015 37.873C45.789 38.452 42.279 41.0275 40.593 44.698C39.456 44.287 38.2635 44.0785 37.0395 44.0785C31.86 44.0785 27.5625 47.8465 26.8095 52.747H15.462C12.312 52.75 9.75 50.2345 9.75 47.1415ZM65.25 59.0635C65.25 63.0265 61.968 66.25 57.9345 66.25H27.462C24.312 66.25 21.75 63.7345 21.75 60.6415C21.75 57.5635 24.3015 55.0465 27.438 55.033C27.8505 55.0315 28.185 54.6955 28.185 54.283C28.185 49.4845 32.157 45.5815 37.0395 45.5815C38.31 45.5815 39.54 45.8425 40.6935 46.357C40.881 46.441 41.097 46.444 41.2875 46.3645C41.4765 46.285 41.628 46.132 41.7 45.9385C43.0965 42.2755 46.527 39.739 50.4315 39.3325H50.433C50.4345 39.3325 50.436 39.3325 50.4375 39.3325C50.796 39.295 51.1515 39.25 51.516 39.25C57.297 39.25 61.998 43.873 61.998 49.5535C61.998 50.4565 61.8765 51.3595 61.6365 52.234C61.551 52.549 61.6785 52.8835 61.9515 53.062C64.017 54.3985 65.25 56.6425 65.25 59.0635ZM69.9345 46.75H63.1425C61.86 41.593 57.141 37.75 51.516 37.75C51.4575 37.75 51.402 37.762 51.345 37.762C51.4365 37.1815 51.4995 36.613 51.4995 36.0535C51.4995 32.2165 49.617 28.6705 46.503 26.4685C48.5475 25.864 50.751 25.99 52.6935 26.857C52.881 26.941 53.097 26.944 53.2875 26.8645C53.478 26.785 53.628 26.632 53.7 26.4385C55.2255 22.438 59.1705 19.75 63.5175 19.75C69.2985 19.75 73.9995 24.373 73.9995 30.0535C73.9995 30.9565 73.878 31.8595 73.638 32.734C73.5525 33.049 73.68 33.3835 73.953 33.562C76.017 34.8985 77.25 37.1425 77.25 39.5635C77.25 43.5265 73.968 46.75 69.9345 46.75Z" fill="#1D9CD3" />
  </g>
  <defs>
    <clipPath id="clip0_1_4390">
      <rect width="80" height="80" fill="white" transform="translate(0 0.969727)" />
    </clipPath>
  </defs>
</svg>
`;
