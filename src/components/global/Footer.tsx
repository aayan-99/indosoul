import NavButton from './NavButton'
import { useLocation, useNavigate } from 'react-router'
import SocialMediaIcons from './SocialMediaIcons'
import { findLogo, getNavButtonProps } from '../../utils/helpers'

const Footer = () => {

    const { pathname } = useLocation();

    const navigate = useNavigate();

    const navButtonProps = getNavButtonProps(pathname);

    return (
        <>
            {/* desktop footer */}
            <div className={`hidden md:block w-full p-5 ${pathname === '/indo-soul-live' ? 'bg-black' : ''}`}>
                <div className='w-full bg-[#282827] flex items-center p-5 px-10 rounded-2xl'>
                    <div className='flex gap-10 items-center w-fit'>
                        <img src={findLogo(pathname)} className='w-32' alt="" />
                    </div>
                    <div className='w-full flex justify-center items-center gap-10'>
                        <SocialMediaIcons />
                    </div>
                    <div className='w-fit min-w-32 flex flex-col justify-center items-center gap-1.5'>
                        <p className='font-manrope text-xs font-semibold cursor-pointer transition-all duration-500 ease-in-out text-white leading-none tracking-wider' onClick={() => navigate(`privacy-policy`)}>Privacy Policy</p>
                        <a href="tel:8825859601" className='font-manrope text-xs font-semibold cursor-pointer transition-all duration-500 ease-in-out text-white leading-none mb-1'>+91 88258 59601</a>
                        <NavButton {...navButtonProps}/>
                    </div>
                </div>
            </div>

            {/* mobile footer */}
            <div className={`block md:hidden w-full p-3 sm:p-5 ${pathname === '/indo-soul-live' ? 'bg-black' : ''}`}>
                <div className='w-full bg-[#282827] flex flex-col items-center gap-10 p-4 sm:p-5 px-7 sm:px-10 rounded-2xl'>
                    <div className='w-full flex gap-10 justify-start items-center mt-5'>
                        <img src={findLogo(pathname)} className='w-32' alt="" />
                    </div>
                    <div className='w-full flex justify-start items-center gap-10'>
                        <SocialMediaIcons />
                    </div>
                    <div className='w-full flex justify-between items-center gap-1.5'>
                        <span>
                            <p className='font-manrope text-xs font-semibold cursor-pointer transition-all duration-500 ease-in-out text-white leading-none tracking-wider' onClick={() => navigate(`privacy-policy`)}>Privacy Policy</p>
                            <a href="tel:8825859601" className='font-manrope text-xs font-semibold cursor-pointer transition-all duration-500 ease-in-out text-white leading-none mb-1'>+91 88258 59601</a>
                        </span>
                        <NavButton {...navButtonProps}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer