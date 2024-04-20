import { Benefit } from "../model/benefit";
import { Outcome } from "../model/outcome";

export const selectors = {};

export const logoImgSrc: string =
  "https://medianet.com/cro/fortis/fr008/logo.png";

export const benefits: Benefit[] = [
  {
    icon: "https://medianet.com/cro/fortis/fr008/calender.png",
    text: "Completion in as little as 18 months",
  },
  {
    icon: "https://medianet.com/cro/fortis/fr008/checkup.png",
    text: "Community impact though clinical hours",
  },
  {
    icon: "https://medianet.com/cro/fortis/fr008/task.png",
    text: "86% NCLEX pass rate 'Among 2022 DCN graduates'",
  },
];

export const formActionLink: string =
  "https://www.denvercollegeofnursing.edu/bin/rfi";

export const outcomes: Outcome[] = [
  {
    title: "What You'll Learn",
    descriptions: [
      "The BSN is a degree completion program delivered in seven quarters, consisting of both didactic and clinical components. Upon completion of the program, you'll be prepared to:",
    ],
    features: [
      "Apply and synthesize foundational knowledge, theory and research in the holistic practice of nursing",
      "Integrate effective interprofessional collaboration to enhance patient care",
      "Use patient care technologies and clinical information systems to facilitate decision-making in various healthcare settings",
    ],
    imgSrc: "https://medianet.com/cro/fortis/fr008/learn.jpg",
  },
  {
    title: "Career Outcomes With a BSN",
    descriptions: [
      "According to an April 2023 report by the National Council of State Boards of Nursing (NCSBN), nearly one-fifth of registered nurses plan to leave the workforce by 2027. Healthcare needs dedicated caregivers who are ready to fill that gap.",
      "The BSN program at DCN serves professionals from non-nursing disciplines who plan to make the switch to nursing. Take a look at some roles that BSN-prepared registered nurses can qualify for:",
    ],
    features: [
      "Travel nurse",
      "Clinical research nurse",
      "Hospital nurse",
      "Rehab nurse",
      "Home health nurse",
    ],
    imgSrc: "https://medianet.com/cro/fortis/fr008/career.jpg",
  },
];

