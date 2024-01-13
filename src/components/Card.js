import * as React from 'react';

export default function BasicCard(props) {
  const {cube, list} = props
  return (
    <div className='card-body'>
      <img style={{objectFit:'contain', width:'100%', height: 200}} src={cube} alt={cube}/>
      <ul>
        {
          list.map((item, index) => {
            return <li className='step-list' key={index}>{item}</li>
          })
        }
      </ul>
    </div>
  );
}
