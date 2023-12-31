import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faHourglass1 } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from "./SuggestedAccounts.module.scss"
import AccountPreview from './AccountPreview';


const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    }

    return (
        <div>
            <Tippy
                interactive
                delay={[800, 0]}
                offset={[-20,0]}
                placement='bottom'
                render={renderPreview}
            >
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
            </Tippy>
        </div>
    );
}
AccountItem.protoTypes = {

};

export default AccountItem;