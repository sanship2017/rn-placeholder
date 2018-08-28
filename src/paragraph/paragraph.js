import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Placeholder from '../placeholder';

const prepareLine = (i, paddingVertical, textSize, color, width, styleLine) => (
  <Placeholder.Line
    textSize={textSize}
    color={color}
    width={width}
    key={i}
    style={[{ paddingVertical }, styleLine]}
  />
);

/**
 * Create a paragraph
 * @param lineNumber The number of lines
 * @param textSize The text size (for lines)
 * @param lineSpacing The line spacing size (for lines)
 * @param color The paragraph color
 * @param width The paragraph width
 * @param lastLineWidth The last line width
 * @param firstLineWidth The first line width
 */
function Paragraph({
  lineNumber,
  textSize,
  lineSpacing,
  color,
  width,
  lastLineWidth,
  firstLineWidth,
  style,
}) {
  const lineRealNumber = lineNumber - 1;

  const lines = Array(lineNumber)
    .fill(null)
    .map((_, i) => {
      if (i === lineRealNumber) {
        return <Placeholder.Line textSize={textSize} color={color} width={lastLineWidth} key={i} />;
      }

      if (i === 0) {
        return prepareLine(i, lineSpacing/2, textSize, color, firstLineWidth, this.props.styleLine);
      }

      return (
        <Placeholder.Line
          textSize={textSize}
          color={color}
          width={width}
          key={i}
          style={[{paddingVertical: lineSpacing/2}, this.props.styleLine]}
        />
      );
    });

  return <View style={style}>{lines}</View>;
}

Paragraph.propTypes = {
  lineNumber: PropTypes.number.isRequired,
  textSize: PropTypes.number,
  lineSpacing: PropTypes.number,
  color: PropTypes.string,
  width: PropTypes.string,
  lastLineWidth: PropTypes.string,
  firstLineWidth: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({})]),
};

Paragraph.defaultProps = {
  textSize: 12,
  lineSpacing: 12,
  color: '#efefef',
  width: '100%',
  lastLineWidth: '100%',
  firstLineWidth: '100%',
  style: {},
  styleLine: {}
};

export default Paragraph;
