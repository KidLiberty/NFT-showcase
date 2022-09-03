import React from 'react'

import NFTCard from './NFTCard'

const NFTContainer = ({ NFTs }) => {
  return (
    <div className='NFTContainer'>
      {NFTs.map((NFT, index) => {
        return <NFTCard key={index} NFT={NFT} />
      })}
    </div>
  )
}

export default NFTContainer
