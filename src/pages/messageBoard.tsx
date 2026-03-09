import react from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styles from '../css/messageBoard.module.css';


function MessageBoard() {
  const location = useLocation();
  console.log(location);
    return (
        <div className={styles.header}>
          我超级爱郭兴佩，她是世界上最美的宝宝！
        </div>
    )
}
export default MessageBoard;