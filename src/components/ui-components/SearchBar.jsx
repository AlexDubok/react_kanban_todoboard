import React, { PureComponent } from 'react';
// import PropTypes             from 'prop-types';
// import classnames               from 'classnames/bind';
import TextField                from '../ui-components/TextField.jsx';
import styles                   from './SearchBar.less';

// const cx = classnames.bind(styles);

class SearchBar extends PureComponent {
    // static propTypes = {
    //     pathname: PropTypes.string.isRequired
    // }

    handleSearch = (name, value) => {
        console.log(value);
    }

    render() {
        return (
            <div className={styles.SearchBar}>
                <TextField
                    name='searchQuery'
                    label='Search'
                    onChange={this.handleSearch}
                />
            </div>
        );
    }
}

export default SearchBar;
