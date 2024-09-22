import PropTypes from "prop-types";

const CourseShape = PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    credit: PropTypes.number.isRequired,
});

export default CourseShape;