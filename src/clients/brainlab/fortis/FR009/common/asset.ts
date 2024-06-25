import { title } from "../../FR006/common/asset";

export const selectors = {
  successStories: "div.success-stories",
  main: "body>main",
};

export const leftArrowSvg = `
<svg width="40" height="55" viewBox="0 0 40 55" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g filter="url(#filter0_d_139_32)">
    <path d="M36 52.452L32.848 56L4 28L32.848 0L36 3.548L10.808 28L36 52.452Z" fill="#5cb7e7" />
  </g>
</svg>
`;

export const rightArrowSvg = `
<svg width="40" height="55" viewBox="0 0 40 55" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 3.548L3.152 0L32 28L3.152 56L0 52.452L25.192 28L0 3.548Z" fill="#5cb7e7" />
</svg>
`;

export const mboxNames = {
  seeMore: "see-more",
  seeLess: "see-less",
  tab: "tab",
  slideArrow: "slide-arrow",
  slideDot: "slide-dot",
  accordionToggle: "accordion-toggle",
  formSubmitButton: "form-submit-button",
  applyClick: "apply-click",
  scrollToSndOfWhatToLear: "scroll-to-end-of-what-to-learn",
};

export const logo: string = "https://www.fortis.edu/content/dam/edaff/logo.png";

