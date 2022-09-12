import React from "react"
import styles from './Mycv.module.scss';
import classNames from "classnames/bind";
import { DataCv } from "./data";

const cx = classNames.bind(styles);

const Mycv: React.FC = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('top')}>
                    <div className={cx('imgBx')}>
                        <div className={cx('box')}>
                            <img src={DataCv.image} alt="huytag" />
                        </div>
                    </div>
                    <div className={cx('profileText')}>
                        <h3>{DataCv.lastName}<br></br>{DataCv.firstName}<br></br>
                            <span>{DataCv.Job}</span>
                        </h3>
                    </div>
                </div>
                <div className={cx('contentBox')}>
                    <div className={cx('leftSide')}>
                        <h3>Contact Info</h3>
                        <ul>
                            <li>
                                <span className={cx('icon')}>
                                    <img src="assets/icon/call-outline.svg" alt="icon" />
                                </span>
                                <span className={cx('text')}>{DataCv.contactInfo.phone}</span>
                            </li>
                            <li>
                                <span className={cx('icon')}>
                                    <img src="assets/icon/mail-outline.svg" alt="icon" />
                                </span>
                                <span className={cx('text')}>{DataCv.contactInfo.mail}</span>
                            </li>
                            <li>
                                <span className={cx('icon')}>
                                    <img src="assets/icon/location-outline.svg" alt="icon" />
                                </span>
                                <span className={cx('text')}>{DataCv.contactInfo.location}</span>
                            </li>

                        </ul>
                        <h3>Education</h3>
                        <ul className={cx('education')}>
                            {DataCv.Education.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <h5>{item.fromYear}-{item.toYear}</h5>
                                        <h4>{item.name}</h4>
                                        <h6>
                                            University name
                                        </h6>
                                    </li>
                                )
                            })}
                        </ul>
                        <h3>Language</h3>
                        <ul className={cx('language')}>
                            {DataCv.Language.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <span className={cx('text')}>{item.name}</span>
                                        <span className={cx('percent')}>
                                            <div style={{ width: `${item.persent}%` }}>
                                            </div>
                                        </span>
                                    </li>
                                )
                            })}
                        </ul>
                        <h3>Interest</h3>
                        <ul className={cx('interest')}>
                            {DataCv.Interest.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <span className={cx('icon')}>
                                            <img src={item.icon} alt="icon" />
                                        </span>
                                        {item.name}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className={cx('rightSide')}>
                        <div className={cx('rightSide-about')}>
                            <h3>Profile</h3>
                            <p>{DataCv.Profile}
                                <br></br>
                                <br></br>
                                {DataCv.Profile}
                            </p>
                        </div>
                        <div className={cx('rightSide-about')}>
                            <h3>Experience</h3>
                            {DataCv.Experience.map((item,index) => {
                                return (
                                    <div className={cx('rightSide-box')} key={index}>
                                <div className={cx('year_company')}>
                                    <h5 className={cx('year')}>{item.fromYear}-{item.toYear}</h5>
                                    <h5 className={cx('company')}>{item.name}</h5>
                                </div>
                                <div className={cx('text')}>
                                    <h4>{item.title}</h4>
                                    <p>{item.content}</p>
                                </div>
                            </div>
                                )
                            })}
                        </div>
                        <div className={cx(['rightSide-about', 'skills'])}>
                            <h3>Professional Skills</h3>
                            {DataCv.Professional.map((item,index) => {
                                return (
                                    <div className={cx('rightSide-box')} key={index}>
                                    <h4 className={cx('ss')}>{item.name}</h4>
                                    <span className={cx('rightSide-percent')}>
                                        <div style={{ width: `${item.persent}%` }}></div>
                                    </span>
                                </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mycv