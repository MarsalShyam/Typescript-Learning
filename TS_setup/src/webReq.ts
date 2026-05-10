//web request in Typescript

//installing the axios to understand the other library type decrlaration suggestion

import axios,{type AxiosResponse} from "axios"
//By using type AxiosResponse, we can import

axios.get('https://example.com/data')  //standard method to get the data via axios
.then(response=>{
    console.log(response.data);
})

//now we will bring the data from extarnal library or url -> jsonplaceholder.typeicode.com/todos/1
// that will give the json data like this->
// {
//     "userId":1,
//     "id",1,
//     "title":string,
//     "completed":false
// }

interface Todo{  //we need to define the correct structure of sending and receving the data or objects from the URL or anyother source
    userid:number;
    id:number;
    title:string;
    completed:boolean
}

//creating fetch method -> import AxiosResponse

const fetchData=async()=>{
    try{
        const response:AxiosResponse<Todo>=await axios.
        get(
            "https://jsonplaceholder.typicode.com/todos/1"
        );
        console.log("Todo",response.data);//Here response having many method suggestion because of AxiosResponse
    }catch(error:any){
        // console.log(error.message);->here no suggestion showed because of any return, for that we can do further destructure
        if(axios.isAxiosError(error)){
            console.log("Axiox Error",error.message);
            if(error.response){
                console.log(error.response.status);
            }
        }
    }
}