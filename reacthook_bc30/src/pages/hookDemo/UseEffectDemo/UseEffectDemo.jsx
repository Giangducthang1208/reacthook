import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
let timeout = {};
export default function UseEffectDemo(props) {
  const [arrProduct, setArrProduct] = useState([{ id: 1, name: 'products 1',price:1000, Image:'http://i.pravatar.cc' }]);
  const [count,setCount] = useState(60);
  const renderProduct = () => {
    return arrProduct.map((prod,index)=>{
      return <div className="col-4" key={index}>
        <div className='card'>
          <img src={prod.image} alt="..." />
          <div className="card-body">
            <h3>{prod.name}</h3>
            <p> {prod.price}</p>
            <button className="btn btn-success">Add to card</button>
          </div>
        </div>
      </div>
    })
  };

  const getApi = async() => {

    try {
      const result = await axios({
        url:'https://shop.cyberlearn.vn/api/Product',
        method:'GET',

      });
      // console.log(result.data.content);
      setArrProduct(result.data.content);

    }
    catch(err){
      console.log({err});
    }
  }
  
  
  useEffect(()=>{
    // dependecy (Tham số thứ 2 là mảng rỗng thì hàm này chạy một lần duy nhất sau khi giao diện render lần đầu tiên)
    // Tương đương componentDidMount 
    getApi();
    
    // Cài đặt hàm tự chạy ngầm 1 giây setCount một lần
    // timeout = setInterval(()=>{
    //   setCount((count)=>{
    //     return count - 1;
    //   });
    //   console.log(123);
    // },1000);
    
    return ()=>{
      // Những lệnh cài đặt sẽ chạy khi component mất khỏi giao diện (Tương đương componentWillUnmounrt)
      clearInterval(timeout);
    }

  },[]);
 


  return (
    <div className="container">
      <h3>Count:{count}</h3>
      <hr/>
      <h3 className="row">Shose App</h3>
      <div className="row">{renderProduct()}</div>
    </div>
  );
}
