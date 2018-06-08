import React from 'react';
import pleaseWait from 'please-wait';
import { Link } from 'react-router';

export class LibrarySidebarLeft extends React.PureComponent {
	render() {
		return (
			<div className="library-sidebar-left">
				<div className="library-sidebar-action-dark">
					New Project
				</div>
				<div className="library-links">
					<Link to="/library/home" className={`library-link ${this.props.location.pathname === '/library/home' ? 'active' : ''}`}>
						All
					</Link>
				</div>
			</div>
		);
	}
}

export class LibrarySidebarRight extends React.PureComponent {
	render() {
		return (
			<div className="library-sidebar-right">
				{this.props.children}
			</div>
		);
	}
}

export class FamilySidebarActions extends React.PureComponent {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="sidebar-actions-family">
				<div className="sidebar-action">
					Export family
				</div>
				<div className="sidebar-action">
					Family settings
				</div>
				<div className="sidebar-action">
					Add new Variant
				</div>
			</div>
		)
	}
}

export class SidebarFilters extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			activeFilters: {
				type: 'All',
				designer: 'All',
			},
		}
		this.editActiveFilter = this.editActiveFilter.bind(this);
	}
	editActiveFilter(name, value) {
		const activeFilters = {...this.state.activeFilters};
		activeFilters[name] = value;
		this.setState({activeFilters});
		this.props.setActiveFilters(activeFilters);
	}
	render() {
		return(
			<div className="sidebar-filters">
				<SidebarFilter
					title="Type"
					elems={[
						{
							active: true,
							name: 'All',
						},
						{
							active: false,
							name: 'Template',
						},
						{
							active: false,
							name: 'Presets',
						},
						{
							active: false,
							name: 'Fonts',
						},
					]}
					editActiveFilter={this.editActiveFilter}
				/>
				<SidebarFilter
					title="Designer"
					elems={[
						{
							active: true,
							name: 'All',
						},
						{
							active: false,
							name: 'Prototypo',
						},
						{
							active: false,
							name: 'Production type',
						},
						{
							active: false,
							name: 'Google',
						},
					]}
					editActiveFilter={this.editActiveFilter}
				/>
			</div>
		)
	}
}

class SidebarFilter extends React.PureComponent {
	constructor(props) {
		super(props);
		this.state = {
			title: props.title,
			elems: props.elems,
		}
		this.setElemActive = this.setElemActive.bind(this);
	}
	setElemActive(elem) {
		const elems = [...this.state.elems];
		const activeIndex = elems.findIndex(e => e.active === true);
		const clickedIndex = elems.findIndex (e => e.name === elem.name);
		elems[activeIndex].active = false;
		elems[clickedIndex].active = true;
		this.setState({elems});
		this.props.editActiveFilter(this.state.title.toLowerCase(), elem.name);
	}
	render() {
		return(
			<div className="sidebar-filter">
				<p className="sidebar-filter-title">{this.state.title}</p>
				<div className="sidebar-filter-elems">
					{this.state.elems.map(elem => (
						<div
							className={`sidebar-filter-elem ${elem.active ? 'active' : ''}`}
							onClick={() => {this.setElemActive(elem);}}
							key={`filter${this.state.title}${elem.name}`}
						>
							{elem.name}
						</div>
					))}
				</div>
			</div>
		)
	}
}
