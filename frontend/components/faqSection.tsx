import { NextPage } from "next";
import { ReactElement, useEffect, useState } from "react";
import { Faq } from "../pages/api/faqs";
import FaqWrapper from "react-faq-component";
import styles from '../styles/faqSection.module.css';
import ReactMarkdown from "react-markdown";
import { ERROR_MSG } from "../utils/constants";


// I have used the react-faq-component to save time. The below is a type defined for a data element to be used in component
type DataRow = { //Defining Type for Data Row
  title: string, 
  content: ReactElement,
}

const FaqSection: NextPage = () => {

  //Setting state to store faqs
  const [faqList, setFaqList] = useState<Array<Faq>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  //Note: The logic to fetch data directly from backend can be written as well, but this seperates the UI part and the api handling part, making the code clear and well distrbuted
  const fetchFaqs = async ()=>{
    setLoading(true); //Waiting for the response to fetch
    const response: Response = await fetch('api/faqs'); //calling api to get the faqs
    const parsedResponse:Array<Faq> = await response.json(); //parsing the json recieved
    if(response.status === 200){
      setFaqList(parsedResponse);
      setLoading(false) //setting false to render the UI
      console.log(parsedResponse);
    }
    else{
      console.log(ERROR_MSG); //TODO: Display appropriate error message
    }
    
  }

  const dataRows = () => {
    const rows: Array<DataRow> = faqList.map((e:Faq) => {
      const {question, answer} = e;
      const faqRow: DataRow = {
        title: question, 
        content: <ReactMarkdown>{answer}</ReactMarkdown>,
      };
      return faqRow;
    });
    console.log(rows);
    return rows;
  }

  const data = {
    title: "",
    rows: dataRows(),
  }

  //Making the necessary changes in UI
  const wrapperStyle = {
    rowTitleColor: '#6ECBB8', 
    rowTitleTextSize: '26px',
    rowContentColor: '#696D71',
    rowContentTextSize: '20px',
    rowContentPaddingTop: '10px',
    rowContentPaddingBottom: '10px',
  };
  //Config object for anmation and dropdown symbol in faq section 
  const config = {
    animate: true,
    arrowIcon: "+",
};

  useEffect(()=>{
    fetchFaqs(); //calling async function to Fetching Faqs, once when the component renders
  }, [])


  return(
    <div>
      <div className={styles.faqTitle}>
        Frequently Asked Question
      </div>
      <FaqWrapper
          data={data}
          styles={wrapperStyle}
          config={config}
      />
    </div>
  );
}

export default FaqSection
