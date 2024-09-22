import BodySection from "./BodySection";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";


export default function BodySectionWithMarginBottom(props) {
  return (
    <div className={css(styles.bodySection)}>
      <BodySection {...props} />
    </div>
  );
}

BodySectionWithMarginBottom.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

const styles = StyleSheet.create({
  bodySection: {
    marginBottom: '40px'
  },
});