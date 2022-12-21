import React from "react";
import "./ProfileCard.css";
import avatar from "../images/b004fea8d749925837daa8746aa2b5f1.jpg";

function ProfileCard(props) {
	return (
		<div className="card-body">

			<div className="container">
				<div className="userCard">
					<div className="userPhoto">
						<img src={avatar} alt={props.name} />
					</div>
					<div className="userInfo">
						<h1 className="festname">{props.name} </h1>
						<h2 className="infosnick">{props.snick}</h2>
						<a className="lake" href="btn"></a>
					</div>
					<div className="cardUserSochInfo">

						<div className="usersCosInfo">
							<div className="usercochInfo social-container">
								<div className="usercochInfo">
									<h4>{props.tweets}</h4>
									<h3 className="smaller-text">Tweets</h3>
								</div>
								<div className="usercochInfo">
									<h4>{props.following}</h4>
									<h3 className="smaller-text">Following</h3>
								</div>
								<div className="usercochInfo">
									<h4>{props.followers}</h4>
									<h3 className="smaller-text">Followers</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div >
	);
}

export default ProfileCard;
