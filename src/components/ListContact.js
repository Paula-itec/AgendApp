
import react, { useEffect,useState} from 'react';



export default function ListContact() {
    const [isLoad,setIsLoad]=useState(false);
    const [lista,setLista]= useState([]) 
    console.log('ListContact',isLoad,lista);

    if(!isLoad){
        setIsLoad(true);
        fetch('http://localhost:3001/contacts')
            .then(res => res.json())
            .then(data =>{
              setLista(data);
            });
                
            
    }
    return lista.map((el,index)=>{
              return <div key={index}>
                          Name:{el.name}--
                          Phone:{el.phone}
                     </div>
            })
        }
