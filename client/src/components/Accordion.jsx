import React, { useState } from 'react';
const Accordion = ({ items }) => {
  const [openIndex,setOpenIndex] = useState(null);
  const toggle=(index)=> setOpenIndex(openIndex===index?null:index);
  return (
    <div className='accordion'>
      {items.map((item,index)=>(
        <div className='accordion-item' key={index}>
          <button className='accordion-header' onClick={()=>toggle(index)}>{item.title}</button>
          {openIndex===index && <div className='accordion-content'>{item.content}</div>}
        </div>
      ))}
    </div>
  );
};
export default Accordion;


