import { Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../css/myInfo.module.css';
import { EnvironmentOutlined } from '@ant-design/icons';

function MyInfo(){
  return (
      <div className={styles.infoWrap}>
        <div className={styles.photo}>
          <img src={require('../images/home/photo.jpg')} alt="" />
        </div>
        <div className={styles.name}>
          <h3>sunny</h3>
        </div>
        <div style={{fontSize:14,color:'#909399',marginBottom:20,textAlign:'center',lineHeight:'25px' }}>
          就算有一天一无所有，我也不缺从头再来的勇气！
        </div>
        <div style={{fontSize:14,color:'#909399'}}>
          游戏爱好者&nbsp;|&nbsp;前端&nbsp;|&nbsp;喜欢郭兴佩  
        </div>
        <div style={{marginTop:20,fontSize:14,color:'#909399'}}>
          <EnvironmentOutlined style={{marginRight:5}} />河南
        </div>
      </div>
  )
}

export default MyInfo;