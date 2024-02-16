import React from "react";
import './products.css'

export default class products extends React.Component{
    data = [
        ['React',500],
        ['React-Native',500],
        ['Node.js',500],
        ['MongoDB',500],
        ['Express.js',500],
    ]
render(){
    return(
        <table border="1">
        <tr><th>ชื่อ</th><th>ราคา</th></tr>
        {
            this.data.map(d => {
                return <tr><td>{d[0]}</td><td>{d[1]}</td></tr>
            })
        }
        </table>
    )
}
}