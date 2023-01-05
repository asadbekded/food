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
        { id: "1", page: "/Jaegar", src: Logo },
        { id: "2", page: "/", src: LogoSecond },
        { id: "3", page: "/logoThird", src: LogoThird },
        { id: "4", page: "/dashboard", src: LogoFirth },
        { id: "5", page: "/message", src: LogoFivth },
        { id: "6", page: "/notification", src: LogoSix },
        { id: "7", page: "/settings", src: LogoSeven },
        { id: "8", page: "/logout", src: LogoEight },
    ]
    return (
        <>
            <ul className='sidebar__list'>
                {
                    Menu.map((item, index) => (
                        <NavLink key={item.id} className={({ isActive }) => isActive ? "active" : "ittemms"} to={item.page}>
                            <div className='top-box'>
                                <b className='top'></b>
                            </div>
                            <div className='bottom-box'>
                                <b className='bottom'></b>
                            </div>
                            <li className='sidebar__list__item' key={index}>
                                <img src={item.src} alt="img" width='30' />
                            </li>
                        </NavLink>
                    ))
                }
            </ul>
        </>
    )
}
