import React from 'react'
import _ from 'lodash';

export default function CompareObjectArray() {

    const compareArray1 = [1,2];
    const compareArray2 = [1,2];
    const resultCompare = _.isEqual(compareArray1.sort(),compareArray2.sort());
    console.log('resultCompare', resultCompare);

    const arrObject1 = [{id:1,name:'Hien'}, {id:2,name:'Thanh'}];
    const arrObject2 = [{id:1,name:'Hien'}, {id:2,name:'Nguyen'}, {id:3,name:'Thanh'}];

    const resultObject = _.differenceWith(arrObject2,arrObject1,_.isEqual)
    // arrObject2 dư ra so với arrObject1 ntn thì sẽ log ra
    console.log('resultObject', resultObject);
    // Ket qua
    // 0: {id: 2, name: "Nguyen"}
    // 1: {id: 3, name: "Thanh"}
    // length: 2
    // [[Prototype]]: Array(0)


    return (
        <div>
            
        </div>
    )
}
