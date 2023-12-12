import classNames from 'classnames/bind';
import { useEffect, useRef, useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as searchService from '~/apiServices/searchService';
import AccountItem from '~/components/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { SearchIcon } from '~/components/Icons';
import { useDebounce } from '~/components/Hooks';
import styles from './Search.module.scss'

const cx = classNames.bind(styles);


function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);


    const debounce = useDebounce(searchValue, 500);

    const inputRef = useRef();

    useEffect(() => {
        if (!debounce.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);

            const result = await searchService.search(debounce);

            setSearchResult(result);

            setLoading(false);
        }

        fetchApi();

        // fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(debounce)}&type=less`)
        //     .then(res => res.json())
        //     .then(res => {
        //         setSearchResult(res.data);
        //         setLoading(false);
        //     })
        //     .catch(() => {
        //         setLoading(false);
        //     })



    }, [debounce]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    }

    const handleHideResult = () => {
        setShowResult(false);
    }

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setSearchValue(searchValue);
        }
    }

    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={attrs => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>
                            Accounts
                        </h4>
                        {searchResult.map((result) => (
                            <AccountItem key={result.id} data={result} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    type="text"
                    placeholder='Search accounts and videos'
                    spellCheck='false'
                    onChange={handleChange}
                    onFocus={() => setShowResult(true)}
                />

                {!!searchValue && !loading && (
                    <button
                        className={cx('clear')}
                        onClick={handleClear}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}


                {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                <button 
                    className={cx('search-btn')} 
                    onMouseDown={(e) => e.preventDefault()
                }>
                    <SearchIcon />
                </button>

            </div>
        </HeadlessTippy>
    );
}

export default Search;