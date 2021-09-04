import _ from 'lodash'
import React from 'react'

// _.fill(array,param) : Ghi đè phần tử param vào tất cả các phần tử trong mảng
// _.fill(array, param, start, end -1) : Chèn 1 phần tử từ vị trí start đến vị trí end -1
export default function FillLodash() {

    var arrObject = [
        {id:1,name:'iPhone'},
        {id:2,name:'iPhone X'},
        {id:3,name:'iPhone XS'},
        {id:4,name:'iPhone 11 Pro'},
        {id:5,name:'iPhone 11 Promax'},
    ]

    _.fill(arrObject,{id:5,name:'Saumsung note 10'},1,4);
    console.log(arrObject);

    // Ket qua:
    // 0: {id: 1, name: "iPhone"}
    // 1: {id: 5, name: "Saumsung note 10"}
    // 2: {id: 5, name: "Saumsung note 10"}
    // 3: {id: 5, name: "Saumsung note 10"}
    // 4: {id: 5, name: "iPhone 11 Promax"}
    // length: 5
    // [[Prototype]]: Array(0)

    return (
        <div>
            
        </div>
    )
}