export const skillSvg: string = `
<svg width="132" height="132" viewBox="0 0 132 132" fill="none" xmlns="http://www.w3.org/2000/svg">
  <mask id="mask0_91_252" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="132" height="132">
    <path d="M132 0H0V132H132V0Z" fill="white" />
  </mask>
  <g mask="url(#mask0_91_252)">
    <path d="M94.3129 -0.344908C98.0898 -0.352205 101.831 0.45612 105.32 2.0335C108.68 3.5444 111.741 5.74794 114.337 8.5235C116.921 11.2752 118.987 14.5519 120.419 18.1693C121.893 21.9065 122.653 25.9325 122.653 30.0013C122.653 34.07 121.893 38.0961 120.419 41.8332C118.987 45.4506 116.921 48.7274 114.337 51.479C111.745 54.2533 108.687 56.4568 105.331 57.969C98.2751 61.1393 90.3571 61.1393 83.301 57.969C79.9441 56.4572 76.8855 54.2537 74.2924 51.479C71.708 48.7274 69.6418 45.4506 68.2101 41.8332C66.7359 38.0961 65.9756 34.07 65.9756 30.0013C65.9756 25.9325 66.7359 21.9065 68.2101 18.1693C69.6417 14.5519 71.708 11.2751 74.2924 8.5235C76.8845 5.74922 79.942 3.54575 83.2979 2.0335C86.7897 0.455183 90.5334 -0.353157 94.3129 -0.344908ZM94.3129 55.1994C100.562 55.2307 106.57 52.5726 111.034 47.8016C113.218 45.4894 114.953 42.7226 116.138 39.6649C117.323 36.6073 117.934 33.3212 117.934 30.0013C117.934 26.6813 117.323 23.3952 116.138 20.3376C114.953 17.28 113.218 14.5131 111.034 12.2009C106.555 7.45653 100.558 4.80295 94.3153 4.80295C88.0728 4.80295 82.0758 7.45653 77.5961 12.2009C75.4128 14.513 73.6771 17.2798 72.4918 20.3374C71.3065 23.3951 70.6958 26.6813 70.6958 30.0013C70.6958 33.3212 71.3065 36.6075 72.4918 39.6651C73.6771 42.7227 75.4128 45.4895 77.5961 47.8016C82.0597 52.5714 88.0659 55.2293 94.3129 55.1994Z" fill="#5CB7E7" />
    <path d="M106.586 132.345C105.96 132.345 105.36 132.074 104.918 131.591C104.476 131.108 104.227 130.454 104.227 129.771V107.538C104.227 106.855 104.476 106.201 104.918 105.718C105.36 105.235 105.96 104.964 106.586 104.964C107.211 104.964 107.811 105.235 108.254 105.718C108.696 106.201 108.944 106.855 108.944 107.538V129.771C108.944 130.454 108.696 131.108 108.254 131.591C107.811 132.074 107.211 132.345 106.586 132.345Z" fill="#5CB7E7" />
    <path d="M59.709 132.345C59.0835 132.345 58.4835 132.074 58.0412 131.591C57.5988 131.108 57.3503 130.454 57.3503 129.771V102.673C57.3503 101.99 57.5988 101.336 58.0412 100.853C58.4835 100.37 59.0835 100.099 59.709 100.099C60.3346 100.099 60.9345 100.37 61.3769 100.853C61.8192 101.336 62.0677 101.99 62.0677 102.673V129.771C62.0677 130.454 61.8192 131.108 61.3769 131.591C60.9345 132.074 60.3346 132.345 59.709 132.345Z" fill="#5CB7E7" />
    <path d="M129.959 132.345C129.338 132.345 128.742 132.078 128.3 131.601C127.859 131.125 127.607 130.478 127.6 129.8L127.342 105.05C127.117 94.6577 124.932 87.0146 120.658 81.6846C116.499 76.4988 110.221 73.3602 101.474 72.0903C96.923 71.4296 63.2378 67.9719 62.8981 67.941C62.5897 67.9094 62.2901 67.8119 62.0162 67.6539C61.7423 67.496 61.4996 67.2807 61.302 67.0204C60.9029 66.4947 60.7114 65.8176 60.7698 65.1378C60.8282 64.4581 61.1316 63.8316 61.6133 63.396C62.095 62.9604 62.7156 62.7515 63.3384 62.8152C64.7285 62.9576 97.4608 66.3125 102.095 66.9869C112.03 68.4283 119.264 72.1349 124.21 78.2937C129.242 84.571 131.813 93.2884 132.061 104.944C132.061 104.954 132.061 104.964 132.061 104.974L132.317 129.742C132.321 130.08 132.263 130.415 132.148 130.729C132.033 131.043 131.862 131.329 131.646 131.571C131.429 131.812 131.171 132.005 130.886 132.138C130.601 132.271 130.295 132.341 129.985 132.345H129.959Z" fill="#5CB7E7" />
    <path d="M10.1014 98.3042C9.12991 98.3286 8.15973 98.2133 7.21591 97.961C5.21466 97.4242 3.44983 96.1371 2.22964 94.3247C0.862514 92.0315 0.0668916 89.3888 -0.0787257 86.6576C-0.313744 83.722 -0.385161 80.7736 -0.29258 77.8286L-0.281573 77.065C-0.213957 72.4746 -0.158921 68.5106 1.02042 65.3703C2.44664 61.5624 5.31795 59.4569 9.80103 58.9335L10.603 58.8357C11.5233 58.7012 12.45 58.625 13.3784 58.6074C14.5658 58.6159 15.7478 58.7842 16.8975 59.1085C20.6735 60.2898 23.9459 62.8886 26.1373 66.4462C28.6576 70.3099 29.997 74.9428 29.9647 79.6853C29.9734 82.0699 29.5445 84.4321 28.7033 86.6328C27.862 88.8336 26.6254 90.8281 25.0665 92.4989C22.0012 95.6628 18.0526 97.6143 13.8517 98.0417H13.836L13.6787 98.0588C12.4909 98.207 11.2969 98.2889 10.1014 98.3042ZM13.3784 63.7572C12.6277 63.7774 11.8786 63.8427 11.1345 63.9528L10.3026 64.0541C6.90928 64.4488 5.93593 65.8576 5.38714 67.3145C4.59019 70.5149 4.26847 73.8341 4.43423 77.1456L4.42322 77.9075C4.35718 82.9252 4.2817 88.6207 6.06172 91.3269C6.65282 92.1805 7.50471 92.7747 8.46287 93.0017C9.00107 93.1269 9.5515 93.1782 10.1014 93.1544C11.1329 93.1394 12.1631 93.0678 13.1881 92.9399L13.3532 92.921C16.4994 92.6166 19.4619 91.1723 21.769 88.818C22.8825 87.6148 23.7641 86.1805 24.3618 84.5996C24.9594 83.0188 25.261 81.3233 25.2489 79.6133C25.2695 75.9623 24.2345 72.3972 22.2911 69.4252C20.7601 66.875 18.4572 64.9923 15.7842 64.1056C14.9986 63.8812 14.1904 63.7642 13.3784 63.7572Z" fill="#5CB7E7" />
    <path d="M14.7293 63.7573C14.1037 63.7573 13.5038 63.4861 13.0614 63.0034C12.6191 62.5206 12.3706 61.8659 12.3706 61.1832V47.4928C12.4209 46.0651 12.669 44.654 13.1065 43.3074L14.1082 39.6935C14.1218 39.6443 14.137 39.5951 14.1538 39.5459C14.7273 37.4193 15.8668 35.5265 17.4276 34.1078C19.3615 32.7197 21.6627 32.0709 23.9706 32.2631H58.4295C59.055 32.2631 59.655 32.5343 60.0973 33.017C60.5397 33.4997 60.7882 34.1544 60.7882 34.8371C60.7882 35.5198 60.5397 36.1745 60.0973 36.6572C59.655 37.14 59.055 37.4111 58.4295 37.4111H23.9706C22.6773 37.2373 21.3673 37.5283 20.2392 38.24C19.4461 39.0597 18.8791 40.1053 18.6023 41.2585L17.6179 44.8106L17.61 44.8398C17.3272 45.6944 17.1515 46.5868 17.088 47.4928V61.1901C17.0863 61.8716 16.8371 62.5245 16.3949 63.0058C15.9528 63.487 15.3538 63.7573 14.7293 63.7573Z" fill="#5CB7E7" />
    <path d="M57.8429 105.632H20.0049C17.9955 105.645 16.0633 104.788 14.6321 103.249C13.2009 101.709 12.3876 99.6133 12.3706 97.4205V95.3115C12.3706 94.9734 12.4316 94.6387 12.5501 94.3264C12.6687 94.0141 12.8424 93.7304 13.0614 93.4914C13.2805 93.2523 13.5405 93.0627 13.8267 92.9334C14.1128 92.804 14.4195 92.7374 14.7293 92.7374C15.039 92.7374 15.3458 92.804 15.6319 92.9334C15.9181 93.0627 16.1781 93.2523 16.3971 93.4914C16.6162 93.7304 16.7899 94.0141 16.9084 94.3264C17.027 94.6387 17.088 94.9734 17.088 95.3115V97.4205C17.1037 98.2484 17.4195 99.0357 17.9663 99.6099C18.5131 100.184 19.2462 100.498 20.0049 100.484H57.8429C58.601 100.497 59.3331 100.183 59.8789 99.6086C60.4248 99.0345 60.7399 98.2476 60.7551 97.4205V50.3087C60.7411 49.4805 60.4266 48.6922 59.8807 48.1167C59.3347 47.5412 58.6019 47.2255 57.8429 47.2388H24.7883C24.1627 47.2388 23.5628 46.9676 23.1205 46.4849C22.6781 46.0021 22.4296 45.3474 22.4296 44.6647C22.4296 43.9821 22.6781 43.3273 23.1205 42.8446C23.5628 42.3619 24.1627 42.0907 24.7883 42.0907H57.8429C59.8526 42.0788 61.7846 42.9374 63.2149 44.478C64.6452 46.0187 65.4571 48.1156 65.4725 50.3087V97.4205C65.4563 99.6127 64.6439 101.708 63.2136 103.248C61.7833 104.787 59.8518 105.644 57.8429 105.632Z" fill="#5CB7E7" />
  </g>
</svg>
`;

