import React from 'react'

function Projects() {
  return (
    <div className='container-fluid  text-light min-vh-100 d-flex flex-column justify-content-center align-items-center'>
      <h1>Projects</h1>
      <div className="row">
  <div className="col-sm-6 mb-3 mb-sm-0">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Youtube Clone</h5>
        <p className="card-text">Created a Youtube Clone to implement my knowledge in React</p>
        <p className="card-text">Created a Youtube Clone to implement my knowledge in React</p>
        <a href="#" className="btn btn-danger">Read More..</a>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Library Management System</h5>
        <p className="card-text">Created a Project to avoid manual work in Liabrary all the work is done through project.</p>
        <a href="#" className="btn btn-danger ">Read More..</a>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Projects
