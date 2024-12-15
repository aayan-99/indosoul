// ... existing imports ...
import { useState, useEffect, useRef } from 'react';
import NavButton from './NavButton';
import { useLocation, useNavigate } from 'react-router';
import { findFillColor, getNavButtonProps } from '../../utils/helpers';
import { navigationData } from '../../data/navigationData';

const Navbar = () => {
    // ... existing state and hooks ...
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleEmailClick = () => {
        window.location.href = pathname === '/indo-soul-music'
            ? 'mailto:contact@indosoulacademy.com'
            : 'mailto:contact@indosoul.in';
    };

    const { pathname } = useLocation();

    const navigate = useNavigate();

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const navButtonProps = getNavButtonProps(pathname);

    const desktopNavData = navigationData?.slice(0, -1)

    const timeoutId: React.MutableRefObject<null | number> = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Initial check to hide navbar if page loads scrolled down
            if (window.scrollY > 100) {
                setIsVisible(false);
            }

            // Clear any existing timeout
            if (timeoutId.current) {
                clearTimeout(timeoutId.current);
            }

            if (currentScrollY <= 100) {
                // Always show navbar when at the top
                setIsVisible(true);
            } else {
                // If scrolling up, show the navbar
                if (currentScrollY < lastScrollY) {
                    setIsVisible(true);

                    // Hide after 2 seconds
                    timeoutId.current = setTimeout(() => {
                        setIsVisible(false);
                        timeoutId.current = null;
                    }, 2000);
                } else {
                    // If scrolling down, hide immediately
                    setIsVisible(false);
                }
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (timeoutId.current) {
                clearTimeout(timeoutId.current);
            }
        };
    }, [lastScrollY]);

    return (
        <>
            <div className={`w-full p-3 px-8 fixed top-0 left-0 z-30 hidden lg:flex justify-center items-center text-white transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'
                }`}>
                <div className='w-full bg-navBlack flex justify-between items-center pl-10 rounded-full p-2'>
                    <div className='flex items-center gap-14 w-fit'>
                        <h1 className='font-manrope text-sm font-semibold cursor-pointer' onClick={() => navigate(`/`)}>Home</h1>
                        <h1 className='font-manrope text-sm font-semibold cursor-pointer flex items-center gap-2 relative' onClick={() => setDropdownOpen(!dropdownOpen)}>Offerings
                            <span className='mt-1'>
                                <svg width="8" height="6" className={`transition-all duration-500 ease-in-out ${!dropdownOpen ? '' : 'rotate-180'}`} viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4 6L0.535898 -1.75695e-07L7.4641 4.29987e-07L4 6Z" fill={findFillColor(pathname)} />
                                </svg>
                            </span>
                            <div className={`absolute bottom-0 top-10 w-56 bg-navBlack rounded-xl flex flex-col overflow-hidden transition-all duration-500 ease-in-out z-20 ${dropdownOpen ? 'h-60' : 'h-0 py-0'}`}>
                                {
                                    desktopNavData?.map((data) => (
                                        <div key={data?.id} className={`w-full border-b-white p-4 hover:bg-[#1c1c1b] transition-all duration-500 ease-in-out`} style={{ color: pathname === data?.route ? findFillColor(pathname) : 'whitesmoke' }} onClick={() => navigate(data?.route)}>
                                            <h1 className='font-manrope text-xs'>{data?.title}</h1>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className={`fixed inset-0 ${dropdownOpen ? '' : 'hidden'}`} onClick={() => setDropdownOpen(false)} />
                        </h1>
                        <h1 className={`font-manrope text-sm font-semibold cursor-pointer ${pathname === '/about-us' ? 'text-aboutUsRed' : 'text-white'}`} onClick={() => navigate(`/about-us`)}>About Us</h1>
                    </div>
                    <div className='w-fit flex items-center gap-14'>
                        <span className='flex items-center gap-2 leading-none'>
                            <svg width="12" height="12" className='mt-[0.5px]' viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.8767 9.18932C12.0196 9.18932 11.1781 9.05516 10.3804 8.79156C9.98958 8.65812 9.50906 8.78062 9.27063 9.02562L7.69635 10.2138C5.87089 9.23927 4.74615 8.11526 3.7851 6.30328L4.93865 4.77021C5.23833 4.47089 5.34589 4.03375 5.21682 3.62359C4.95214 2.82187 4.8176 1.98078 4.8176 1.12328C4.8176 0.503854 4.31375 0 3.69432 0H1.12328C0.503854 0 0 0.503854 0 1.12328C0 8.22354 5.77646 14 12.8767 14C13.4961 14 14 13.4961 14 12.8767V10.313C14 9.69354 13.4961 9.18969 12.8767 9.18969V9.18932Z"
                                    fill={findFillColor(pathname)}
                                />
                            </svg>
                            {
                                pathname === '/indo-soul-music' ?
                                    <a href="tel:8850411961" className='font-manrope text-sm font-semibold cursor-pointer transition-all duration-500 ease-in-out'>+91 88504 11961</a>
                                    : <a href="tel:8754477925" className='font-manrope text-sm font-semibold cursor-pointer transition-all duration-500 ease-in-out'>+91 87544 77925</a>
                            }
                        </span>
                        <span className='flex items-center gap-2 leading-none'>
                            <svg width="17" height="17" className='mt-[3px]' viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_338_931)">
                                    <path d="M7.81706 7.36393L0.0252746 1.69701C0.010832 1.70424 0.0162479 1.70243 0 1.70965V10.2849C0 11.2327 0.767263 12 1.71506 12H15.4355C16.3833 12 17.1506 11.2327 17.1506 10.2849V1.68979C17.1506 1.68979 17.1506 1.68979 17.1452 1.68799L9.33353 7.36574C8.8804 7.69431 8.26839 7.69431 7.81526 7.36574L7.81706 7.36393Z" fill={findFillColor(pathname)} />
                                    <path d="M9.33531 5.24628L16.2533 0.214834C16.0114 0.083045 15.7316 0 15.4355 0H1.71503C1.41715 0 1.14274 0.083045 0.897217 0.214834L7.81703 5.24628C8.27017 5.57485 8.88217 5.57485 9.33531 5.24628Z" fill={findFillColor(pathname)} />
                                </g>
                                <defs>
                                    <clipPath id="clip0_338_931">
                                        <rect width="17.1506" height="12" fill={findFillColor(pathname)} />
                                    </clipPath>
                                </defs>
                            </svg>
                            {
                                pathname == '/indo-soul-music' ?
                                    <h1 className='font-manrope text-sm font-semibold cursor-pointer' onClick={handleEmailClick}>contact@indosoulacademy.com</h1>
                                    :
                                    <h1 className='font-manrope text-sm font-semibold cursor-pointer' onClick={handleEmailClick}>contact@indosoul.in</h1>
                            }
                        </span>
                        <NavButton {...navButtonProps} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;