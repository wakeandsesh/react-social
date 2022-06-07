import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import ProfileContainer from './components/profile/profileContainer';
import DialogsContainer from './components/dialogs/dialogsContainer';
import Music from './components/music/music';
import News from './components/news/news';
import Settings from './components/settings/settings';
import UsersContainer from './components/users/usersContainer';
import HeaderContainer from './components/headerContainer';
import Login from './components/login/login';
import React from 'react';
import { connect } from 'react-redux';
import { initializeThunk } from './redux/appReducer';
import Preloader from './components/common/preloader';



class App extends React.Component {
  componentDidMount() {
    this.props.initializeThunk();
  }

  render() {
    if(!this.props.initialized) {
      return <Preloader />
    }

    return (
      <BrowserRouter>
        <div className="content__wrapper">
          <HeaderContainer />
          <Navbar />
          <div className="content">
            <Routes>
              <Route path='/profile/:userID' element={<ProfileContainer />} />
              <Route path='/profile/' element={<ProfileContainer />} />
              <Route path='/dialogs/*' element={<DialogsContainer />} />
              <Route path='/users/*' element={<UsersContainer />} />
              <Route path='/news' element={<News />} />
              <Route path='/login' element={<Login />} />
              <Route path='/music' element={<Music />} />
              <Route path='/settings' element={<Settings />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.appReducer.initialized 
})

export default connect(mapStateToProps, { initializeThunk })(App);
