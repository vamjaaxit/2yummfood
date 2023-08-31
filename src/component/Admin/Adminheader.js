import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';


export default function AdminHeader() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar shadow  bg-light position-fixer w-100" id='navigation'>
                <div class="container-fluid d-flex justify-content-space-between">
                    <Col>
                        <h1>2<sub className='text-danger'>Yumm</sub></h1>
                    </Col>

                    <Col>
                        <input type="text" placeholder="search" className="w-100" />
                    </Col>

                    <Col>
                        <li class="nav-item dropdown float-end me-5">
                            {/* <button type='button'> */}
                            <Link class="nav-link dropdown-toggle ms-auto" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Account
                            </Link>
                            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><Link class="dropdown-item" to="/Bookingtable">Change Password</Link></li>
                                <li><Link class="dropdown-item" to="">Log out</Link></li>
                            </ul>
                            {/* </button> */}
                        </li>
                    </Col>
                    
<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAB6CAMAAABHh7fWAAAAYFBMVEX////MzMxNTU3JycnPz89KSkpGRkbU1NTy8vI/Pz/7+/vg4OD39/fd3d3Y2Njn5+c6OjqAgICPj4+urq5kZGRbW1u1tbVxcXG+vr5TU1Nra2ubm5t3d3ekpKQyMjItLS21aGe1AAAEB0lEQVRoge2a6W6rMBCF62BjIA2LISSQpH3/t7yGdEs5gxlDKl3J50crtSVfZzybbV5egoKCgoKCgoKC/m9lSVHs81zrPN8XRZL9EfY1OUghokHi/l0IeUhen83NCi1G5C/Zn+nimcYnOcJ+4/PkeWCa+0F/CjzRTvAI15vDD4vAI/ywKThZyh3ZYkPD94tN/oDvNwJn7vCasPNNEi2TkCwHjV8hXG5QYjL8yfps+k7tut6cNYavZmfQZF03Zax2Vioum1pDp6/0+SsERyYduXep1EQQvsruDPhSCtPFuwfFnYnQX66xG8S2bJt0N1Ha1VN2lPuTQT7rB18/eH3qdP/8TiAZgUevV8Bu37oGVq8mydbpwG7hRwYdQx+htz8FXO7VS4C75S2eI8e3jVwOvJfPG62O+fQZvYnRQpdz5N2uBMntYTYwYDbIBqUguQU7uZHR8jK71HaxL1uYDYwW0rjQBjUxptmwVcpqNspsnIGqYsUr5QXqlfLqQl8ROipYaNgEPdG8/IJt2tvhrMaN4ts7zHgxjgd+eXPkNaqkglnIiSmzdZWUlnhwORlPoUKcXYX0TDy4PL2IfY6MXGg0oQ1avtgwq4epzBXhDfY4I7MJ9MkR4DbOTmvRe+i1yAUeBP9pxngI93fSFWTjap9hKV3eQVDbcnfrQbBjc9C4gruyerQax9nyKg7RInJGmY1xvBVfjoYOtxHuyC1LxhHOmBbwMYKzhNulJor4cjR1duIM8RQ/x0guXFKEdFcz7O/V1WyI8fndB9W5GGjqmEyezYzdCu7vRy1vH1TTtOw5q2ElG8WYScnPiDqa3JHHa4xRgT4RndnlqiOuRMwBCY+FA5qeh9WVRHPGQjwMi9myQpSTQaxTLMoAcaYXmxrMmFtsIrPtx1REascV6W/exgefT4ohvQi02iS1BuHmNdiAY1wdydTi7u3JGBe4kKuGeoB/okGazUXzTysps2WP0T2x1D6nV0TAErMKNZ/4HF5hs6XUhNUnDa8i/E5Jp4VcRvXNEDWlM7d6eiLve+n123VRVab0sBDHaVlN4H7kB5cP9yzzM8qITx9vYbwPpb/HQynrXi0Ywy1c9fUXfM1VW/4BbvvYOYN/SsV9e4+4NRcQ47WLFHWPLx1IeNrXQq68dhka96Xhge/w5sJuGxP2Ox98h7+vvt5LdovC67ditcFNcoHutVxKG958QCip2Oy02ur2/MaN8NtGYCvNWfB059OtSGWmXGi4Ks3Wr8bsT28L4OrttNV7Cj+lr2+uQ+m366a+/qF9pWi/219Vz7D4U0l76sppK1Fx2Z3aZ72B9KUiMo1tzGl8VzpMD41hbjH8leRRezHV9VqZS/u8F66CgoKCgoKCgoL+Sv8AMx06FdiAFj8AAAAASUVORK5CYII=' alt='axit' style={{width:"5%" ,height:"5%"}}/>
                </div>
            </nav>
        </>
    )
}

