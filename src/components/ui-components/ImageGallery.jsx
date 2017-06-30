import React, { PureComponent } from 'react';
import PropTypes                from 'prop-types';
import { CSSTransitionGroup }   from 'react-transition-group';
import Modal                    from 'react-modal';
import WaitingBar               from '../ui-components/WaitingBar.jsx';
import Icon                     from './Icon.jsx';
import RadioGroup               from './RadioGroup.jsx';
import styles                   from './ImageGallery.less';

const types = [
    {
        value: 'WOMAN',
        title: 'woman'
    },
    {
        value: 'HELIX',
        title: 'helix'
    },
    {
        value: 'ILLUSTRATION',
        title: 'illustration'
    }
];


class ImageGallery extends PureComponent {
    static propTypes = {
        images        : PropTypes.array.isRequired,
        selected      : PropTypes.object.isRequired,
        label         : PropTypes.string.isRequired,
        selectedType  : PropTypes.string.isRequired,
        onFilterSelect: PropTypes.func.isRequired,
        onSelect      : PropTypes.func
    };

    static defaultProps = {
        onSelect: null
    }

    state = {
        editing: false
    }


    handleSelect = (index) => {
        this.props.onSelect('image', index);
    };

    handleClosePane = () => {
        this.setState({ editing: false });
    }

    handleOpenPane = () => {
        this.setState({ editing: true });
    }


    render() {
        const { selected, images, label, onFilterSelect, selectedType } = this.props;
        const { editing } = this.state;

        return (
            <div className={styles.ImageGallery} onClick={this.handleOpenPane} ref={c => this.picker = c}>
                {selected.name ? selected.name : <WaitingBar />}
                <Icon type='arrowDown' />
                <div className={styles.label}>{label}</div>
                <Modal
                    isOpen={editing}
                    contentLabel='Image picker Modal'
                    onRequestClose={this.handleClosePane}
                    className='Modal'
                    overlayClassName='Overlay'
                    closeTimeoutMS={400}
                >
                    <CSSTransitionGroup
                        transitionName={{
                            enter       : styles.galleryEnter,
                            enterActive : styles.galleryEnterActive,
                            leave       : styles.galleryLeave,
                            leaveActive : styles.galleryLeaveActive,
                            appear      : styles.galleryEnter,
                            appearActive: styles.galleryEnterActive
                        }}
                        component={FirstChild}
                        transitionEnterTimeout={400}
                        transitionLeaveTimeout={400}
                        transitionAppearTimeout={400}
                        transitionAppear
                    >
                        {editing
                            ?
                                <div className={styles.gallery}>
                                    <div className={styles.controls}>
                                        <RadioGroup
                                            name='imageType'
                                            items={types}
                                            onSelect={onFilterSelect}
                                            selected={selectedType}
                                            style={{ alignItems: 'center' }}
                                        />
                                        <Icon type='close' onClickHandler={this.handleClosePane} />
                                    </div>
                                    <div className={styles.container}>
                                        <div className={styles.header}>
                                            {types.find(f => f.value === selectedType).title}
                                        </div>
                                        <div className={styles.content}>
                                            {
                                            images.map((item, i) =>
                                                <div
                                                    className={styles.image}
                                                    key={item.id}
                                                    onClick={this.handleSelect.bind(this, i)}
                                                >
                                                    <img
                                                        src={item.imageUrl}
                                                        alt={item.name}
                                                        height='128px'
                                                    />
                                                </div>)
                                        }
                                        </div>
                                    </div>
                                </div>
                            : null}
                    </CSSTransitionGroup>
                </Modal>
            </div>
        );
    }
}

function FirstChild(props) {
    const childrenArray = React.Children.toArray(props.children);

    return childrenArray[0] || null;
}

export default ImageGallery;
