import anime from 'animejs/lib/anime.es.js';
import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const LoadAnimations = () => {
  const [homepageAnimationHasLoaded, setHomepageAnimationHasLoaded] =
    useState(false);
  const location = useLocation();
  const headerRef = useRef<HTMLAnchorElement>(null);
  const beforeunload = () => {
    setHomepageAnimationHasLoaded(false);
  };

  useEffect(() => {
    if (location.pathname === '/' && !homepageAnimationHasLoaded) {
      document.body.classList.add('is-loading');

      const tl = anime.timeline({});
      tl.add({
        targets: '.headersvg path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInQuad',
        duration: 1400,
        delay: function (el, i) {
          return i * 100;
        },
      });
      tl.add(
        {
          targets: '.headersvg',
          filter: 'invert(1)',
          easing: 'easeInQuad',
          duration: 500,
        },
        2500
      );
      tl.add(
        {
          targets: '.headercontainer',
          background: '#000',
          duration: 550,
          easing: 'easeInQuad',
        },
        2500
      );
      tl.add({
        targets: '.landingbg',
        height: '10vh',
        duration: 650,
        easing: 'easeInQuad',
      });
      tl.add(
        {
          targets: '.headercontainer',
          scale: document.body.clientWidth > 1022 ? 0.17 : 0.22,
          duration: 650,
          easing: 'linear',
        },
        '-=700'
      );
      tl.add({
        targets: '.headercontainer',
        translateX: document.body.clientWidth > 1022 ? '-360%' : '-270%',
      });
      tl.add(
        {
          targets: '.navbar',
          translateX: ['100%', 0],
          easing: 'easeOutQuint',
        },
        '-=950'
      );
      tl.add(
        {
          targets: '.homepage-body',
          translateX: ['100%', '0%'],
          easing: 'easeOutQuint',
          duration: 900,
        },
        '-=1050'
      );
      tl.add({}, '-=1500').complete = function () {
        document.body.classList.remove('is-loading');
        if (headerRef.current) {
          headerRef.current.style.scale = 'auto';
        }
      };
      setHomepageAnimationHasLoaded(true);
    } else {
      document.body.classList.remove('is-loading');
      if (headerRef.current) {
        headerRef.current.style.scale = 'auto';
      }
    }

    window.addEventListener('beforeunload', beforeunload);
    return () => {
      window.removeEventListener('beforeunload', beforeunload);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <div
      className={
        location.pathname === '/'
          ? 'landingbg absolute z-30 flex h-screen w-screen items-center justify-center bg-slate-100'
          : 'landingbg absolute z-30 flex h-[10vh] w-screen items-center justify-center bg-slate-100'
      }
    >
      <Link
        to="/"
        ref={headerRef}
        className={
          location.pathname === '/'
            ? 'headercontainer absolute z-50 h-auto w-[70%] rounded-full p-24'
            : 'headercontainer absolute z-50 h-auto w-[70%] -translate-x-[60%] scale-[0.27] rounded-full bg-black p-24 lg:-translate-x-[62%] lg:scale-[0.17]'
        }
      >
        <svg
          className={
            location.pathname === '/'
              ? 'headersvg h-full w-full'
              : 'headersvg h-full w-full invert'
          }
          width="564"
          height="132"
          viewBox="0 0 564 132"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <mask
            id="path-1-outside-1_16_2"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="564"
            height="132"
            fill="black"
          >
            <rect fill="white" width="564" height="132" />
            <path d="M10.0043 47.8053C10.0043 43.4236 10.8045 39.3127 12.405 35.4726C14.0056 31.6324 16.171 28.2846 18.9013 25.4291C21.6787 22.5244 24.9033 20.2351 28.5751 18.5612C32.2469 16.8873 36.1776 16.0503 40.3672 16.0503H86.8297V37.2449H40.3672C38.955 37.2449 37.6369 37.5157 36.413 38.0573C35.1891 38.5988 34.1063 39.362 33.1649 40.3466C32.2704 41.282 31.5643 42.3898 31.0465 43.6698C30.5287 44.9499 30.2698 46.3284 30.2698 47.8053C30.2698 49.2823 30.5287 50.6855 31.0465 52.0147C31.5643 53.2948 32.2704 54.4271 33.1649 55.4118C34.1063 56.3472 35.1891 57.0857 36.413 57.6273C37.6369 58.1688 38.955 58.4396 40.3672 58.4396H60.6328C64.8224 58.4396 68.7531 59.2766 72.4249 60.9505C76.1438 62.5751 79.3684 64.8398 82.0987 67.7446C84.8761 70.6001 87.0415 73.9725 88.595 77.8619C90.1955 81.702 90.9958 85.8129 90.9958 90.1946C90.9958 94.5764 90.1955 98.6873 88.595 102.527C87.0415 106.368 84.8761 109.74 82.0987 112.645C79.3684 115.5 76.1438 117.765 72.4249 119.439C68.7531 121.113 64.8224 121.95 60.6328 121.95H15.6532V100.755H60.6328C62.045 100.755 63.3631 100.484 64.587 99.9427C65.8109 99.4012 66.8701 98.6627 67.7645 97.7272C68.706 96.7426 69.4357 95.6102 69.9535 94.3302C70.4713 93.0501 70.7302 91.6716 70.7302 90.1946C70.7302 88.7177 70.4713 87.3392 69.9535 86.0591C69.4357 84.7791 68.706 83.6713 67.7645 82.7359C66.8701 81.7513 65.8109 80.9881 64.587 80.4466C63.3631 79.905 62.045 79.6342 60.6328 79.6342H40.3672C36.1776 79.6342 32.2469 78.7973 28.5751 77.1234C24.9033 75.4495 21.6787 73.1848 18.9013 70.3293C16.171 67.4246 14.0056 64.0521 12.405 60.212C10.8045 56.3226 10.0043 52.1871 10.0043 47.8053Z" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M87.8339 15V38.2952H40.3672C39.0809 38.2952 37.8968 38.5412 36.8043 39.0246C35.6997 39.5133 34.7252 40.2001 33.875 41.0893C33.0766 41.9243 32.4414 42.9172 31.9714 44.079C31.5092 45.2216 31.274 46.46 31.274 47.8053C31.274 49.148 31.5083 50.4141 31.974 51.6119C32.4422 52.7674 33.0758 53.7841 33.8753 54.6689C34.7228 55.5066 35.697 56.17 36.8043 56.66C37.8968 57.1434 39.0809 57.3893 40.3672 57.3893H60.6328C64.9513 57.3893 69.0169 58.2523 72.8191 59.9844C76.6514 61.6598 79.9847 63.999 82.8091 67.0021C85.6803 69.9559 87.9168 73.4418 89.5186 77.4496C91.1748 81.4261 92 85.6781 92 90.1946C92 94.7119 91.1745 98.9646 89.5178 102.942C87.9149 106.902 85.6778 110.387 82.8088 113.387C79.9848 116.341 76.6533 118.679 72.8242 120.403C69.0206 122.136 64.9533 123 60.6328 123H14.6489V99.7048H60.6328C61.9191 99.7048 63.1032 99.4588 64.1957 98.9754C65.3067 98.4839 66.256 97.8195 67.0544 96.9846C67.9046 96.0954 68.5613 95.0762 69.0286 93.921C69.4908 92.7784 69.726 91.54 69.726 90.1946C69.726 88.8493 69.4908 87.6109 69.0286 86.4683C68.5633 85.318 67.9119 84.331 67.0729 83.4974L67.0542 83.4788L67.0365 83.4593C66.2393 82.5818 65.2956 81.9006 64.1957 81.4139C63.1032 80.9305 61.9191 80.6845 60.6328 80.6845H40.3672C36.046 80.6845 31.978 79.8205 28.1738 78.0862C24.3927 76.3625 21.0648 74.0264 18.1973 71.0783L18.1912 71.072L18.1852 71.0656C15.3663 68.0667 13.1326 64.5861 11.4845 60.6317L11.4826 60.6272C9.82621 56.6021 9 52.3247 9 47.8053C9 43.286 9.82621 39.0315 11.4845 35.0529C13.1333 31.0968 15.3687 27.6383 18.1912 24.6864C21.0592 21.6869 24.3891 19.3237 28.1738 17.5984C31.978 15.8641 36.046 15 40.3672 15H87.8339ZM72.4249 119.439C76.1438 117.765 79.3684 115.5 82.0987 112.645C84.8761 109.74 87.0415 106.368 88.595 102.527C90.1955 98.6873 90.9958 94.5764 90.9958 90.1946C90.9958 85.8129 90.1955 81.702 88.595 77.8619C87.0415 73.9725 84.8761 70.6001 82.0987 67.7446C79.3684 64.8398 76.1438 62.5751 72.4249 60.9505C68.7531 59.2766 64.8224 58.4396 60.6328 58.4396H40.3672C38.955 58.4396 37.6369 58.1688 36.413 57.6273C35.1891 57.0857 34.1063 56.3472 33.1649 55.4118C32.2704 54.4271 31.5643 53.2948 31.0465 52.0147C30.5287 50.6855 30.2698 49.2823 30.2698 47.8053C30.2698 46.3284 30.5287 44.9499 31.0465 43.6698C31.5643 42.3898 32.2704 41.282 33.1649 40.3466C34.1063 39.362 35.1891 38.5988 36.413 38.0573C37.6369 37.5157 38.955 37.2449 40.3672 37.2449H86.8297V16.0503H40.3672C36.1776 16.0503 32.2469 16.8873 28.5751 18.5612C24.9033 20.2351 21.6787 22.5244 18.9013 25.4291C16.171 28.2846 14.0056 31.6324 12.405 35.4726C10.8045 39.3127 10.0043 43.4236 10.0043 47.8053C10.0043 52.1871 10.8045 56.3226 12.405 60.212C14.0056 64.0521 16.171 67.4246 18.9013 70.3293C21.6787 73.1848 24.9033 75.4495 28.5751 77.1234C32.2469 78.7973 36.1776 79.6342 40.3672 79.6342H60.6328C62.045 79.6342 63.3631 79.905 64.587 80.4466C65.8109 80.9881 66.8701 81.7513 67.7645 82.7359C68.706 83.6713 69.4357 84.7791 69.9535 86.0591C70.4713 87.3392 70.7302 88.7177 70.7302 90.1946C70.7302 91.6716 70.4713 93.0501 69.9535 94.3302C69.4357 95.6102 68.706 96.7426 67.7645 97.7272C66.8701 98.6627 65.8109 99.4012 64.587 99.9427C63.3631 100.484 62.045 100.755 60.6328 100.755H15.6532V121.95H60.6328C64.8224 121.95 68.7531 121.113 72.4249 119.439Z"
            />
            <path d="M123.113 120H104V9H123.113V44.0721C125.4 42.2432 127.757 40.9579 130.184 40.2164C132.611 39.4255 135.085 39.0301 137.605 39.0301C142.226 39.0301 146.566 39.9693 150.627 41.8477C154.688 43.6767 158.211 46.2224 161.199 49.485C164.232 52.6981 166.613 56.4796 168.34 60.8297C170.113 65.1303 171 69.7275 171 74.6212V120H151.747V74.6212H151.887C151.887 72.5451 151.514 70.5925 150.767 68.7635C150.02 66.8851 148.993 65.2538 147.687 63.8697C146.38 62.4856 144.863 61.3981 143.136 60.6072C141.409 59.8163 139.565 59.4208 137.605 59.4208C135.598 59.4208 133.708 59.8163 131.934 60.6072C130.161 61.3981 128.62 62.4856 127.313 63.8697C126.007 65.2538 124.98 66.8851 124.233 68.7635C123.486 70.5925 123.113 72.5451 123.113 74.6212V120Z" />
            <path d="M261 81.0742C261 87.0106 259.991 92.5512 257.973 97.6961C255.956 102.792 253.211 107.219 249.739 110.979C246.266 114.689 242.184 117.633 237.492 119.809C232.846 121.936 227.849 123 222.5 123C217.198 123 212.2 121.936 207.508 119.809C202.863 117.633 198.781 114.689 195.261 110.979C191.789 107.219 189.044 102.792 187.027 97.6961C185.009 92.5512 184 87.0106 184 81.0742C184 75.0389 185.009 69.4488 187.027 64.3039C189.044 59.159 191.789 54.7314 195.261 51.0212C198.781 47.2615 202.863 44.318 207.508 42.1908C212.2 40.0636 217.198 39 222.5 39C227.849 39 232.846 40.0141 237.492 42.0424C242.184 44.0212 246.266 46.8657 249.739 50.576C253.211 54.2368 255.956 58.6643 257.973 63.8587C259.991 69.0035 261 74.742 261 81.0742ZM241.644 81.0742C241.644 77.8092 241.128 74.8657 240.096 72.2438C239.111 69.5724 237.75 67.2968 236.014 65.417C234.278 63.4876 232.236 62.0283 229.89 61.0389C227.591 60 225.128 59.4806 222.5 59.4806C219.872 59.4806 217.385 60 215.039 61.0389C212.74 62.0283 210.722 63.4876 208.986 65.417C207.297 67.2968 205.96 69.5724 204.974 72.2438C203.989 74.8657 203.496 77.8092 203.496 81.0742C203.496 84.1413 203.989 86.9859 204.974 89.6078C205.96 92.2297 207.297 94.5053 208.986 96.4346C210.722 98.364 212.74 99.8975 215.039 101.035C217.385 102.124 219.872 102.668 222.5 102.668C225.128 102.668 227.591 102.148 229.89 101.11C232.236 100.071 234.278 98.6113 236.014 96.7314C237.75 94.8516 239.111 92.576 240.096 89.9046C241.128 87.2332 241.644 84.2898 241.644 81.0742Z" />
            <path d="M307.98 102.074C308.73 102.322 309.481 102.495 310.231 102.594C310.982 102.643 311.732 102.668 312.482 102.668C314.358 102.668 316.164 102.396 317.9 101.852C319.635 101.307 321.253 100.541 322.754 99.5512C324.302 98.5124 325.662 97.2756 326.834 95.841C328.054 94.3569 329.039 92.7244 329.789 90.9435L343.859 105.859C342.077 108.53 340.013 110.929 337.668 113.057C335.37 115.184 332.861 116.989 330.141 118.473C327.467 119.958 324.63 121.071 321.628 121.813C318.673 122.604 315.625 123 312.482 123C307.183 123 302.188 121.961 297.497 119.883C292.854 117.806 288.774 114.912 285.256 111.201C281.786 107.491 279.042 103.088 277.025 97.9929C275.008 92.8481 274 87.2085 274 81.0742C274 74.7915 275.008 69.053 277.025 63.8587C279.042 58.6643 281.786 54.2368 285.256 50.576C288.774 46.9152 292.854 44.0707 297.497 42.0424C302.188 40.0141 307.183 39 312.482 39C315.625 39 318.697 39.3958 321.698 40.1873C324.7 40.9788 327.538 42.1166 330.211 43.6007C332.931 45.0848 335.464 46.9152 337.809 49.0919C340.154 51.2191 342.218 53.6184 344 56.2898L307.98 102.074ZM317.829 60.2968C316.938 59.9505 316.047 59.7279 315.156 59.629C314.312 59.53 313.42 59.4806 312.482 59.4806C309.856 59.4806 307.37 60 305.025 61.0389C302.727 62.0283 300.71 63.4629 298.975 65.3428C297.286 67.2226 295.95 69.4982 294.965 72.1696C293.98 74.7915 293.487 77.7597 293.487 81.0742C293.487 81.8163 293.511 82.6572 293.558 83.5972C293.652 84.5371 293.769 85.5018 293.91 86.4912C294.097 87.4311 294.308 88.3463 294.543 89.2367C294.777 90.1272 295.082 90.9187 295.457 91.6113L317.829 60.2968Z" />
            <path d="M420 120H357L388.817 61.101H357V41H420L388.183 99.899H420V120Z" />
            <path d="M428 120H491L459.183 61.101H491V41H428L459.817 99.899H428V120Z" />
            <path d="M523.311 120H504V41H508.669L515.035 50.3679C518.147 47.4174 521.684 45.1553 525.645 43.5817C529.606 41.9589 533.709 41.1475 537.953 41.1475H555V61.211H537.953C535.925 61.211 534.015 61.6044 532.223 62.3912C530.431 63.178 528.875 64.2599 527.555 65.6368C526.234 67.0137 525.197 68.6365 524.442 70.5051C523.688 72.3738 523.311 74.3654 523.311 76.4799V120Z" />
          </mask>
          <path
            d="M10.0043 47.8053C10.0043 43.4236 10.8045 39.3127 12.405 35.4726C14.0056 31.6324 16.171 28.2846 18.9013 25.4291C21.6787 22.5244 24.9033 20.2351 28.5751 18.5612C32.2469 16.8873 36.1776 16.0503 40.3672 16.0503H86.8297V37.2449H40.3672C38.955 37.2449 37.6369 37.5157 36.413 38.0573C35.1891 38.5988 34.1063 39.362 33.1649 40.3466C32.2704 41.282 31.5643 42.3898 31.0465 43.6698C30.5287 44.9499 30.2698 46.3284 30.2698 47.8053C30.2698 49.2823 30.5287 50.6855 31.0465 52.0147C31.5643 53.2948 32.2704 54.4271 33.1649 55.4118C34.1063 56.3472 35.1891 57.0857 36.413 57.6273C37.6369 58.1688 38.955 58.4396 40.3672 58.4396H60.6328C64.8224 58.4396 68.7531 59.2766 72.4249 60.9505C76.1438 62.5751 79.3684 64.8398 82.0987 67.7446C84.8761 70.6001 87.0415 73.9725 88.595 77.8619C90.1955 81.702 90.9958 85.8129 90.9958 90.1946C90.9958 94.5764 90.1955 98.6873 88.595 102.527C87.0415 106.368 84.8761 109.74 82.0987 112.645C79.3684 115.5 76.1438 117.765 72.4249 119.439C68.7531 121.113 64.8224 121.95 60.6328 121.95H15.6532V100.755H60.6328C62.045 100.755 63.3631 100.484 64.587 99.9427C65.8109 99.4012 66.8701 98.6627 67.7645 97.7272C68.706 96.7426 69.4357 95.6102 69.9535 94.3302C70.4713 93.0501 70.7302 91.6716 70.7302 90.1946C70.7302 88.7177 70.4713 87.3392 69.9535 86.0591C69.4357 84.7791 68.706 83.6713 67.7645 82.7359C66.8701 81.7513 65.8109 80.9881 64.587 80.4466C63.3631 79.905 62.045 79.6342 60.6328 79.6342H40.3672C36.1776 79.6342 32.2469 78.7973 28.5751 77.1234C24.9033 75.4495 21.6787 73.1848 18.9013 70.3293C16.171 67.4246 14.0056 64.0521 12.405 60.212C10.8045 56.3226 10.0043 52.1871 10.0043 47.8053Z"
            stroke="black"
            strokeWidth="17.6"
            strokeLinecap="round"
            mask="url(#path-1-outside-1_16_2)"
          />
          <path
            d="M123.113 120H104V9H123.113V44.0721C125.4 42.2432 127.757 40.9579 130.184 40.2164C132.611 39.4255 135.085 39.0301 137.605 39.0301C142.226 39.0301 146.566 39.9693 150.627 41.8477C154.688 43.6767 158.211 46.2224 161.199 49.485C164.232 52.6981 166.613 56.4796 168.34 60.8297C170.113 65.1303 171 69.7275 171 74.6212V120H151.747V74.6212H151.887C151.887 72.5451 151.514 70.5925 150.767 68.7635C150.02 66.8851 148.993 65.2538 147.687 63.8697C146.38 62.4856 144.863 61.3981 143.136 60.6072C141.409 59.8163 139.565 59.4208 137.605 59.4208C135.598 59.4208 133.708 59.8163 131.934 60.6072C130.161 61.3981 128.62 62.4856 127.313 63.8697C126.007 65.2538 124.98 66.8851 124.233 68.7635C123.486 70.5925 123.113 72.5451 123.113 74.6212V120Z"
            stroke="black"
            strokeWidth="17.6"
            strokeLinecap="round"
            mask="url(#path-1-outside-1_16_2)"
          />
          <path
            d="M261 81.0742C261 87.0106 259.991 92.5512 257.973 97.6961C255.956 102.792 253.211 107.219 249.739 110.979C246.266 114.689 242.184 117.633 237.492 119.809C232.846 121.936 227.849 123 222.5 123C217.198 123 212.2 121.936 207.508 119.809C202.863 117.633 198.781 114.689 195.261 110.979C191.789 107.219 189.044 102.792 187.027 97.6961C185.009 92.5512 184 87.0106 184 81.0742C184 75.0389 185.009 69.4488 187.027 64.3039C189.044 59.159 191.789 54.7314 195.261 51.0212C198.781 47.2615 202.863 44.318 207.508 42.1908C212.2 40.0636 217.198 39 222.5 39C227.849 39 232.846 40.0141 237.492 42.0424C242.184 44.0212 246.266 46.8657 249.739 50.576C253.211 54.2368 255.956 58.6643 257.973 63.8587C259.991 69.0035 261 74.742 261 81.0742ZM241.644 81.0742C241.644 77.8092 241.128 74.8657 240.096 72.2438C239.111 69.5724 237.75 67.2968 236.014 65.417C234.278 63.4876 232.236 62.0283 229.89 61.0389C227.591 60 225.128 59.4806 222.5 59.4806C219.872 59.4806 217.385 60 215.039 61.0389C212.74 62.0283 210.722 63.4876 208.986 65.417C207.297 67.2968 205.96 69.5724 204.974 72.2438C203.989 74.8657 203.496 77.8092 203.496 81.0742C203.496 84.1413 203.989 86.9859 204.974 89.6078C205.96 92.2297 207.297 94.5053 208.986 96.4346C210.722 98.364 212.74 99.8975 215.039 101.035C217.385 102.124 219.872 102.668 222.5 102.668C225.128 102.668 227.591 102.148 229.89 101.11C232.236 100.071 234.278 98.6113 236.014 96.7314C237.75 94.8516 239.111 92.576 240.096 89.9046C241.128 87.2332 241.644 84.2898 241.644 81.0742Z"
            stroke="black"
            strokeWidth="16.4"
            strokeLinecap="round"
            mask="url(#path-1-outside-1_16_2)"
          />
          <path
            d="M307.98 102.074C308.73 102.322 309.481 102.495 310.231 102.594C310.982 102.643 311.732 102.668 312.482 102.668C314.358 102.668 316.164 102.396 317.9 101.852C319.635 101.307 321.253 100.541 322.754 99.5512C324.302 98.5124 325.662 97.2756 326.834 95.841C328.054 94.3569 329.039 92.7244 329.789 90.9435L343.859 105.859C342.077 108.53 340.013 110.929 337.668 113.057C335.37 115.184 332.861 116.989 330.141 118.473C327.467 119.958 324.63 121.071 321.628 121.813C318.673 122.604 315.625 123 312.482 123C307.183 123 302.188 121.961 297.497 119.883C292.854 117.806 288.774 114.912 285.256 111.201C281.786 107.491 279.042 103.088 277.025 97.9929C275.008 92.8481 274 87.2085 274 81.0742C274 74.7915 275.008 69.053 277.025 63.8587C279.042 58.6643 281.786 54.2368 285.256 50.576C288.774 46.9152 292.854 44.0707 297.497 42.0424C302.188 40.0141 307.183 39 312.482 39C315.625 39 318.697 39.3958 321.698 40.1873C324.7 40.9788 327.538 42.1166 330.211 43.6007C332.931 45.0848 335.464 46.9152 337.809 49.0919C340.154 51.2191 342.218 53.6184 344 56.2898L307.98 102.074ZM317.829 60.2968C316.938 59.9505 316.047 59.7279 315.156 59.629C314.312 59.53 313.42 59.4806 312.482 59.4806C309.856 59.4806 307.37 60 305.025 61.0389C302.727 62.0283 300.71 63.4629 298.975 65.3428C297.286 67.2226 295.95 69.4982 294.965 72.1696C293.98 74.7915 293.487 77.7597 293.487 81.0742C293.487 81.8163 293.511 82.6572 293.558 83.5972C293.652 84.5371 293.769 85.5018 293.91 86.4912C294.097 87.4311 294.308 88.3463 294.543 89.2367C294.777 90.1272 295.082 90.9187 295.457 91.6113L317.829 60.2968Z"
            stroke="black"
            strokeWidth="16.4"
            strokeLinecap="round"
            mask="url(#path-1-outside-1_16_2)"
          />
          <path
            d="M420 120H357L388.817 61.101H357V41H420L388.183 99.899H420V120Z"
            stroke="black"
            strokeWidth="16.4"
            strokeLinecap="round"
            mask="url(#path-1-outside-1_16_2)"
          />
          <path
            d="M428 120H491L459.183 61.101H491V41H428L459.817 99.899H428V120Z"
            stroke="black"
            strokeWidth="16.4"
            strokeLinecap="round"
            mask="url(#path-1-outside-1_16_2)"
          />
          <path
            d="M523.311 120H504V41H508.669L515.035 50.3679C518.147 47.4174 521.684 45.1553 525.645 43.5817C529.606 41.9589 533.709 41.1475 537.953 41.1475H555V61.211H537.953C535.925 61.211 534.015 61.6044 532.223 62.3912C530.431 63.178 528.875 64.2599 527.555 65.6368C526.234 67.0137 525.197 68.6365 524.442 70.5051C523.688 72.3738 523.311 74.3654 523.311 76.4799V120Z"
            stroke="black"
            strokeWidth="16.4"
            strokeLinecap="round"
            mask="url(#path-1-outside-1_16_2)"
          />
        </svg>
      </Link>
    </div>
  );
};
export default LoadAnimations;