export const careerSvg: string = `
<svg width="132" height="132" viewBox="0 0 132 132" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_91_264)">
    <mask id="mask0_91_264" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="132" height="132">
      <path d="M132 0H0V132H132V0Z" fill="white" />
    </mask>
    <g mask="url(#mask0_91_264)">
      <path d="M50.1103 103.114H24.7063C23.3737 103.112 22.0961 102.535 21.1538 101.51C20.2115 100.484 19.6814 99.0945 19.6797 97.6446V93.0266C19.6982 92.26 19.8236 91.5009 20.0516 90.7752L20.0996 90.6008L22.3437 82.3067C22.5859 81.4319 23.0798 80.6649 23.7527 80.1183C24.4256 79.5718 25.2419 79.2746 26.0816 79.2705H47.948C48.786 79.2748 49.6006 79.5713 50.2722 80.1166C50.9439 80.6618 51.4371 81.427 51.6795 82.2997L53.9235 90.5921C54.081 91.2376 54.1029 91.9134 53.9878 92.5694C53.8726 93.2253 53.6233 93.8447 53.2583 94.3817C52.9036 94.9 52.4404 95.3187 51.9071 95.6032C51.3738 95.8877 50.7859 96.0297 50.192 96.0175H27.2533C26.9586 96.0175 26.6668 95.9543 26.3945 95.8316C26.1223 95.7089 25.8749 95.5291 25.6665 95.3024C25.4581 95.0757 25.2928 94.8065 25.1801 94.5103C25.0673 94.2141 25.0092 93.8966 25.0092 93.576C25.0092 93.2554 25.0673 92.9379 25.1801 92.6417C25.2928 92.3454 25.4581 92.0763 25.6665 91.8496C25.8749 91.6229 26.1223 91.443 26.3945 91.3203C26.6668 91.1976 26.9586 91.1345 27.2533 91.1345H49.3874L47.5024 84.1448H26.5208L24.405 91.9681L24.3505 92.1686C24.2609 92.4447 24.1997 92.7307 24.1677 93.0214V97.6411C24.1682 97.7964 24.225 97.9451 24.3259 98.0549C24.4269 98.1647 24.5636 98.2266 24.7063 98.2271H50.1103C50.405 98.2271 50.6968 98.2902 50.969 98.4129C51.2413 98.5356 51.4887 98.7154 51.697 98.9422C51.9054 99.1689 52.0707 99.438 52.1835 99.7342C52.2963 100.03 52.3543 100.348 52.3543 100.669C52.3543 100.989 52.2963 101.307 52.1835 101.603C52.0707 101.899 51.9054 102.168 51.697 102.395C51.4887 102.622 51.2413 102.802 50.969 102.924C50.6968 103.047 50.405 103.11 50.1103 103.11V103.114Z" fill="#5CB7E7" />
      <path d="M37.9559 41.7985C34.1364 41.7987 30.4027 40.5666 27.2268 38.258C24.0509 35.9495 21.5756 32.6681 20.1138 28.8289C18.652 24.9896 18.2695 20.765 19.0145 16.6893C19.7595 12.6135 21.5987 8.86961 24.2994 5.93108C27.0005 2.9906 30.4426 0.987887 34.1901 0.176304C37.9377 -0.635279 41.8222 -0.219257 45.3524 1.37174C48.8825 2.96273 51.8997 5.6572 54.022 9.11424C56.1443 12.5713 57.2765 16.6356 57.2754 20.7929C57.2747 23.5524 56.7745 26.2847 55.8032 28.8338C54.8319 31.3829 53.4086 33.6989 51.6146 35.6495C49.8206 37.6001 47.691 39.1471 45.3474 40.2022C43.0038 41.2572 40.4922 41.7997 37.9559 41.7985ZM37.9559 4.65277C35.0244 4.65415 32.1591 5.60109 29.7222 7.37389C27.2852 9.14669 25.386 11.6658 24.2647 14.6127C23.1434 17.5596 22.8503 20.8021 23.4224 23.9302C23.9945 27.0584 25.4061 29.9317 27.4789 32.1872C29.5517 34.4426 32.1925 35.9788 35.0675 36.6016C37.9426 37.2243 40.9228 36.9058 43.6315 35.6861C46.3402 34.4664 48.6557 32.4004 50.2854 29.7492C51.9151 27.098 52.7857 23.9806 52.7873 20.7911C52.7839 16.5124 51.2203 12.41 48.4396 9.38428C45.659 6.35861 41.8885 4.65693 37.9559 4.65277Z" fill="#5CB7E7" />
      <path d="M52.1029 132.18C51.5078 132.18 50.937 131.922 50.5161 131.464C50.0953 131.007 49.8589 130.386 49.8589 129.738V112.771C49.8589 112.124 50.0953 111.503 50.5161 111.045C50.937 110.587 51.5078 110.33 52.1029 110.33C52.6981 110.33 53.2688 110.587 53.6897 111.045C54.1105 111.503 54.3469 112.124 54.3469 112.771V129.738C54.3469 130.386 54.1105 131.007 53.6897 131.464C53.2688 131.922 52.6981 132.18 52.1029 132.18Z" fill="#5CB7E7" />
      <path d="M55.1259 109.552C54.5307 109.552 53.9599 109.295 53.5391 108.837C53.1183 108.379 52.8818 107.758 52.8818 107.11C52.8355 102.472 53.8905 97.8988 55.9449 93.8339C57.9692 89.9631 60.7957 86.6597 64.1997 84.1865C67.8233 81.547 71.8348 79.6007 76.061 78.4315C85.1613 75.9284 94.6852 75.8757 103.808 78.278C107.862 79.3562 111.735 81.1218 115.285 83.5098C118.593 85.7268 121.433 88.6785 123.62 92.1719C125.802 95.7222 127.14 99.8067 127.513 104.059C127.547 104.38 127.521 104.705 127.438 105.016C127.355 105.326 127.216 105.616 127.029 105.868C126.842 106.119 126.612 106.328 126.35 106.482C126.088 106.635 125.801 106.731 125.506 106.763C125.21 106.795 124.911 106.763 124.627 106.668C124.343 106.573 124.078 106.418 123.85 106.212C123.621 106.005 123.432 105.751 123.295 105.464C123.157 105.177 123.073 104.864 123.048 104.542C122.695 101.053 121.591 97.704 119.827 94.7659C118.063 91.8278 115.687 89.3834 112.892 87.6307C109.74 85.5184 106.303 83.9583 102.706 83.0076C98.6365 81.9108 94.4578 81.369 90.2657 81.3944C80.969 81.3944 72.618 83.8133 66.7339 88.2062C63.9058 90.2578 61.5563 92.9986 59.872 96.2109C58.1918 99.5505 57.3322 103.305 57.3763 107.112C57.3761 107.433 57.3177 107.751 57.2044 108.048C57.0911 108.344 56.9252 108.613 56.7162 108.84C56.5072 109.067 56.2591 109.246 55.9862 109.368C55.7133 109.49 55.421 109.553 55.1259 109.552Z" fill="#5CB7E7" />
      <path d="M52.1047 132.225C51.5095 132.225 50.9387 131.968 50.5179 131.51C50.0971 131.052 49.8606 130.431 49.8606 129.783V111.866C49.8479 110.325 50.2746 108.817 51.082 107.55C51.896 106.299 53.0512 105.358 54.3839 104.861C54.6001 104.778 54.8266 104.733 55.0555 104.725C61.754 104.491 68.4267 104.339 74.8783 104.191C90.5368 103.832 106.729 103.462 125.111 101.924C125.173 101.924 125.236 101.924 125.3 101.924C126.995 101.942 128.629 102.616 129.908 103.827L129.919 103.837C130.646 104.536 131.226 105.395 131.623 106.357C132.019 107.32 132.222 108.363 132.218 109.418V127.082C132.218 127.73 131.982 128.351 131.561 128.808C131.14 129.266 130.569 129.524 129.974 129.524C129.379 129.524 128.808 129.266 128.387 128.808C127.966 128.351 127.73 127.73 127.73 127.082V109.402C127.736 109.044 127.67 108.688 127.538 108.36C127.407 108.032 127.211 107.738 126.965 107.499C126.516 107.072 125.946 106.826 125.35 106.802C106.888 108.349 90.665 108.72 74.9745 109.079C68.6624 109.224 62.1403 109.374 55.6005 109.603C55.2108 109.806 54.8846 110.129 54.6623 110.532C54.44 110.935 54.3315 111.4 54.3503 111.87V129.783C54.3503 130.104 54.2922 130.422 54.1793 130.718C54.0664 131.014 53.901 131.284 53.6925 131.51C53.4839 131.737 53.2363 131.917 52.9639 132.04C52.6915 132.162 52.3995 132.225 52.1047 132.225Z" fill="#5CB7E7" />
      <path d="M90.1967 24.4377C96.1546 24.4377 101.869 27.0128 106.081 31.5964C110.294 36.18 112.661 42.3967 112.661 48.879C112.661 55.3612 110.294 61.5779 106.081 66.1615C101.869 70.7451 96.1546 73.3202 90.1967 73.3202C84.2388 73.3202 78.5249 70.7451 74.3121 66.1615C70.0992 61.5779 67.7324 55.3612 67.7324 48.879C67.7324 42.3967 70.0992 36.18 74.3121 31.5964C78.5249 27.0128 84.2388 24.4377 90.1967 24.4377ZM90.1967 68.4372C93.752 68.437 97.2274 67.2899 100.183 65.1408C103.14 62.9917 105.443 59.9372 106.804 56.3635C108.165 52.7898 108.521 48.8574 107.827 45.0635C107.133 41.2697 105.421 37.7848 102.908 35.0496C101.243 33.2121 99.2601 31.7512 97.074 30.7511C94.8879 29.7509 92.5416 29.2313 90.1701 29.222C87.7986 29.2128 85.4489 29.7142 83.2563 30.6973C81.0638 31.6805 79.0716 33.1259 77.3947 34.9504C75.7179 36.7748 74.3893 38.9423 73.4857 41.3278C72.5821 43.7134 72.1213 46.2698 72.1297 48.85C72.1382 51.4302 72.6158 53.983 73.5351 56.3615C74.4544 58.7399 75.7971 60.897 77.4859 62.7083C79.1512 64.5302 81.1321 65.9746 83.3139 66.9579C85.4957 67.9413 87.8351 68.444 90.1967 68.4372Z" fill="#5CB7E7" />
      <path d="M46.847 116.536C34.5818 116.536 23.0139 114.308 14.2782 110.258C4.93345 105.928 -0.213379 99.915 -0.213379 93.3281C-0.213379 88.4137 2.65096 83.8202 7.98533 80.0045V69.6822C7.98783 66.4897 8.6773 63.3422 9.99854 60.4916C11.4239 57.4273 13.4442 54.7366 15.9196 52.6056C21.4751 47.733 29.2907 45.1572 38.5201 45.1572C47.7495 45.1572 55.65 47.726 61.337 52.5916C63.8643 54.7083 65.9419 57.3935 67.428 60.4637C68.7948 63.3091 69.5097 66.4716 69.5117 69.6822C69.5118 70.2514 69.329 70.8027 68.9951 71.2409C68.6611 71.6791 68.197 71.9765 67.6828 72.0818L66.8397 72.2562C72.0271 73.3501 77.0668 75.1518 81.8394 77.6188L79.847 81.9943C72.8569 78.2257 63.1339 75.8208 52.5645 75.179L11.042 83.672C6.67899 86.6175 4.27467 89.999 4.27467 93.3281C4.27467 97.7682 8.56236 102.302 16.0366 105.766C24.2289 109.562 35.1717 111.653 46.847 111.653C47.953 111.653 50.5449 111.653 51.8977 111.517L52.3096 116.379C50.7581 116.536 48.1133 116.536 46.847 116.536ZM38.5121 50.042C30.3198 50.042 23.4787 52.2428 18.7294 56.4091C16.8294 57.9601 15.2787 59.9612 14.1948 62.2608C13.1109 64.5604 12.5222 67.0983 12.4734 69.6822V77.284C13.0558 76.9817 13.6574 76.6869 14.2782 76.3998C23.0155 72.3504 34.5818 70.1216 46.847 70.1216C48.6636 70.1216 50.4695 70.1716 52.2648 70.2716L64.9034 67.6853C64.6734 65.946 64.172 64.2621 63.4208 62.7064C62.2298 60.2567 60.5672 58.1153 58.5464 56.4283C55.1515 53.5124 48.9132 50.0402 38.5185 50.0402L38.5121 50.042Z" fill="#5CB7E7" />
    </g>
  </g>
  <defs>
    <clipPath id="clip0_91_264">
      <rect width="132" height="132" fill="white" />
    </clipPath>
  </defs>
</svg>
`;

