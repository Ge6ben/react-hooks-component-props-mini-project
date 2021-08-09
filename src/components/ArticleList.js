import React from 'react'
import Article from './Article'
export default function ArticleList({posts}) {
    // console.log("ArticleList")
    // console.log(posts)
   return (
   <div>
            <main>
            {
                posts.map((pst)=>(
                    <Article key={pst.id} {...pst}/>
                )
                )
            }    
            </main>
            </div>
            )
}