export const approvedIcon: string = `
  <svg width="50" height="50" viewBox="0 0 276 209" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0_45_32" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="276" height="209">
      <path d="M276 0H0V209H276V0Z" fill="white" />
    </mask>
    <g mask="url(#mask0_45_32)">
      <path d="M137.405 91.7217C171.508 91.828 205.503 95.4305 238.819 102.468L241.047 102.928V117.282C242.99 117.759 244.651 118.156 246.161 118.536C253.453 120.188 260.631 122.282 267.65 124.806L271.219 126.023L268.498 129.613C262.649 137.338 259.283 141.781 253.451 149.636C259.508 160.441 262.826 166.46 269.208 178.26L272.509 184.363L265.79 182.072C251.563 176.983 236.885 173.16 221.938 170.653L217.91 169.867L215.656 169.424V167.192C215.656 164.337 215.656 162.176 215.656 160.052C215.656 158.535 215.656 157.022 215.656 155.254C189.768 151.327 163.606 149.327 137.401 149.272C111.196 149.327 85.0336 151.327 59.1456 155.254V169.415L56.8915 169.858L51.3884 170.933C37.3418 173.288 23.5552 176.913 10.2101 181.759L3.46533 184.054L6.78365 177.934C13.0698 166.343 16.3233 160.433 22.5359 149.314C16.5136 141.196 13.2169 136.824 7.00429 128.652L4.76324 125.701L8.37142 124.48C15.0061 122.064 21.7989 120.074 28.7053 118.524C30.1287 118.185 31.8116 117.784 33.8104 117.303V102.928L36.0385 102.468C69.3388 95.432 103.318 91.8296 137.405 91.7217ZM235.419 107.33C203.201 100.663 170.353 97.2535 137.405 97.1557C104.461 97.2527 71.6174 100.662 39.4044 107.33V121.542L37.2845 122.06C34.3036 122.792 31.9284 123.356 30.0205 123.807C24.5232 125.023 19.1068 126.559 13.801 128.405C18.9926 135.219 22.2504 139.587 28.1472 147.541L29.1682 148.921L28.3332 150.413C22.8128 160.274 19.62 166.017 15.0816 174.377C26.5544 170.542 38.3285 167.606 50.2895 165.599L53.5343 164.968V150.597L55.9094 150.238C82.8611 146.037 110.114 143.895 137.414 143.834C164.714 143.895 191.966 146.037 218.918 150.238L221.293 150.597V152.921C221.293 155.776 221.293 157.937 221.293 160.061C221.293 161.607 221.293 163.154 221.293 164.968L223.063 165.315C235.929 167.472 248.598 170.608 260.953 174.695C256.272 166.126 253.057 160.336 247.662 150.722L246.827 149.23L247.848 147.851C253.702 139.951 257.055 135.511 262.195 128.719C256.495 126.77 250.687 125.13 244.798 123.807C242.76 123.318 240.446 122.762 237.534 122.043L235.419 121.521V107.33Z" fill="#00215D" />
      <path d="M137.396 206.592L123.119 191.603L104.754 201.576L95.9715 183.076L75.3174 187.088L72.6091 164.73L78.1901 164.098L80.1803 180.601L99.2162 176.902L107.328 193.952L124.266 184.756L137.414 198.55L150.583 184.756L167.516 193.952L175.576 176.902L194.612 180.601L196.603 164.098L202.188 164.73L199.488 187.093L178.813 183.08L170.034 201.58L151.656 191.603L137.396 206.592Z" fill="#00215D" />
      <path d="M226.489 92.5744L221.587 89.9118L230.011 75.4072L212.368 67.5947L216.175 49.2027L196.905 47.0291L194.634 28.3905L175.598 32.0898L167.495 15.0396L150.557 24.2356L137.409 10.4416L124.24 24.2356L107.328 15.0396L99.2163 32.094L80.1803 28.3947L77.9306 47.0291L58.6394 49.2027L62.4466 67.5947L44.8124 75.4072L53.2358 89.9118L48.334 92.5744L36.9167 72.9451L56.0695 64.4639L51.9379 44.4751L72.8688 42.1302L75.3132 21.9031L95.9672 25.9159L104.767 7.41526L123.119 17.3929L137.396 2.40344L151.673 17.3929L170.056 7.41526L178.856 25.9159L199.506 21.9031L201.972 42.1302L222.885 44.4877L218.754 64.4639L237.906 72.9451L226.489 92.5744Z" fill="#00215D" />
      <path d="M74.1191 99.3377L68.4949 98.8862C69.951 82.1993 77.8406 66.6493 90.601 55.3162C103.361 43.9832 120.062 37.6938 137.394 37.6938C154.727 37.6938 171.427 43.9832 184.188 55.3162C196.948 66.6493 204.838 82.1993 206.294 98.8862L200.669 99.3335C199.331 84.0048 192.082 69.7209 180.36 59.3107C168.638 48.9005 153.297 43.1233 137.375 43.1233C121.453 43.1233 106.112 48.9005 94.3896 59.3107C82.6674 69.7209 75.4191 84.0048 74.0802 99.3335L74.1191 99.3377Z" fill="#00215D" />
      <path d="M137.401 171.305C127.901 171.324 118.501 169.438 109.794 165.766C101.392 162.232 93.805 157.111 87.4788 150.706L91.5412 146.944C97.3536 152.829 104.324 157.533 112.044 160.779C120.041 164.152 128.675 165.884 137.401 165.866C146.133 165.885 154.775 164.153 162.779 160.779C170.499 157.533 177.47 152.829 183.282 146.944L187.344 150.706C181.016 157.108 173.427 162.224 165.024 165.754C156.313 169.43 146.907 171.32 137.401 171.305Z" fill="#00215D" />
    </g>
  </svg>
`;

export const avatarImage: string =
  "https://www.denvercollegeofnursing.edu/content/denver/en/campuses/colorado/denver/explore/associate-degree-nursing/_jcr_content/par/success_stories_183318302/image.transform/w200/q80/img.jpg";

