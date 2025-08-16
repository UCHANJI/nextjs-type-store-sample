'use client'

import { useState } from "react"

export default function Weather(){
    const[prompt,setPrompt]=useState("")
    async function handleSubmit(e:React.FormEvent){
        e.preventDefault()
    }

    return(
        <div>
            <form onSubmit={(e)=>{handleSubmit(e)}}>
                <input value={prompt} onChange={(e)=>{setPrompt(e.target.value)}}/>
                <button type="submit">전송</button>
            </form>
        </div>
        
    )
    
}