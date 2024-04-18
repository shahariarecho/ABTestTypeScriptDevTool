import { Benefit } from "../model/benefit";
import { Outcome } from "../model/outcome";

export const selectors = {};

export const logoImgSrc: string =
  "https://www.denvercollegeofnursing.edu/content/dam/denver/images/DCN_Logo_Square.png";

export const benefits: Benefit[] = [
  {
    icon: "https://www.denvercollegeofnursing.edu/etc.clientlibs/edaff/clientlibs/clientlib-unbounce-images/resources/images/unbounce/money-box.png",
    text: "Completion in as little as 18 months",
  },
  {
    icon: "https://www.denvercollegeofnursing.edu/etc.clientlibs/edaff/clientlibs/clientlib-unbounce-images/resources/images/unbounce/money-box.png",
    text: "Community impact though clinical hours",
  },
  {
    icon: "https://www.denvercollegeofnursing.edu/etc.clientlibs/edaff/clientlibs/clientlib-unbounce-images/resources/images/unbounce/money-box.png",
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
