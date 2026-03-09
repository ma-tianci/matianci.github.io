import { Button } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../css/nav.module.css';

function Nav(){
  const navigate = useNavigate();
    const goMessageBoard = () => {
        let id = '123'
        navigate(`/MessageBoard`,{
            state:{
                name:'马天赐',
                des:'男人'
            }
        });
    }
  return (
    <div> 
      <div className={styles.nav}>
        <div className={styles.navBox}>
            <Link to='/'><Button color="cyan" variant="link" >首页</Button></Link>
            <Button color="cyan" variant="link" onClick={() => {goMessageBoard()}}>留言板</Button>
        </div>
      </div>
    </div>
  )
}

export default Nav;