import PropTypes from 'prop-types';
import Content from '../Content/Content';
import './Wrapper.css';

const Wrapper = ({ children, verticalAlignment }) => (
    <div className={`wrapper wrapper-vertical-alignment-${verticalAlignment}`}>
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
