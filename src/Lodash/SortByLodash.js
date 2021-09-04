import React from 'react'
import _ from 'lodash';

// _.size(array | object): Trả về số phần tử trong mảng hoặc số thuộc tính trong object
// _.sortBy(collection,[iteratees=[_.identity]]): Dùng để sắp xếp collection theo dkien xác định
export default function SortByLodash() {

    const users = [
        {id:22, name:'Fred',age:48},
        {id:234, name:'Allen',age:55},
        {id:238, name:'Smile',age:40},
        {id:15, name:'Allen',age:49},
        {id:2566, name:'Smile',age:40},
        {id:1001, name:'Juice',age:47}
    ]

    const resultSortByName = _.sortBy(users,[item=>item.name])
    console.log('resultSortByName', resultSortByName);

    const resultSortByAge = _.sortBy(users,[item=>item.age])
    console.log('resultSortByAge', resultSortByAge);

    const result = _.sortBy(users,['name','age']);
    console.log('result', result);


    return (
        <div>
            
        </div>
    )
}
