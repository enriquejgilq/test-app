import React, { useState, useEffect } from 'react'

//recibe un "array" y un ordenamiento 
function ListNicknames({ arrayList, order }) {
    const [data, setData] = useState()
    useEffect(() => {
        if (order === 'ASC') {
            setData(arrayList.sort().reverse())
        }
        if (order === 'DES') {
            setData(arrayList.sort() )
        }
    }, [])

//funcion map que me lista la data 
    return (
        <div>
            {data?.map((item) => (
                <ul>
                    {item}
                </ul>
            ))}

        </div>
    )
}

export default ListNicknames