import { createContext,useState} from 'react';
import { v4 as uuidv4 } from "uuid";

const FeedbackContext=createContext()

export const FeedbackProvider=({children})=>{
    
    const [feedback,setFeedback]=useState([
        {
            id:1,
            text:'This is item Feedback Item 1',
            rating:8,
        },
        {
            id:2,
            text:'This is item Feedback Item 2',
            rating:9,
        },
        {
            id:3,
            text:'This is item Feedback Item 3',
            rating:7,
        },
       
    ])

    const [feedbackEdit,setFeedbackEdit]=useState({
        item:{},
        edit:false
    })

    //Delete item 
    const deleteFeedback = (id) => {
        if (window.confirm("Are U Sure?, You want to delete?")) {
          setFeedback(feedback.filter((item) => item.id !== id));
        }
      };

      //Add feedback
      const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4();
        setFeedback([newFeedback, ...feedback]);
      };

      //set item to be updated
      const editFeedback=(item)=>{
          setFeedbackEdit({
              item,
              edit:true
          })
      };

      //update Data
      const updateFeedback=(id,updItem)=>{
        setFeedback(feedback.map((item)=>item.id===id?{...item,...updItem}:item));
      }

    return (
    <FeedbackContext.Provider value={{feedback,deleteFeedback, addFeedback,editFeedback,feedbackEdit, updateFeedback}}>
        {children}
    </FeedbackContext.Provider>
    )
}

export default FeedbackContext