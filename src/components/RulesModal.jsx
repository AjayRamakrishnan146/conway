import React from 'react';
import { Modal } from 'react-bootstrap';

// RulesModal component takes showModal and closeModal as props
const RulesModal = ({ showModal, closeModal }) => {
  // Render the RulesModal
  return (
    <div>
      {/* Modal component from react-bootstrap */}
      <Modal show={showModal} onHide={closeModal} dialogClassName="transparent-modal" style={{ fontFamily: 'cursive' }} data-testid="custom-modal">
        {/* Modal Header with a close button */}
        <Modal.Header closeButton>
          <Modal.Title>Rules</Modal.Title>
        </Modal.Header>
        {/* Modal Body containing the rules */}
        <Modal.Body>
          <div className="container">
            <p>1. Any live cell with fewer than two live neighbors dies (underpopulation).</p>
            <p>2. Any live cell with two or three live neighbors lives on to the next generation.</p>
            <p>3. Any live cell with more than three live neighbors dies (overcrowding).</p>
            <p>4. Any dead cell with exactly three live neighbors becomes a live cell (reproduction).</p>
          </div>
        </Modal.Body>
        {/* Modal Footer containing developer information */}
        <Modal.Footer>
          <div className='container'>
            <p style={{ fontFamily: 'cursive' }}>Developed by Ajay Ramakrishnan</p>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};


export default RulesModal;
