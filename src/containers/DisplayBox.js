import PhoneList from '../components/PhoneList'
import React, { useEffect, useState } from 'react'

const DisplayBox = () => {

    const [phones, setPhones] = useState([]);
    const [options, setOptions] = useState([]);
    
    useEffect(() => {
        setPhones(iphones)
        setOptions(iphoneOptions)
    }, []);

    const iphoneOptions = {
        size : ['64GB', '128GB'],
        color : ['Black', 'White', 'Blue', 'Red'],
        grade : ['A', 'B', 'C', 'D'],
};


    const iphones = [
        {
            id : 1,
            size : '64GB',
            color : 'Black',
            grade : 'A',
            price : 100
        },
        {
            id : 2,
            size : '64GB',
            color : 'Black',
            grade : 'B',
            price : 100
        },
        {
            id : 3,
            size : '64GB',
            color : 'White',
            grade : 'A',
            price : 100
        },
        {
            id : 4,
            size : '64GB',
            color : 'White',
            grade : 'B',
            price : 120
        },
        {
            id : 5,
            size : '64GB',
            color : 'Red',
            grade : 'C',
            price : 60
        },
        {
            id : 6,
            size : '128GB',
            color : 'Black',
            grade : 'A',
            price : 150
        },
        {
            id : 7,
            size : '128GB',
            color : 'Red',
            grade : 'A',
            price : 150
        }
    ];


    return(
        <>
        <h1>hiya</h1>
        <PhoneList iphones={phones} options={options}></PhoneList>
        </>
    )
}

export default DisplayBox