import {Space, InputNumber} from 'antd';
import "./PriceRanges.css";

function PriceRanges({priceMin, setPriceMin, priceMax, setPriceMax}) {

        function changePrice(min,max){
            setPriceMin(min);
            setPriceMax(max);
        }

  return (
    <>
    <h2>
        Price Ranges
    </h2>
    <p className="prices" onClick={() => changePrice(0,5)}>Under Rs5</p>
    <p className="prices" onClick={() => changePrice(5,10)}>Rs5 to Rs10</p>
    <p className="prices" onClick={() => changePrice(10,20)}>Rs10 to Rs20</p>
    <p className="prices" onClick={() => changePrice(20,100)}>Rs20 & Above</p>
    <Space>
    <InputNumber
      value={priceMin}
      formatter={value => `Rs ${value}`}
      onChange={(value) => changePrice(value,priceMax)}
    />
    <InputNumber
      value={priceMax}
      formatter={value => `Rs ${value}`}
      onChange={(value) => changePrice(priceMin,value)}
    />
    </Space>
    <br/>
    <br/>
    </>
  )
}

export default PriceRanges