import Logo from '../../assets/images/sidebar/Logo.svg';
import LogoSecond from '../../assets/images/sidebar/Logo-seconds.svg';
import LogoThird from '../../assets/images/sidebar/Logo-thirsd.svg';
import LogoFirth from '../../assets/images/sidebar/Logo-firth.svg';
import LogoFivth from '../../assets/images/sidebar/Logo-five.svg';
import LogoSix from '../../assets/images/sidebar/Logo-six.svg';
import LogoSeven from '../../assets/images/sidebar/Logo-seven.svg';
import LogoEight from '../../assets/images/sidebar/Logo-eight.svg';
import { NavLink } from 'react-router-dom';
import './sidebar.css'

export const Sidebar = () => {
    const Menu = [
        { page: "/Jaegar", src: Logo },
        { page: "/", src: LogoSecond },
        { page: "/LogoThird", src: LogoThird },
        { page: "/dashboard", src: LogoFirth },
        { page: "/message", src: LogoFivth },
        { page: "/notification", src: LogoSix },
        { page: "/settings", src: LogoSeven },
        { page: "/logout", src: LogoEight },
    ]


    return (
        <>
            <ul className='sidebar__list'>
                {
                    Menu.map((item, index) => (
                        <li className='sidebar__list__item' key={index}>
                            <NavLink to={item.page}>
                                <img src={item.src} width='30' />
                            </NavLink>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
