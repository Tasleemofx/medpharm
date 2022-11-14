import React from 'react'
import { AiFillFunnelPlot, AiOutlineSearch } from "react-icons/ai"
import { BiCaretDown } from "react-icons/bi"
import Table from './TableData'
import { staffdata } from "../data/data"

const PharmacyDash = () => {
  return (
    <div className="center-dash">
       <nav className="tablenav">
        <p>Pharmacy</p>
        <div className="tablesearch">
          <input type="search" placeholder="search pharmacy"/>
          <AiOutlineSearch/>
        </div>
        <p><AiFillFunnelPlot/> Filter<BiCaretDown/></p>
        <button>+ Add Pharmacy</button>
      </nav>
        <Table name="Name" id="Staff I.D" email="email" address="Address" status="Status" 
        actions="Actions" array={staffdata} />
    </div>
  )
}

export default PharmacyDash