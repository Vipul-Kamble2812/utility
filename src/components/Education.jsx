import React from 'react'

function Education() {
  return (
    <div className='container-fluid  text-dark min-vh-100 d-flex flex-column justify-content-center align-items-center'>
      <h1 text-dark>My Education</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">Sr.No</th>
            <th scope="col">Qualification</th>
            <th scope="col">College</th>
            <th scope="col">Passout</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>SSC</td>
            <td>K.K.Ghule,School Manjari</td>
            <td>2017</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Hsc</td>
            <td>R.R Shinde Jr Colloge Hadapsar</td>
            <td>2019</td>
          </tr>
          <tr>
          <th scope="row">2</th>
            <td>B.E Comp </td>
            <td>Dhole Patil Colloge Kharadi</td>
            <td>2023</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Education
