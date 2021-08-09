import React from 'react'
export default function Article({title , date="January 1, 1970",preview , minutes}) {

    const under30  = Math.ceil((minutes/5)) ;
    const above30 =  Math.ceil((minutes/10)) ;
    
    const coffe ="☕️";
    const bento = "🍱";
    
    
    function PrinEmojiFunction (num ,  emoji ){
        let listOfEmoji = []
            for (var i = 0; i < num; i++) {
                listOfEmoji.push(emoji);
            } 
            
            return listOfEmoji;
                
    }

   
    return (
        <div>
            <article>
                <h3>{title}</h3>

                <small>{date}</small>
                <p>
            { 
            
             minutes<30 ?
            PrinEmojiFunction(under30,coffe ) 
            :
            PrinEmojiFunction(above30,bento  ) 
        
            
            } 
                {minutes}  min read</p>   
                <p>{preview}</p>

            </article>
        </div>
    )
}
