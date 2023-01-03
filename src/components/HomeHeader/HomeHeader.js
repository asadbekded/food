import "./HomeHeader.css";
import SearchIcon from '../../assets/images/search.svg';
export const HomeHeader = () => {
    return (
        <>
            <div className="home__headerBox">
                <div>
                    <h1 className='home__headerBox__title'>Jaegar Resto</h1>
                    <p className="home__headerBox__text"><time datetime="2021-02-2">Tuesday, 2 Feb 2021</time>.</p>
                </div>
                <div className='home__headerBox__input'>
                    <form method='post' className="form__search">
                        <img className="serach__icon" src={SearchIcon} width="20" height="20" alt="Search Icon" />
                        <input className="home__headerBox__inputs" type="search" placeholder="Search for food, coffe, etc.." />
                    </form>
                </div>
            </div>
        </>
    )
}
