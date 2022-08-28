// rfc
import React, {useState} from 'react'
import BaiTapChonXe from './BaiTapChonXe';

export default function UseStateDemo() {
  /*
    useState là hàm của react cung câp
    Lưu ý: không gọi hàm này trong if else hay switch...
    [GiaTriThayDoi,hamSetLaiGiaTriMoi] = useState(giaTriMacDinhBanDau) 
    bên class là: this.State = {like:1}
  */ 
  const [like,setLike] = useState(1);


  return (
    <div className='container'>
      <div className='card w-25'>
        <img src="http://i.pravatar.cc?u=1" alt="..." />
        <div className='card-body'>
          <h3>
            Họ tên: Giang Thắng
          </h3>
          <p>Tuổi:18</p>
          <p>Like:{like}</p>
          <button className='btn btn-danger' onClick={()=>
            setLike(like+1)
          }>Like</button>
        </div>
      </div>     
      <hr/>
      <BaiTapChonXe/> 
    </div>
  )
}
