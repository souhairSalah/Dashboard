import axios from "axios";
import { useState, useEffect } from "react";


const useAxios = (url, method , headers = null ) => {
    const [responseData, setResponseData] = useState(null);
    const [error, setError] = useState(null);
    const [isloading, setIsLoading] = useState(true);

    // useEffect(() => {
        const fetchData = async () =>{
            try {
                const response = await axios[method.toLowerCase()](url, {
                    headers : headers 
                });
                setResponseData(response.data);
            }catch(error){
                setError(error);
            }
            setIsLoading(false);
        };
        // fetchData();
    // },[url]);

    return {responseData, error, isloading, fetchData};

}
export default useAxios;