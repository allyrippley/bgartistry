import React from 'react'
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import image5 from '../../images/portfolio5.jpg';

const Home = props => (
  <div style={{display: 'flex', flexDirection: 'column', alignItems: 'space-between', flex: 1}}>
    <img src={image5} style={{width: '100%', height: 'auto'}}/>
    <span style={{alignSelf: 'center', padding: '50px 0', fontSize: '2vw'}}>Website under construction!</span>
    <span style={{alignSelf: 'center', padding: '50px 0', fontSize: '3vw'}}>Call now to book: <strong><a href="tel:1-817-875-9172">817-875-9172</a></strong></span>
  </div>
)

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/about-us')
}, dispatch)

export default connect(
  null,
  mapDispatchToProps
)(Home)
