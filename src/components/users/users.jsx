import React from "react"
import { NavLink } from "react-router-dom";
import { usersAPI } from '../../api/api';

let Users = (props) => {
    
        let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        
        function followUser(userid) {
            props.toggleFollowing(true);
            usersAPI.follow(userid).then(response => {
                if (response.data.resultCode === 0) {
                    props.follow(userid)
                }
                props.toggleFollowing(false);
            })
        }

        function unfollowUser(userid) {
            props.toggleFollowing(true);
            usersAPI.unfollow(userid).then(response => {
                if (response.data.resultCode === 0) {
                    props.follow(userid)
                }
                props.toggleFollowing(false);
            })
        }
        
        return (
            <div>
                {
                    props.users.map(user => {
                        return (
                            <div key={user.id} className="user">
                                <div>
                                    <div className="user__photo">
                                        <NavLink to={'/profile/' + user.id}>
                                            <img style={{width: '50px', height: '50px'}} src={user.photos.small != null ? user.photos.small : 'https://www.pngkey.com/png/full/89-894505_imprime-tu-propia-mscara-de-anonymous-mascara-de.png'} alt="" />
                                        </NavLink>
                                        {user.followed ? <button disabled={props.followButton} onClick={() => unfollowUser(user.id)}>Unfollow</button> : <button disabled={props.followButton} onClick={() => followUser(user.id)}>Follow</button>}
                                    </div>
                                </div>
                            
                                <div>
                                    <div>{user.name}</div>
                                    {/* <div>{user.location.city}, {user.location.country}</div> */}
                                    <div>{user.status}</div>
                                </div>
                            </div>
                        )
                    })
                }
                <div>
                    {
                        pages.map(page => {
                            return <span onClick={() => {props.onCurrentPage(page)}} className={props.currentPage === page ? 'currentPage__active' : ''}>{page}</span>
                        })
                    }
                </div>
            </div>
        )
}

export default Users;