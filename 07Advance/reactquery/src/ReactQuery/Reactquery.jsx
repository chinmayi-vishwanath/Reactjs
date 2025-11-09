import React from "react";
import {useQuery} from "@tanstack/react-query"

function Toys(){
    const {data,isLoading,isError}=useQuery({
        queryKey:["toys"],
        queryFn:()=>
            fetch("https://dog.ceo/api/breeds/image/random")
            .then(res=>res.json())

    })

    if(isLoading) return <div>loading....</div>
    if(isError) return <div>error</div>
    return <div>{data.status} toys found!!!</div>
}

export default Toys