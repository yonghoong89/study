import React, { PureComponent } from 'react';

class Header extends PureComponent {
    render() {
        const totalCount = this.props.totalCount;
        return (
            <div className="box__header">
                <h1 className="text__title">Cart list</h1>
                <p className="text__all-number"><span className="for-a11y">전체 카드목록 개수</span><span className="text__number">{totalCount}</span></p>
            </div>
        );
    }
}

export default Header;