export const quickPathwaySvg: string = `
<svg width="174" height="132" viewBox="0 0 174 132" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_91_243)">
    <path d="M147.646 0.00195315C148.13 0.00222547 148.605 0.116149 149.024 0.332383C149.443 0.548616 149.792 0.859617 150.035 1.23442L173.623 37.5266C173.868 37.904 173.998 38.3325 173.999 38.7691C174.001 39.2057 173.874 39.635 173.632 40.0136C173.389 40.3922 173.04 40.7069 172.619 40.9258C172.199 41.1448 171.721 41.2603 171.234 41.2608H160.523V126.487C160.521 127.947 159.873 129.347 158.723 130.38C157.572 131.413 156.012 131.994 154.385 131.996H140.908C139.282 131.992 137.725 131.41 136.577 130.377C135.428 129.345 134.782 127.946 134.781 126.487V41.2608H124.076C123.589 41.261 123.111 41.1459 122.689 40.9273C122.268 40.7086 121.918 40.394 121.675 40.0153C121.433 39.6365 121.305 39.207 121.307 38.7701C121.308 38.3332 121.438 37.9043 121.682 37.5266L145.255 1.23442C145.499 0.859334 145.848 0.548152 146.268 0.331902C146.687 0.115651 147.163 0.00188796 147.646 0.00195315ZM166.422 36.2942L147.646 7.41417L128.871 36.2942H137.533C138.267 36.2942 138.971 36.5559 139.49 37.0218C140.009 37.4877 140.301 38.1196 140.301 38.7784V126.481C140.301 126.623 140.363 126.76 140.474 126.861C140.585 126.963 140.736 127.021 140.895 127.024H154.385C154.464 127.024 154.543 127.01 154.616 126.982C154.69 126.955 154.756 126.915 154.813 126.865C154.869 126.814 154.913 126.755 154.944 126.689C154.974 126.623 154.99 126.552 154.99 126.481V38.7784C154.99 38.1196 155.281 37.4877 155.8 37.0218C156.319 36.5559 157.023 36.2942 157.757 36.2942H166.422Z" fill="#5CB7E7" />
    <path d="M33.0812 131.996C32.3475 131.996 31.6439 131.735 31.1249 131.269C30.6059 130.804 30.314 130.172 30.3135 129.514V81.121C30.3135 80.4621 30.6051 79.8302 31.1241 79.3643C31.6432 78.8985 32.3471 78.6367 33.0812 78.6367C33.8149 78.6372 34.5183 78.8992 35.0369 79.365C35.5554 79.8309 35.8467 80.4624 35.8467 81.121V129.514C35.8462 130.172 35.5546 130.803 35.0361 131.269C34.5176 131.734 33.8145 131.996 33.0812 131.996Z" fill="#5CB7E7" />
    <path d="M33.081 29.1718C29.8675 29.1722 26.7261 28.3172 24.054 26.7149C21.3819 25.1127 19.2991 22.8351 18.0692 20.1704C16.8392 17.5056 16.5173 14.5733 17.1441 11.7443C17.7709 8.91531 19.3183 6.31669 21.5906 4.27711C23.8629 2.23754 26.758 0.848604 29.9098 0.285979C33.0616 -0.276646 36.3285 0.0123082 39.2973 1.1163C42.2661 2.22029 44.8035 4.08972 46.5886 6.48817C48.3736 8.88662 49.3262 11.7064 49.3258 14.5908C49.3252 18.4577 47.6135 22.1662 44.5672 24.9005C41.5208 27.6349 37.3892 29.1713 33.081 29.1718ZM33.081 4.97632C30.9621 4.97594 28.8906 5.53968 27.1286 6.59624C25.3667 7.6528 23.9934 9.15469 23.1826 10.9119C22.3718 12.6691 22.1599 14.6027 22.5737 16.4681C22.9874 18.3335 24.0083 20.0467 25.5071 21.3912C27.0059 22.7357 28.9152 23.651 30.9937 24.0212C33.0721 24.3915 35.2262 24.2001 37.1835 23.4713C39.1407 22.7425 40.8131 21.509 41.9892 19.9268C43.1652 18.3447 43.792 16.485 43.7903 14.583C43.7898 12.0336 42.6613 9.58873 40.6532 7.78584C38.645 5.98295 35.9214 4.96962 33.081 4.96859V4.97632Z" fill="#5CB7E7" />
    <path d="M46.5604 131.998H19.6043C17.9804 131.995 16.4243 131.414 15.276 130.383C14.1278 129.353 13.481 127.956 13.477 126.498V86.4199C9.70536 85.8295 6.28642 84.0643 3.82144 81.4349C1.35647 78.8054 0.00333126 75.4801 0 72.0436V44.8288C0.00187993 42.072 0.970015 39.3856 2.76729 37.15C4.56456 34.9145 7.09986 33.2431 10.0141 32.3727C10.0765 32.3553 10.1368 32.338 10.1992 32.3244L18.9306 30.3173C19.3959 30.2109 19.884 30.215 20.347 30.3291C20.81 30.4433 21.2319 30.6635 21.5714 30.9683L33.0963 41.3284L77.0139 2.48626C78.8079 1.00073 81.1728 0.196042 83.6132 0.240784C86.0535 0.285527 88.3798 1.17623 90.1048 2.72628C91.8298 4.27632 92.8195 6.36542 92.8665 8.55588C92.9136 10.7463 92.0145 12.8681 90.3574 14.4768L52.6942 48.2828V126.489C52.693 127.949 52.0466 129.349 50.8966 130.382C49.7467 131.415 48.1872 131.996 46.5604 131.998ZM16.2339 48.3948C16.968 48.3948 17.672 48.6566 18.191 49.1225C18.7101 49.5884 19.0017 50.2202 19.0017 50.8791V126.489C19.0044 126.629 19.0677 126.763 19.1781 126.862C19.2885 126.961 19.4374 127.017 19.5935 127.02H46.5604C46.7165 127.017 46.8655 126.961 46.9759 126.862C47.0863 126.763 47.1495 126.629 47.1523 126.489V47.2609C47.1509 46.6021 47.4413 45.9697 47.9593 45.503L86.4491 10.9667C86.8157 10.6413 87.1071 10.254 87.3064 9.82713C87.5058 9.40026 87.6091 8.94223 87.6106 8.47938C87.612 8.01653 87.5115 7.55799 87.3148 7.13012C87.1182 6.70226 86.8292 6.3135 86.4646 5.98622C86.0999 5.65893 85.6668 5.39957 85.1902 5.22304C84.7135 5.04652 84.2026 4.95631 83.687 4.9576C83.1713 4.9589 82.661 5.05167 82.1854 5.23059C81.7098 5.40951 81.2784 5.67104 80.9158 6.00015L80.9029 6.01174L35.0268 46.5983C34.5067 47.0587 33.8048 47.3159 33.0743 47.3137C32.3438 47.3115 31.6438 47.0502 31.1271 46.5867L18.7628 35.4829L11.6476 37.1114C9.85591 37.661 8.30119 38.701 7.20212 40.085C6.10304 41.4689 5.51488 43.1273 5.52036 44.8269V72.0436C5.52351 74.1607 6.30381 76.2178 7.74055 77.8967C9.17728 79.5757 11.1904 80.7829 13.4684 81.3316V50.8791C13.4684 50.2202 13.76 49.5884 14.279 49.1225C14.7981 48.6566 15.5021 48.3948 16.2361 48.3948H16.2339Z" fill="#5CB7E7" />
    <path d="M106.41 48.3928H121.497C122.198 48.3928 122.892 48.5167 123.539 48.7574C124.186 48.998 124.774 49.3508 125.27 49.7954C125.765 50.2401 126.158 50.7681 126.426 51.3491C126.695 51.9301 126.833 52.5528 126.833 53.1817V127.209C126.833 128.479 126.27 129.697 125.27 130.595C124.269 131.493 122.912 131.998 121.497 131.998H106.41C104.995 131.998 103.638 131.493 102.638 130.595C101.637 129.697 101.075 128.479 101.075 127.209V53.1817C101.075 51.9116 101.637 50.6935 102.638 49.7954C103.638 48.8974 104.995 48.3928 106.41 48.3928ZM121.293 53.3594H106.608V127.028H121.293V53.3594Z" fill="#5CB7E7" />
    <path d="M72.7137 84.687H87.8005C88.5012 84.687 89.1949 84.8109 89.8422 85.0515C90.4895 85.2922 91.0777 85.645 91.5731 86.0896C92.0686 86.5343 92.4615 87.0622 92.7297 87.6433C92.9978 88.2243 93.1358 88.847 93.1358 89.4759V127.211C93.1358 128.481 92.5737 129.699 91.5731 130.597C90.5726 131.495 89.2155 132 87.8005 132H72.7137C71.2987 132 69.9416 131.495 68.9411 130.597C67.9405 129.699 67.3784 128.481 67.3784 127.211V89.4759C67.3784 88.2058 67.9405 86.9877 68.9411 86.0896C69.9416 85.1916 71.2987 84.687 72.7137 84.687ZM87.5961 89.6536H72.9117V127.03H87.5961V89.6536Z" fill="#5CB7E7" />
  </g>
  <defs>
    <clipPath id="clip0_91_243">
      <rect width="174" height="132" fill="white" />
    </clipPath>
  </defs>
</svg>
`;

