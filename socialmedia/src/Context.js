import { useContext ,useEffect,useState} from "react";
import { Children, createContext } from "react";


const AppContext  = createContext();


const AppProvider = ({children}) => {

    const [user, setUser] = useState([]);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    let posts = [];


     const useFetch =  (url,setData) => {
        useEffect(() => {
       
            fetch(url, {
                method: 'GET',
                headers: {
                    'App-id': '63d5ace9058c286096e661e4',
                    
                },
            })
            .then((data) =>{
                    
                   return  data.json()

                })
                .then((data) => {
                    setData(data)
                    setLoading(false)
                    
                })
                .catch((err) => {
                    console.log(err);
                    setLoading(false)
                })
        }, [])
    }
    useFetch('https://dummyapi.io/data/v1/user/60d0fe4f5311236168a109ca',setUser)
    useFetch('https://dummyapi.io/data/v1/post',setData)
    if(data){
        
        posts = data.data
    }
    
    

                

            
               

            
       
      
       




    return(
        <AppContext.Provider value={{user,useFetch,posts}}>
            {children}

        </AppContext.Provider>
    )

}
export function useUsersContext(){
    return useContext(AppContext);
}
export {AppContext,AppProvider}
