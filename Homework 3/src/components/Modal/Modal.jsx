import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import cls from '../Modal/Modal.module.css'

function Modal(posts) {
  const {} = posts;
  return (
    <>
      <Header />
      <main>
        <section>
          <div className={cls.modal}>
            <div className={cls.modal__box}>
              <h2>Fetch posts</h2>
             
              <button></button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
export default Modal;
