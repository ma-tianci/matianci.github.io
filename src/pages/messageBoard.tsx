import react, {useState} from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styles from '../css/messageBoard.module.css';
import MyInfo from '../components/myInfo';  
import { FormOutlined, CommentOutlined, UserOutlined } from '@ant-design/icons';
import { Input, Button } from 'antd';

const { TextArea } = Input;


function MessageBoard() {
  const location = useLocation();
  console.log(location);
  const [liuyanList, setLiuyanList] = useState([
    {
      id:1,
      name:'马天赐',
      photo:require('../images/home/photo.jpg'),
      content:'郭兴佩是世界上最美的女孩！',     
      time:'2024-06-01 12:00:00'
    },
    {
      id:2,
      name:'李四',
      photo:require('../images/home/photo.jpg'),
      content:'郭兴佩是世界上最美的女孩！',     
      time:'2024-06-01 12:00:00'
    },
  ])
    return (
      <div style={{background:'#f5f7fa'}}>
        <div className={styles.header}>
          我和郭兴佩要相爱一万年！
        </div>
        <div className={styles.content}>
          <MyInfo />
          <div className={styles.liuyanContent}>
            <div className={styles.liuyanWrap}>
              <div className={styles.title}>
                <FormOutlined style={{marginBottom:-2,marginRight:5}} />写留言
              </div>
              <TextArea style={{marginBottom:10}} rows={4} placeholder="写点什么吧..." maxLength={6} />
              <div className={styles.inputWrap}>
                <Input
                  style={{marginRight:10, width:300}}  
                  placeholder="昵称*"
                  prefix={<UserOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                />
                <Input
                  style={{marginRight:10, width:300}}  
                  placeholder="邮箱/微信/QQ"
                  prefix={<CommentOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                />
                <Button color="default" variant="solid" >
                  留言
                </Button>
              </div>
              
            </div>
               {/* 留言列表 */}
          <div className={styles.numtTitle} style={{marginBottom:20}}>
            共0条留言
          </div>
          <div className={styles.liuyanList}>
            {
            liuyanList.map(item =>(
              <div key={item.id} className={styles.liuyanItem}>
                <div className={styles.userPhoto}>
                  <img  src={item.photo} alt="" /> 
                </div>
                <div className={styles.liuyanText}>
                  <div className={styles.nameTime}>
                    <div className={styles.name}>{item.name}</div>
                    <div className={styles.textTime}>{item.time}</div>
                  </div>
                  <div className={styles.liuyanTextContent}>{item.content}</div>
                </div>
              </div>
            ) 
            )}
          </div>
          </div>

          
        </div>
     
      </div>
       
    )
}
export default MessageBoard;