export const features = [
  {
    icon: skillSvg,
    title: "GET THE SKILLS EMPLOYERS NEED",
    description:
      "Our programs focus on developing professional skills through hands-on training and real-world experience, helping you stand out to employers.",
  },
  {
    icon: careerSvg,
    title: "CAREER COUNSELING AND ACADEMIC ADVISING",
    description:
      "We truly want you to succeed so our instructors, career counselors, and academic advisors check in regularly and provide ongoing support throughout your time in program — and beyond.",
  },
  {
    icon: quickPathwaySvg,
    title: "QUICK PATHWAYS TO ENTER YOUR FIELD",
    description:
      "Unlike community colleges, we don’t have general education requirements or prerequisites, allowing you to begin classes right away and move quickly toward the career you want.",
  },
];

export const callingIcon: string =
  "https://brainlabs.digital//cro/fortis/fr009/calling-icon.png";

export const phoneNumberText: string = "855-243-0380";
export const phoneNumber: number = 8552430380;
export const skillImg: string =
  "https://brainlabs.digital//cro/fortis/fr009/skill.jpg";
export const experienceImg: string =
  "https://brainlabs.digital//cro/fortis/fr009/experience.jpg";

export const abouts = [
  {
    img: experienceImg,
    title: "Experience the Fortis Difference",
    description:
      "Our experienced and dedicated faculty are committed to providing students with the knowledge and skills they need to succeed in their chosen field. Whether your passion is nursing, medical assisting, dental hygiene, welding or HVACR, Fortis offers a variety of programs all designed to provide you with real-world experiences, so you are ready to begin their careers after graduation.",
  },
  {
    img: skillImg,
    title: "Real Skills for Real Life",
    description:
      "It is not just what you know, it is also what you can DO! Today’s job market is competitive. Employers are looking for people with the right skills to do the job, and the key to getting these skills is choosing a quality education. Our career education programs are designed to prepare you with the real-world experiences that you will need for an entry-level position in a variety of career fields.",
  },
];

