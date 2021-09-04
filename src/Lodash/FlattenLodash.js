import React from 'react'
import _ from 'lodash';

// flatten là hàm dùng để phân tách các mảng trong mảng 1 cấp
// flattenDeep là hàm dùng để phân tách các mảng trong mảng nhiều cấp

export default function FlattenLodash() {

    const arrFlatten = [[1,[2,[3,[4]]],5]];
    console.log('arrFlatten', arrFlatten);

    const resultFlatten = _.flatten(arrFlatten); // flatten giải nén 1 cấp
    console.log('Giai nen 1 cap', resultFlatten);

    const resultFlattenDeep = _.flattenDeep(arrFlatten); // flatten giải nén nhiều cấp
    console.log('Giai nen nhieu cap', resultFlattenDeep);


    return (
        <div>
            
        </div>
    )
}
