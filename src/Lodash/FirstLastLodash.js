import React from 'react'
import _ from 'lodash'

// Lấy phần tử đầu tiên hoặc cuối cùng trong mảng
export default function FirstLastLodash() {

    const arrStudent = [
        {id:1, name:'Peter'},
        {id:1, name:'Barry'},
        {id:1, name:'Allen'}
    ]

    const firstItem = _.first(arrStudent);
    const lastItem = _.last(arrStudent);

    const arr = [['001', 'Alice'], ['002', 'Pop'], ['003', 'Allen']];

    const [id, name] = _.first(arr);
    const [id2, name2] = _.last(arr);

    return (
        <div className="container">
            <div>FirstItem: {firstItem.name}</div>
            <div>LastItem: {lastItem.name}</div>

            <br />

            <div>FirstItem: {id} - {name}</div>
            <div>LastItem: {id2} - {name2}</div>
        </div>
    )
}
