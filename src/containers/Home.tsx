import React, { useRef, useState,useEffect } from "react";
import ImageLink from "../components/ImageLink";
import Header from "../components/Header";
import jsonData from "../data.json";
import { useAnimation } from "framer-motion";
import Loader from "../components/Loader";
import {defaultTransition} from '../utils/transition';
export type DataType = {
    cover: string;
    title: string;
    color: string;
    slug: string;
}


export default function Home(){
    const [gridVisible, setGridVisible] = useState(true);
    const mapData: DataType[] = Array.from(jsonData);
    const loaderControls = useAnimation();

    useEffect(() => {
        setTimeout(() => {
            loaderControls.start({
                opacity: 0,
                transition:{defaultTransition},
            });
        }, 2000)
    }, [] )

    return <>
    <Loader title={"Cities"} loaderControls={loaderControls}/>
    <Header view={gridVisible} toggleView={(value)=>setGridVisible(value)}/>
         <div className="content">
            {gridVisible && (
                <div className="grid-container">
                    <div className="grid-elements">
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
         </div>
    </>
}