export const offers = {
  nursingPrograms: {
    title: "Nursing Programs",
    items: [
      {
        icon: "https://brainlabs.digital/cro/fortis/fr009/nursing.png",
        title: "PRACTICAL NURSING (LPN)",
      },
      {
        icon: "https://brainlabs.digital/cro/fortis/fr009/associate.png",
        title: "ASSOCIATE DEGREE IN NURSING (ADN)",
      },
    ],
  },
  healthcareOrMedicalPrograms: {
    title: "Healthcare/Medical Programs",
    items: [
      {
        icon: "https://brainlabs.digital/cro/fortis/fr009/medical.png",
        title: "MEDICAL ASSISTING",
      },
      {
        icon: "https://brainlabs.digital/cro/fortis/fr009/medical-ray.png",
        title: "MEDICAL ASSISTING WITH BASIC X-RAY",
      },
      {
        icon: "https://brainlabs.digital/cro/fortis/fr009/medical-coding.png",
        title: "MEDICAL BILLING AND CODING",
      },
      {
        icon: "https://brainlabs.digital/cro/fortis/fr009/healthcare.png",
        title: "HEALTHCARE MANAGEMENT",
      },
    ],
  },
  dentalPrograms: {
    title: "Dental Programs",
    items: [
      {
        icon: "https://brainlabs.digital/cro/fortis/fr009/dental-assisting.png",
        title: "DENTAL ASSISTING",
      },
      {
        icon: "https://brainlabs.digital/cro/fortis/fr009/dental-hygiene.png",
        title: "DENTAL HYGIENE",
      },
    ],
  },
  skilledTradesPrograms: {
    title: "Skilled Trades Programs",
    items: [
      {
        icon: "https://brainlabs.digital/cro/fortis/fr009/hvac.png",
        title: "HVAC-R",
      },
      {
        icon: "https://brainlabs.digital/cro/fortis/fr009/welding.png",
        title: "WELDING TECHNOLOGY",
      },
      {
        icon: "https://brainlabs.digital/cro/fortis/fr009/electrical.png",
        title: "ELECTRICAL SYSTEMS TECHNICIAN",
      },
    ],
  },
};
