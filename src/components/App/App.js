import style from './App.module.scss';
import data from '../data/data.json';
import Tariff from '../Tariff/Tariff';

const header_color = ['header_blue', 'header_green', 'header_red', 'header_black'];
const card_color = ['card_blue', 'card_green', 'card_red', 'card_black'];

function App() {
  return (
    <div className={style.App}>
      {data.map((tariff, index) => (
        <Tariff item={tariff.item} price={tariff.price} speed={tariff.speed} notes={tariff.notes} header_color={header_color[index]} card_color={card_color[index]} key={index} isSelected={tariff.isSelected}/>
      ))}
    </div>
  );
}

export default App;
