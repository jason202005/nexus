import React from "react";
import { DataType } from "../../containers/Home";
import {animate, motion, Variants} from "framer-motion";
import './style.scss'
import { defaultTransition } from "../../utils/transition";
import HomeButton from "./HomeButton";
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
export default function Model ({pageContext}: Props) {
        

    return (
    <>
    <HomeButton/>
    <div className="model-container">
        <div className="image-wrapper">
            <motion.img 
                src={pageContext.cover}
                variants = {variants}
                initial={"initial"}
                animate={"animate"}
                transition={defaultTransition}
            />

            
        </div>
    </div>
    </>
    );
}