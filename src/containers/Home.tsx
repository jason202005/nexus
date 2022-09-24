import React, { useRef, useState,useEffect } from "react";
import ImageLink from "../components/ImageLink";
import Header from "../components/Header";
import jsonData from "../data.json";
import { animations, useAnimation } from "framer-motion";
import Loader from "../components/Loader";
import {defaultTransition} from '../utils/transition';
import { animate, AnimationControls, motion, Variants, useMotionValue } from 'framer-motion'
export type DataType = {
    cover: string;
    title: string;
    color: string;
    slug: string;
}


const gridUtils = [600, 400, 600, 800, 600]

export default function Home(){
    const [gridVisible, setGridVisible] = useState(true);
    const mapData: DataType[] = Array.from(jsonData);
    const loaderControls = useAnimation();
    const animation = useAnimation();

    const bgColor = useMotionValue("black");

    useEffect(() => {
        async function sequence() {
            await animation.set((index) => (
                {
                    y:gridUtils[index % 5],
                    scale:1.1,
                }
            ));
            await animation.start(() => (
                {
                    y:0,
                    transition:defaultTransition,
                } 
            ));
            bgColor.set("white");

            //do this animation after the above one
            await animation.start ({
                scale: 1,
                transition: defaultTransition,
            })

            setGridVisible(false)
        }
        setTimeout(() => {
            loaderControls.start({
                opacity: 0,
                transition:{defaultTransition},
            });
            sequence();
        }, 2000);
       
    }, [] )

    return <>
    <Loader title={"Cities"} loaderControls={loaderControls}/>
    <Header view={gridVisible} toggleView={(value)=>setGridVisible(value)}/>
         <motion.div 
            className="content"
            style = {{
                backgroundColor: bgColor,
                transition: 'background-color 1.25s ease-in-out'
            }}
            >
            {gridVisible && (
                <div className="grid-container">
                    <div className="grid-elements">
                        {
                            mapData.map((element, index)=> (
                                <motion.div 
                                    className="element"
                                    key={element.slug}
                                    animate={animation}
                                    custom={index}
                                    >
                                    <div className="thumbnail-wrapper">
                                        <ImageLink element={element} index={index} />
                                    </div>
                                </motion.div>
                            ))
                        }
                    </div>
                </div>
            )}
            {!gridVisible && (
            <div className="list-elements">
                {
                    mapData.map((element, index)=> (
                        <div className="element">
                            <div className="thumbnail-wrapper">
                                <ImageLink element={element} index={index} />
                            </div>
                        </div>
                    ))
                }
            </div>
                
            )}
         </motion.div>
    </>
}