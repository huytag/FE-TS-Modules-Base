import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Detail.module.scss';


const cx = classNames.bind(styles);

const Detail: React.FC = () => {
    return (
        <div className={cx('wrapper')}>
            <h1> Detail</h1>
            <Link to={'/'}>
                <h4>Home</h4>
            </Link>
        </div>
    )
}

export default Detail;
