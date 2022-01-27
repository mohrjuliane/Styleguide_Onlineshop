import React from 'react';
import NavigationItem from './navigationitem';


function NavigationBar({ pages, setPage, currentPage, currentSubHeadline, setSubHeadline }) {

    return(
        <>
            {pages.map((object) => 
            <NavigationItem setPage={setPage} currentSubHeadline={currentSubHeadline} setSubHeadline={setSubHeadline} children={object.subHeadlines} currentPage={currentPage} key={object.name} name={object.name} />)}
        </>
    )
    
}

export default NavigationBar;
