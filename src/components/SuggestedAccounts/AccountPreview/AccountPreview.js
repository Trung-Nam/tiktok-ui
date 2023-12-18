import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

import styles from "./AccountPreview.module.scss"
import Button from "~/components/Button";

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://r2.nucuoimekong.com/wp-content/uploads/buc-anh-dep-can-bang-sang-tot-1.jpg"
                    alt="gai"
                />
                <Button className={cx('follow-btn')} primary>Follow</Button>
            </div>

            <div className={cx('body')}>
                <p className={cx('nickname')}>
                    <strong>connhoncoan</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>
                    Phương Anh
                </p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M </strong>
                    <span className={cx('label')}>Followers</span>

                    <strong className={cx('value')}>22.2M </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;