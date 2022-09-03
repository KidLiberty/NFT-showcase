import React from 'react'

const NFTCard = ({ NFT }) => {
  return (
    <div className='NFTCard__card'>
      <img
        className='NFTCard__nft-img'
        src={`${NFT?.meta?.content[0].url}`}
        alt='NFT Image'
      />

      <div className='NFTCard__card-contents-container'>
        <div className='NFTCard__nft-contract-address'>
          Contract Address: {NFT.contract}
        </div>
        <div className='NFTCard__nft-description'>{NFT?.meta?.description}</div>
      </div>
    </div>
  )
}

export default NFTCard
