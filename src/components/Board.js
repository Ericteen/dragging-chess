import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import BoardSquare from './BoardSquare'
import Knight from './Knight'

@DragDropContext(HTML5Backend)
export default class Board extends Component {
  static propTypes = {
    knightPosition: PropTypes.arrayOf(
      PropTypes.number.isRequired
    ).isRequired,
  }

  renderPiece = (x, y) => {
    const [knightX, knightY] = this.props.knightPosition
    const isKnightHere = x === knightX && y === knightY
    return isKnightHere ? <Knight /> : null
  }


  renderSquare = (i) => {
    const x = i % 8;
    const y = Math.floor(i / 8);

    return (
      <div
       key={i}
       style={{
         width: '12.5%',
         height: '12.5%'
       }}
      >
        <BoardSquare x={x} y={y}>
          {this.renderPiece(x, y)}
        </BoardSquare>
      </div>
    );
  }

  render() {
    const squares = [];
    for (let i = 0; i < 64; i += 1) {
      squares.push(this.renderSquare(i));
    }
    return (
      <div
        style={{
          width: '100%',
          height: '500px',
          display: 'flex',
          flexWrap: 'wrap'
        }}
      >
        {squares}
      </div>
    )
  }
}
