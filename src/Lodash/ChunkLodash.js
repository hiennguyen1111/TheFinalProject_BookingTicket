import React from 'react'
import _ from 'lodash';

// Tạo 1 mảng mới từ mảng đã có, gồm các mảng con có số phần tử tuỳ chọn truyền vào
export default function ChunkLodash() {

    const arr = ['id', 1, 'name', 'Khai', 'info', 'cybersoft'];

    const result = _.chunk(arr,2);
    console.log('result', result);

    const arrString = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'a10', 'a11', 'a12', 'a13']

    const result2 = _.chunk(arrString,3);
    console.log('result2', result2);

    // Ket qua
    // 0: (3) ["a1", "a2", "a3"]
    // 1: (3) ["a4", "a5", "a6"]
    // 2: (3) ["a7", "a8", "a9"]
    // 3: (3) ["a10", "a11", "a12"]
    // 4: ["a13"]


    return (
        <div>
            
        </div>
    )
}
