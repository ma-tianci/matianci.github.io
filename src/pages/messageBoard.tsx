import react from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styles from '../css/messageBoard.module.css';


function MessageBoard() {
  const location = useLocation();
  console.log(location);
    return (
        <div className={styles.header}>
          我和郭兴佩要相爱一万年！
        </div>
    )
}
export default MessageBoard;