export const starIcon: string = `
  <svg width="50" height="50" viewBox="0 0 271 255" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M177.95 255H93.0142V198.994L42.926 227.316L-0.00537109 156.609L51.5961 127.431L0.0488461 98.1724L43.0985 27.5227L93.0142 55.8349V0H177.95V56.0014L228.039 27.6844L271 98.4197L219.373 127.574L270.916 156.828L227.866 227.477L177.95 199.165V255ZM99.417 248.817H171.543V188.355L225.589 219.012L262.162 159.02L206.711 127.559L262.226 96.2082L225.747 36.1453L171.528 66.7926V6.18274H99.4219V66.6404L45.3757 35.9883L8.81256 95.9799L64.2438 127.441L8.75835 158.83L45.2328 218.869L99.4515 188.222L99.417 248.817ZM135.487 118.561C130.871 118.561 126.359 117.24 122.521 114.766C118.683 112.292 115.692 108.774 113.925 104.66C112.159 100.545 111.696 96.0168 112.597 91.6484C113.498 87.2801 115.72 83.2675 118.984 80.1181C122.248 76.9687 126.407 74.8239 130.934 73.955C135.461 73.0861 140.154 73.532 144.419 75.2365C148.683 76.9409 152.328 79.8273 154.893 83.5306C157.457 87.2339 158.826 91.5878 158.826 96.0417C158.815 102.011 156.353 107.733 151.979 111.954C147.604 116.175 141.674 118.551 135.487 118.561ZM135.487 79.7098C132.139 79.7098 128.865 80.6679 126.081 82.463C123.297 84.2581 121.126 86.8096 119.845 89.7947C118.564 92.7799 118.228 96.0646 118.882 99.2336C119.535 102.403 121.147 105.314 123.515 107.598C125.883 109.883 128.9 111.439 132.184 112.069C135.468 112.7 138.873 112.376 141.966 111.14C145.06 109.903 147.704 107.809 149.565 105.123C151.425 102.436 152.418 99.2776 152.418 96.0465C152.41 91.7161 150.624 87.5651 147.451 84.503C144.277 81.4409 139.975 79.7173 135.487 79.7098Z" fill="#00215D" />
    <path d="M117.058 190.957H110.65C110.596 188.505 111.242 186.087 112.519 183.967C113.795 181.847 115.652 180.107 117.886 178.938C123.326 176.296 129.386 175.067 135.468 175.371H144.246C145.783 175.371 147.257 174.782 148.343 173.734C149.43 172.685 150.04 171.263 150.04 169.781C150.04 168.298 149.43 166.876 148.343 165.828C147.257 164.779 145.783 164.19 144.246 164.19H116.684C114.488 164.227 112.307 163.841 110.268 163.056C108.229 162.27 106.372 161.101 104.806 159.616C103.24 158.131 101.997 156.36 101.148 154.406C100.299 152.452 99.8613 150.355 99.8613 148.236C99.8613 146.118 100.299 144.02 101.148 142.066C101.997 140.113 103.24 138.342 104.806 136.856C106.372 135.371 108.229 134.202 110.268 133.417C112.307 132.631 114.488 132.246 116.684 132.282H135.473C142.659 132.19 149.744 130.639 156.268 127.731C160.378 126.112 163.885 123.332 166.328 119.755C168.771 116.178 170.036 111.972 169.956 107.689H176.364C176.454 113.127 174.861 118.468 171.788 123.027C168.714 127.586 164.301 131.157 159.112 133.281C151.707 136.599 143.657 138.366 135.492 138.465H116.684C115.335 138.436 113.994 138.668 112.739 139.146C111.485 139.624 110.342 140.339 109.377 141.25C108.413 142.16 107.647 143.247 107.124 144.446C106.601 145.646 106.331 146.935 106.331 148.236C106.331 149.538 106.601 150.826 107.124 152.026C107.647 153.226 108.413 154.313 109.377 155.223C110.342 156.133 111.485 156.848 112.739 157.326C113.994 157.805 115.335 158.036 116.684 158.007H144.251C147.487 158.007 150.591 159.248 152.879 161.456C155.167 163.664 156.453 166.658 156.453 169.781C156.453 172.903 155.167 175.898 152.879 178.106C150.591 180.314 147.487 181.554 144.251 181.554H135.473C130.533 181.285 125.602 182.219 121.134 184.27C119.863 184.891 118.803 185.852 118.081 187.037C117.358 188.222 117.003 189.582 117.058 190.957Z" fill="#00215D" />
  </svg>
`;

