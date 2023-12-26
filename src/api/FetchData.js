import React, { useEffect, useState } from 'react'

const FetchData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // 外部からデータを取得する
        // https://jsonplaceholder.typicode.com/posts
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((json) => setData(json))
            .catch(() => alert("error"));
    }, []);

    return (
        <div>
            {(!data || data.length === 0) ?
                (<div>LOADING</div>) :
                data.map((e) =>
                    <div>
                        <p>{e.title}</p>
                    </div>
                )}
        </div>
    )
}
export default FetchData