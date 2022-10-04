import { Link } from 'gatsby'
import React from 'react'
import {animate, motion, Variants, useAnimation} from "framer-motion";
import './style.scss'
import { defaultTransition } from "../../utils/transition";
import { SubDataType } from '.';

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

type Props = {
    Btndata : SubDataType;
}


export default function SubModel({Btndata}: Props){
return (
    // {
        // Btndata.data.map((element, index)=> (
            <motion.div 
                // key={`Btndata.type-${index}`}
                // className={`element-${index}`}
                variants = {variants}
                initial={"initial"}
                animate={"animate"}
                >
                <div className={`thumbnail-wrapper`}>
                    {/* <ImageLink element={element} index={index} /> */}
                    <motion.img 
                    className={`grid-link-item`} 
                    src={Btndata.imagelinks} 
                    // layoutId={`container-${index}`}
                    transition={defaultTransition}
                    />
                </div>
            </motion.div>
    // }

)
}