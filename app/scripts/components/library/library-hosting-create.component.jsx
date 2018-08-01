import React from 'react';
import {Link} from 'react-router';
import {LibrarySidebarRight} from './library-sidebars.components';

export default class LibraryHostingCreate extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			hostedDomains: [],
		};
	}

	render() {
		return (
			<div className="library-content-wrapper">
				<div className="library-see">
					<div className="library-hosting-plan">
						Free plan: 1000 views / month / website
					</div>
					<div className="library-hosting">
						<div className="library-see-title">Add a new website</div>
						<div className="library-hosting-list">
							{/* <div className="library-hosting-website">
								<p className="library-hosting-website-name">
									www.monsite.com
									<div
										className="button-edit"
										onClick={() => {}}
									>
										Edit
									</div>
								</p>
								<div className="library-hosting-website-infos">
									<span>5 hosted fonts</span>
									<span>Last update: 26. nov. 2017</span>
								</div>
							</div> */}
						</div>
					</div>
				</div>
				<LibrarySidebarRight>
					<div className="sidebar-action">Add website</div>
				</LibrarySidebarRight>
			</div>
		);
	}
}