import PropTypes from 'prop-types';
import './Content.css';

const Content = ({ children }) => <div className="content">{children}</div>;

Content.displayName = 'Content';

Content.propTypes = {
  children: PropTypes.node,
};

export default Content;
