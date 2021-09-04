import React from 'react'
import _ from 'lodash';


// _.uniq(arr) : Loại bỏ các phần tử kiểu dữ liệu nguyên thuỷ (shallow compare) trùng nhau
// _.uniqBy(arr, iteratee=_.identity) : Loại bỏ các phần tử object trùng nhau theo 1 tiêu chí nào đó
export default function UniqLodash() {

    const arrUniq = [1,2,3,3,3,5,6,4];
    console.log(_.uniq(arrUniq));

    const arrUniqBy = [
        {id:'1',name:'iPhone X', price:1000},
        {id:'2',name:'iPhone XS', price:1000},
        {id:'3',name:'iPhone XX', price:1500},
        {id:'3',name:'iPhone XX', price:1500},
        {id:'4',name:'iPhone Promax', price:2000},
        {id:'5',name:'iPhone 11 Pro', price:3000},
        {id:'6',name:'iPhone XX', price:1000}
    ]
    console.log('result', _.uniqBy(arrUniqBy,'id'));
    // Ket qua: Tra ve ket qua id khong trung
    // 0: {id: "1", name: "iPhone X", price: 1000}
    // 1: {id: "2", name: "iPhone XS", price: 1000}
    // 2: {id: "3", name: "iPhone XX", price: 1500}
    // 3: {id: "4", name: "iPhone Promax", price: 2000}
    // 4: {id: "5", name: "iPhone 11 Pro", price: 3000}
    // 5: {id: "6", name: "iPhone XX", price: 1000}

    return (
        <div>
            
        </div>
    )
}
