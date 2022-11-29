import style from './tariff.module.scss'
import CSSModules from 'react-css-modules';
import './tariff.scss';
import {useState} from 'react';

function Tariff({ item, price, speed, notes, header_color, card_color}) {

let selected = "";
const [checked, setChecked] = useState(false)

const handleSelected = () => {
    setChecked(!checked)
}
selected = checked ? "selected" : ""

    return (
        <div className={[style.tariff, selected].join(' ')} styleName={card_color} onClick={handleSelected}>
        <div className={style.tariff_item} styleName={header_color}>{item}</div>
        <div className={style.tariff_price}>{price}</div>
        <div className={style.tariff_speed}>до {speed} Мбит/сек</div>
        <div className={style.tariff_notes} >{notes}</div>
        </div>
    )
}

export default CSSModules(Tariff, style)