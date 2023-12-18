import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import styles from "./SuggestedAccounts.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('avatar')}
                src="https://cdn.tgdd.vn/Files/2021/07/17/1368882/lam-the-nao-de-chup-anh-dep-bang-dien-thoai--9.jpg"
                alt="hoa"
            />
            <div className={cx('item-info')}>
                <p className={cx('nickname')}>
                    <strong>connhoncoan</strong>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </p>
                <p className={cx('name')}>
                    Phương Anh
                </p>
            </div>
        </div>
    );
}
AccountItem.protoTypes = {

};

export default AccountItem;