export const peopleIcon: string = `
  <svg width="50" height="50" viewBox="0 0 329 276" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M62.7925 16.8192C70.5367 16.8192 78.107 19.2334 84.5461 23.7566C90.9852 28.2797 96.0039 34.7086 98.9674 42.2303C101.931 49.752 102.706 58.0286 101.196 66.0136C99.6848 73.9986 95.9556 81.3333 90.4796 87.0901C85.0036 92.847 78.0268 96.7674 70.4313 98.3558C62.8359 99.9441 54.963 99.1289 47.8083 96.0133C40.6536 92.8977 34.5383 87.6217 30.2359 80.8523C25.9334 74.083 23.637 66.1244 23.637 57.983C23.637 47.0657 27.7623 36.5955 35.1053 28.8758C42.4484 21.1561 52.4078 16.8192 62.7925 16.8192ZM62.7925 91.5633C69.1187 91.5633 75.3029 89.5911 80.563 85.8962C85.8231 82.2012 89.9229 76.9494 92.3439 70.805C94.7648 64.6605 95.3982 57.8993 94.1641 51.3763C92.9299 44.8534 89.8835 38.8617 85.4101 34.1589C80.9368 29.4561 75.2374 26.2535 69.0327 24.956C62.8279 23.6585 56.3966 24.3244 50.5519 26.8695C44.7072 29.4147 39.7116 33.7247 36.1969 39.2546C32.6822 44.7845 30.8063 51.2858 30.8063 57.9366C30.8063 66.8549 34.1762 75.408 40.1748 81.7143C46.1734 88.0205 54.3092 91.5633 62.7925 91.5633Z" fill="#00215D" />
    <path d="M27.0121 275.994H19.8428V261.465C14.8844 260.974 10.2047 258.831 6.48582 255.349C4.41229 253.34 2.76344 250.895 1.64618 248.174C0.528924 245.452 -0.0318128 242.514 0.000331222 239.55V162.098C0.000331222 144.879 3.58499 132.356 10.9584 123.833C17.9953 115.688 28.3853 111.281 42.7295 110.365H42.928L62.7815 110.261H82.7729C94.1359 110.639 105.338 113.193 115.829 117.798L112.592 124.558C103.113 120.444 93.0104 118.147 82.7618 117.775H62.787L43.0604 117.879C17.9016 119.52 7.16413 132.75 7.16413 162.104V239.55C7.16413 248.275 13.6993 254.143 23.4219 254.143H27.0066L27.0121 275.994Z" fill="#00215D" />
    <path d="M164.36 0C173.156 0 181.756 2.74234 189.07 7.88023C196.384 13.0181 202.085 20.3208 205.451 28.8648C208.818 37.4088 209.699 46.8104 207.982 55.8807C206.266 64.9509 202.03 73.2825 195.81 79.8218C189.59 86.3611 181.665 90.8144 173.037 92.6186C164.409 94.4228 155.466 93.4968 147.339 89.9578C139.212 86.4187 132.265 80.4256 127.378 72.7362C122.491 65.0468 119.882 56.0065 119.882 46.7585C119.895 34.3616 124.586 22.4764 132.924 13.7105C141.262 4.94458 152.568 0.013811 164.36 0ZM164.36 85.98C171.738 85.98 178.952 83.6797 185.087 79.37C191.222 75.0603 196.004 68.9347 198.828 61.768C201.652 54.6012 202.39 46.715 200.951 39.1068C199.511 31.4986 195.958 24.51 190.74 19.0247C185.523 13.5395 178.875 9.80402 171.638 8.29065C164.401 6.77728 156.9 7.554 150.083 10.5226C143.265 13.4912 137.439 18.5183 133.339 24.9682C129.24 31.4182 127.052 39.0012 127.052 46.7585C127.063 57.157 130.998 67.126 137.992 74.4788C144.986 81.8316 154.469 85.9678 164.36 85.98Z" fill="#00215D" />
    <path d="M125.513 276H118.344V220.829H112.741C109.473 220.898 106.226 220.258 103.203 218.951C100.18 217.643 97.446 215.695 95.1703 213.228C93.3387 211.159 91.9395 208.71 91.0628 206.037C90.1861 203.365 89.8513 200.53 90.0801 197.714C90.7308 189.469 94.139 168.534 94.9277 164.359C101.204 130.24 108.715 112.76 134.37 105.802C144.32 104.399 154.356 103.787 164.393 103.97H170.178C179.301 103.67 188.432 104.287 197.443 105.814C207.612 107.884 216.886 113.313 223.915 121.311C230.457 130.499 234.204 141.552 234.663 153.019C235.816 164.388 235.474 195.47 235.215 218.162C235.137 225.119 235.071 231.149 235.071 234.975C235.296 241.616 233.044 248.086 228.795 253.006C226.297 255.558 223.328 257.544 220.07 258.84C216.813 260.137 213.337 260.716 209.857 260.543H206.995L197.289 216.017C193.953 219.136 189.653 220.875 185.189 220.91H185.04L125.513 220.852V276ZM202.489 206.155L212.697 252.867C214.837 252.82 216.944 252.312 218.889 251.373C220.834 250.434 222.574 249.085 224.002 247.409C225.43 245.734 226.515 243.767 227.189 241.632C227.864 239.497 228.114 237.239 227.924 234.999C227.924 231.126 227.99 225.085 228.067 218.092C228.305 196.855 228.663 164.754 227.549 153.836C227.205 143.869 224.032 134.238 218.438 126.181C212.366 119.379 204.376 114.806 195.646 113.137C186.014 111.723 176.285 111.188 166.566 111.536H164.36C154.921 111.331 145.481 111.864 136.118 113.131C131.473 114.081 127.055 115.997 123.124 118.767C119.193 121.537 115.828 125.104 113.226 129.26C108.588 136.843 105.312 147.436 101.932 165.82C101.027 170.609 97.7843 190.872 97.1943 198.334C97.0412 200.111 97.2486 201.903 97.8028 203.59C98.3571 205.277 99.2455 206.821 100.409 208.12C102.018 209.826 103.942 211.165 106.063 212.054C108.185 212.944 110.458 213.365 112.741 213.292L184.985 213.362C187.211 213.478 189.411 212.818 191.243 211.485C193.075 210.151 194.437 208.218 195.116 205.987L191.675 190.24C189.975 188.727 187.835 187.87 185.608 187.811L127.702 186.536V148.81C127.704 146.793 128.467 144.859 129.823 143.433C131.18 142.007 133.019 141.205 134.938 141.203H191.366C193.285 141.205 195.124 142.007 196.481 143.433C197.837 144.859 198.6 146.793 198.601 148.81V186.959C201.928 191.277 203.524 196.788 203.052 202.323C202.953 203.613 202.765 204.894 202.489 206.155ZM134.833 179.167L185.768 180.291C187.705 180.348 189.618 180.75 191.427 181.48V148.81C191.427 148.801 191.426 148.791 191.423 148.782C191.42 148.773 191.415 148.765 191.409 148.759C191.403 148.752 191.395 148.747 191.387 148.744C191.378 148.741 191.369 148.739 191.36 148.74H134.899C134.89 148.739 134.881 148.741 134.873 148.744C134.865 148.747 134.857 148.752 134.851 148.759C134.844 148.765 134.839 148.773 134.836 148.782C134.833 148.791 134.832 148.801 134.833 148.81V179.167Z" fill="#00215D" />
    <path d="M266.142 16.8134C273.886 16.8134 281.456 19.2276 287.895 23.7507C294.335 28.2738 299.353 34.7027 302.317 42.2244C305.28 49.7461 306.056 58.0228 304.545 66.0077C303.034 73.9927 299.305 81.3274 293.829 87.0843C288.353 92.8411 281.376 96.7616 273.781 98.3499C266.185 99.9382 258.312 99.123 251.158 96.0074C244.003 92.8919 237.888 87.6158 233.585 80.8465C229.283 74.0771 226.986 66.1185 226.986 57.9771C226.986 47.0598 231.112 36.5896 238.455 28.8699C245.798 21.1502 255.757 16.8134 266.142 16.8134ZM266.142 91.5574C272.468 91.5574 278.652 89.5853 283.912 85.8903C289.173 82.1954 293.272 76.9436 295.693 70.7991C298.114 64.6546 298.748 57.8934 297.513 51.3705C296.279 44.8475 293.233 38.8558 288.759 34.153C284.286 29.4503 278.587 26.2476 272.382 24.9501C266.177 23.6526 259.746 24.3186 253.901 26.8637C248.057 29.4088 243.061 33.7188 239.546 39.2487C236.032 44.7786 234.156 51.28 234.156 57.9307C234.156 66.8491 237.526 75.4022 243.524 81.7084C249.523 88.0146 257.659 91.5574 266.142 91.5574Z" fill="#00215D" />
    <path d="M309.059 275.994H301.889V254.137H305.474C309.894 254.337 314.224 252.785 317.607 249.789C318.952 248.488 320.021 246.904 320.744 245.14C321.467 243.376 321.828 241.471 321.803 239.55L321.737 162.104C321.737 132.75 311 119.52 285.841 117.879L266.098 117.775H246.167C236.837 118.17 227.619 120.067 218.835 123.398L216.221 116.377C225.84 112.715 235.943 110.651 246.167 110.261H266.142L286.205 110.371C300.544 111.287 310.923 115.693 317.96 123.839C325.344 132.385 328.929 144.902 328.929 162.104L328.995 239.55C329.025 242.52 328.46 245.463 327.334 248.187C326.209 250.912 324.55 253.356 322.465 255.36C318.726 258.841 314.031 260.981 309.059 261.471V275.994Z" fill="#00215D" />
  </svg>
`;

