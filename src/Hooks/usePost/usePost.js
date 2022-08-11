import React, {useState} from 'react';
import axios from 'axios';

export function usePost(){
 
    const [data, setData] = useState(data);
    const url='';
    const [loading, setLoading] = useState(true);

    const Post = async ( url, apiData ) => {       
        try {
            setLoading(true);
            const {data: responseData} = await axios.post(url, apiData);
            setData(responseData);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log("hata var");
        };
    };
 
    return{data, loading, post};

};

