import React from 'react'
import _ from 'lodash'


export default function JoinDemo() {
    let arr = ['Nguyen', 'Thanh', 'Hien'];

    // ES6
    const result = arr.join('-');

    let arrPeople = [
        {id:'1', name:'Nguyen'},
        {id:'2', name:'Thanh'},
        {id:'3', name:'Hien'},
    ]


    // lodash
    const resultLodash = _.join(arr,'*');
    const person = _.find(arrPeople, item=>item.id ==='3')

    return (
        <div>
            {result}
            <br />
            {resultLodash}
            <br />
            <div>
                <p>Name: {person.name} - id {person.id}</p>
            </div>
        </div>
    )
}
