import React from 'react'
import { playlist } from '../../Json'
import { CardContainer, InputCont, TrendCont } from '../pages/PagesStyles'
import SongCard from './SongCard'
import {CiSearch} from "react-icons/ci"

const Trending = () => {
  return (
    <TrendCont>
        <InputCont>
            <input type= "search" placeholder="Trending" />
            <CiSearch className='search__icon'/>
        </InputCont>

       <CardContainer>
          {
            playlist.map((song) =>{
                return <SongCard song={song} />
            })
          }
       </CardContainer>
    </TrendCont>
  )
}

export default Trending