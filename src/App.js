import React, { useEffect, useState } from 'react'
import './main.scss'

import NFTContainer from './components/NFTContainer'

export default function App() {
  const [walletAddress, setWalletAddress] = useState()
  const [NFTs, setNFTs] = useState([])

  useEffect(() => {
    getNFTData()
  }, [walletAddress])

  const connectWallet = async () => {
    try {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts'
        })
        setWalletAddress(accounts[0])
      }
    } catch (err) {
      console.log(err)
    }
  }

  const getNFTData = async () => {
    try {
      if (!walletAddress) return
      const response = await fetch(
        `https://api.rarible.org/v0.1/items/byOwner/?owner=ETHEREUM:${walletAddress}`
      )
      const data = await response.json()
      console.log(data)
      setNFTs(data.items)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='App'>
      <div className='wallet-connect__container'>
        {walletAddress ? (
          <span className='wallet-connect__text'>Current Address: </span>
        ) : (
          <button className='btn' onClick={connectWallet}>
            Connect Wallet
          </button>
        )}
        <span className='wallet-connect__address-text'>{walletAddress}</span>
      </div>
      <NFTContainer NFTs={NFTs} />
    </div>
  )
}
