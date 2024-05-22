import cls from '../About/About.module.css'


import Header from '../Header/Header'
import monkey from '../../assets/monkey.png'
import cat from '../../assets/cat.png'
import Footer from '../Footer/Footer'


function About(posts){
    const {}= posts
    return (
        <>
        <Header/>
        <main>
        <section>
            <div className={cls.container}>
                <h2>О компании</h2>
                <div className={cls.first}>
                    <div className={cls.left}>
                        <img src={monkey} alt="" />
                    </div>
                    <div className={cls.right}>
                        <p>Студия Pallas cat была создана с целью уместить на один сайт все - все материалы, что человек изучает на JS, но сделать это так, чтобы картинка нашего сайта не пострадала, чтобы мы могли посмотреть на результаты нашей практики и сказать: “да, я я это сделал и сделал это красиво”</p>
                        <h4>Введение</h4>
                        <p>На данной странице пользователю дана возможность по клику на одну из кнопок открыть модальное окно с соответствующим содержимым.Сайт будет усложняться по мере погружению в Javascript.</p>
                    </div>
                </div>
                <h3>Инструкция. Шаги</h3>
                <div className={cls.second}>
                
                    <div className={cls.box}>
                        <h1>1</h1>
                        <p>Видим кнопку, например, fetch. По клику на эту кнопку открывается модальное окно</p>
                    </div>
                    <div className={cls.box}>
                        <h1>2</h1>
                        <p>Видим кнопку, например, fetch. По клику на эту кнопку открывается модальное окно</p>
                    </div>
                    <div className={cls.box}>
                        <h1>3</h1>
                        <p>Видим кнопку, например, fetch. По клику на эту кнопку открывается модальное окно</p>
                    </div>
                    <div className={cls.box}>
                        <h1>4</h1>
                        <p>Видим кнопку, например, fetch. По клику на эту кнопку открывается модальное окно</p>
                    </div>
                </div>
                <div className={cls.third}>
                   <div className='left'>
                   <h3>Оценка</h3>
                    <p>Оценка производится в соотвествии с соблюдением разметки, качества использованных тегов ( семантически ), качеству написания js кода и количеству выполненых заданий</p>
                   </div>
                   <div className='right'>
                       <img src={cat} alt="" />
                   </div>

                </div>

            </div>
        </section>
        </main>
        <Footer/>
        </>
        

    )
}
export default About