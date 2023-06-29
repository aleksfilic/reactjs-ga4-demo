import List from '../List/List';

const Home = ({ tagId }) => {
  return (
    <div className="App">
      <h1>React Animations List</h1>
      <h2>using gtag (example - G-XFQHT4TXGG)</h2>
      <List tagId={tagId} />
    </div>
  );
};

export default Home;

// import Modal from '../Modal/Modal';
// import Backdrop from '../Backdrop/Backdrop';
// import { useState } from 'react';

// const [modalIsOpen, setModalIsOpen] = useState(false);
// const openModal = () => setModalIsOpen(true);
// const closeModal = () => setModalIsOpen(false);
/*
<Modal show={modalIsOpen} closed={() => closeModal()} /> 
<Backdrop show={modalIsOpen} />
 <button className="Button" onClick={() => openModal()}>
  Open Modal
</button> 
   <h3>Animating Lists</h3> 
  
*/
