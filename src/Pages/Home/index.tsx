import React from "react";
import { Link } from 'react-router-dom';
import classNames from "classnames/bind";
import styles from './Home.module.scss';

const cx = classNames.bind(styles);


const Home: React.FC = () => {
    return (
        <div className={cx('wrapper')}>
            <h1>Home</h1>
            <Link to={'/detail'}>
                <h4>Detail</h4>
            </Link>
        </div>

    )
}

export default Home;
