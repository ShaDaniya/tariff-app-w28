import style from './tariff.module.scss'
import CSSModules from 'react-css-modules';
import './tariff.scss';

function Tariff({ item, price, speed, notes, header_color, card_color, isSelected }) {
    //выделить карточку получилось только без использования модулей, тут не знаю, как правильно их написать в тернарном операторе. чтобы работало вынесла стиль для карточки просто в файл tariff.scss, так получилось)
    const selectedCard = (isSelected?"selected":"")
    return (
        <div className={[style.tariff, selectedCard].join(' ')} styleName={card_color}>
        <div className={style.tariff_item} styleName={header_color}>{item}</div>
        <div className={style.tariff_price}>{price}</div>
        <div className={style.tariff_speed}>до {speed} Мбит/сек</div>
        <div className={style.tariff_notes} >{notes}</div>
        </div>
    )
}

export default CSSModules(Tariff, style, {allowMultiple: true})