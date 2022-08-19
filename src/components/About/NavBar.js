import React from 'react'
import '../About/aboutStyle.css'

function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-font" href="/#">Gabriel Ifoga</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto topnav">
                <li class="nav-item active">
                    <a class="nav-link" href="/#">About <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/#">Services</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/#">Project</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/#">Contact Me</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default NavBar