import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import {
  FRONT_END, BACK_END, APPS, CLOUD,
} from '../const/skill';
import Modal from './Modal';

const initialState = {
  modalOpen: false,
  skill: '',
};

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  handleModalClick(skill = '') {
    this.setState(prevState => ({ modalOpen: !prevState.modalOpen, skill }));
  }

  handleModalCloseKey(event) {
    console.log(event.key);
    if (event.key === 'Enter') {
      this.setState(initialState);
    }
  }

  renderModal() {
    const { skill } = this.state;
    return (
      <Fragment>
        <div className="modal--background" />
        <Modal>
          <div className="modal">
            <p className="modal--content">{skill}</p>
            <span
              className="modal--close"
              onClick={this.handleModalClick.bind(this)}
              onKeyPress={this.handleModalCloseKey.bind(this)}
              role="button"
              tabIndex={0}
            >
              &times;
            </span>
          </div>
        </Modal>
      </Fragment>
    );
  }

  render() {
    const { modalOpen } = this.state;
    return (
      <div className="half-container__about fade">
        {modalOpen && this.renderModal()}
        <h2>
          I&apos;m Neal Bharucha, an excited developer and
          {' '}
          <i>near</i>
          {' '}
avid
          coffee drinker.
        </h2>
        <p>
          I&apos;ve always loved the collaboration and interaction required in
          order to create the best product. The overlap between teams,
          especially design and development, never fails to show me that there
          is always room to improve. I enjoy every aspect of front-end
          development, back-end development, and a
          {' '}
          <i>
            <b>nice</b>
          </i>
          {' '}
          pour over of course :)
        </p>
        <p> Want to speak to me? </p>
        <NavLink to="/contact">
          {/* style the NavLink above to get rid of link features if wanted */}
          <p>Get in touch!</p>
        </NavLink>

        <h2>What I Do</h2>
        <button
          type="button"
          onClick={this.handleModalClick.bind(this, FRONT_END)}
        >
          Front-End
        </button>
        <button
          type="button"
          onClick={this.handleModalClick.bind(this, BACK_END)}
        >
          Back-End
        </button>
        <button type="button" onClick={this.handleModalClick.bind(this, APPS)}>
          Apps
        </button>
        <button type="button" onClick={this.handleModalClick.bind(this, CLOUD)}>
          Cloud
        </button>
        <br />
        <h2>Favorite Quotes</h2>
        <p>
          <i>&quot;Be the change that you wish to see in the world.&quot;</i>
          {' '}
-
          Mahatma Gandhi
        </p>
        <p>
          <i>
            &quot;Every champion was once a contender who refused to give
            up.&quot;
          </i>
          {' '}
          - Rocky Balboa
        </p>
        <br />
      </div>
    );
  }
}

export default About;
