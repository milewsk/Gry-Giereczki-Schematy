import {Fragment} from "react";
import {NavLink, Outlet} from "react-router-dom";
import classes from "./Profile.module.css";

const Profile = (props) => {
    return (
        <Fragment>
            <section className="container-md">
                <div className="row row-cols-2 flex-shrink-0 list-unstyled ps-0">
                    <div className="col-md-3 mt-4">
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
                    <div className="col-md-9">

                    </div>
                </div>
            </section>
            <Outlet></Outlet>
        </Fragment>
    );
};

export default Profile;
