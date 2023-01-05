import { NavLink } from 'react-router-dom';
import './sidebar.css'

export const Sidebar = () => {
    const Menu = [
        { page: "/Jaegar", src: 
        <svg className='icon' width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect opacity="0.26" width="56" height="56" rx="12" fill="#EB966A"/>
        <path d="M39.6666 11.3334H16.3333C13.5766 11.3334 11.3333 13.5767 11.3333 16.3334V21.0517C11.3333 22.8067 11.9699 24.4017 12.9999 25.6284V41.3334C12.9999 41.7754 13.1755 42.1993 13.4881 42.5119C13.8006 42.8244 14.2246 43 14.6666 43H27.9999C28.4419 43 28.8659 42.8244 29.1784 42.5119C29.491 42.1993 29.6666 41.7754 29.6666 41.3334V33H36.3333V41.3334C36.3333 41.7754 36.5088 42.1993 36.8214 42.5119C37.134 42.8244 37.5579 43 37.9999 43H41.3333C41.7753 43 42.1992 42.8244 42.5118 42.5119C42.8243 42.1993 42.9999 41.7754 42.9999 41.3334V25.6267C44.0299 24.4017 44.6666 22.8067 44.6666 21.05V16.3334C44.6666 13.5767 42.4233 11.3334 39.6666 11.3334ZM41.3333 16.3334V21.0517C41.3333 22.9517 39.9183 24.5717 38.1816 24.6634L37.9999 24.6667C36.1616 24.6667 34.6666 23.1717 34.6666 21.3334V14.6667H39.6666C40.5866 14.6667 41.3333 15.415 41.3333 16.3334ZM24.6666 21.3334V14.6667H31.3333V21.3334C31.3333 23.1717 29.8383 24.6667 27.9999 24.6667C26.1616 24.6667 24.6666 23.1717 24.6666 21.3334ZM14.6666 16.3334C14.6666 15.415 15.4133 14.6667 16.3333 14.6667H21.3333V21.3334C21.3333 23.1717 19.8383 24.6667 17.9999 24.6667L17.8183 24.6617C16.0816 24.5717 14.6666 22.9517 14.6666 21.0517V16.3334ZM24.6666 34.6667H17.9999V29.6667H24.6666V34.6667Z" fill="currentColor"/>
        <defs>
        <linearGradient id="paint0_linear_8768_2006" x1="27.9999" y1="11.3334" x2="27.9999" y2="43" gradientUnits="userSpaceOnUse">
        <stop stop-color="#EA9769"/>
        <stop offset="1" stop-color="#EA6969"/>
        </linearGradient>
        </defs>
        </svg>
        },
        { page: "/", src: 
        <svg className='icon' width="30" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.73049 2.78835C11.0005 1.77935 12.7805 1.73935 14.0895 2.66835L14.2505 2.78835L20.3395 7.65935C21.0095 8.17835 21.4205 8.94936 21.4905 9.78835L21.5005 9.98935V18.0984C21.5005 20.1884 19.8495 21.8884 17.7805 21.9984H15.7905C14.8395 21.9794 14.0705 21.2394 14.0005 20.3094L13.9905 20.1684V17.3094C13.9905 16.9984 13.7595 16.7394 13.4505 16.6884L13.3605 16.6784H10.6895C10.3705 16.6884 10.1105 16.9184 10.0705 17.2184L10.0605 17.3094V20.1594C10.0605 20.2184 10.0495 20.2884 10.0405 20.3384L10.0305 20.3594L10.0195 20.4284C9.90049 21.2794 9.20049 21.9284 8.33049 21.9894L8.20049 21.9984H6.41049C4.32049 21.9984 2.61049 20.3594 2.50049 18.2984V9.98935C2.50949 9.13835 2.88049 8.34835 3.50049 7.79835L9.73049 2.78835ZM13.3805 3.87835C12.6205 3.26835 11.5405 3.23935 10.7405 3.76835L10.5895 3.87835L4.50949 8.77936C4.16049 9.03835 3.95049 9.42836 3.90049 9.83836L3.88949 9.99835V18.0984C3.88949 19.4284 4.92949 20.5184 6.25049 20.5984H8.20049C8.42049 20.5984 8.61049 20.4494 8.63949 20.2394L8.66049 20.0594L8.67049 20.0084V17.3094C8.67049 16.2394 9.49049 15.3694 10.5405 15.2884H13.3605C14.4295 15.2884 15.2995 16.1094 15.3805 17.1594V20.1684C15.3805 20.3784 15.5305 20.5594 15.7305 20.5984H17.5895C18.9295 20.5984 20.0195 19.5694 20.0995 18.2584L20.1105 18.0984V9.99835C20.0995 9.56936 19.9205 9.16835 19.6105 8.86935L19.4805 8.75835L13.3805 3.87835Z" fill="currentColor"/>
        </svg>
        },
        { page: "/LogoThird", src: 
        <svg className='icon' width="30" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.9512 2.71645L14.1336 2.88645L14.8523 3.6052C15.0992 3.85092 15.423 4.00242 15.7675 4.03646L15.9162 4.04378H16.9442C18.548 4.04378 19.8595 5.29795 19.9511 6.87883L19.9562 7.05578V8.08278C19.9562 8.43258 20.0768 8.76886 20.2944 9.03624L20.3936 9.14645L21.1124 9.86525C22.2439 10.9917 22.2944 12.7929 21.2578 13.98L21.1226 14.1251L20.3942 14.8535C20.1492 15.099 19.9976 15.4231 19.9636 15.7672L19.9562 15.9158V16.9448C19.9562 18.5485 18.7021 19.8591 17.1212 19.9507L16.9442 19.9558H15.9162C15.5677 19.9558 15.231 20.0769 14.9634 20.2951L14.8532 20.3945L14.1354 21.1113C13.0102 22.2442 11.2076 22.2944 10.02 21.2574L9.8659 21.1131L9.14878 20.396C8.90039 20.1494 8.57595 19.9973 8.23245 19.9631L8.08423 19.9558H7.05523C5.45209 19.9558 4.14095 18.7023 4.04934 17.1217L4.04423 16.9448V15.9158C4.04423 15.5678 3.92293 15.2308 3.70485 14.9637L3.60553 14.8537L2.8884 14.1356C1.75582 13.0094 1.70559 11.2068 2.74261 10.0204L2.8779 9.87545L3.60402 9.14834C3.85096 8.89963 4.00279 8.57581 4.03689 8.23146L4.04423 8.08278V7.05578L4.04934 6.87885C4.13756 5.35668 5.35672 4.13715 6.87836 4.0489L7.05523 4.04378H8.08423C8.43271 4.04378 8.76948 3.9229 9.03652 3.70572L9.14653 3.60682L9.8647 2.88765C10.9911 1.75618 12.7935 1.70636 13.9512 2.71645ZM11.0416 3.84256L10.9269 3.94674L10.2057 4.66899C9.68842 5.18258 9.0043 5.48966 8.28205 5.53727L8.08423 5.54378H7.05523C6.26766 5.54378 5.61995 6.14793 5.55041 6.91821L5.54423 7.05578V8.08278C5.54423 8.81195 5.27962 9.5131 4.80233 10.0612L4.66692 10.2067L3.93976 10.9349C3.38794 11.4892 3.35581 12.3649 3.84346 12.9589L3.94793 13.0738L4.66719 13.7941C5.18159 14.3097 5.48988 14.995 5.53769 15.7178L5.54423 15.9158V16.9448C5.54423 17.7328 6.14793 18.3801 6.91774 18.4496L7.05523 18.4558H8.08423C8.81202 18.4558 9.51377 18.7207 10.062 19.198L10.2076 19.3335L10.9309 20.0568C11.4891 20.6119 12.365 20.6442 12.9585 20.1565L13.0733 20.0521L13.7942 19.3322C14.3109 18.8179 14.9953 18.5101 15.7182 18.4623L15.9162 18.4558H16.9442C17.7329 18.4558 18.3805 17.8524 18.45 17.0823L18.4562 16.9448V15.9158C18.4562 15.1869 18.721 14.4839 19.1977 13.9383L19.3329 13.7935L20.0604 13.066C20.6122 12.511 20.6442 11.6358 20.1572 11.0419L20.0529 10.9271L19.331 10.2052C18.8171 9.68765 18.5103 9.00422 18.4627 8.28094L18.4562 8.08278V7.05578C18.4562 6.26737 17.8522 5.61951 17.0818 5.54996L16.9442 5.54378H15.9162C15.1871 5.54378 14.485 5.27939 13.9381 4.80243L13.7929 4.66711L13.105 3.97734L13.0651 3.94031C12.5108 3.38855 11.635 3.35624 11.0416 3.84256ZM15.0966 14.0424C15.1666 14.1124 15.2266 14.1924 15.2666 14.2824C15.2966 14.3724 15.3166 14.4724 15.3166 14.5724C15.3166 14.6734 15.2966 14.7624 15.2666 14.8524C15.2266 14.9424 15.1666 15.0324 15.0966 15.1024C14.9566 15.2424 14.7666 15.3224 14.5666 15.3224C14.3666 15.3224 14.1766 15.2424 14.0366 15.1024C13.9666 15.0324 13.9166 14.9424 13.8766 14.8524C13.8366 14.7624 13.8166 14.6734 13.8166 14.5724C13.8166 14.4724 13.8366 14.3724 13.8766 14.2824C13.9166 14.1924 13.9666 14.1124 14.0366 14.0424C14.3166 13.7624 14.8166 13.7624 15.0966 14.0424ZM15.1003 8.89915C15.3665 9.16542 15.3907 9.58208 15.1729 9.87569L15.1003 9.95981L9.96026 15.0998C9.66736 15.3927 9.19249 15.3927 8.8996 15.0998C8.63333 14.8335 8.60912 14.4169 8.82698 14.1233L8.8996 14.0392L14.0396 8.89915C14.3325 8.60626 14.8074 8.60626 15.1003 8.89915ZM9.95653 8.90278C10.0965 9.04178 10.1765 9.23278 10.1765 9.43278C10.1765 9.53278 10.1665 9.62178 10.1265 9.71278C10.0865 9.80278 10.0265 9.88278 9.95653 9.96278C9.88653 10.0328 9.80653 10.0818 9.71653 10.1218C9.62653 10.1618 9.52653 10.1828 9.42653 10.1828C9.32653 10.1828 9.23653 10.1618 9.14653 10.1218C9.05653 10.0818 8.96653 10.0328 8.89653 9.96278C8.82653 9.88278 8.77653 9.80278 8.73653 9.71278C8.69653 9.62178 8.67653 9.53278 8.67653 9.43278C8.67653 9.33178 8.69653 9.23278 8.73653 9.14278C8.77653 9.05278 8.82653 8.96278 8.89653 8.90278C9.18653 8.62178 9.67653 8.62178 9.95653 8.90278Z" fill="currentColor"/>
        </svg>
         },
        { page: "/dashboard", src: 
        <svg className='icon' width="30" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.4978 6.7606C10.5855 6.93485 10.6382 7.12392 10.6533 7.32102L11.0419 12.8095C11.0471 12.8847 11.0827 12.9548 11.1409 13.0042C11.1845 13.0413 11.2381 13.0645 11.298 13.0712L11.3599 13.0724L16.9341 12.7366C17.3867 12.71 17.8305 12.8675 18.1604 13.1719C18.4902 13.4763 18.6768 13.9004 18.6744 14.3912C18.4265 18.0037 15.773 21.0237 12.159 21.8065C8.54503 22.5893 4.83611 20.9474 3.05781 17.7848C2.58229 16.9695 2.26178 16.0778 2.1138 15.1749L2.06643 14.8359C2.0253 14.5821 2.00319 14.3257 2 14.0795L2.00311 13.8372C2.0134 10.0655 4.66156 6.80403 8.38809 5.92434L8.64383 5.86807L8.7814 5.84532C9.502 5.74681 10.211 6.12453 10.4978 6.7606ZM9.01643 7.27813L8.93217 7.28772L8.70369 7.33933C5.73526 8.05477 3.6062 10.6103 3.48796 13.621L3.4828 13.8661C3.47569 14.0525 3.4825 14.2392 3.50499 14.4378L3.53277 14.6408C3.63212 15.495 3.90795 16.3206 4.34914 17.0772C5.81632 19.6863 8.86669 21.0367 11.839 20.3929C14.8113 19.7491 16.9936 17.2653 17.1958 14.3414C17.1958 14.2974 17.1774 14.2552 17.1446 14.225C17.1228 14.2049 17.0959 14.1912 17.0675 14.1851L17.024 14.1817L11.459 14.5169C10.9894 14.5503 10.5255 14.3992 10.17 14.0971C9.81456 13.7951 9.59684 13.3669 9.56522 12.91L9.17702 7.42617C9.17632 7.41708 9.17385 7.40822 9.15682 7.37299C9.1315 7.31695 9.07648 7.28131 9.01643 7.27813ZM13.423 2.00105C17.7084 2.12227 21.3029 5.20162 21.9904 9.34084L22 9.4567L21.9977 9.65855C21.9737 9.95621 21.8538 10.2393 21.6545 10.4668C21.4041 10.7524 21.0477 10.9286 20.6588 10.9567L14.0133 11.39C13.1615 11.4382 12.4295 10.8051 12.3741 9.97348L11.9299 3.44914L11.9349 3.30295L11.957 3.13824C12.0162 2.84619 12.1684 2.57938 12.3925 2.37643C12.6739 2.12156 13.0474 1.98661 13.423 2.00105ZM13.4113 3.44902L13.8511 9.87814C13.8537 9.91719 13.888 9.94688 13.9214 9.94502L20.5182 9.51352L20.4854 9.33352C19.8318 6.0802 17.0119 3.66443 13.6287 3.45932L13.4113 3.44902Z" fill="currentColor"/>
        </svg>
         },
        { page: "/message", src: 
        <svg className='icon' width="30" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.3212 2.75806C17.8351 2.77511 19.2761 3.41599 20.3085 4.5315C21.3408 5.64701 21.8745 7.13976 21.7865 8.61703L21.7852 14.854C21.8745 16.3763 21.3408 17.8691 20.3085 18.9846C19.2761 20.1001 17.8351 20.741 16.3127 20.7581H7.25208C4.08255 20.7581 1.7959 18.1965 1.7959 14.8991V8.61703C1.7959 5.31957 4.08255 2.75806 7.25208 2.75806H16.3212ZM16.3043 4.28644H7.25208C4.95869 4.28644 3.31334 6.12961 3.31334 8.61703V14.8991C3.31334 17.3865 4.95869 19.2297 7.25208 19.2297H16.3043C17.4032 19.2173 18.4491 18.7521 19.1985 17.9424C19.9479 17.1327 20.3352 16.0492 20.2691 14.8991L20.2704 8.57194C20.3352 7.46693 19.9479 6.38339 19.1985 5.57368C18.4491 4.76397 17.4032 4.29878 16.3043 4.28644ZM17.8199 8.39642C18.058 8.69598 18.0359 9.12067 17.7841 9.39357L17.7017 9.47061L13.5947 12.7817C12.5972 13.5648 11.219 13.6039 10.1789 12.8956L10.0176 12.7775L5.88316 9.47259C5.55494 9.21022 5.50002 8.72952 5.76051 8.39891C5.99731 8.09837 6.41326 8.02533 6.73353 8.21166L6.82647 8.27537L10.9557 11.5762C11.4187 11.9396 12.0534 11.9676 12.5367 11.6649L12.6542 11.5823L16.7535 8.27736C17.0806 8.01361 17.5581 8.06692 17.8199 8.39642Z" fill="currentColor"/>
        </svg>
         },
        { page: "/notification", src: 
        <svg className='icon' width="30" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.608 19.6906C14.9045 19.9321 14.9515 20.3713 14.7129 20.6715C14.5366 20.8935 14.3327 21.0922 14.1167 21.255C13.3891 21.826 12.464 22.0849 11.5453 21.9754C10.6258 21.8659 9.787 21.3962 9.21459 20.6689C8.9774 20.3676 9.02646 19.9286 9.32418 19.6885C9.62189 19.4484 10.0555 19.4981 10.2927 19.7995C10.6379 20.2381 11.1467 20.523 11.7064 20.5896C12.2669 20.6564 12.8307 20.4986 13.2826 20.1443C13.4158 20.0437 13.5355 19.927 13.6389 19.7969C13.8775 19.4967 14.3114 19.4491 14.608 19.6906ZM5.15213 8.99974L5.16444 8.40391C5.17324 8.14906 5.18686 7.91248 5.20685 7.68096C5.50654 4.44456 8.59565 2 11.9648 2H12.0361C15.4034 2 18.4934 4.44285 18.8034 7.68536C18.8212 7.89148 18.8288 8.07458 18.8311 8.33206L18.832 9.11982C18.8327 9.19158 18.8339 9.25469 18.8358 9.31353L18.845 9.50977L18.8896 9.69688C19.0303 10.218 19.2776 10.7052 19.6162 11.1282L19.7669 11.3055L19.8286 11.3847C20.2348 11.9917 20.4668 12.698 20.5 13.4587L20.499 13.862C20.4707 14.763 20.1399 15.6331 19.5338 16.3582C18.7311 17.2101 17.6434 17.7393 16.4873 17.8457C13.502 18.1699 10.49 18.1699 7.51296 17.8466C6.34896 17.7346 5.26444 17.2069 4.42663 16.3223C3.80882 15.5691 3.48041 14.6208 3.5009 13.6624L3.50175 13.4242C3.53744 12.6955 3.76804 11.9898 4.16936 11.3802L4.23653 11.2938C4.70525 10.7799 5.02569 10.151 5.16473 9.47306L5.14969 9.53395L5.15213 8.99974ZM12.0361 3.39535H11.9648C9.26651 3.39535 6.80804 5.34087 6.57967 7.80678C6.56798 7.94228 6.55866 8.08207 6.55137 8.2292L6.53532 8.69559L6.52879 9.61486L6.51441 9.75667C6.32444 10.683 5.88728 11.5409 5.24929 12.2404L5.29856 12.1833L5.21045 12.3291C5.04539 12.6265 4.9389 12.9495 4.89682 13.2682L4.87935 13.4587L4.87919 13.6774C4.86568 14.3142 5.08086 14.9356 5.45369 15.3931C6.02881 15.9985 6.80682 16.377 7.65168 16.4583C10.5393 16.7719 13.4527 16.7719 16.3514 16.4572C17.1871 16.3802 17.9645 16.002 18.5084 15.4267C18.92 14.933 19.1375 14.3097 19.1216 13.6536L19.1224 13.4901C19.1013 13.0186 18.951 12.5613 18.6873 12.1672L18.7026 12.1926L18.5647 12.0309C18.0893 11.4441 17.744 10.7635 17.5517 10.034L17.4868 9.75818L17.4739 9.66551C17.4642 9.53013 17.4585 9.40982 17.4555 9.26514L17.4528 8.3605C17.4509 8.13044 17.4447 7.97558 17.4307 7.81326C17.1944 5.34075 14.7336 3.39535 12.0361 3.39535Z" fill="currentColor"/>
        </svg>
         },
        { page: "/settings", src: 
        <svg className='icon' width="30" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.6161 2C13.3251 1.99971 14.0041 2.28061 14.4983 2.77871C14.9925 3.27681 15.2599 3.94968 15.2383 4.57766L15.2468 4.72535C15.2641 4.87079 15.3124 5.01116 15.3908 5.14054C15.5435 5.39567 15.7935 5.58081 16.0857 5.65514C16.3779 5.72947 16.6882 5.68688 16.9821 5.51839L17.146 5.4355C18.3759 4.86897 19.8511 5.31918 20.5333 6.47928L21.1465 7.52174C21.1627 7.54922 21.1769 7.57762 21.1892 7.60674L21.2461 7.71842C21.7945 8.86519 21.4043 10.2293 20.3624 10.9223L20.1051 11.0807C19.9706 11.1726 19.8585 11.2926 19.7742 11.4368C19.6218 11.6929 19.58 11.998 19.658 12.2844C19.736 12.5708 19.9272 12.8149 20.2174 12.9793L20.3843 13.0841C20.8887 13.4297 21.253 13.9391 21.4119 14.523C21.5912 15.1817 21.495 15.8833 21.1399 16.4804L20.4803 17.557L20.3808 17.7089C19.6058 18.8008 18.1011 19.1344 16.9527 18.485L16.8166 18.4163C16.6746 18.3541 16.5214 18.3199 16.382 18.316C16.0786 18.3146 15.7872 18.432 15.5727 18.6422C15.3582 18.8524 15.2383 19.1379 15.2391 19.4698L15.231 19.6414C15.12 20.9703 13.9845 22 12.6164 22H11.3811C9.93219 22 8.75765 20.8493 8.75912 19.4753L8.75063 19.3277C8.73337 19.1822 8.68504 19.0418 8.6027 18.9057C8.45336 18.65 8.20591 18.4633 7.91538 18.3871C7.62484 18.3109 7.31529 18.3516 7.01565 18.5213L6.83762 18.6084C6.2746 18.8565 5.63953 18.9023 5.04445 18.7366C4.37306 18.5497 3.80539 18.1083 3.47412 17.5224L2.83679 16.4442L2.75197 16.2844C2.17157 15.0841 2.62651 13.6412 3.78115 12.9875L3.88645 12.9228C4.19491 12.7137 4.37987 12.3688 4.37987 12C4.37987 11.599 4.16149 11.2284 3.77948 11.0115L3.62449 10.9141C2.51001 10.1548 2.16949 8.68049 2.85989 7.50696L3.50918 6.46166C4.23128 5.23376 5.83155 4.81017 7.06235 5.50171L7.19559 5.5713C7.33141 5.63238 7.47895 5.6648 7.62101 5.66628C8.24742 5.66634 8.75775 5.17352 8.76724 4.54181L8.77575 4.3478C8.82704 3.74716 9.09307 3.1827 9.52796 2.75457C10.0186 2.27155 10.6855 2 11.3811 2H12.6161ZM12.6164 3.44774H11.3811C11.0786 3.44774 10.7887 3.56581 10.5753 3.77582C10.3863 3.96196 10.2706 4.20741 10.2503 4.43661L10.2368 4.7415C10.1334 6.07087 8.99969 7.11416 7.61326 7.11398C7.25588 7.11034 6.90355 7.03293 6.54427 6.87026L6.3519 6.77085C5.8038 6.46315 5.1049 6.64815 4.78057 7.19925L4.13128 8.24455C3.83377 8.75044 3.98256 9.39466 4.44324 9.70925L4.70395 9.871C5.42196 10.3467 5.85754 11.1429 5.85754 12C5.85754 12.8446 5.43413 13.634 4.70219 14.1296L4.54639 14.2256C4.03354 14.5163 3.83562 15.144 4.07398 15.6383L4.13027 15.7449L4.75952 16.8084C4.90728 17.0696 5.1552 17.2624 5.44842 17.344C5.70831 17.4164 5.98569 17.3964 6.20208 17.3018L6.3108 17.2497C6.91096 16.9066 7.62614 16.8126 8.29737 16.9886C8.96861 17.1645 9.54028 17.5959 9.87937 18.1768C10.0618 18.478 10.1772 18.8132 10.2219 19.1985L10.2421 19.552C10.3043 20.1145 10.7905 20.5523 11.3811 20.5523H12.6164C13.2137 20.5523 13.7099 20.1023 13.7565 19.5511L13.7621 19.4421C13.7588 18.7585 14.0345 18.1019 14.5279 17.6185C15.0212 17.1351 15.6914 16.865 16.4053 16.8686C16.7556 16.8778 17.1004 16.9547 17.4528 17.11L17.7687 17.2682C18.2647 17.4814 18.8529 17.3258 19.1511 16.9067L19.2236 16.7957L19.868 15.7436C20.0203 15.4875 20.0621 15.1824 19.9841 14.896C19.915 14.6422 19.7566 14.4207 19.5645 14.2882L19.2922 14.1195C18.7716 13.7748 18.3932 13.2563 18.2302 12.6574C18.0509 11.9987 18.1471 11.2971 18.4946 10.7126C18.6849 10.3872 18.9464 10.1073 19.2873 9.87532L19.448 9.77613C19.9601 9.4827 20.1578 8.85504 19.9212 8.35884L19.8505 8.22529L19.8378 8.19726L19.253 7.20208C18.9764 6.73175 18.4008 6.52853 17.9125 6.6891L17.8015 6.73265L17.6983 6.78415C17.1001 7.12941 16.3863 7.22736 15.7143 7.05641C15.0423 6.88546 14.4673 6.45965 14.1181 5.87616C13.9357 5.57504 13.8203 5.23984 13.7756 4.85454L13.7624 4.60249C13.7713 4.29923 13.6546 4.00536 13.4387 3.78783C13.2229 3.57029 12.9264 3.44774 12.6164 3.44774ZM12.0032 8.73182C13.8455 8.73182 15.339 10.195 15.339 12C15.339 13.805 13.8455 15.2682 12.0032 15.2682C10.161 15.2682 8.66748 13.805 8.66748 12C8.66748 10.195 10.161 8.73182 12.0032 8.73182ZM12.0032 10.1796C10.977 10.1796 10.1452 10.9946 10.1452 12C10.1452 13.0054 10.977 13.8204 12.0032 13.8204C13.0294 13.8204 13.8613 13.0054 13.8613 12C13.8613 10.9946 13.0294 10.1796 12.0032 10.1796Z" fill="currentColor"/>
        </svg>
         },
        { page: "/logout", src: 
        <svg className='icon' width="30" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.331 2.02148C13.7102 2.02148 15.6521 3.89542 15.7611 6.24772L15.766 6.45648V7.38948C15.766 7.8037 15.4302 8.13948 15.016 8.13948C14.6363 8.13948 14.3225 7.85733 14.2728 7.49125L14.266 7.38948V6.45648C14.266 4.89358 13.044 3.61575 11.5034 3.52647L11.331 3.52148H6.45597C4.89392 3.52148 3.61623 4.74362 3.52696 6.28406L3.52197 6.45648V17.5865C3.52197 19.1493 4.74388 20.4272 6.28363 20.5165L6.45597 20.5215H11.341C12.8983 20.5215 14.172 19.3039 14.261 17.7693L14.266 17.5975V16.6545C14.266 16.2403 14.6018 15.9045 15.016 15.9045C15.3957 15.9045 15.7095 16.1866 15.7591 16.5527L15.766 16.6545V17.5975C15.766 19.9687 13.8992 21.9046 11.5553 22.0164L11.341 22.0215H6.45597C4.07753 22.0215 2.13581 20.1474 2.0268 17.7952L2.02197 17.5865V6.45648C2.02197 4.07743 3.89573 2.13535 6.24728 2.02631L6.45597 2.02148H11.331ZM19.326 8.50234L19.4103 8.57478L22.3383 11.4898C22.3647 11.5159 22.3878 11.5426 22.409 11.5707L22.3383 11.4898C22.3689 11.5202 22.3963 11.5526 22.4205 11.5865C22.4376 11.6103 22.4533 11.6354 22.4676 11.6614C22.4702 11.6665 22.4728 11.6715 22.4754 11.6764C22.4881 11.7004 22.4993 11.7253 22.5092 11.7508C22.5132 11.762 22.5173 11.7733 22.5211 11.7847C22.5284 11.8058 22.5345 11.8274 22.5397 11.8494C22.5421 11.8612 22.5445 11.8729 22.5467 11.8846C22.5508 11.905 22.5538 11.9261 22.5559 11.9474C22.557 11.9623 22.558 11.977 22.5586 11.9917C22.5593 12.0016 22.5595 12.0115 22.5595 12.0214L22.5586 12.0497C22.5581 12.0651 22.557 12.0805 22.5555 12.0958L22.5595 12.0214C22.5595 12.0682 22.5552 12.1141 22.547 12.1585C22.5445 12.1696 22.5421 12.1814 22.5394 12.193C22.5343 12.2162 22.5279 12.2387 22.5205 12.2607C22.5167 12.2709 22.513 12.2813 22.509 12.2915C22.4997 12.3164 22.4889 12.3405 22.4769 12.3639C22.4739 12.3692 22.4708 12.3751 22.4675 12.381C22.4331 12.4443 22.39 12.5015 22.3398 12.5517L22.3384 12.5527L19.4104 15.4687C19.1169 15.761 18.642 15.76 18.3498 15.4665C18.084 15.1997 18.0607 14.783 18.2791 14.4898L18.3519 14.4059L19.991 12.7705L9.76847 12.7714C9.35426 12.7714 9.01847 12.4356 9.01847 12.0214C9.01847 11.6417 9.30063 11.3279 9.6667 11.2782L9.76847 11.2714L19.993 11.2705L18.352 9.63779C18.0852 9.37212 18.06 8.95551 18.2772 8.66142L18.3497 8.57714C18.6153 8.31028 19.0319 8.28514 19.326 8.50234Z" fill="currentColor"/>
        </svg>
         },
    ]
    return (
        <>
            <ul className='sidebar__list'>
                {
                    Menu.map((item, index) => (
                        <NavLink className={({ isActive }) => isActive ? "active" : "ittemms"} to={item.page}>
                            <div className='top-box'>
                                <b className='top'></b>
                            </div>
                            <div className='bottom-box'>
                                <b className='bottom'></b>
                            </div>
                            <li className='sidebar__list__item' key={index}>
                                <span className='icon-box'>
                                    {item.src}
                                </span>
                            </li>
                        </NavLink>
                    ))
                }
            </ul>
        </>
    )
}