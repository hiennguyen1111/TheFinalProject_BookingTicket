import React from 'react'
import _ from 'lodash';

// includes dung de check value cua mang hoac cua object
export default function Include() {

    const arrInclude = ['1', '2', '3', '4'];
    console.log('Ket qua', _.includes(arrInclude,'1'));
    // Ket qua true vi ta tim dung doi tuong co trong mang la 1

    const object = {id:1,name:'Nguyen Thanh Hien', age:90};
    console.log('Ket qua', _.includes(object,'Nguyen Hien'));
    // Ket qua false vi ta tim Nguyen Hien khi trong mang la Nguyen Thanh Hien

    return (
        <div>
            
        </div>
    )
}
