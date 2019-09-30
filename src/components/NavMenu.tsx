import React from 'react';
import {
    Collapse, Container, Navbar,
    NavbarBrand, NavbarToggler,
    NavItem, NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import './NavMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';


class NavMenu extends React.Component<any, any> {
    constructor(props: any) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        const { t, i18n  } = this.props;
        const changeLanguage = (language: string) => i18n.changeLanguage(language);
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-dark bg-dark navbar-toggleable-sm border-bottom box-shadow mb-3" dark >
                    <Container>
                        <NavbarBrand tag={Link} to="Home">React TypeScript</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} className="mr-2" />
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={this.state.isOpen} navbar>
                            <ul className="navbar-nav flex-grow">
                                <NavItem>
                                    <NavLink tag={Link} className="text-light" to="Home"><FontAwesomeIcon icon={faHome} /> {t("menuHome")}</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-light" to="RestCall"><FontAwesomeIcon icon={faGlobe} /> {t("menuRestCall")}</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-light" to="About"><FontAwesomeIcon icon={faInfoCircle} /> {t("menuAbout")}</NavLink>
                                </NavItem>
                                <form className="form-inline">
                                    <button className="btn btn-sm btn-outline-secondary" type="button" onClick={e => changeLanguage("de")}>
                                        <span className="flag-icon flag-icon-de"></span>
                                    </button>
                                    <button className="btn btn-sm btn-outline-secondary" type="button" onClick={e => changeLanguage("en")}>
                                        <span className="flag-icon flag-icon-gb"></span>
                                    </button>
                                </form>
                            </ul>
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }
}

export default withTranslation()(NavMenu);