import {Link} from "react-router-dom";
import Footer from "../components/Footer";
import styled from "styled-components";

const Contacts = () => {
    return (
        <main>
            <div>
                <h2>Зв'язатись з нами</h2>
                <Link to='/' className='btn'>
                    Back Home
                </Link>
            </div>
            <iframe style={{width: '100%', height: '300px'}}
    src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=%D1%83%D0%BB.%20%D0%91%D0%BE%D1%80%D0%BE%D0%B4%D0%B8%D1%8F%2C%2049%2C%20%D0%96%D0%B8%D1%82%D0%BE%D0%BC%D0%B8%D1%80%2C%20%D0%96%D0%B8%D1%82%D0%BE%D0%BC%D0%B8%D1%80%D1%81%D0%BA%D0%B0%D1%8F%20%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C+(%D0%9D%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5)&amp;ie=UTF8&amp;t=&amp;z=15&amp;iwloc=B&amp;output=embed"
    frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"/>
            <Wrapper>
                <div className='form-container'>
                    <h1>Send a message to us!</h1>
                    <form>
                        <input placeholder="Ім'я"/>
                        <input placeholder='Почта'/>
                        <input placeholder='Тема'/>
                        <textarea placeholder='Повідомлення' rows='4'></textarea>
                        <button>Відправити повідомлення</button>
                    </form>
                </div>
            </Wrapper>
            <Footer/>
        </main>
    );
};
const Wrapper = styled.form`
  .form-container {
    margin: 4rem 6rem;
    color: #2a2a2a;
  }

  .form-container h1{
    text-align: center
  }

  .form-container form {
    padding-top: 3rem;
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: auto;
  }

  .form-container input {
    height: 3rem;
    padding: 0 1rem;
    margin-bottom: 2rem;
    border-radius: .3rem;
    border: 1px solid #2a2a2a;
  }

  .form-container textarea {
    padding: 1rem;
    margin-bottom: 2rem;
    border-radius: .3rem;
    border: 1px solid #2a2a2a;
  }

  .form-container button {
    display: inline;
  }

  @media (max-width: 850px) {
    .form-container {
      margin: 4rem 2rem;
    }

    .form-container form {
      padding-top: 2rem;
      width: 90%;
    }
  }
`

export default Contacts;