import { NextApiRequest, NextApiResponse, NextApiHandler } from "next";
import { FAQ_BASEURL } from "../../utils/constants";

export type Faq = { //Type for filtered parsed response for the entries needed for time being
  id: number,
  question: string,
  answer:string,
  locale: string,
}

type FaqApiResponse = { //Type for the fetched response
  attributes: {
    answer: string,
    question: string,
    locale:string,
    publishedAt: string,
    createdAt: string,
    questionId: number,
    updatedAt: string,
  },
  id: number
}

const getAllFaqs: NextApiHandler = async (_, res: NextApiResponse) => {
  var faqList: Array<Faq> = []; 
  console.log(process.env.BACKEND_URL); //Not working...
  try{
    const response: Response = await fetch(FAQ_BASEURL);
    const parsedResponse = await response.json();
    console.log(parsedResponse);
  
    //Extracting the information that is needed for rendering the component
    faqList = parsedResponse.data.map((e: FaqApiResponse)=>{
      const {attributes, id} = e;
      const {question, answer, locale} = attributes;
      const faq: Faq = {
        id,
        answer, 
        question, 
        locale
      };
      return faq;
    })
    //sending out the response
    res.status(200).json(faqList);
  }
  catch(err){
    res.status(500).json({error: 'Internal Server Error'});
  }
  
  
}
export default getAllFaqs; 