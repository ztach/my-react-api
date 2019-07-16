import React from 'react';
 
/**
 * zmienna: 'tbodyr' jest tabelą sformatowaną z bodytab
 * zmienna 'theader' jest listą nagłówków tabeli (format array)
 * @param {tbodyr,theader} props 
 */     
const TabListSzablon = (props) => {
  const {tbodyr,theader} = props;
  const styl="tabType___head_th";
  const mheader=theader.map((i,idx)=> <th className={styl + '_' + idx} key={idx}>{i}</th> )
  return (  
    <div className="tabType">
    <table className="tabType___table">
    <thead className="tabType___head">
    <tr>
    {mheader}
    </tr>
    </thead>
    <tbody className="tabType___body">
      {tbodyr}
    </tbody>
    </table>
    </div>
  );
}
 
export default TabListSzablon;