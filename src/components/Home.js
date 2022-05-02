import React from 'react'
import CardContainer from './CardContainer'
import HomeInfoCardContainer from './HomeInfoCardContainer'

function Home() {
    const getApi = async () => {
        const data = await fetch("/api");
        const res = await data.json();
        console.log(JSON.parse(res));
    }
    getApi();
    return (
        <div>
            <CardContainer/>
            <HomeInfoCardContainer/>
        </div>
    )
}

export default React.memo(Home)
