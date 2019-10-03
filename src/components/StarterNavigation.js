import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router';
import Nav, {
  AkContainerTitle,
  AkCreateDrawer,
  AkNavigationItem,
  AkSearchDrawer,
} from '@atlaskit/navigation';
import HomeIcon from '@atlaskit/icon/glyph/dashboard';
import Menu from '@atlaskit/icon/glyph/menu';
import GearIcon from '@atlaskit/icon/glyph/settings';
import GoalsIcon from '@atlaskit/icon/glyph/check';
import SearchIcon from '@atlaskit/icon/glyph/search';
import CreateIcon from '@atlaskit/icon/glyph/add';
import AssignmentsIcon from '@atlaskit/icon/glyph/page';
import TopicsIcon from '@atlaskit/icon/glyph/roadmap';
import ArrowleftIcon from '@atlaskit/icon/glyph/arrow-left';
import LiveIcon from '@atlaskit/icon/glyph/vid-camera-on';

import CreateDrawer from '../components/CreateDrawer';
import SearchDrawer from '../components/SearchDrawer';
import HelpDropdownMenu from '../components/HelpDropdownMenu';
import AccountDropdownMenu from '../components/AccountDropdownMenu';

import CourseIcon from './CourseIcon';
import PatchIcon from './PatchIcon';

import Lozenge from '@atlaskit/lozenge';

export default class StarterNavigation extends React.Component {
  state = {
    navLinks: [
      ['/', 'Applab Home', HomeIcon, 0],
      ['/live', 'Live', LiveIcon, 1],
      ['/topics', 'Topics', TopicsIcon, 0],
      ['/assignments', 'Assignments', AssignmentsIcon, 0],
      ['/goals', 'Goals', GoalsIcon , 0],
    ]
  };

  static contextTypes = {
    navOpenState: PropTypes.object,
    router: PropTypes.object,
  };

  openDrawer = (openDrawer) => {
    this.setState({ openDrawer });
  };

  shouldComponentUpdate(nextProps, nextContext) {
    return true;
  };

  render() {
    const backIcon = <ArrowleftIcon label="Back icon" size="medium" />;
    const globalPrimaryIcon = <PatchIcon />;
    const courseIcon = <CourseIcon chars="al" courseName="App Lab" />
    const liveLozenge = <Lozenge appearance="inprogress" isBold>Live</Lozenge>

    return (
      <Nav
        isOpen={this.context.navOpenState.isOpen}
        width={this.context.navOpenState.width}
        onResize={this.props.onNavResize}
        containerHeaderComponent={() => (
          <AkContainerTitle
            href="https://nyu.patch.to/applab"
            icon={ courseIcon }
            text="applab"
          />
        )}
        globalPrimaryIcon={globalPrimaryIcon}
        globalPrimaryItemHref="/"
        //globalSearchIcon={<SearchIcon label="Search icon" />}
        hasBlanket
        drawers={[
          <AkSearchDrawer
            backIcon={backIcon}
            isOpen={this.state.openDrawer === 'search'}
            key="search"
            onBackButton={() => this.openDrawer(null)}
            primaryIcon={globalPrimaryIcon}
          >
            <SearchDrawer
              onResultClicked={() => this.openDrawer(null)}
              onSearchInputRef={(ref) => {
                this.searchInputRef = ref;
              }}
            />
          </AkSearchDrawer>,
          <AkCreateDrawer
            backIcon={backIcon}
            isOpen={this.state.openDrawer === 'create'}
            key="create"
            onBackButton={() => this.openDrawer(null)}
            primaryIcon={globalPrimaryIcon}
          >
            <CreateDrawer
              onItemClicked={() => this.openDrawer(null)}
            />
          </AkCreateDrawer>
        ]}
        globalAccountItem={AccountDropdownMenu}
        globalCreateIcon={<Menu label="Main Menu" />}
        globalHelpItem={HelpDropdownMenu}
        onSearchDrawerOpen={() => this.openDrawer('search')}
        onCreateDrawerOpen={() => this.openDrawer('create')}
      >
        {
          this.state.navLinks.map(link => {
            const [url, title, Icon, live] = link;
            return (
              <Link key={url} to={url}>
                <AkNavigationItem
                  icon={<Icon label={title} size="medium" />}
                  text={live ? <div>{title} {liveLozenge}</div> : title} 
                  isSelected={this.context.router.isActive(url, true)}
                />
                
              </Link>
            );
          }, this)
        }
      </Nav>
    );
  }
}
