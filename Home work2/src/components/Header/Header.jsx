import icon from '../images/icon.png'

function Header(props) {
    const array = ["Главная","О компании","Модалки","Контакты","Партнеры"]
    return(
        <div className="container">
            <div className="left">
                <div className='icon'>
                    <img src={icon} alt="" />
                </div>
                <h3>Pallas cat studio</h3>
            </div>
            <div className="right">
                 <ul>
                    {array.map((elem,index) =>(
                        <li key={index}>{elem}</li>
                    ))}
                 </ul>
            </div>
        </div>
    )
}
export default Header;