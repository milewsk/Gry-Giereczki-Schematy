import {Fragment} from "react";
import {NavLink, Outlet} from "react-router-dom";
import classes from "./Profile.module.css";

const Profile = (props) => {
    return (
        <Fragment>
            <section className="container-fluid">
                <div className="row list-unstyled ps-0 mt-4">
                    <div className="col-6 col-md-4 col-lg-3">
                        <li className="p-2">
                            <button className={classes.button_menu + " btn btn-group-toggle align-items-center rounded collapsed"}
                                    data-bs-toggle="collapse" data-bs-target="#accountCollapse"
                                    aria-expanded="false">Moje konto
                            </button>
                            <ul className="collapse btn-toggle-nav list-unstyled text-center fw-normal small"
                                id="accountCollapse">
                                <li className="pt-2">
                                    <NavLink to="details">Szczegóły</NavLink>
                                </li>
                                <li>
                                    <NavLink to="password">Zmień hasło</NavLink>
                                </li>
                                <li>
                                    <NavLink to="edit-profile">Edycja profilu</NavLink>
                                </li>
                            </ul>
                        </li>
                    <li className="p-2">
                        <button className={classes.button_menu + " btn btn-group-toggle align-items-center rounded collapsed"}
                                data-bs-toggle="collapse" data-bs-target="#friendsCollapse"
                                aria-expanded="false">Znajomi
                        </button>
                        <ul className="collapse btn-toggle-nav list-unstyled text-center fw-normal small"
                            id="friendsCollapse">
                            <li className="pt-2">
                                <NavLink to="add-friend">Dodaj znajomego</NavLink>
                            </li>
                            <li>
                                <NavLink to="all-friends">Wszyscy znajomi</NavLink>
                            </li>
                        </ul>
                    </li>
                        <li className="p-2">
                        <button className={classes.button_menu + " btn btn-group-toggle align-items-center rounded collapsed"}
                                data-bs-toggle="collapse" data-bs-target="#gamesCollapse"
                                aria-expanded="false">Gry
                        </button>
                        <ul className="collapse btn-toggle-nav list-unstyled text-center fw-normal small"
                            id="gamesCollapse">
                            <li className="pt-2">
                                <NavLink to="favourites">Ulubione gry</NavLink>
                            </li>
                            <li>
                                <NavLink to="history">Historia gier</NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className="p-2">
                        <NavLink to="ranking" className={classes.button_menu + " btn btn-group-toggle align-items-center rounded collapsed"}
                                 aria-expanded="false">Ranking
                        </NavLink>
                    </li>
                    <li className="p-2">
                        <NavLink to="achievements" className={classes.button_menu + " btn btn-group-toggle align-items-center rounded collapsed"}
                                 aria-expanded="false">Osiągnięcia
                        </NavLink>
                    </li>
                    </div>
                    <div className="col-6 col-md-8 col-lg-9">
                        <Outlet></Outlet>
                    </div>
                </div>
            </section>
        </Fragment>
    );
};

export default Profile;
