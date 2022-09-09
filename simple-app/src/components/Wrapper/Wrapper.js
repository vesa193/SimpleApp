import PropTypes from 'prop-types';
import Content from '../Content/Content';
import Navigation from '../Navigation/Navigation';
import './Wrapper.css';

const Wrapper = ({ children, verticalAlignment }) => (
    <div className={`wrapper wrapper-vertical-alignment-${verticalAlignment}`}>
        <Navigation />
        <Content>{children}</Content>
    </div>
);

Wrapper.displayName = 'Wrapper';

Wrapper.defaultProps = {
    verticalAlignment: 'top',
};

Wrapper.propTypes = {
    children: PropTypes.node,
    verticalAlignment: PropTypes.string,
};

export default Wrapper;