export const graduateIcon: string = `
  <svg width="50" height="50" viewBox="0 0 309 304" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M186.433 38.8451L146.391 72.5272C147.281 75.2381 149.222 81.1462 153.454 94.0076L155.284 99.597L149.511 98.7698C147.115 98.4439 144.699 98.287 142.281 98.3003C129.096 98.7342 116.055 101.198 103.613 105.606C88.4834 110.036 74.4387 117.587 62.3759 127.779L58.2327 131.871L56.4085 126.326C52.1875 113.509 50.2354 107.562 49.3234 104.784L0.0219727 100.81L85.1163 45.8878L186.433 38.8451ZM144.856 91.0563C142.109 82.7001 140.596 78.0999 139.762 75.5623L138.878 72.8738C138.627 72.2907 138.525 71.6535 138.582 71.0207C138.639 70.3879 138.854 69.7797 139.206 69.2518L139.484 68.8494L164.716 47.6094L87.4687 52.9641L21.9337 95.2652L54.8124 97.9146L55.4464 100.307C55.5743 100.693 56.3807 103.169 61.525 118.808C73.5743 109.915 87.0204 103.114 101.305 98.6859C115.285 93.6777 130.016 91.0977 144.856 91.0563ZM258.736 99.0493H258.87C272.595 99.1275 277.611 108.199 284.246 123.129L284.925 124.655C289.329 134.559 293.489 143.916 290.753 151.669C287.511 161.014 281.198 162.613 271.655 165.033C268.033 165.988 264.305 166.478 260.56 166.492C254.013 166.77 247.53 165.092 241.931 161.668C236.333 158.245 231.869 153.23 229.105 147.258C225.771 139.695 225.127 131.208 227.281 123.224C229.062 115.848 233.567 109.43 239.883 105.27C245.467 101.47 251.998 99.3149 258.736 99.0493ZM260.56 159.231C263.701 159.218 266.827 158.804 269.864 158.001C279.986 155.436 282.099 154.48 283.935 149.265C285.709 144.235 281.955 135.789 278.329 127.623L277.65 126.091C275.522 120.466 272.572 115.192 268.897 110.441C267.643 109.03 266.086 107.924 264.344 107.208C262.602 106.491 260.72 106.182 258.842 106.304H258.747C253.335 106.578 248.107 108.367 243.654 111.469C238.922 114.656 235.57 119.528 234.272 125.102C232.549 131.469 233.058 138.238 235.712 144.274C237.888 148.979 241.419 152.92 245.848 155.586C250.277 158.252 255.4 159.519 260.555 159.225L260.56 159.231ZM285.03 212.119C290.19 212.126 295.211 213.805 299.346 216.907C303.482 220.008 306.513 224.367 307.989 229.336C309.466 234.305 309.309 239.621 307.542 244.494C305.776 249.366 302.494 253.537 298.183 256.387L301.792 279.863C301.917 280.637 301.873 281.429 301.664 282.185C301.455 282.94 301.086 283.641 300.582 284.24C300.078 284.838 299.451 285.32 298.744 285.652C298.037 285.984 297.267 286.158 296.487 286.162H273.535C272.754 286.155 271.984 285.979 271.277 285.646C270.57 285.314 269.942 284.832 269.436 284.234C268.93 283.638 268.56 282.938 268.352 282.183C268.143 281.428 268.102 280.636 268.229 279.863L271.839 256.387C267.526 253.536 264.243 249.363 262.477 244.487C260.711 239.611 260.557 234.294 262.037 229.323C263.517 224.352 266.552 219.994 270.692 216.894C274.832 213.795 279.857 212.12 285.019 212.119H285.03ZM294.329 278.913L290.258 252.441L292.594 251.25C295.952 249.538 298.639 246.737 300.219 243.302C301.8 239.866 302.184 235.996 301.307 232.314C300.431 228.633 298.347 225.356 295.39 223.011C292.433 220.667 288.777 219.391 285.011 219.391C281.245 219.391 277.588 220.667 274.632 223.011C271.675 225.356 269.59 228.633 268.714 232.314C267.838 235.996 268.221 239.866 269.802 243.302C271.383 246.737 274.069 249.538 277.428 251.25L279.764 252.441L275.693 278.913H294.329Z" fill="#00215D"/>
    <path d="M42.2498 304.004L34.1969 262.189C32.9056 254.345 33.2472 246.318 35.1999 238.613C37.1527 230.909 40.6743 223.695 45.5421 217.429C56.3221 205.527 70.6898 197.51 86.4403 194.607L87.7528 194.294L126.971 214.919L150.885 186.541L153.599 185.982C167.176 183.451 180.478 179.606 193.318 174.501C208.312 168.976 221.187 158.833 230.107 145.52L236.28 149.299C226.583 163.927 212.527 175.093 196.127 181.198C182.863 186.485 169.119 190.464 155.09 193.081L154.806 193.142L128.751 224.058L86.8018 202.024C73.0758 204.698 60.5663 211.73 51.1146 222.085C46.8924 227.583 43.8448 233.897 42.1625 240.634C40.4802 247.37 40.1994 254.383 41.3377 261.233L49.3238 302.595L42.2498 304.004ZM161.463 249.182L277.05 150.428L272.601 163.121C264.281 183.89 250.206 201.822 232.048 214.79C216.004 227.141 198.076 236.798 178.959 243.386L161.463 249.182ZM258.581 175.753L197.712 227.736C208.257 222.468 218.279 216.204 227.643 209.028C239.856 199.889 250.335 188.618 258.581 175.753Z" fill="#00215D"/>
    <path d="M223.361 151.726C218.746 151.752 214.171 150.873 209.891 149.138C206.198 147.756 202.862 145.555 200.131 142.7C197.399 139.844 195.343 136.407 194.114 132.644C192.885 128.881 192.516 124.887 193.033 120.961C193.549 117.034 194.94 113.274 197.1 109.962C201.734 102.359 208.837 96.5979 217.21 93.6516C223.554 91.0424 230.52 90.3566 237.248 91.6786C243.976 93.0005 250.172 96.2726 255.071 101.091L249.705 105.96C245.771 102.211 240.835 99.6963 235.501 98.7234C230.167 97.7505 224.667 98.3616 219.673 100.482C205.308 105.725 197 119.385 201.154 130.922C202.149 133.545 203.686 135.926 205.664 137.908C207.641 139.89 210.015 141.428 212.627 142.42C218.789 144.817 225.56 145.129 231.914 143.308L233.794 150.323C230.392 151.248 226.884 151.72 223.361 151.726Z" fill="#00215D"/>
    <path d="M215.024 98.3349L180.483 2.47555L187.279 0.00500488L221.831 95.8644L215.024 98.3349Z" fill="#00215D"/>
    <path d="M205.709 61.7833L203.245 54.9809L226.481 46.5129L213.495 10.472L190.26 18.94L187.796 12.1097L217.827 1.15991L235.74 50.8335L205.709 61.7833Z" fill="#00215D"/>
    <path d="M34.9641 150.964H27.7344V99.5405H34.9641V150.964Z" fill="#00215D"/>
    <path d="M54.101 104.187L49.9355 98.2507C58.4946 92.509 67.5453 87.5446 76.9804 83.4162C97.471 74.0003 119.582 68.6628 142.093 67.6986L142.271 74.9649C120.714 75.9046 99.5415 81.0294 79.9224 90.0565C70.9229 94.003 62.283 98.731 54.101 104.187Z" fill="#00215D"/>
    <path d="M110.61 181.668C103.492 181.668 96.4448 180.26 89.8692 177.523C83.2935 174.786 77.3188 170.774 72.2861 165.715C67.2535 160.657 63.2615 154.652 60.5382 148.044C57.8149 141.435 56.4136 134.351 56.4143 127.198C56.4143 126.466 56.4143 125.711 56.4477 124.929L63.6774 125.242C63.6774 125.868 63.6774 126.511 63.6774 127.198C63.6767 134.756 65.4811 142.204 68.939 148.916C72.3969 155.627 77.4073 161.407 83.5491 165.768C89.6908 170.129 96.7845 172.945 104.234 173.979C111.683 175.013 119.271 174.234 126.359 171.709C133.446 169.183 139.828 164.985 144.966 159.466C150.104 153.947 153.849 147.269 155.886 139.994C157.923 132.718 158.192 125.057 156.672 117.655C155.151 110.254 151.885 103.326 147.148 97.4566L152.754 92.8677C159.212 100.864 163.283 110.536 164.494 120.763C165.704 130.99 164.005 141.353 159.593 150.649C155.182 159.944 148.238 167.793 139.568 173.283C130.898 178.773 120.857 181.68 110.61 181.668Z" fill="#00215D"/>
  </svg>
`;

export const dcns: Benefit[] = [
  {
    icon: starIcon,
    text: "DCN programs emphasize essential skills that nurses need at every career stage, from the clinical judgment principles required to pass the NCLEX to the leadership competencies that help working nurses advance.",
  },
  {
    icon: peopleIcon,
    text: "DCN's extensive alumni network provides support and community-building opportunities, helping graduates connect with experienced professionals and potential employers in the nursing field.",
  },
  {
    icon: graduateIcon,
    text: "Many new applicants choose DCN after hearing from graduates about the positive impact of our programs on their lives, and many current students decide to keep advancing their nursing education at DCN.",
  },
];

export const journeyOutcome: Outcome = {
  title: "Support for Your Journey",
  descriptions: ["At DCN, you'll experiences:"],
  features: [
    "Academic advising",
    "Timely instructor feedback",
    "A dedicated student success team",
    "Guided study sessions",
    "Career counseling",
    "Resume support",
  ],
  imgSrc: "https://medianet.com/cro/fortis/fr008/journey.jpg",
};

export const aboutImage: string =
  "https://medianet.com/cro/fortis/fr008/about.jpg";
