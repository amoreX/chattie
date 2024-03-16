
"use server"

import { GoogleGenerativeAI } from "@google/generative-ai";



export async function getcontent(reply){
    console.log("function yes");
    console.log(process.env.GOOGLE_API_KEY);
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
    const generationConfig = {temperature:0.9,topP:1,topK:1,maxOutputTokens:4096};
    
    const model=genAI.getGenerativeModel({model:"gemini-pro",generationConfig});
    try{
        const prompt=reply;
        const result =await model.generateContent(prompt);
        // const response=await result.response();
        if(result){
            console.log(result.response.text());
            
            return result.response.text();
            
        }
    }
    catch(error){
        console.log(error);
    }
}   



