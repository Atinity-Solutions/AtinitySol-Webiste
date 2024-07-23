"use client";

import ScrollToTop from "react-scroll-to-top";
import { BsFillRocketFill } from "react-icons/bs";

const ScrollToTopButton = () => {
  return (
    <div className="hidden md:block">
      <ScrollToTop
        smooth
        viewBox="0 0 24 24"
        svgPath="M11.7433 0.280287C11.6905 0.285086 11.5225 0.30188 11.3713 0.313876C7.8848 0.628171 4.61902 2.50914 2.55061 5.40017C1.39883 7.00763 0.662164 8.83102 0.383817 10.7624C0.285435 11.4365 0.273438 11.6357 0.273438 12.5498C0.273438 13.4639 0.285435 13.663 0.383817 14.3372C1.05089 18.946 4.33107 22.8183 8.77984 24.2531C9.57649 24.5098 10.4163 24.6849 11.3713 24.7905C11.7433 24.8313 13.351 24.8313 13.7229 24.7905C15.3714 24.6081 16.7679 24.2003 18.1453 23.4973C18.3564 23.3893 18.3972 23.3606 18.3684 23.3366C18.3492 23.3222 17.4494 22.1154 16.3696 20.6567L14.4068 18.0055L11.9472 14.366C10.5939 12.365 9.4805 10.7288 9.47091 10.7288C9.46131 10.7264 9.45171 12.3434 9.44691 14.318C9.43971 17.7752 9.43731 17.9144 9.39412 17.9959C9.33173 18.1135 9.28374 18.1615 9.18296 18.2143C9.10618 18.2527 9.03899 18.2599 8.67666 18.2599H8.26153L8.15115 18.1903C8.07917 18.1447 8.02638 18.0847 7.99039 18.0151L7.93999 17.9072L7.94479 13.0968L7.95199 8.284L8.02638 8.19044C8.06477 8.14005 8.14636 8.07527 8.20394 8.04409C8.30233 7.9961 8.34072 7.9913 8.75584 7.9913C9.24535 7.9913 9.32693 8.0105 9.45411 8.14965C9.4901 8.18804 10.8219 10.1938 12.4152 12.6098C14.0085 15.0257 16.1872 18.3246 17.2574 19.9441L19.2011 22.8879L19.2995 22.8231C20.1705 22.2569 21.0919 21.4508 21.8214 20.6111C23.3739 18.8285 24.3745 16.6548 24.7104 14.3372C24.8088 13.663 24.8208 13.4639 24.8208 12.5498C24.8208 11.6357 24.8088 11.4365 24.7104 10.7624C24.0434 6.15352 20.7632 2.28122 16.3144 0.846498C15.5298 0.592183 14.6947 0.417042 13.7589 0.311477C13.5285 0.287485 11.9424 0.261094 11.7433 0.280287ZM16.7679 7.7034C16.8831 7.76098 16.9767 7.87134 17.0103 7.9865C17.0295 8.04888 17.0343 9.38284 17.0295 12.389L17.0223 16.7028L16.2616 15.5368L15.4986 14.3708V11.235C15.4986 9.2077 15.5082 8.06808 15.5226 8.0129C15.561 7.87854 15.6449 7.77298 15.7601 7.7106C15.8585 7.66021 15.8945 7.65542 16.2712 7.65542C16.6264 7.65542 16.6887 7.66021 16.7679 7.7034Z"
        className="pl-[5px]"
      />
    </div>
  );
};

export default ScrollToTopButton;