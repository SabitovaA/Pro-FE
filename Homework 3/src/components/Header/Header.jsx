import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import cls from '../Header/Header.module.css'

function Header(posts){
    const {} = posts
    return(
        <header>
            <div className={cls.header}>
            <div className={cls.left}>
                 <div className={cls.logo}>
                    <img src={logo} alt="" />
                 </div>
                 <h2>Pallas cat studio</h2>
            </div>
            <div className={cls.right}>
                <nav>
                    <ul>
                        <li>
                        <Link to={`/`}>Главная</Link>
                        </li>
                        <li>
                        <Link to={`/about`}>О компании</Link>
                        </li>
                        <li>
                        <Link to={`/modal`}>Модалки</Link>
                        </li>
                        <li>
                        <Link to={`/`}>Контакты</Link>
                        </li>
                        <li>
                        <Link to={`/`}>Партнеры</Link>
                        </li>
                        
                    </ul>
                </nav>
            </div>
            </div>
        </header>
    )
}
export default Header 