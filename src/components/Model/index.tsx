import React, {useEffect, useState} from "react";
import { DataType } from "../../containers/Home";
import {animate, motion, Variants, useAnimation} from "framer-motion";
import './style.scss'
import { defaultTransition } from "../../utils/transition";
import HomeButton from "./HomeButton";
import Loader from "../Loader";
import jsonData from "../../assets/subtypes.json";
type Props = {
    pageContext : DataType;
}

const variants: Variants = {
    initial : {
        opacity: 0,
        y: 100,
    },
    animate : {
        opacity: 1,
        y: 0,
    }
}

export type SubDataType = {
    type: string;
    imagelinks: string[];
    buttoncontent: string[];
    buttonnumber: string[];
}



export default function Model ({pageContext}: Props) {
        
    const control = useAnimation();

    useEffect(() => {
        setTimeout(()=> {
            control.start({
                opacity: 0,
                Transition: defaultTransition,
            })
        }, 2000);
    }, []);

  
    // write an onClick function that can filter out different types of image
    // 

    const [buttontype, setbuttontype] = useState<{type: string, data: SubDataType[]}>({
        type: '',
        data: [],
      });
    
      
    

    const mapData: SubDataType[] = Array.from(jsonData);
    const filtertypes = (event: React.MouseEvent<HTMLElement>) => {
        // console.log(event.target);
        const btn = event.currentTarget as HTMLInputElement
        const value = btn.value
        console.log(value)
        // setbuttontype({type: value});
        var newArray = mapData.filter(function (el) {
            return el.type === value;
            });
        setbuttontype({type: value, data:newArray});
      };
   

   
    

    const buttonlist = pageContext.subtype.map((type,key) => <button onClick={filtertypes} value={type}> {type}</button>);
    
    


    return (
    <>
    <Loader title={pageContext.title} loaderControls={control}/>
    <HomeButton/>
    <div className="model-container">
        <div className="button-list">
            {buttonlist}
        </div>
        {console.log(buttontype.data)}
        <div className="image-wrapper">
            <motion.img 
                src={pageContext.cover}
                variants = {variants}
                initial={"initial"}
                animate={"animate"}
                transition={{defaultTransition, delay:2}}
            />

            
            {/* <div className="page-content">
                {pageContext.content}
            </div> */}
            {/* <div className="page-content"> */}
           
            {/* </div> */}
            
        </div>

        
       
        
       
    </div>
    </>
    );
}