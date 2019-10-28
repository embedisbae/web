<script>
	export let segment;
import { Button } from 'sveltestrap';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'sveltestrap';

let isOpen = false;

function handleUpdate(event) {
    isOpen = event.detail.isOpen;
}
</script>

<Navbar light expand="md">
  <div class="container pt-3 pb-3">
    <NavbarBrand href="/" class="font-weight-bold"><strong>code<span style="color: #CE4B4C;">::</span>together</strong></NavbarBrand>
    <NavbarToggler on:click={() => (isOpen = !isOpen)} />
    <Collapse {isOpen} navbar expand="md" on:update={handleUpdate}>
      <Nav class="ml-auto" navbar>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/partners">Partners</NavLink>
        </NavItem>
        <NavItem class="mr-2">
          <NavLink rel=prefetch href="/blog">Blog</NavLink>
        </NavItem>
        <NavItem>
          <Button class="rounded-pill border-0" href="https://discordapp.com/invite/HPK3hB6" target="_blank" style="background-color: #CE4B4C;">
          <strong>Discord</strong>
          </Button>
        </NavItem>
      </Nav>
    </Collapse>
  </div>
</Navbar>
