import React from 'react'
import LogoutButton from './LogoutButton'
import oilpainting from '../components/img/oil-painting.jpg'
import grafit from '../components/img/grafit.JPG'
import cartoon from '../components/img/cartoon.JPG'
import {Link} from 'react-router-dom'

export default function SelectFilter() {
    return (
        <>
        <p className="sign">На цій сторінці ви можете вибрати фільтр для вашого фото</p>
        <p className="text-convert"><span>ART Sketch</span> має зручний інтерфейс, що дозволяє миттєво обробляти зображення. Програма пропонує 3 стиля перетворення цих фотографій в художні ескізи: <span>олівцем, картина маслом і мультфільм</span>, кожен з яких має дає можливість створювати широкий спектр малюнків на будь-який смак. У кожного стилю є свої переваги!</p>
        <div className="block-filters">
            <p className="text-filter">Оберіть один з стилів</p>
            <div className="all-cards">
                <div className="cards">
                    <img 
                    alt='oilpainting'
                    src={oilpainting} 
                    className='filter-img'/>
                    <div className="product-list">
                    <h3 className="header-eff">Oil Painting</h3>
                    <button><Link to='/result'>Обрати</Link></button>
                    </div>
                </div>
                <div className="cards">
                    <img src={grafit}
                    alt='grafit'
                    className='filter-img'/>
                    <div className="product-list">
                    <h3 className="header-eff">Pencil Painting</h3>
                    <button><Link to='/result'>Обрати</Link></button>
                    </div>
                </div>
                <div className="cards">
                    <img src={cartoon}
                    alt='cartoon'
                    className='filter-img'/>
                    <div className="product-list">
                    <h3 className="header-eff">Cartoon effect</h3>
                    <button><Link to='/result'>Обрати</Link></button>
                    </div>
                </div>
            </div>
        </div>
            
        </>
    )
}
