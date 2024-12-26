import React, { useContext } from 'react'


function Buttonb({value,f,additional}) {
  return (
    <div>
      <button onClick={f} className={`bg-blue-700 p-[8px] rounded text-blue-200 hover:bg-black ${additional} `}>{value}</button>
    </div>
  )
}

export default Buttonb
