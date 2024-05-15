import React from 'react'
import Layout from '../../components/shared/layout/layout'
import "./../../styles/navbar.css"
import Mobil from './../../assets/mobile1.png'
import Mobile from './../../assets/mobile2.png'
import Iphone from './../../assets/iphone12.png'
import Screen from './../../assets/screenMockup.png'
import Frame from './../../assets/Frame25.png'
import Fam from './../../assets/Frame126.png'

function HomePage() {
  return (
    <Layout>
      <section className='firstSection'>
        <div>
          <h1 className='smart'>Start spending the <br /> Smart Way</h1>
          <p style={{color:'#667085',textAlign:'justify'}}>Take Control Of Your Finance Anywhere Anytime <br /> with Kobodrop. Discover the Smart Way to use <br />Your Money.</p>
          <div className='img-con'>
          <a href=""><img src={Mobil} alt="" /></a>
          <a href=""><img src={Mobile} alt="" /></a>
          </div>
        </div>
        <div className='img-con2'>
          <img src={Iphone} alt="" style={{height:'410px',width:'285px',position:'absolute',left:'-70px',top:'50.88px'}}/>
          <img src={Screen} alt="" style={{width:'650px',height:'450px',}}/>
        </div>
      </section>

      <section className='secondSection'>
        <div className='count'>
        <h1 style={{fontSize:'20px',fontWeight:'bold',color:'#101828',padding:'20px'}}>Make Every Penny Count</h1>
        <p style={{color:'#667085',padding:'10px'}}>spend smarter, lower your bills,get cashback on everything you buy, <br />and unlock credit to grow your business</p>
        </div>

        <div style={{display:'flex',gap:'40px',padding:'20px'}}>
          <img src={Frame} alt="" style={{width:'800px',height:'250px'}}/>
          <img src={Fam} alt="" style={{width:'300px',height:'250px'}}/>
           
        </div>
          

      </section>
    </Layout>
  )
}

export default HomePage