function Header(props){
    const {} = props
    return (
        <div className="container">
            <div className="container__left">
                 <div className="yellow"></div>
            </div>
            <div className="container__right">
                 <ul>
                    <li>БЛОГ</li>
                    <li>О НАС</li>
                    <li>МАГАЗИН</li>
                    <li>СОЗДАТЕЛИ</li>
                    <li>АВТОРИЗАЦИЯ</li>
                 </ul>
            </div>
        </div>

    );
}

export default Header;