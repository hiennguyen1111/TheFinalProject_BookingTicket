import React, { Component } from 'react'
import Card from './Card'

export default class BaiTapLayoutTailwindCss extends Component {
    render() {
        return (
            <div className="container">
                <h1 className="text-center text-4xl text-green-500">Welcome to the cybersoft front-end with tailwindcss</h1>
                <div className="grid grid-cols-3 gap-4 justify-between my-3 text-center">
                    <div>
                        <Card />
                    </div>
                    <div>
                        <Card />
                    </div>
                    <div>
                        <Card />
                    </div>
                </div>
            
            </div>
        )
    }
}
