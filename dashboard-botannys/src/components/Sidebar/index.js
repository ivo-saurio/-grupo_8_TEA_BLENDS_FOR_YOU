import React from 'react';

function Sidebar(){
    return(
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar" >

			{/* <!-- Sidebar - Brand --> */}
			<a className="sidebar-brand d-flex align-items-center justify-content-center" href="http://localhost:3001/">
				<div className="sidebar-brand-icon">
				<i class="fas fa-glass-martini-alt"></i>
				</div>
				<div className="sidebar-brand-text mx-3">Admin</div>
			</a>
	
			{/* <!-- Divider --> */}
			<hr className="sidebar-divider my-0" />

			{/* <!-- Nav Item - Dashboard --> */}
			<li className="nav-item active">
				<a className="nav-link" href="/">
					<i className="fas fa-fw fa-tachometer-alt"></i>
					<span>Dashboard</span>
				</a>
			</li>

			{/* <!-- Divider --> */}
			<hr className="sidebar-divider" />

			{/* <!-- Heading --> */}
			<div className="sidebar-heading">Actions</div>

			{/* <!-- Nav Item - Pages --> */}
			<li className="nav-item">
				<a className="nav-link collapsed" href="http://localhost:3001/">
				<i class="fas fa-arrow-circle-up"></i>
					<span>Mi sitio web</span>
				</a>
			</li>

			{/* <!-- Nav Item - Charts --> */}
			<li className="nav-item">
				<a className="nav-link" href="http://localhost:3001/productos/create">
				<i class="fas fa-plus"></i>
					<span>Crear nuevo producto</span></a>
			</li>

			{/* <!-- Nav Item - Tables --> */}
			<li className="nav-item">
				<a className="nav-link" href="http://localhost:3001/productos/listado">
				<i class="fas fa-list-ul"></i>
					<span>Listado de productos</span></a>
			</li>

			{/* <!-- Divider --> */}
			<hr className="sidebar-divider d-none d-md-block" />
		</ul>


    )
}

export default Sidebar;