import React from 'react'
import '../components/styles.css'
import result from '../components/img/result.JPG'
import {Link} from 'react-router-dom'


export default function StartPage() {
    return (
        <> 
        <div className="sign">
        Щоб створити художній ескіз не потрібно платити!<br/>
         Потрібно тільки пройти <Link className='linka' to='/signup'>реєстрацію</Link> або <Link className='linka' to='/login'>увійдіть</Link> в акаунт
        </div>
        <p className="text-convert"><span>ART Sketch</span> конвертує фотографії в олівцеві ескізи. Це робить ваші фотографії схожими на справжні малюнки. Тепер вам не потрібно брати в руки олівець, щоб відчути себе художником. Все, що вам потрібно для створення оригінального твору мистецтва, - це гарний смак і<span>ART Sketch</span> !</p>
        <img src={result}  alt=""/>
        <p className="text-convert">Ми пропонуємо ефективний метод, який дозволяє створювати реалістичні кольорові малюнки і чорно-білі ескізи, імітувати техніку графіту, мультфільму і акварелі.
        На відміну від стандартних фільтрів, що пропонують приблизний нарис, <span>ART Sketch</span> дуже близький до мальованих робіт художника. Він дозволяє одним клацанням миші створити приголомшливий малюнок олівцем з будь-якої фотографії!</p>
          
      </>

    )
}
