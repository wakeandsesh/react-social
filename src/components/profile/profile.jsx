import MyPostContainer from './mypostContainer';
import './profile.css'
import Commentary from './commentary'
import Preloader from '../common/preloader';
import ProfileStatus from './profileStatus';

const Profile = (props) => {
    let state = props.profilePage;
    let profile = props.profilePage.profile;

    if(!profile) {
        return (
            <Preloader />
        )
    }
    
    return (
        <div className="container">
            <div className='social' style={{display: 'flex', marginTop: '100px'}}>
                <div className="social__logo" style={{height: '200px', width: '200px', paddingRight: '50px'}}>
                    <img style={{width: '100%'}} src={profile.photos.large} alt="profile__logo" />
                </div>
                <div className="social__data">
                    <h3>{profile.fullName}</h3>
                    <span>Date of birth: {props.birth}</span>
                    <span>City: {props.city}</span>
                    <span>Education: {props.education}</span>
                    <span>Web site: {props.website}</span> 
                </div>
            </div>
            <ProfileStatus setStatusThunk={props.setStatusThunk} status={props.profilePage.status} />
            <MyPostContainer store={props.store}/>
            <div style={{marginTop: '100px'}}>
                {state.posts.map(item => (<Commentary image={item.image} message={item.message} />))}
            </div>
        </div>
    )
}

export default Profile;